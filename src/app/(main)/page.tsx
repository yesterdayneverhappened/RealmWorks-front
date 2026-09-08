import BuildsList from "@/entities/builds/ui/BuildsList/BuildsList";
import { FilterSortBar } from "@/widgets/filter-sort-bar";
import { Header } from "@/widgets/headers";
import { MainBlock } from "@/widgets/main-block";

const Page = () => {
  return (
    <div>
      <Header activeItem="explore" />
      <MainBlock />
      <FilterSortBar />
      <BuildsList />
    </div>
  );
};

export default Page;
