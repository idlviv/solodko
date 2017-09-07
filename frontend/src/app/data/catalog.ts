import {ICatalog} from '../interfaces/i-catalog';

export const localCatalog: ICatalog[] = [
  {
    _id: 'x',
    category0:
      {
        name: 'іграшки',
      }
  },
  {
    _id: 'x',
    category0:
      {
        name: 'віночки',
      }
  },
  {
    _id: 'x',
    category0:
      {
        name: 'букети',
        category1:
          [
            {
              name: 'букети з квітів',
              description: 'Живі квіти',
              mainImgSrc: ['./assets/images/composition-flowers_wedding-pion.jpg'],
            },
            {
              name: 'букети з цукерок',
              description: 'Цукерки, декоративні елементи',
              mainImgSrc: ['./assets/images/composition-sweets_delicacy.jpg'],
            },
            {
              name: 'букети з фруктів',
              description: 'Фрукти, овочі та зелень',
              mainImgSrc: ['./assets/images/composition-veg-fr_with-pepper.jpg'],
            }
          ],
      }
  },
  {
    _id: 'x',
    category0:
      {
        name: 'декор',
        category1:
          [
            {
              name: 'весільний декор',
              description: 'Весільний декор для вашого свята: бокали, ' +
              'скинька для обручок, свічки, кошичок для цукерок, ' +
              'скринька для подарунків, підв’язка нареченої',
              mainImgSrc: ['./assets/samples/200x300.png'],
            },
          ],
      }
  },

];
