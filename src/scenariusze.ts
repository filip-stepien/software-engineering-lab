import { Usecase } from './usecase.js';

const scenarios: Array<Usecase> = [
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
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Rezygnacja z karnetu',
        preconditions: ['Musi istnieć karnet identyfikujący klienta'],
        postconditions: ['Karnet identyfikujący klienta usunięty z systemu'],
        actors: ['klient', 'pracownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Klient zwraca się do pracownika o rezygnację z karnetu',
            },
            {
                num: 2,
                text: 'Pracownik wybiera opcję `Wyświetl karnety`',
            },
            {
                num: 3,
                text: 'System wyświetla listę karnetów',
            },
            {
                num: 4,
                text: 'Pracownik wpisuje dane klienta do wyszukiwarki',
            },
            {
                num: 5,
                text: 'System wyświetla opcję pasujące do wyszukiwania',
            },
            {
                num: 6,
                text: 'Pracownik wybiera karnet z listy wynikowej',
            },
            {
                num: 7,
                text: 'Pracownik wybiera opcję `Usuń karnet`',
            },
            {
                num: 8,
                text: 'System wyświetla okno z potwierdzeniem',
            },
            {
                num: 9,
                text: 'Pracownik potwierdza usunięcie karnetu.',
            },
            {
                num: 10,
                text: 'System usuwa karnet',
            },
            {
                num: 11,
                text: 'System generuje potwierdzenie operacji.',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Klient nie został znaleziony. POWRÓT DO 3',
            },
        ],
    },
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Przedłużenie karnetu',
        preconditions: [
            'Klient musi być zalogowany w systemie',
            'Musi istnieć karnet identyfikujący klienta',
        ],
        postconditions: ['Przedłużona data karnetu'],
        actors: ['brak'],
        mainFlow: [
            {
                num: 1,
                text: 'System sprawdza datę ważności karnetów użytkowników',
            },
            {
                num: 2,
                text: 'System odnajduje nieważny karnet',
            },
            {
                num: 3,
                text: 'System sprawdza czy metoda płatnicza do odnowienia karnetu jest dostępna',
            },
            {
                num: 4,
                text: 'System odnawia karnet',
            },
            {
                num: 5,
                text: 'System pobiera opłatę',
            },
        ],
        alternateFlow: [
            {
                num: 3,
                text: 'Metoda płatnicza niedostępna. POWRÓT DO 1',
            },
        ],
    },
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Zmiana danych na karnecie',
        preconditions: [
            'Klient musi być zalogowany w systemie',
            'Musi istnieć karnet identyfikujący klienta',
        ],
        postconditions: ['Zmodyfikowane dane na karnecie użytkownika'],
        actors: ['klient', 'pracownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Klient zwraca się do pracownika o modyfikację danych na karnecie',
            },
            {
                num: 2,
                text: 'Pracownik wybiera opcję `Wyświetl karnety`',
            },
            {
                num: 3,
                text: 'System wyświetla listę karnetów',
            },
            {
                num: 4,
                text: 'Pracownik wpisuje dane klienta do wyszukiwarki',
            },
            {
                num: 5,
                text: 'System wyświetla opcję pasujące do wyszukiwania',
            },
            {
                num: 6,
                text: 'Pracownik wybiera karnet z listy wynikowej',
            },
            {
                num: 7,
                text: 'System wyświetla formularz z danymi',
            },
            {
                num: 8,
                text: 'Pracownik edytuje dane w formularzu',
            },
            {
                num: 9,
                text: 'Pracownik wybiera opcję `Zapisz`',
            },
            {
                num: 10,
                text: 'System sprawdza czy wprowadzone dane mają prawidłowy format',
            },
            {
                num: 11,
                text: 'System modyfikuje dane karnetu',
            },
            {
                num: 12,
                text: 'System generuje potwierdzenie operacji.',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Klient nie został znaleziony. POWRÓT DO 3',
            },
            {
                num: 10,
                text: 'Nieprawidłowy format danych. POWRÓT DO 7',
            },
        ],
    },
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Logowanie do systemu',
        preconditions: ['Użytkownik musi istnieć w systemie'],
        postconditions: ['Utworzona sesja użytkownika'],
        actors: ['klient', 'pracownik', 'trener', 'kierownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Użytkownik przechodzi do ekranu logowania',
            },
            {
                num: 2,
                text: 'System wyświetla formularz logowania',
            },
            {
                num: 3,
                text: 'Użytkownik wpisuje dane logowania',
            },
            {
                num: 4,
                text: 'Użytkownik wybiera opcję `Zaloguj`',
            },
            {
                num: 5,
                text: 'System sprawdza czy użytkownik istnieje',
            },
            {
                num: 6,
                text: 'System tworzy sesję użytkownika',
            },
            {
                num: 7,
                text: 'System wyświetla ekran startowy',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Użytkownik nie został znaleziony. POWRÓT DO 2',
            },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Zapis klienta na zajęcia',
        preconditions: [
            'Klient zalogowany w systemie',
            'W systemie istnieją zaplanowane zajęcia',
        ],
        postconditions: ['Klient przypisany do zajęć'],
        actors: ['klient'],
        mainFlow: [
            {
                num: 1,
                text: 'Klient wybiera ekran z zajęciami',
            },
            {
                num: 2,
                text: 'System wyświetla kalendarz z zaplanowanymi zajęciami',
            },
            {
                num: 3,
                text: 'Klient wybiera interesujące go zajęcia',
            },
            {
                num: 4,
                text: 'System wyświetla szczegóły wybranych zajęć',
            },
            {
                num: 5,
                text: 'Klient wybiera opcję `Zapisz się`',
            },
            {
                num: 6,
                text: 'System sprawdza dostępność miejsc na zajęciach',
            },
            {
                num: 7,
                text: 'System zapisuje klienta na zajęcia',
            },
            {
                num: 8,
                text: 'System wyświetla potwierdzenie',
            },
        ],
        alternateFlow: [
            {
                num: 6,
                text: 'Nie ma dostępnych miejsc. POWRÓT DO 2',
            },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Rejestracja pracownika',
        preconditions: [
            'Pracownik nie jest jeszcze zarejestrowany w systemie',
            'Kierownik jest zalogownay',
        ],
        postconditions: ['Dodanie pracownika do systemu'],
        actors: ['kierownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Menedżer wybiera opcję `Dodaj pracownika`',
            },
            {
                num: 2,
                text: 'System wyświetla formularz do rejestracji pracownika',
            },
            {
                num: 3,
                text: 'Menedżer wprowadza dane pracownika',
            },
            {
                num: 4,
                text: 'Menedżer wybiera opcję `Dodaj`',
            },
            {
                num: 5,
                text: 'System sprawdza, czy wprowadzone dane mają prawidłowy format',
            },
            {
                num: 6,
                text: 'System dodaje pracownika do systemu',
            },
            {
                num: 7,
                text: 'System wyświetla potwierdzenie oraz dane logowania dla pracownika',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Błędny format danych. POWRÓT DO 3',
            },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Edytowanie danych pracownika',
        preconditions: [
            'Pracownik musi być zarejestrowany w systemie',
            'Kierownik jest zalogowoany',
        ],
        postconditions: ['Zmodyfikowane dane pracownika w systemie'],
        actors: ['kierownik', 'pracownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Pracownik zwraca się do menedżera o modyfikację danych',
            },
            {
                num: 2,
                text: 'Menedżer wybiera opcję `Wyświetl pracowników`',
            },
            {
                num: 3,
                text: 'System wyświetla listę pracowników',
            },
            {
                num: 4,
                text: 'Menedżer wpisuje dane pracownika do wyszukiwarki',
            },
            {
                num: 5,
                text: 'System wyświetla opcje pasujące do wyszukiwania',
            },
            {
                num: 6,
                text: 'Menedżer wybiera konto pracownika',
            },
            {
                num: 7,
                text: 'System wyświetla formularz z danymi',
            },
            {
                num: 8,
                text: 'Menedżer edytuje dane w formularzu',
            },
            {
                num: 9,
                text: 'Menedżer wybiera opcję `Zapisz`',
            },
            {
                num: 10,
                text: 'System sprawdza, czy wprowadzone dane mają prawidłowy format',
            },
            {
                num: 11,
                text: 'System modyfikuje dane pracownika',
            },
            {
                num: 12,
                text: 'System generuje potwierdzenie operacji',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Pracownik nie został znaleziony. POWRÓT DO 3',
            },
            {
                num: 10,
                text: 'Nieprawidłowy format danych. POWRÓT DO 7',
            },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Usunięcie pracownika z systemu',
        preconditions: ['Pracownik musi być zarejestrowany w systemie', 'Menadżer musi być zalogowany'],
        postconditions: ['Konto pracownika usunięte z systemu'],
        actors: ['kierownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Menedżer wybiera opcję `Wyświetl pracowników`',
            },
            {
                num: 2,
                text: 'System wyświetla listę pracowników',
            },
            {
                num: 3,
                text: 'Menedżer wpisuje dane pracownika do wyszukiwarki',
            },
            {
                num: 4,
                text: 'System wyświetla opcje pasujące do wyszukiwania',
            },
            {
                num: 5,
                text: 'Menedżer wybiera konto pracownika',
            },
            {
                num: 6,
                text: 'System wyświetla formularz z danymi',
            },
            {
                num: 7,
                text: 'Menedżer wybiera opcję `Usuń pracownika`',
            },
            {
                num: 8,
                text: 'System wyświetla okno potwierdzenia',
            },
            {
                num: 9,
                text: 'Menedżer zatwierdza opcję',
            },
            {
                num: 10,
                text: 'System usuwa konto pracownika',
            },
            {
                num: 11,
                text: 'System generuje potwierdzenie operacji',
            },
        ],
        alternateFlow: [
            {
                num: 4,
                text: 'Pracownik nie został znaleziony. POWRÓT DO 2',
            },
            {
                num: 9,
                text: 'Menadżer nie zatwierda END FLOW',
            },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Konserwacja sali przez pracownika',
        preconditions: [
            'Pracownik jest zalogowany w systemie',
            'Jest zaplanowana konserwacja sali',
        ],
        postconditions: [
            'Sala została poddana konserwacji',
            'Pracownik otrzymał potwierdzenie wykonania konserwacji',
        ],
        actors: ['pracownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Pracownik przechodzi do sekcji Kalendarz konserwacji',
            },
            {
                num: 2,
                text: 'System wyświetla kalendarz z zaplanowanymi konserwacjami sal',
            },
            {
                num: 3,
                text: 'Pracownik wybiera salę, która wymaga konserwacji',
            },
            {
                num: 4,
                text: 'System wyświetla szczegóły zaplanowanej konserwacji, w tym termin i zakres prac',
            },
            {
                num: 5,
                text: "Pracownik rozpoczyna konserwację sali, wybierając opcję 'Rozpocznij konserwację'",
            },
            {
                num: 6,
                text: "Po zakończeniu prac, pracownik wybiera opcję 'Zakończ konserwację'",
            },
            {
                num: 7,
                text: 'System wyświetla potwierdzenie zakończenia konserwacji dla pracownika',
            },
        ],
        alternateFlow: [
            {
                num: 3,
                text: 'Jeśli termin konserwacji minął lub nie ma zaplanowanej konserwacji dla wybranej sali, END FLOW',
            },
        ],
    },
    {
        author: {
            name: 'Bartłomiej',
            surname: 'Karkoszka',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Zamknięcie sali',
        preconditions: ['Sala musi istnieć w systemie'],
        postconditions: ["Status sali ustawiony na 'zamknięta'"],
        actors: ['kierownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Menedżer wybiera opcję `Wyświetl sale treningowe`',
            },
            {
                num: 2,
                text: 'System wyświetla listę z salami',
            },
            {
                num: 3,
                text: 'Menedżer wpisuje numer sali do wyszukiwarki',
            },
            {
                num: 4,
                text: 'System wyświetla opcje pasujące do wyszukiwania',
            },
            {
                num: 5,
                text: 'Menedżer wybiera salę',
            },
            {
                num: 6,
                text: 'System wyświetla informację o sali',
            },
            {
                num: 7,
                text: 'Menedżer wybiera opcję `Zamknij salę`',
            },
            {
                num: 8,
                text: 'System wyświetla okno potwierdzenia',
            },
            {
                num: 9,
                text: 'Menedżer zatwierdza opcję',
            },
            {
                num: 10,
                text: 'System zmienia status sali',
            },
            {
                num: 11,
                text: 'System generuje potwierdzenie operacji',
            },
        ],
        alternateFlow: [
            {
                num: 4,
                text: 'Sala nie została znaleziona. POWRÓT DO 2',
            },
            {
                num: 5,
                text: "Sala ma już status 'zamknięta'. POWRÓT DO 6",
            },
        ],
    },
    {
        author: {
            name: 'Bartłomiej',
            surname: 'Karkoszka',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Otwarcie sali',
        preconditions: ['Sala musi istnieć w systemie'],
        postconditions: ["Status sali ustawiony na 'otwarta'"],
        actors: ['kierownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Menedżer wybiera opcję `Wyświetl sale treningowe`',
            },
            {
                num: 2,
                text: 'System wyświetla listę z salami',
            },
            {
                num: 3,
                text: 'Menedżer wpisuje numer sali do wyszukiwarki',
            },
            {
                num: 4,
                text: 'System wyświetla opcje pasujące do wyszukiwania',
            },
            {
                num: 5,
                text: 'Menedżer wybiera salę',
            },
            {
                num: 6,
                text: 'System wyświetla informację o sali',
            },
            {
                num: 7,
                text: 'Menedżer wybiera opcję `Otwórz salę`',
            },
            {
                num: 8,
                text: 'System wyświetla okno potwierdzenia',
            },
            {
                num: 9,
                text: 'Menedżer zatwierdza opcję',
            },
            {
                num: 10,
                text: 'System zmienia status sali',
            },
            {
                num: 11,
                text: 'System generuje potwierdzenie operacji',
            },
        ],
        alternateFlow: [
            {
                num: 4,
                text: 'Sala nie została znaleziona. POWRÓT DO 2',
            },
            {
                num: 5,
                text: "Sala nie ma statusu 'zamknięta'. POWRÓT DO 6",
            },
        ],
    },
    {
        author: {
            name: 'Bartłomiej',
            surname: 'Karkoszka',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Tworzenie raportu o przeprowadzonych zajęciach',
        preconditions: ['brak'],
        postconditions: [
            'Utworzenie pliku z raportem o przeprowadzonych zajęciach treningowych',
        ],
        actors: ['kierownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Menedżer wybiera opcję `Wyświetl zajęcia`',
            },
            {
                num: 2,
                text: 'System wyświetla listę zajęć treningowych',
            },
            {
                num: 3,
                text: 'Menedżer wybiera opcję `Generuj raport`',
            },
            {
                num: 4,
                text: 'System wyświetla formularz z opcjami raportu',
            },
            {
                num: 5,
                text: 'Menedżer wybiera zakres dat przeprowadzonych zajęć',
            },
            {
                num: 6,
                text: 'Menedżer wybiera typ raportu `Podsumowanie`',
            },
            {
                num: 7,
                text: 'Menedżer wybiera docelowy format pliku',
            },
            {
                num: 8,
                text: 'Menedżer wybiera opcję `Generuj`',
            },
            {
                num: 9,
                text: 'System tworzy plik z raportem do pobrania',
            },
            {
                num: 10,
                text: 'System generuje potwierdzenie operacji',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Data początkowa następuje po dacie końcowej. POWRÓT DO 4',
            },
        ],
    },
    {
        author: {
            name: 'Bartłomiej',
            surname: 'Karkoszka',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Tworzenie raportu sprzedażowego',
        preconditions: ['brak'],
        postconditions: ['Utworzenie pliku z raportem sprzedaży karnetów'],
        actors: ['kierownik'],
        mainFlow: [
            {
                num: 1,
                text: 'Menedżer wybiera opcję `Wyświetl karnety`',
            },
            {
                num: 2,
                text: 'System wyświetla listę karnetów',
            },
            {
                num: 3,
                text: 'Menedżer wybiera opcję `Generuj raport sprzedaży`',
            },
            {
                num: 4,
                text: 'System wyświetla formularz z opcjami raportu',
            },
            {
                num: 5,
                text: 'Menedżer wybiera zakres dat sprzedaży karnetów',
            },
            {
                num: 6,
                text: 'Menedżer wybiera docelowy format pliku',
            },
            {
                num: 7,
                text: 'Menedżer wybiera opcję `Generuj`',
            },
            {
                num: 8,
                text: 'System tworzy plik z raportem do pobrania',
            },
            {
                num: 9,
                text: 'System generuje potwierdzenie operacji',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Data początkowa następuje po dacie końcowej. POWRÓT DO 4',
            },
        ],
    },
    {
        author: {
            name: 'Bartłomiej',
            surname: 'Karkoszka',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Kontakt klienta z trenerem',
        preconditions: [
            'Klient zalogowany w systemie',
            'Trener zalogowany w systemie',
        ],
        postconditions: [
            'Wiadomość klienta dociera do trenera, a trener ma możliwość odpowiedzieć',
        ],
        actors: ['klient'],
        mainFlow: [
            {
                num: 1,
                text: 'Klient przechodzi do sekcji Kontakt z trenerem w systemie',
            },
            {
                num: 2,
                text: 'System wyświetla listę dostępnych trenerów',
            },
            {
                num: 3,
                text: 'Klient wybiera trenera z listy',
            },
            {
                num: 4,
                text: 'System wyświetla opcję wysłania wiadomości',
            },
            {
                num: 5,
                text: 'Klient wybiera opcję Wiadomość i wpisuje treść wiadomości do trenera',
            },
            {
                num: 6,
                text: 'Klient wybiera opcję Wyślij',
            },
            {
                num: 7,
                text: 'System sprawdza poprawność wprowadzonej treści wiadomości',
            },
            {
                num: 8,
                text: 'System dostarcza wiadomość do trenera i generuje powiadomienie',
            },
            {
                num: 9,
                text: 'System wyświetla potwierdzenie wysłania wiadomości dla klienta',
            },
        ],
        alternateFlow: [
            {
                num: 7,
                text: 'Wiadomość jest pusta lub zawiera niedozwolone treści. POWRÓT DO 5',
            },
        ],
    },
    {
        author: {
            name: 'Damian',
            surname: 'Karwat',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Organizacja zajęć przez trenera',
        preconditions: [
            'Trener zalogowany w systemie',
            'Dostępna jest sala do zarezerwowania w systemie',
        ],
        postconditions: [
            'Nowe zajęcia zostają dodane do kalendarza i są dostępne dla klientów do zapisania',
        ],
        actors: ['trener'],
        mainFlow: [
            {
                num: 1,
                text: 'Trener przechodzi do sekcji Organizacja zajęć w systemie',
            },
            {
                num: 2,
                text: 'System wyświetla opcję Dodaj nowe zajęcia',
            },
            {
                num: 3,
                text: 'Trener wybiera opcję Dodaj nowe zajęcia',
            },
            {
                num: 4,
                text: 'System wyświetla formularz, w którym trener może wprowadzić szczegóły zajęć',
            },
            {
                num: 5,
                text: 'Trener wybiera opcję Rezerwacja sali i sprawdza dostępność sal',
            },
            {
                num: 6,
                text: 'System wyświetla listę dostępnych sal i ich szczegóły',
            },
            {
                num: 7,
                text: 'Trener wybiera salę i potwierdza rezerwację',
            },
            {
                num: 8,
                text: 'Trener zatwierdza formularz zajęć, wybierając opcję Zapisz',
            },
            {
                num: 9,
                text: 'System sprawdza poprawność danych w formularzu oraz dostępność sali w wybranym terminie',
            },
            {
                num: 10,
                text: 'System dodaje nowe zajęcia do kalendarza i udostępnia je klientom do zapisania',
            },
            {
                num: 11,
                text: 'System generuje potwierdzenie utworzenia zajęć dla trenera',
            },
        ],
        alternateFlow: [
            {
                num: 7,
                text: 'Trener nie potwierdza rezerwacji sali. POWRÓT DO 6',
            },
            {
                num: 9,
                text: 'Wybrany termin zajęć jest zajęty lub sala jest niedostępna. POWRÓT DO 5',
            },
            {
                num: 9,
                text: 'Formularz zawiera błędy (np. niekompletne informacje). POWRÓT DO 4',
            },
        ],
    },
    {
        author: {
            name: 'Damian',
            surname: 'Karwat',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Odwołanie zajęć przez trenera',
        preconditions: [
            'Trener jest zalogowany w systemie',
            'W systemie istnieją zaplanowane zajęcia, które trener chce odwołać',
        ],
        postconditions: [
            'Zajęcia zostają usunięte z kalendarza, a zapisani klienci otrzymują powiadomienie o odwołaniu',
        ],
        actors: ['trener'],
        mainFlow: [
            {
                num: 1,
                text: 'Trener przechodzi do sekcji Organizacja zajęć w systemie',
            },
            {
                num: 2,
                text: 'System wyświetla kalendarz zajęć trenera',
            },
            {
                num: 3,
                text: 'Trener wybiera zajęcia, które chce odwołać, z listy lub kalendarza',
            },
            {
                num: 4,
                text: 'Trener wybiera opcję Odwołaj zajęcia',
            },
            {
                num: 5,
                text: 'System wyświetla okno potwierdzenia',
            },
            {
                num: 6,
                text: 'Trener potwierdza odwołanie',
            },
            {
                num: 7,
                text: 'System usuwa zajęcia z kalendarza',
            },
            {
                num: 8,
                text: 'System wysyła powiadomienie dla klientów zapisanych na zajęcia o ich odwołaniu',
            },
            {
                num: 9,
                text: 'System wyświetla potwierdzenie operacji dla trenera',
            },
        ],
        alternateFlow: [
            {
                num: 6,
                text: 'Trener anuluje odwołanie, wybierając Nie. POWRÓT DO 2',
            },
        ],
    },
    {
        author: {
            name: 'Damian',
            surname: 'Karwat',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase:
            'Zmiana sali na której odbędą się zaplanowane zajęcia przez trenera',
        preconditions: [
            'Trener jest zalogowany w systemie',
            'W systemie istnieją zaplanowane zajęcia, dla których trener chce zmienić salę',
        ],
        postconditions: [
            'Sala na której odbędą się zajęcia zostaje zmieniona, a zapisani klienci otrzymują powiadomienie o zmianie',
        ],
        actors: ['trener'],
        mainFlow: [
            {
                num: 1,
                text: 'Trener przechodzi do sekcji Organizacja zajęć w systemie',
            },
            {
                num: 2,
                text: 'System wyświetla kalendarz zajęć trenera',
            },
            {
                num: 3,
                text: 'Trener wybiera zajęcia, dla których chce zmienić salę, z listy lub kalendarza',
            },
            {
                num: 4,
                text: 'Trener wybiera opcję Zmiana sali i sprawdza dostępność sal',
            },
            {
                num: 5,
                text: 'System wyświetla listę dostępnych sal i ich szczegóły',
            },
            {
                num: 6,
                text: 'Trener wybiera salę i potwierdza zmianę',
            },
            {
                num: 7,
                text: 'System wysyła powiadomienie dla klientów zapisanych na zajęcia o zmianie sali',
            },
            {
                num: 8,
                text: 'System wyświetla potwierdzenie operacji dla trenera',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Brak dostępnych sal w tym terminie. POWRÓT DO 2',
            },
            {
                num: 6,
                text: 'Trener nie potwierdza zmiany. POWRÓT DO 5',
            },
        ],
    },
    {
        author: {
            name: 'Damian',
            surname: 'Karwat',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Kontakt Trenera z Klientem',
        preconditions: [
            'Trener jest zalogowany w systemie',
            'Klient istnieje w systemie',
        ],
        postconditions: [
            'Wiadomość trenera dociera do klienta, a klient ma możliwość odpowiedzieć',
        ],
        actors: ['trener'],
        mainFlow: [
            {
                num: 1,
                text: 'Trener przechodzi do sekcji Organizacja zajęć w systemie',
            },
            {
                num: 2,
                text: 'System wyświetla kalendarz zajęć trenera',
            },
            {
                num: 3,
                text: 'Trener wybiera zajęcia z listy zajęć',
            },
            {
                num: 4,
                text: 'System wyświetla szczegóły zajęć',
            },
            {
                num: 5,
                text: 'Trener wchodzi na listę zapisanych uczestników zajęć',
            },
            {
                num: 6,
                text: 'Trener wybiera jednego z zapisanych klientów',
            },
            {
                num: 7,
                text: 'System wyświetla opcję napisania wiadomości do klienta',
            },
            {
                num: 8,
                text: 'Trener wpisuje treść wiadomości',
            },
            {
                num: 9,
                text: 'Trener wybiera opcję Wyślij',
            },
            {
                num: 10,
                text: 'System wysyła wiadomość do klienta',
            },
            {
                num: 11,
                text: 'System wyświetla potwierdzenie wysłania wiadomości',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Brak zapisanych klientów na zajęciach. POWRÓT DO 2',
            },
            {
                num: 9,
                text: 'Wiadomość jest pusta lub zawiera niedozwolone treści. POWRÓT DO 7',
            },
        ],
    },
    {
        author: {
            name: 'Damian',
            surname: 'Karwat',
            group: '3ID11B',
            subject: 'System do obsługi siłowni',
        },
        language: 'Polish',
        usecase: 'Analiza postępów Klienta przez Trenera',
        preconditions: [
            'Trener jest zalogowany w systemie',
            'Klient istnieje w systemie',
        ],
        postconditions: [
            'Trener ma dostęp do szczegółowych statystyk postępów klienta',
        ],
        actors: ['trener'],
        mainFlow: [
            {
                num: 1,
                text: 'Trener przechodzi do sekcji Organizacja zajęć w systemie',
            },
            {
                num: 2,
                text: 'System wyświetla kalendarz zajęć trenera',
            },
            {
                num: 3,
                text: 'Trener wybiera zajęcia z listy zajęć',
            },
            {
                num: 4,
                text: 'System wyświetla szczegóły zajęć',
            },
            {
                num: 5,
                text: 'Trener wchodzi na listę zapisanych uczestników zajęć',
            },
            {
                num: 6,
                text: 'Trener wybiera jednego z zapisanych klientów',
            },
            {
                num: 7,
                text: 'System wyświetla profil klienta',
            },
            {
                num: 8,
                text: 'Trener przegląda statystyki postępów klienta, takie jak wyniki, frekwencja, osiągnięcia',
            },
            {
                num: 9,
                text: 'System wyświetla szczegółowe statystyki postępów klienta',
            },
            {
                num: 10,
                text: 'Trener ma możliwość analizy postępów klienta i dostosowania planu treningowego',
            },
        ],
        alternateFlow: [
            {
                num: 5,
                text: 'Brak zapisanych klientów na zajęciach. POWRÓT DO 2',
            },
            {
                num: 8,
                text: 'Klient nie ma dostępnych danych w systemie. POWRÓT DO 7',
            },
        ],
    },
];

export default scenarios;
