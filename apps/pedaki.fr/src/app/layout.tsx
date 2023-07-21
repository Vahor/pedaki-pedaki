import React from "react";
import "~/styles/globals.css";
import { fontClassName } from "~/styles/fonts";
import { cn } from "~/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cn(fontClassName)} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
