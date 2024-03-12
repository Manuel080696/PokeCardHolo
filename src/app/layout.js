import { Inter } from "next/font/google";
import "./globals.css";
import { CardProviderComponent } from "@/context/CardContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PokemonTCG",
  description: "App para visualizar las cardas TGC de Pokémon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CardProviderComponent>{children}</CardProviderComponent>
      </body>
    </html>
  );
}
