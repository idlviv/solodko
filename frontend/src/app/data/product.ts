import {IProduct} from '../interfaces/i-product';

export const emptyProduct: IProduct = {
  category0: '',
  category1: '',
  itemNumber: '',
  name: '',
  price: 0,
  mainImgSrc: [],
  itemDescription: '',
  showOnMainPage: true,
  discount: 0,
  size: {
    width: 0,
    height: 0,
  }
};
