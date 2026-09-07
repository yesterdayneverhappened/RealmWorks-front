import BuildsList from "@/entities/builds/ui/BuildsList/BuildsList";
import { Header } from "@/widgets/headers";
import { MainBlock } from "@/widgets/main-block";

const Page = () => {
  return (
    <div>
      <Header activeItem="explore" />
      <MainBlock />
      <BuildsList />
    </div>
  );
};

export default Page;
