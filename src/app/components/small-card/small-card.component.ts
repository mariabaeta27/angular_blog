import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  constructor() {}
  @Input()
  Id: string = '0';

  @Input()
  articlePhotoPath: string = '';
  @Input()
  articleTitle: string = '';
}
