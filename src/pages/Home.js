import { useTitle } from "../hooks/useTitle";
import { Category } from '../components/Category';
import Electronics from "../data/Electronics";
import HomeDecor from "../data/HomeDecor";
import FittedKingBedsheet from "../data/FittedKingBedsheet";
import FittedQueenBedsheet from "../data/FittedQueenBedsheet";
import KashmiriCollections from "../data/KashmiriCollections";
import OnepieceWestern from "../data/OnepieceWestern";
import Bags from "../data/Bags";
import ChairCovers4 from "../data/ChairCovers4";
import ChairCovers6 from "../data/ChairCovers6";
import CottonNightSuits from "../data/CottonNightSuits";
import CottonSarees from "../data/CottonSarees";
import DecorationBackdropCloth from "../data/DecorationBackdropCloth";
import Jewellery from "../data/Jewellery";
import Shrugs from "../data/Shrugs";
import StitchedBlouses from "../data/StitchedBlouses";
import TopsAndTshirts from "../data/TopsAndTshirts";
import JeansPlazzo from "../data/JeansPlazzo";

export const Home = () => {
    useTitle("Home");

    const categories = [
      {
        name: 'Home Decor',
        image: '/assets/images/HomeDecor/HomeDecore1.jpg',
        products: HomeDecor(),
      },
      {
        name: 'Fitted King-size Bedsheets',
        image: '/assets/images/FittedKingBedsheet/FittedKingBedsheet1.jpg',
        products: FittedKingBedsheet(),
      },
      {
        name: 'Fitted Queen-size Bedsheets',
        image: '/assets/images/FittedQueenBedsheet/FittedQueenBedsheet1.jpg',
        products: FittedQueenBedsheet(),
      },
      {
        name: 'Kashmiri Collections',
        image: '/assets/images/KashmiriCollections/KashmiriCollections1.jpg',
        products: KashmiriCollections(),
      },
      {
        name: 'One-piece Western',
        image: '/assets/images/OnepieceWestern/OnepieceWestern1.jpg',
        products: OnepieceWestern(),
      },
      {
        name: 'Trendy Bags',
        image: '/assets/images/Bags/Bags1.jpg',
        products: Bags(),
      },
      {
        name: 'Elastic Chair Covers (Set of 4)',
        image: '/assets/images/ChairCovers4/ChairCovers4-1.jpg',
        products: ChairCovers4(),
      },
      {
        name: 'Elastic Chair Covers (Set of 6)',
        image: '/assets/images/ChairCovers6/ChairCovers6-1.jpg',
        products: ChairCovers6(),
      },
      {
        name: 'Cotton Night Suits',
        image: '/assets/images/CottonNightSuits/CottonNightSuits1.jpg',
        products: CottonNightSuits(),
      },
      {
        name: 'Cotton Sarees',
        image: '/assets/images/CottonSarees/CottonSarees1.jpg',
        products: CottonSarees(),
      },
      {
        name: 'Decoration Backdrop Cloth',
        image: '/assets/images/DecorationBackdropCloth/DecorationBackdropCloth1.jpg',
        products: DecorationBackdropCloth(),
      },
      {
        name: 'Jewellery',
        image: '/assets/images/Jewellery/Jewellery1.jpg',
        products: Jewellery(),
      },
      {
        name: 'Shrugs',
        image: '/assets/images/Shrugs/Shrugs1.jpg',
        products: Shrugs(),
      },
      {
        name: 'Stitched Blouses',
        image: '/assets/images/StitchedBlouses/StitchedBlouses1.jpg',
        products: StitchedBlouses(),
      },
      {
        name: 'Tops & T-shirts',
        image: '/assets/images/TopsAndTshirts/TopsAndTshirts1.jpg',
        products: TopsAndTshirts(),
      },
      {
        name: 'Bottomwares',
        image: '/assets/images/JeansPlazzo/JeansPlazzo1.jpg',
        products: JeansPlazzo(),
      },
    ];
  
    return (
      <main>
      <section className="products">
      <div>
      {
        categories.map(category => (
            <Category 
                key={category.name} 
                category={category.name} 
                image={category.image} 
                products={category.products} 
            />
        ))
      }
      </div>
      </section>
      </main>
    );
}