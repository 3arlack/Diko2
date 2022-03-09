export class Joueur {
    "id_joueur":number;
    "nom_joueur": string;
    "score_joueur": number;
    "avatar_joueur":string;
    "_ID"?:number;
    "_ID_PARTIE"?:number;

    constructor(id_joueur:number,nom_joueur:string,score_joueur:number,avatar_joueur:string){
        this.id_joueur = id_joueur;
        this.nom_joueur = nom_joueur;
        this.score_joueur = score_joueur;
        this.avatar_joueur = avatar_joueur;
    }

    


}

