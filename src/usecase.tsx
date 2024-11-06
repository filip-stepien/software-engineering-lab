type Actor = 'pracownik' | 'kierownik' | 'klient' | 'trener';

interface Author {
    name: string;
    surname: string;
    group: string;
}

interface FlowItem {
    num: number;
    text: string;
}

export interface Usecase {
    name: string;
    language: 'Polish' | 'English';
    preconditions: Array<string>;
    postconditions: Array<string>;
    actors: Array<Actor>;
    mainFlow: Array<FlowItem>;
    alternateFlow?: Array<FlowItem>;
    usecase: string;
    author?: Author;
}
