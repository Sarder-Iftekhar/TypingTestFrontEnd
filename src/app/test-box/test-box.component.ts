import { Component, Input } from '@angular/core';
import { Word } from '../models/model';

@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent {
  @Input() duration: number = 0;
  @Input() testType: 'simple' | 'advanced' = 'simple';

  words: Word[] = [];
  constructor(){}

  ngOnInit(): void {
    this.startTest();
    console.log("from check box",this.duration)
  }

  startTest() {
    this.setWords()
  }
  setWords() {
    this.words = [];
    for(let i=0; i<40; i++)
    {
      this.words.push(new Word(i, 'word' + (i+1)))
    }
  } 



}
