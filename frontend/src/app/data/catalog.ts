import {ICatalog} from '../interfaces/i-catalog';

export const localCatalog: ICatalog[] = [
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'і',
        name: 'іграшки',
        icon: 'fa fa-flower',
      }
  },
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'в',
        name: 'віночки',
        icon: '',
      }
  },
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'б',
        name: 'букети',
        icon: '',
        category1:
          [
            {
              name: 'букети з квітів',
              itemDescription: 'Живі квіти',
              icon: '',
              mainImgSrc: ['./assets/images/composition-flowers_wedding-pion.jpg'],
            },
            {
              name: 'букети з цукерок',
              itemDescription: 'Цукерки, декоративні елементи',
              icon: '',
              mainImgSrc: ['./assets/images/composition-sweets_delicacy.jpg'],
            },
            {
              name: 'букети з фруктів',
              itemDescription: 'Фрукти, овочі та зелень',
              icon: '',
              mainImgSrc: ['./assets/images/composition-veg-fr_with-pepper.jpg'],
            }
          ],
      }
  },
  {
    _id: 'x',
    category0:
      {
        itemNumberPrefix: 'д',
        name: 'декор',
        icon: '',
        category1:
          [
            {
              name: 'весільний декор',
              itemDescription: 'Весільний декор для вашого свята: бокали, ' +
              'скинька для обручок, свічки, кошичок для цукерок, ' +
              'скринька для подарунків, підв’язка нареченої',
              icon: '',
              mainImgSrc: ['./assets/images/decor_wedding1.jpg'],
            },
          ],
      }
  },

];
