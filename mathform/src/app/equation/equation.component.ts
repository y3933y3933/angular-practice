import { MathValidators } from './../math-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  secondsPerSoultion = 0;
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      ans: new FormControl(''),
    },
    [
      MathValidators.addition('ans', 'a', 'b'),
      Validators.required,
      Validators.minLength(5),
    ]
  );
  constructor() {}
  get a() {
    return this.mathForm.value.a;
  }
  get b() {
    return this.mathForm.value.b;
  }
  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(100),
        scan(
          (acc) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSoultion =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
        this.mathForm.patchValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          ans: '',
        });
      });
  }
  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
