import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
 
  constructor() {
    
  }


  ajouterAuPanier(pizza) {
    let lstPizza = [];
    
 
    if (localStorage.getItem("pizza") != 'null') {
      lstPizza = JSON.parse(localStorage.getItem("pizza"));
      localStorage.setItem("pizza", JSON.stringify(lstPizza));
      
    }

    
    lstPizza.push(pizza);
    
    localStorage.setItem("pizza", JSON.stringify(lstPizza));
    
  }

  

supprimerDuPanier() {

}

incrementeQuantite() {
  //this.panier['quantite'] = this.quantite;

}
}
