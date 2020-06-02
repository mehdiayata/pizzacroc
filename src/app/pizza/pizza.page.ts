import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage  {

  detailPizza : any;
  detailIngredient : any;
  id : string;

  constructor(public apiPizza : ApiService, private route: ActivatedRoute, public panierService : PanierService) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.detailPizza = {
      photo: "",
      id: '',
      nom:'',
      prix: 0,
      ingredients: []
    };

    this.detailIngredient = {
      id : 0,
      nom : ""
    };
  }

  ionViewDidEnter(){
    this.getDetailPizza(this.id);
  }
  
  getDetailPizza(id) {

    this.apiPizza.getPizza(id).subscribe(response => {
      this.detailPizza = response;
      
      for (let entry of response['ingredients']) {
         this.getLstIngredient(entry);  
      }
      
    })
  }

  getLstIngredient(id){
      this.apiPizza.getIngredient(id).subscribe(response => {
      this.detailIngredient = response;
      
    });
  }

  
  // Appel le service panier et la méthode ajouterAuPanier
  ajouterAuPanier(id) {
    this.panierService.ajouterAuPanier(id);
  }


}
