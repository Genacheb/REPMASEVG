import { useEffect } from 'react';
import { IMAGES } from '@/assets/images';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

/**
 * Компонент для SEO-оптимизации сайта мастера Евгения.
 * Управляет мета-тегами, Open Graph, Geo-тегами и структурированными данными JSON-LD.
 */
export function SEOOptimization({
  title = 'Мастер Евгений - Ремонт бытовой техники в Краснодаре | 12 лет опыта | Выезд за 40 минут',
  description = 'Мастер Евгений - 12 лет опыта ремонта духовых шкафов, варочных панелей и стиральных машин в Краснодаре. Выезд за 40 минут. Ремонт в день обращения. Работаю с оригинальными запчастями. Тел: +7(914)671-12-99',
  keywords = 'ремонт бытовой техники Краснодар, ремонт стиральных машин, ремонт духовых шкафов, ремонт варочных панелей, мастер по ремонту техники, выезд на дом, Евгений мастер, ремонт техники на дому',
  ogImage = IMAGES.GENERATED_IMAGE_JANUARY_26_2026_2_16PM_47,
  canonicalUrl
}: SEOProps) {
  useEffect(() => {
    // Базовые мета-теги
    document.title = title;
    
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    
    // Open Graph / Facebook
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', `${window.location.origin}${ogImage}`);
    updateMetaTag('property', 'og:url', window.location.href);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', 'Мастер Евгений - Ремонт техники');
    updateMetaTag('property', 'og:locale', 'ru_RU');
    
    // Twitter
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', `${window.location.origin}${ogImage}`);
    
    // Robots
    updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('name', 'googlebot', 'index, follow');
    updateMetaTag('name', 'yandex', 'index, follow');
    
    // Geo Tags (Краснодар)
    updateMetaTag('name', 'geo.region', 'RU-KDA');
    updateMetaTag('name', 'geo.placename', 'Краснодар');
    updateMetaTag('name', 'geo.position', '45.03547;38.975313');
    updateMetaTag('name', 'ICBM', '45.03547, 38.975313');
    
    // Canonical
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl);
    }
    
    updateLinkTag('alternate', window.location.href, 'ru');
    
    // Structured Data JSON-LD
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${window.location.origin}/#business`,
          "name": "Мастер Евгений - Ремонт бытовой техники",
          "image": {
            "@type": "ImageObject",
            "url": `${window.location.origin}${ogImage}`,
            "width": 800,
            "height": 600
          },
          "telephone": "+79146711299",
          "email": "master.evgeniy@krasnodar-remont.ru",
          "url": window.location.href,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Краснодар",
            "addressLocality": "Краснодар",
            "addressRegion": "Краснодарский край",
            "postalCode": "350000",
            "addressCountry": "RU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.03547,
            "longitude": 38.975313
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", 
              "Friday", "Saturday", "Sunday"
            ],
            "opens": "08:00",
            "closes": "24:00"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 45.03547,
              "longitude": 38.975313
            },
            "geoRadius": "50000"
          },
          "priceRange": "₽₽",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Person",
          "@id": `${window.location.origin}/#person`,
          "name": "Евгений",
          "jobTitle": "Мастер по ремонту бытовой техники",
          "worksFor": {
            "@id": `${window.location.origin}/#business`
          },
          "telephone": "+79146711299",
          "image": `${window.location.origin}${ogImage}`,
          "knowsAbout": [
            "Ремонт стиральных машин",
            "Ремонт духовых шкафов", 
            "Ремонт варочных панелей",
            "Ремонт посудомоечных машин"
          ]
        },
        {
          "@type": "Service",
          "@id": `${window.location.origin}/#service`,
          "name": "Ремонт бытовой техники на дому",
          "description": description,
          "provider": {
            "@id": `${window.location.origin}/#business`
          },
          "areaServed": {
            "@type": "City",
            "name": "Краснодар"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги ремонта",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ремонт стиральных машин"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "1100",
                  "priceCurrency": "RUB",
                  "valueAddedTaxIncluded": true
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ремонт духовых шкафов"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "1200",
                  "priceCurrency": "RUB",
                  "valueAddedTaxIncluded": true
                }
              }
            ]
          }
        }
      ]
    };

    updateJSONLD('structured-data', structuredData);
    
    const breadcrumbsData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": window.location.origin
        }
      ]
    };
    
    updateJSONLD('breadcrumbs', breadcrumbsData);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}

function updateMetaTag(attribute: string, name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string, hreflang?: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
  if (hreflang) {
    element.setAttribute('hreflang', hreflang);
  }
}

function updateJSONLD(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement;
  
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.innerHTML = JSON.stringify(data, null, 2);
}
