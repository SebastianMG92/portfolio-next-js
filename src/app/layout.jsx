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
      <body suppressHydrationWarning={true}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
