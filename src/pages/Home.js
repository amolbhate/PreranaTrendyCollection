import { useTitle } from "../hooks/useTitle";
import { Category } from '../components/Category';
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
import Sarees from "../data/Sarees";
import RangoliDesignFloorMat from "../data/RangoliDesignFloorMat";
import Kids from "../data/Kids";
import KundanHairBelt from "../data/KundanHairBelt";
import MenEthinic from "../data/MenEthinic";
import QueenSizePureCottonBedsheet from "../data/QueenSizePureCottonBedsheet";
import OriginalMulmulCotton from "../data/OriginalMulmulCotton";
import DesignerFestiveKurtaSet from "../data/DesignerFestiveKurtaSet.js";
import EthinicSkirts from "../data/EthinicSkirts";
import DiwanSet from "../data/DiwanSet";
import AriWorkBlousePiece from "../data/AriWorkBlousePiece";
import AjrakhWarliPrintBlouses from "../data/AjrakhWarliPrintBlouses";

export const Home = () => {
    useTitle("Home");

    const categories = [
      {
        name: 'Home Decor & Gift Items',
        image: '/assets/images/HomeDecor/HomeDecor1.jpg',
        products: HomeDecor(),
      },
      {
        name: 'Rangoli Design Floor Mat',
        image: '/assets/images/RangoliDesignFloorMat/RangoliDesignFloorMat1.jpg',
        products: RangoliDesignFloorMat(),
      },
      {
        name: 'Kids Collection',
        image: '/assets/images/Kids/Kids1.jpg',
        products: Kids(),
      },
      {
        name: 'Kundan Hair Belt',
        image: '/assets/images/KundanHairBelt/KundanHairBelt1.jpg',
        products: KundanHairBelt(),
      },
      {
        name: 'Men Ethinic',
        image: '/assets/images/MenEthinic/MenEthinic1.jpg',
        products: MenEthinic(),
      },
      {
        name: 'Queen Size Pure Cotton Bedsheet',
        image: '/assets/images/QueenSizePureCottonBedsheet/QueenSizePureCottonBedsheet1.jpg',
        products: QueenSizePureCottonBedsheet(),
      },
      {
        name: 'Original Mulmul Cotton',
        image: '/assets/images/OriginalMulmulCotton/OriginalMulmulCotton1.jpg',
        products: OriginalMulmulCotton(),
      },
      {
        name: 'Designer Festive Kurta Set',
        image: '/assets/images/DesignerFestiveKurtaSet/DesignerFestiveKurtaSet1.jpg',
        products: DesignerFestiveKurtaSet(),
      },
      {
        name: 'Ethinic Skirts',
        image: '/assets/images/EthinicSkirts/EthinicSkirts1.jpg',
        products: EthinicSkirts(),
      },
      {
        name: 'Diwan Set',
        image: '/assets/images/DiwanSet/DiwanSet1.jpg',
        products: DiwanSet(),
      },
      {
        name: 'Ajrakh Warli Print Blouses',
        image: '/assets/images/AjrakhWarliPrintBlouses/AjrakhWarliPrintBlouses1.jpg',
        products: AjrakhWarliPrintBlouses(),
      },
      {
        name: 'Ari Work Blouse Piece',
        image: '/assets/images/AriWorkBlousePiece/AriWorkBlousePiece1.jpg',
        products: AriWorkBlousePiece(),
      },
      {
        name: 'Sarees',
        image: '/assets/images/Sarees/Sarees1.jpg',
        products: Sarees(),
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
        name: 'Bottomwears',
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
                image={'/PreranaTrendyCollection' + category.image} 
                products={category.products} 
            />
        ))
      }
      </div>
      </section>
      </main>
    );
}