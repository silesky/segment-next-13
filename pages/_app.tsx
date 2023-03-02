import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { AnalyticsBrowser, Plugin } from "@segment/analytics-next";

const myPlugin: Plugin = {
  name: "My Plugin",
  type: "enrichment",
  version: "0.0.1",
  load: () => Promise.resolve(),
  isLoaded: () => true,
  track: (ctx) => {
    ctx.updateEvent("properties.kiwi", "🥝"); // add property here
    return ctx;
  },
};

export const analytics = new AnalyticsBrowser();
analytics.load({ writeKey: "9lSrez3BlfLAJ7NOChrqWtILiATiycoc" });

analytics.page()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
