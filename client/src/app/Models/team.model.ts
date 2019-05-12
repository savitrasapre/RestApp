import { Board } from './board.model';

export interface Team {
    _id?: string;
    memberCount: number;
    desc: string;
    idBoards: Array<Board>;
    idMembers: Array<string>;
    name: string;
}

