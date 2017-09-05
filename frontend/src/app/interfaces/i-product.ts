export interface IProduct {
  category0: string;
  category1: string;
  itemNumber: string;
  name: string;
  price: number;
  mainImgSrc: string[];
  itemDescription: string;
  showOnMainPage: boolean;
  discount: number;
  size: {
    width: number,
    height: number,
  };
}
