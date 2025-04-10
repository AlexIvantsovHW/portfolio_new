import { Head, Html, Main, NextScript } from "next/document";

const meta = {
  title: "Social casino",
};

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>{meta.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Cinzel:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.6/jstz.min.js"
        ></script>
        <meta name="referrer" content="no-referrer" />
        <script src="script.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
