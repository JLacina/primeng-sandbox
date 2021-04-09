import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  upper() {
    this.title = this.title.toLocaleUpperCase();
  }

  //checkbox
  selectedCities: string[] = [];
  selectedCategories: any[] = ['Technology', 'Sports'];
  categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
  checked: boolean = false;

  //chips
  values1: string[];
  values2: string[];
  values3: string[];


  ngOnInit() {
      this.selectedCategories = this.categories.slice(1,3);
  }

}
