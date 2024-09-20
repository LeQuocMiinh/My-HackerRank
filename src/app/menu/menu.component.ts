import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menu: any[] = [
    {
      id: 1,
      name: 'Length Converted',
      router: '/length-converted'
    },
    {
      id: 2,
      name: 'Temperature Converted',
      router: '/temperature-converted'
    },
    {
      id: 3,
      name: 'Weather Detail',
      router: '/weather-detail'
    },
  ]
}
