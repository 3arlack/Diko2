export class Resultat {
    "definition":string;
    "id_joueur":number;
    "id_vote":Array<number>;

    constructor(definition:string,id_joueur:number,id_vote:Array<number>){
        this.definition = definition;
        this.id_joueur = id_joueur;
        this.id_vote = id_vote;
    }
}
