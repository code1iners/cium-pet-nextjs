import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "@/components/layouts/main-header";
import MainFooter from "@/components/layouts/main-footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <MainHeader />
      <Component {...pageProps} />
      <MainFooter />
    </div>
  );
}

export default MyApp;
