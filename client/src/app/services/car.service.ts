import { Cars } from "./../models/Cars";
import { Dashboard } from "./../models/Dashboard";
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CycleService {
  baseURL = "http://localhost:1234";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  list(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.baseURL);
  }
  create(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseURL, car);
  }
  getByPlaca(Placa: string): Observable<Car> {
    return this.http.get<Car>(`${this.baseURL}/${Placa}`);
  }
  dashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.baseURL}/dashboard`);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
