import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://barat-invitation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Baraat",
  description: "You are invited to celebrate the Baraat Night of Muhammad Zeeshan Azhar Malik.",
  openGraph: { title: "Baraat Night | Muhammad Zeeshan Azhar Malik", description: "Friday, 6th November 2026 · West Canal Road, Farooqabad, Mansoorabad" },
  twitter: { card: "summary_large_image", title: "Baraat Night | Muhammad Zeeshan Azhar Malik" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}