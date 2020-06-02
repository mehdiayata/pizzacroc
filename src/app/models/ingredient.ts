export class Ingredient {
    id : number;
    nom : string;

    public getId(){
        return this.id;
    }

    public getNom(){
        return this.nom;
    }

    public setNom(nom : string){
        nom = this.nom;
    }
}
