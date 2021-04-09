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

  //Flex form:  https://primefaces.org/primeng/showcase/#/primeflex/formlayout
  selectedState: any = null;
  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];
  cities1: any[] = [];
  cities2: any[] = [];
  city1:any = null;
  city2:any = null;


  ngOnInit() {
      this.selectedCategories = this.categories.slice(1,3);
  }

}
