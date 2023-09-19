import { Key } from "react";

export interface IProduct {
  id: Key | null | undefined;
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
