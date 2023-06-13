import Head from "next/head";
import "@/src/scss/global.scss";
import { roboto, sourceCodePro, archivo } from "@/src/fonts";
import { WEBSITE_NAME, WEBSITE_DESCRIPTION } from "@/constants";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio.js";

export const metadata = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${sourceCodePro.variable} ${archivo.variable} font-body text-root-black`}
    >
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){
              dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            </script>
            `,
          }}
        />
      </Head>

      <body suppressHydrationWarning={true}>
        <PrismicPreview repositoryName={repositoryName}>
          {children}
        </PrismicPreview>
      </body>
    </html>
  );
}
