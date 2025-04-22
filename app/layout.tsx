import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer";
import NavBar from "./ui/nav-bar";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dylan Smith",
  description: "Dylan Smith",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container px-2 mx-auto sm:px-12 md:px-24 lg:px-48 xl:px-72 min-h-screen flex flex-col dark:bg-black dark:text-white">
        <NavBar />
				<main className="flex-grow">
					{children}
				</main>
				<Footer />
			</body>
    </html>
  );
}

