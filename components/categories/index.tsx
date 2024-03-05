import Title from "../title";
import CategoriesCard from "./card";

export default function Categories() {
  return (
    <div className="w-full space-y-12">
      <div>
        <Title title="Conheça sobre nossos produtos" subtitle="Categorias" />
        <div className="flex flex-wrap gap-4 justify-center">
          <CategoriesCard src="/icones/cosmetico.jpeg" title="Cosméticos" />
          <CategoriesCard src="/icones/celular.jpeg" title="Smartphones" />
          <CategoriesCard src="/icones/eletrodomesticos.jpg" title="Eletrodomésticos" />
          <CategoriesCard src="/icones/industrial.jpeg" title="Industriais" />
          <CategoriesCard src="/icones/games.jpeg" title="Games" />
        </div>
      </div>
    </div>
  );
}
