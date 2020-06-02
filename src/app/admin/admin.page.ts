import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  allPizza;

  constructor(public apiPizza: ApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllPizza();

  }

  getAllPizza() {
    this.apiPizza.getList().subscribe(response => {
      this.allPizza = response['pizza'];
    })
  }

  deletePizza(item) {
    this.apiPizza.deletePizza(item.id).subscribe(Response => {
      this.getAllPizza();
    });
  }


}
