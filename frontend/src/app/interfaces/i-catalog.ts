export interface ICatalog {
  _id: string;
  category0: {
    name: string;
    itemNumberPrefix: string;
    icon: string,
    category1?: [{
      name: string,
      itemDescription: string,
      icon: string,
      mainImgSrc: string[],
      }];
  };
}

export interface ISubmenuList {

 name: string;
 itemDescription: string;
 mainImgSrc: string[];
 icon: string,

}
