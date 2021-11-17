import { apiInitializer } from "discourse/lib/api";
import { getCLS, getFID, getLCP } from "../vendor/web-vitals";

// Implementation based on https://github.com/GoogleChrome/web-vitals#using-gtagjs-universal-analytics
function sendToGoogleAnalytics({ name, delta, id }) {
  gtag("event", name, {
    event_category: "Web Vitals",
    event_label: id,
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    non_interaction: true,
  });
}

export default apiInitializer("0.11.1", () => {
  getCLS(sendToGoogleAnalytics);
  getFID(sendToGoogleAnalytics);
  getLCP(sendToGoogleAnalytics);
});
