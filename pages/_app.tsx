import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ModalsProvider } from "../context/modals.context";
import { TemplateProvider } from "../context/template.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalsProvider>
      <TemplateProvider>
        <Component {...pageProps} />
      </TemplateProvider>
    </ModalsProvider>
  );
}

export default MyApp;
