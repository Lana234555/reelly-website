import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reelly.io"),
  title: "Reelly",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-wf-site="6297c98631a984c162542adb">
      <body>{children}</body>
    </html>
  );
}
