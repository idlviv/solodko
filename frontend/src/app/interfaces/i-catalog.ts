export interface ICategory1 {
  name: string;
  itemDescription: string;
  icon: string;
  mainImgSrc: string[];
}

export interface ICatalog {
  _id: string;
  category0: {
    name: string;
    itemNumberPrefix: string;
    icon: string,
    category1?: ICategory1[],
  };
}

export interface ISubmenuList {

 name: string;
 itemDescription: string;
 mainImgSrc: string[];
 icon: string;

}
