import { useEffect } from 'react';
import { trackConversion, trackCTAClick } from '@/components/Analytics';

export function ConversionTracking() {
  useEffect(() => {
    // Отслеживание кликов по кнопкам CTA
    const trackCTAButtons = () => {
      const buttons = document.querySelectorAll('button, a');
      buttons.forEach((btn) => {
        const text = btn.textContent || '';
        if (text.includes('Вызвать мастера')) {
          btn.addEventListener('click', () => {
            trackCTAClick('call_master_button');
          });
        }
        if (text.includes('Позвонить мастеру') || text.includes('+7(914)671-12-99')) {
          btn.addEventListener('click', () => {
            trackCTAClick('phone_master_button');
          });
        }
      });
    };

    // Отслеживание взаимодействия с разделами
    const trackSectionViews = () => {
      const sections = document.querySelectorAll('section[id]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              const sectionId = entry.target.id;
              trackConversion(`section_view_${sectionId}`, 'engagement', sectionId);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });
    };

    // Отслеживание кликов по услугам
    const trackServiceClicks = () => {
      const serviceCards = document.querySelectorAll('[data-service]');
      serviceCards.forEach((card) => {
        card.addEventListener('click', () => {
          const serviceName = card.getAttribute('data-service') || 'unknown_service';
          trackConversion('service_click', 'engagement', serviceName);
        });
      });
    };

    // Отслеживание раскрытия FAQ (Accordion)
    const trackFAQInteraction = () => {
      const faqTriggers = document.querySelectorAll('[data-state="closed"], [data-state="open"]');
      faqTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const faqText = trigger.textContent?.trim().substring(0, 50) || 'unknown';
          trackConversion('faq_interaction', 'engagement', faqText);
        });
      });
    };

    // Отслеживание времени чтения
    const trackReadingTime = () => {
      const startTime = Date.now();
      let hasScrolled = false;

      const handleScroll = () => {
        if (!hasScrolled) {
          hasScrolled = true;
          trackConversion('started_reading', 'engagement');
        }
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);

          if (timeSpent > 30) {
            trackConversion('engaged_reader', 'engagement', 'time_spent', timeSpent);
          }

          if (timeSpent > 120) {
            trackConversion('deep_engagement', 'engagement', 'time_spent', timeSpent);
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { once: true, passive: true });
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    };

    // Отслеживание типа устройства
    const trackDeviceType = () => {
      const ua = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);

      let deviceType = 'desktop';
      if (isTablet) deviceType = 'tablet';
      else if (isMobile) deviceType = 'mobile';

      trackConversion('device_type', 'technical', deviceType);
    };

    // Отслеживание источника трафика
    const trackTrafficSource = () => {
      const referrer = document.referrer;
      let source = 'direct';

      if (referrer) {
        if (referrer.includes('google')) source = 'google';
        else if (referrer.includes('yandex')) source = 'yandex';
        else if (referrer.includes('vk.com')) source = 'vkontakte';
        else if (referrer.includes('facebook')) source = 'facebook';
        else if (referrer.includes('instagram')) source = 'instagram';
        else source = 'referral';
      }

      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');

      if (utmSource) trackConversion('utm_source', 'marketing', utmSource);
      if (utmMedium) trackConversion('utm_medium', 'marketing', utmMedium);
      if (utmCampaign) trackConversion('utm_campaign', 'marketing', utmCampaign);

      trackConversion('traffic_source', 'acquisition', source);
    };

    // Отслеживание геолокации
    const trackGeolocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Краснодар координаты
            const krasnodarLat = 45.03547;
            const krasnodarLon = 38.975313;

            const distance = calculateDistance(latitude, longitude, krasnodarLat, krasnodarLon);

            let locationCategory = 'far';
            if (distance < 15) locationCategory = 'city';
            else if (distance < 60) locationCategory = 'nearby';
            else if (distance < 250) locationCategory = 'regional';

            trackConversion('user_location', 'geographic', locationCategory);
          },
          () => {
            trackConversion('geolocation_denied', 'technical');
          }
        );
      }
    };

    // Отслеживание намерения уйти с сайта
    const trackExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        trackConversion('exit_intent', 'behavior');
        document.removeEventListener('mouseleave', trackExitIntent);
      }
    };

    // Инициализация с небольшой задержкой для полной загрузки DOM
    const timer = setTimeout(() => {
      trackCTAButtons();
      trackSectionViews();
      trackServiceClicks();
      trackFAQInteraction();
      trackReadingTime();
      trackDeviceType();
      trackTrafficSource();
      trackGeolocation();
    }, 1500);

    document.addEventListener('mouseleave', trackExitIntent);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', trackExitIntent);
    };
  }, []);

  return null;
}

// Вспомогательная функция для расчета расстояния (Haversine formula)
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Радиус Земли в км
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
