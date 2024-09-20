import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converted',
  templateUrl: './temperature-converted.component.html',
  styleUrls: ['./temperature-converted.component.scss']
})
export class TemperatureConvertedComponent {
  celsius: any;
  fahren: any;

  changeNumber(inputId: string, event: any) {
    const value = event.target.value;
    if (inputId == 'input1') {
      this.fahren = (value * 9 / 5 + 32).toFixed(1);
    } else {
      this.celsius = ((this.celsius - 32) * 5 / 9).toFixed(1);
    }
  }
}
