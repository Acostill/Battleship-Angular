import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardSize: Array<any> = new Array(10);

  constructor() { 
    console.log(this.boardSize.length);
  }

  ngOnInit() {
  }
}
