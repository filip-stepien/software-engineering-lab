import { Usecase } from './usecase.tsx';

export const scenarios: Array<Usecase> = [
    {
        language: 'Polish',
        actors: ['pracownik', 'klient'],
        usecase: 'Janas',
        preconditions: ['60lvl w życie', 'dr inż'],
        postconditions: ['poprawka zdana'],
        mainFlow: [
            {
                num: 1,
                text: 'Pomnóż 3 niewiadomo ile razy',
            },
            {
                num: 2,
                text: 'Nie zdaj wyjściówki',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: '1 Miej kalkulator GOTO EXIT',
            },
        ],
        author: {
            name: 'Kułak',
            surname: 'Sigma',
            group: 'Gigachad'
        }
    },
];
