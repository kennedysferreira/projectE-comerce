import Affordable from "./Affordable";
import Specification from "./specifications";

export default interface Product extends Affordable {
  id: number;
  name: string;
  description: string;
  brand: string;
  category: string;
  image: string;
  rate: number;
  tags: string[];
  videoReview: string;
  specifications: Specification;
}
