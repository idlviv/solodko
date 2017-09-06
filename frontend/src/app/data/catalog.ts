import {ICatalog} from '../interfaces/i-catalog';

export const localCatalog: ICatalog[] = [
  {
    _id: 'x',
    category0:
      {
        name: 'toys',
        category1:
          [
            {
              name: 'one',
              description: 'sdfsdfsdfsdfsdfsdf',
              mainImgSrc: ['./assets/samples/200x300.png'],
            },
            {
              name: 'two',
              description: 'sdfsdfsdfsdfsdfsdf',
              mainImgSrc: ['./assets/samples/200x300.png'],
            }
          ],
      }
  },

];
