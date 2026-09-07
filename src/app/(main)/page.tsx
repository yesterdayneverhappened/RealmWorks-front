import BuildsList from "@/entities/builds/ui/BuildsList/BuildsList";
import { Header } from "@/widgets/headers";

const Page = () => {
  return (
    <div>
      <Header activeItem="explore" />
      <BuildsList />
    </div>
  );
};

export default Page;
