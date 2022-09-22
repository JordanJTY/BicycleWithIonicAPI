import { Component } from '@angular/core';
import { BicyclesService } from '../services/bicycles.service';
import { AppBicycle } from '../interfaces/app-bicycle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bicycle: Array<AppBicycle> = [];

  constructor(private bicyclesService: BicyclesService) {
    this.getAllBicycles();
  }

  getAllBicycles() {
    this.bicyclesService.getAllBicycles().subscribe(data => {
      this.bicycle = data;
    });
  }
}
