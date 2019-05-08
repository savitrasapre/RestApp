export interface Card {
    _id? : String;
    name : String;
    desc : String;
    due_in : Number;
    isClosed : Boolean;
    idList : String;
    idBoard : String;
    idMembers : String[];
    pos : number;
}
