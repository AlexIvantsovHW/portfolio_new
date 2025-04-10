import "@/src/app/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { PT_Sans, PT_Serif_Caption } from "next/font/google";
import { ReactElement, ReactNode } from "react";

import BaseLayout from "@/src/widgets/Layout/BaseLayout";
import { StoreProvider } from "../app/providers";

const ptSans = PT_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const ptSerif = PT_Serif_Caption({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-pt-serif",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function Home({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <StoreProvider>
      <BaseLayout
        cl={`${ptSans.variable} fontFamily-saCinzelns ${ptSerif.variable} font-Cinzel`}
      >
        <main
          className={`${ptSans.variable} font-Cinzel w-full  ${ptSerif.variable} font-Cinzel`}
          style={{ fontFamily: "Cinzel" }}
        >
          <Component {...pageProps} />
          <div
            id={"modal"}
            className={`${ptSans.variable} font-Cinzel w-full  ${ptSerif.variable} font-serif`}
          ></div>
        </main>
      </BaseLayout>
    </StoreProvider>
  );
}
