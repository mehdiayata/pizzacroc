import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.page.html',
  styleUrls: ['./admin-create.page.scss'],
})
export class AdminCreatePage implements OnInit {

  data: Pizza;


  constructor(public apiPizza: ApiService, public router: Router) {
    this.data = new Pizza();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiPizza.createPizza(this.data).subscribe((response) => {
      this.router.navigate(['admin']);
    });
  }
}
