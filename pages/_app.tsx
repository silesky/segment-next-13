import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { AnalyticsBrowser } from "@segment/analytics-next";

export const analytics = AnalyticsBrowser.load({ writeKey: "9lSrez3BlfLAJ7NOChrqWtILiATiycoc" })
analytics.page()


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
