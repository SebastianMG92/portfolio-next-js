import "@/src/scss/global.scss";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio.js";
import { roboto, sourceCodePro, archivo } from "@/src/fonts";
import { WEBSITE_NAME, WEBSITE_DESCRIPTION } from "@/constants";
import { GoogleAnalytics, Loader } from "@/components";
import { LoaderProvider } from "@/src/context/LoaderContext";

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
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics />
        <LoaderProvider>
          <PrismicPreview repositoryName={repositoryName}>
            <Loader />
            {children}
          </PrismicPreview>
        </LoaderProvider>
      </body>
    </html>
  );
}
