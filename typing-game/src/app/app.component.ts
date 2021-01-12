import { ThrowStmt } from '@angular/compiler';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('txtArea') set txtArea(content: ElementRef) {
    if (content) {
      this.txtRef = content;
      content.nativeElement.focus();
    }
  }
  constructor() {}
  txtRef: ElementRef;
  randomText = '';
  enteredText = '';
  status = 'start';
  openModal = false;
  ngOnInit(): void {}
  onInput(value: string) {
    this.enteredText = value;
    if (this.enteredText === this.randomText) {
      this.openModal = true;
      this.enteredText = '';
      this.randomText = '';
      this.status = 'start';
    }
  }
  closeModal(): void {
    this.openModal = false;
  }
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
  changeStatus(): void {
    if (this.status === 'start') {
      this.status = 'pause';
      this.randomText = lorem.paragraph();
    } else if (this.status === 'pause') {
      this.status = 'restart';
    } else {
      this.status = 'pause';
      this.txtRef.nativeElement.foucs();
    }
  }
}
