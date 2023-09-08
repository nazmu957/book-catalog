export interface IProduct {
  _id: number;
  name: string;
  title: string;
  author: string;
  genre: string;
  publicationdate: string;
  reviews:string[]
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;
}
