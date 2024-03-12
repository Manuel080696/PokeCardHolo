import { Title } from "@/components";
import { Cards } from "@/components/cards/Cards";
import "./page.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justigy-center father backdrop-filter backdrop-blur-sm">
      <Title
        title="Pokémon"
        subtitle="Trading Card Game"
        className="mb-2 m-2 md:m-0"
      />
      <Cards />
    </div>
  );
}
