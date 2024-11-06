type Actor = 'pracownik' | 'kierownik' | 'klient' | 'trener';

export interface Author {
    name: string;
    surname: string;
    group: string;
}

export interface FlowItem {
    num: number;
    text: string;
}

export interface Usecase {
    language: 'Polish' | 'English';
    preconditions: Array<string>;
    postconditions: Array<string>;
    actors: Array<Actor>;
    mainFlow: Array<FlowItem>;
    alternateFlow?: Array<FlowItem>;
    usecase: string;
    author?: Author;
}
