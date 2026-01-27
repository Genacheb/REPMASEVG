import { useEffect } from 'react';

const ANALYTICS_CONFIG = {
  GA4_ID: 'G-XXXXXXXXXX', // Замените на реальный ID при развертывании
  GTM_ID: 'GTM-XXXXXXX', // Замените на реальный ID при развертывании
  YANDEX_METRIKA_ID: '12345678', // Замените на реальный ID при развертывании
  FACEBOOK_PIXEL_ID: '1234567890123456', // Замените на реальный ID при развертывании
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    ym: (id: string | number, action: string, ...args: unknown[]) => void;
    fbq: (action: string, ...args: unknown[]) => void;
  }
}

/**
 * Компонент аналитики для отслеживания действий пользователей.
 * Интегрирует Google Analytics 4, GTM, Яндекс.Метрику и Facebook Pixel.
 * Реализован согласно стандартам 2026 года.
 */
export function Analytics() {
  useEffect(() => {
    // Google Tag Manager
    if (ANALYTICS_CONFIG.GTM_ID) {
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${ANALYTICS_CONFIG.GTM_ID}`;
      document.head.appendChild(gtmScript);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    }

    // Google Analytics 4
    if (ANALYTICS_CONFIG.GA4_ID) {
      const ga4Script = document.createElement('script');
      ga4Script.async = true;
      ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_ID}`;
      document.head.appendChild(ga4Script);

      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
      };
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', ANALYTICS_CONFIG.GA4_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        anonymize_ip: true
      });
    }

    // Yandex Metrika
    if (ANALYTICS_CONFIG.YANDEX_METRIKA_ID) {
      const ymScript = document.createElement('script');
      ymScript.innerHTML = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${ANALYTICS_CONFIG.YANDEX_METRIKA_ID}, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true,
          ecommerce:"dataLayer"
        });
      `;
      document.head.appendChild(ymScript);

      const ymNoscript = document.createElement('noscript');
      ymNoscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${ANALYTICS_CONFIG.YANDEX_METRIKA_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`;
      document.body.appendChild(ymNoscript);
    }

    // Facebook Pixel
    if (ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID) {
      const fbScript = document.createElement('script');
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);

      const fbNoscript = document.createElement('noscript');
      fbNoscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"/>`;
      document.body.appendChild(fbNoscript);
    }

    const trackPhoneClicks = () => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.gtag) {
            window.gtag('event', 'phone_call', {
              event_category: 'contact',
              event_label: 'phone_click',
              value: 1
            });
          }
          if (window.ym) {
            window.ym(ANALYTICS_CONFIG.YANDEX_METRIKA_ID, 'reachGoal', 'phone_call');
          }
          if (window.fbq) {
            window.fbq('track', 'Contact', { content_name: 'Phone Call' });
          }
        });
      });
    };

    let maxScroll = 0;
    const trackScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const scrollPercent = Math.round((window.scrollY / totalHeight) * 100);
      
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && maxScroll < milestone) {
          maxScroll = milestone;
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${milestone}%`,
              value: milestone
            });
          }
          if (window.ym) {
            window.ym(ANALYTICS_CONFIG.YANDEX_METRIKA_ID, 'reachGoal', `scroll_${milestone}`);
          }
        }
      });
    };

    const startTime = Date.now();
    const sendTimeEvent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: 'seconds',
          value: timeSpent
        });
      }
    };

    const timer = setTimeout(() => {
      trackPhoneClicks();
      window.addEventListener('scroll', trackScroll, { passive: true });
      window.addEventListener('beforeunload', sendTimeEvent);
      
      setTimeout(() => {
        if (window.ym) {
          window.ym(ANALYTICS_CONFIG.YANDEX_METRIKA_ID, 'reachGoal', 'engaged_user');
        }
      }, 30000);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', trackScroll);
      window.removeEventListener('beforeunload', sendTimeEvent);
    };
  }, []);

  return null;
}

/**
 * Отправка события конверсии во все системы аналитики
 */
export const trackConversion = (action: string, category: string = 'conversion', label?: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  if (window.ym) {
    window.ym(ANALYTICS_CONFIG.YANDEX_METRIKA_ID, 'reachGoal', action);
  }
  if (window.fbq) {
    window.fbq('track', 'Lead', { content_name: action });
  }
};

/**
 * Отслеживание клика по кнопке призыва к действию (CTA)
 */
export const trackCTAClick = (ctaName: string) => {
  trackConversion('cta_click', 'conversion', ctaName);
};
