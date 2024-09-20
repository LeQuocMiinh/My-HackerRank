import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-length-converted',
  templateUrl: './length-converted.component.html',
  styleUrls: ['./length-converted.component.scss']
})
export class LengthConvertedComponent {
  form!: FormGroup;
  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      input1: [],
      selected1: [this.lengthOptions[0].unit],
      input2: [],
      selected2: [this.lengthOptions[0].unit],
    })
  }

  changeNumber(nameInput: string, event: any) {
    const value = Number(event.target.value);
    const label = nameInput;
    this.form.get(label)?.setValue(value);
    this.calculator(value, label);
  }

  changeSelected(nameInput: string, event: any) {
    const labelNumber = (nameInput == "selected1") ? 'input1' : 'input2';
    const valueSelected = event.target.value;
    this.form.get(nameInput)?.setValue(valueSelected);
    this.calculator(this.form.get(labelNumber)?.value, labelNumber);
  }

  calculator(number: number, nameInput: string) {
    const valueOfRegex = this.exchangeRegex(this.form.get('selected1')?.value);
    const valueOfRegexOther = this.exchangeRegex(this.form.get('selected2')?.value);
    if (nameInput == 'input1') {
      const result = (valueOfRegex * number) / valueOfRegexOther;
      this.form.get('input2')?.patchValue(result);
    } else {
      const result = (valueOfRegexOther * number) / valueOfRegex;
      this.form.get('input1')?.patchValue(result);
    }
  }

  exchangeRegex(value: string): number {
    switch (value) {
      case 'km':
        return 1000;
      case 'm':
        return 1;
      case 'cm':
        return 0.01;
      default:
        return 1;
    }
  }
}
