import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";

import "./globals.css";

import LayoutHeader from "./layouts/header";

import StyledComponentsProvider from "./providers/styled-components-provider";

import dynamic from 'next/dynamic';

const CartProvider = dynamic(() => import('./providers/cart-provider'), { ssr: false });

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WeMovies",
	description: "WeMovies is a platform where movie enthusiasts can purchase physical copies of their favorite films. Our extensive collection caters to a wide range of tastes, ensuring that there's something for everyone. Whether you're a fan of classic cinema or the latest blockbusters, WeMovies is your one-stop shop for physical movie copies. Enjoy the tangible experience of owning your beloved movies and build your personal movie library with WeMovies.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className={openSans.className}>
				<StyledComponentsProvider>
					<CartProvider>
						<LayoutHeader />
						{children}
					</CartProvider>
				</StyledComponentsProvider>
			</body>
		</html>
	);
}
