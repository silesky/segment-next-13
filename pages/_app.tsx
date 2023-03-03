import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {Plugin, AnalyticsBrowser} from '@segment/analytics-next'
export const analytics = AnalyticsBrowser.load({ writeKey: "9lSrez3BlfLAJ7NOChrqWtILiATiycoc" })

const myPlugin: Plugin = {
  name: "My Plugin",
  type: "enrichment",
  version: "0.0.1",
  load: () => Promise.resolve(),
  isLoaded: () => true,
  track: (ctx) => {
    console.log(ctx)
    return ctx;
  },
}; // add a campaign property to every track event, mapped from the context

analytics.register(myPlugin);

analytics.page()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
