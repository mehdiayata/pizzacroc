import { ApiService } from '../services/api.service';

export class Pizza {
    id : number;
    nom : string;
    photo : string;
    prix: number;
    ingredient : object;

    public getid(){
        return this.id;
    }

    public getNom() {
        return this.nom;
    }

    public setNom(nom : string) {
        this.nom = nom;
    }

    public getPhoto() {
        return this.photo;
    }

    public setPhoto(photo : string) {
        this.photo = photo;
    }

    public getPrix() {
        return this.prix;
    }

    public setPrix(prix : number) {
        this.prix = prix;
    }

    public getIngredient() {
        return this.ingredient;
    }

    public setIngredient(ingredient : object) {
        this.ingredient = ingredient;
    }
  
}
