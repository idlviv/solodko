import {ICatalog} from '../interfaces/i-catalog';

export const localCatalog: ICatalog[] = [
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'І',
        name: 'іграшки',
      }
  },
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'В',
        name: 'віночки',
      }
  },
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'Б',
        name: 'букети',
        category1:
          [
            {
              name: 'букети з квітів',
              itemDescription: 'Живі квіти',
              mainImgSrc: ['./assets/images/composition-flowers_wedding-pion.jpg'],
            },
            {
              name: 'букети з цукерок',
              itemDescription: 'Цукерки, декоративні елементи',
              mainImgSrc: ['./assets/images/composition-sweets_delicacy.jpg'],
            },
            {
              name: 'букети з фруктів',
              itemDescription: 'Фрукти, овочі та зелень',
              mainImgSrc: ['./assets/images/composition-veg-fr_with-pepper.jpg'],
            }
          ],
      }
  },
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'Д',
        name: 'декор',
        category1:
          [
            {
              name: 'весільний декор',
              itemDescription: 'Весільний декор для вашого свята: бокали, ' +
              'скинька для обручок, свічки, кошичок для цукерок, ' +
              'скринька для подарунків, підв’язка нареченої',
              mainImgSrc: ['./assets/images/decor_wedding.jpg'],
            },
          ],
      }
  },

];
