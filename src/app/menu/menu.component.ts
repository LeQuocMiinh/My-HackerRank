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
      router: '/length-converted',
      level: 'Angular (Intermediate)'
    },
    {
      id: 2,
      name: 'Survay List',
      router: '/survay-list',
      level: 'Angular (Intermediate)'
    },
    {
      id: 3,
      name: 'Paginated Football Competitions',
      router: '/paginated-football-competitions',
      level: 'Angular (Intermediate)'
    },
    {
      id: 4,
      name: 'Temperature Converted',
      router: '/temperature-converted',
      level: 'Angular (Basic)'
    },
    {
      id: 5,
      name: 'Weather Detail',
      router: '/weather-detail',
      level: 'Angular (Basic)'
    },
  ]
}
