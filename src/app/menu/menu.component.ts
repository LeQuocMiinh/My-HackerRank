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
  ]
}
