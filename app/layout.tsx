import type { Metadata } from "next"
import { Geist, Geist_Mono, Comfortaa } from "next/font/google"
import "./globals.css"
import { LANGS, TranslationProvider } from "@/app/context/translation-context"

const comfortaa = Comfortaa({
	variable: "--font-comfortaa",
	subsets: ["latin"],
})

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Italianolandese",
	description: "Italian - Dutch translations by Greta Joris",
}



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang={LANGS.NL}>
			<body className={`${comfortaa.variable} ${geistSans.variable} ${geistMono.variable}`}>
				<TranslationProvider>{children}</TranslationProvider>
			</body>
		</html>
	)
}
