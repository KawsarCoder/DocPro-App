import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <Hero />
      {/* category search  */}
      <CategorySearch />
    </div>
  );
}
