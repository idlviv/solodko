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
              description: 'sdfsdfsdfsdfsdfsdf',
              mainImgSrc: ['./assets/samples/200x300.png'],
            },
            {
              name: 'букети з цукерок',
              description: 'Цукерки, декоративні елементи',
              mainImgSrc: ['./assets/samples/200x300.png'],
            },
            {
              name: 'букети з фруктів',
              description: 'sdfsdfsdfsdfsdfsdf',
              mainImgSrc: ['./assets/samples/200x300.png'],
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
