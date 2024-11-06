import { Usecase } from './usecase.tsx';

export const scenarios: Array<Usecase> = [
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Wykupienie karnetu',
        preconditions: ['brak'],
        postconditions: ['Utworzenie karnetu identyfikującego użytkownika'],
        actors: ['klient', 'pracownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Klient zwraca się do pracownika o utworzenie karnetu',
            },
            {
                num: 2,
                text: 'Pracownik wybiera opcję `Nowy karnet`',
            },
            {
                num: 3,
                text: 'System wyświetla formularz do utworzenia karnetu',
            },
            {
                num: 4,
                text: 'Pracownik wprowadza dane personalne, płatnicze i kontaktowe klienta do formularza',
            },
            {
                num: 5,
                text: 'Pracownik wybiera opcję `Zapisz`',
            },
            {
                num: 6,
                text: 'System sprawdza czy wprowadzone dane mają prawidłowy format',
            },
            {
                num: 7,
                text: 'System sprawdza czy metoda płatncza jest dostępna',
            },
            {
                num: 8,
                text: 'System tworzy nowy karnet',
            },
            {
                num: 9,
                text: 'System pobiera opłatę',
            },
            {
                num: 10,
                text: 'System wyświetla potwierdzenie',
            },
        ],
        alternateFlow: [
            {
                num: 6,
                text: 'Błędny format danych. POWRÓT DO 3',
            },
            {
                num: 7,
                text: 'Metoda płatnicza jest niedostępna. POWRÓT DO 3',
            },
        ],
    },
];
