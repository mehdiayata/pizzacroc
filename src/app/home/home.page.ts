import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PanierService } from '../services/panier.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  allPizza : any;

  constructor(public apiPizza : ApiService, public panierService : PanierService, public router: Router) {
    this.allPizza = [];
  }

  ionViewWillEnter() {
    this.getAllPizza();
    
  }

  ngOnInit() {
    
  }

  public getAllPizza() {
    //Get saved list of students
    this.apiPizza.getList().subscribe(response => {
      this.allPizza = response['pizza'];
    })
  }

  // Appel le service panier et la méthode ajouterAuPanier
  public ajouterAuPanier(id) {
    this.panierService.ajouterAuPanier(id);
  }

  public goPizza(id){
    this.router.navigate(['/pizza/'+ id])
  }

}
