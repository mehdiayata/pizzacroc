import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.page.html',
  styleUrls: ['./admin-edit.page.scss'],
})
export class AdminEditPage implements OnInit {
  
  id: number;
  data: Pizza;

  constructor(public apiPizza : ApiService, public router : Router, public activatedRoute: ActivatedRoute) { 
    
    this.data = new Pizza();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];

    this.apiPizza.getPizza(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  editPizza() {
    this.apiPizza.updatePizza(this.id, this.data).subscribe(response => {
      this.router.navigate(['admin']);
    })
  }

}
