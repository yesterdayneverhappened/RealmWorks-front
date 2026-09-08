import { BuildDetails } from "@/widgets/build-details";
import { Header } from "@/widgets/headers";

const BuildPage = () => {
  return (
    <div>
      <Header activeItem="explore" />
      <BuildDetails />
    </div>
  );
};

export default BuildPage;
