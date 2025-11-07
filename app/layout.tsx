import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Curtains Riyadh | Premium Saudi Arabian Drapery",
  description:
    "Tailored curtains and drapery in Riyadh, Saudi Arabia. Bespoke designs, measurement, installation, and maintenance for luxury homes and commercial spaces."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
