import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  constructor() {}

  @Input()
  articlePhotoPath: string = '';
  @Input()
  articleTitle: string = '';
  @Input()
  articleDescripiton: string = '';

  ngOnInit(): void {}
}
