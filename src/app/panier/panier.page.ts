import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { PanierService } from '../services/panier.service'

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  
  panier = [];

  constructor(public panierService : PanierService, private router: Router) { 
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    
    this.panier = JSON.parse(localStorage["pizza"]);
  }


  supprimerDuPanier(key) {
    // Faut-il supprimer du local storage ou de l'objet panier
    
    
    this.panier.splice(key, 1);
  
    localStorage['pizza'] = JSON.stringify(this.panier);


    }

}
