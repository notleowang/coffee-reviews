import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Coffee",
    description: "Coffee Reviews",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={rubik.className}>
            <body>
                {children}
            </body>
        </html>
    );
}
