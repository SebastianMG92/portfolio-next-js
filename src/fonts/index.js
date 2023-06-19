import { Roboto, Archivo } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--heading-font",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--base-font",
  display: "swap",
});

export { roboto, archivo };
