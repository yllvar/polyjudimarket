import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pump.Bet - Prediction Markets",
  description: "Decentralized prediction markets made simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThirdwebProvider 
        activeChain="mumbai"
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      >
        <body className={inter.className}>{children}</body>
      </ThirdwebProvider>
    </html>
  );
}

