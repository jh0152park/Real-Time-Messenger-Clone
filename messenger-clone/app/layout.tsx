import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterContext from "./context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Messenger Clone",
    description: "Messenger Clone by Park Jae Hyoen started at 2024.01.03",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToasterContext />
                {children}
            </body>
        </html>
    );
}
