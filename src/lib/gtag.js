export const GA_PROPERTY_ID = process.env.NEXT_PUBLIC_GA_PROPERTY_ID;

/**
 * pageview
 * @via https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */

export function pageview(url) {
  window.gtag('config', GA_PROPERTY_ID, {
    page_path: url,
  });
}

/**
 * event
 * @via https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */

export function event({ action, category, label, value }) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}