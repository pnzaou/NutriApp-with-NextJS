import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToggleTheme from "@/components/ToggleTheme"
import ThemeProvider from "@/components/ThemeProvider" 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriApp",
  description: "Découvrez les valeurs nutritives de vos aliments préférés grâce à notre sélecteur interactif. Choisissez un aliment et explorez ses bienfaits !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
        >
          <ToggleTheme/>
            {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
