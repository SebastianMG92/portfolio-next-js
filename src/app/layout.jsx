import "@/src/scss/global.scss";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio.js";
import { roboto, archivo } from "@/src/fonts";
import { WEBSITE_NAME, WEBSITE_DESCRIPTION } from "@/constants";
import { GoogleAnalytics, Loader, Cursor } from "@/components";
import { LoaderProvider } from "@/src/context/LoaderContext";
import { CursorProvider } from "@/src/context/CursorContext";

export const metadata = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <LoaderProvider>
      <CursorProvider>
        <PrismicPreview repositoryName={repositoryName}>
          <html
            lang="en"
            className={`${roboto.variable} ${archivo.variable} font-body text-root-grey-primary`}
          >
            <body suppressHydrationWarning={true}>
              <GoogleAnalytics />
              {children}
              <Loader />
              <Cursor />
            </body>
          </html>
        </PrismicPreview>
      </CursorProvider>
    </LoaderProvider>
  );
}
