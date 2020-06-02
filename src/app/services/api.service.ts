import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Pizza } from '../models/pizza';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dataBase = 'https://api.ynov.jcatania.io/db';
  dataPizza = 'https://api.ynov.jcatania.io/pizza';
  dataIngredient = 'https://api.ynov.jcatania.io/ingredient';

  constructor(private http : HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   // Retourne toute les données des pizzas
   getList(): Observable<Pizza> {
    return this.http.get<Pizza>(this.dataBase)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Retourne un pizza précise
  getPizza(id): Observable<Pizza> {
    return this.http.get<Pizza>(this.dataPizza + '/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Retourne ingredient
  getIngredient(id): Observable<Ingredient> {
    return this.http.get<Ingredient>(this.dataIngredient + '/' + id).pipe(
      catchError(this.handleError)
    )
  }

  updatePizza(id, item): Observable<Pizza> {
    return this.http
      .put<Pizza>(this.dataPizza + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
  
  createPizza(item): Observable<Pizza> {
    return this.http
    .post<Pizza>(this.dataPizza, JSON.stringify(item), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  
  deletePizza(id): Observable<Pizza> {
    return this.http
    .delete<Pizza>(this.dataPizza + '/' + id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  /*
  

  */
  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
