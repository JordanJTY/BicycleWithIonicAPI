import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppBicycle } from '../interfaces/app-bicycle';

@Injectable({
  providedIn: 'root'
})
export class BicyclesService {

  endpoint: string = "http://localhost:8080/bicycles"

  constructor(private httpClient: HttpClient) { }

  getAllBicycles(){
    return this.httpClient.get<Array<AppBicycle>>(this.endpoint);
  }
}
