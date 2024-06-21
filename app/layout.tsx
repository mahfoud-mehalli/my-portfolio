import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "mahfoudbem",
	authors: {
		name: "chensokheng",
	},

	description:
		"A full stack developer based in algeria, with +3 years of experience in the industry i bring your idea into reality",
	openGraph: {
		title: "mahfoudbem",
		description:
			"A full stack developer based in algeria, with +3 years of experience in the industry i bring your idea into reality.",
		url: "http://localhost:3000",
		siteName: "mahfoudbem",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
