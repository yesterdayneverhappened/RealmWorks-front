import { CategoriesExplore } from "@/widgets/categories-explore";
import { Header } from "@/widgets/headers";

const CategoriesPage = () => {
  return (
    <div>
      <Header activeItem="categories" />
      <CategoriesExplore />
    </div>
  );
};

export default CategoriesPage;
