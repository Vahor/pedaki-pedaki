import localFont from "next/font/local";
import { Fira_Code } from "next/font/google";
import { cn } from "shared/lib/utils";

export const MonaSans = localFont({
  src: "../styles/Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona-sans",
  preload: true,
});

export const FiraCode = Fira_Code({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
  preload: false,
});

export const fontClassName: string = cn(MonaSans.variable, FiraCode.variable);
