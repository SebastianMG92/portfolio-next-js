import "@/scss/global.scss";
import { roboto, sourceCodePro, archivo } from "@/fonts";
import { WEBSITE_NAME, WEBSITE_DESCRIPTION } from "@/constants";

export const metadata = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${sourceCodePro.variable} ${archivo.variable} font-body`}
    >
      <body>{children}</body>
    </html>
  );
}
