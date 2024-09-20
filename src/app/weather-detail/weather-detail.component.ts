import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent {
  weatherData = [
    {
      "name": "San Jose",
      "temperature": "36º F",
      "wind": "31Kmph",
      "humidity": "66%",
      "icon": "sunny"
    },
    {
      "name": "Seattle",
      "temperature": "30º F",
      "wind": "4Kmph",
      "humidity": "9%",
      "icon": "cloud"
    },
    {
      "name": "New York",
      "temperature": "20º F",
      "wind": "8Kmph",
      "humidity": "61%",
      "icon": "cloud"
    },
    {
      "name": "Chicago",
      "temperature": "27º F",
      "wind": "35Kmph",
      "humidity": "2%",
      "icon": "cloud"
    },
    {
      "name": "Atlanta",
      "temperature": "22º F",
      "wind": "25Kmph",
      "humidity": "5%",
      "icon": "cloud"
    },
    {
      "name": "Austin",
      "temperature": "25º F",
      "wind": "1Kmph",
      "humidity": "5%",
      "icon": "cloud"
    },
    {
      "name": "Denver",
      "temperature": "30º F",
      "wind": "8Kmph",
      "humidity": "48%",
      "icon": "cloud"
    }
  ];

  isSearch: boolean = false;
  isFounded: boolean = false;
  dataFounded: any;

  ngOnInit() {

  }

  search(event: any) {
    const value = event.target.value;
    this.isSearch = (value.length > 0) ? true : false;
    this.dataFounded = this.weatherData.map(item => {
      const regex = new RegExp(`\\b${value}\\b`, 'i');
      return (item.name.match(regex)) ? item : null
    }).filter(e => e != null);
    this.isFounded = (this.dataFounded.length > 0 && value.length > 0) ? true : false;

  }
}
