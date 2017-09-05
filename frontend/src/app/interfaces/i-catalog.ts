export interface ICatalog {
  _id: string;
  category0: {
    name: string;
    category1: [{
      name: string,
      description: string,
      mainImgSrc: string[],
      }];
  };
}

export interface ISubmenuList {

 name: string;
 description: string;
 mainImgSrc: string[];
}
