import { BuildSearch } from "@/widgets/build-search";
import { Header } from "@/widgets/headers";

interface SearchPageProps {
  searchParams: Promise<{ category?: string; tag?: string }>;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { category, tag } = await searchParams;

  return (
    <div>
      <Header />
      <BuildSearch initialCategory={category} initialTag={tag} />
    </div>
  );
};

export default SearchPage;
