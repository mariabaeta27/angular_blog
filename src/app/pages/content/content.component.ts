import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from 'src/data/mock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  private id: string | null = '0';
  @Input()
  contentPhothoCover: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contetDescription: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.id && this.setValuesToContente(this.id);
  }

  setValuesToContente(id: string) {
    const result = mockData.filter((data) => data.id === Number(id))[0];

    if (result) {
      this.contentPhothoCover = result?.photoPath;
      this.contentTitle = result?.title;
      this.contetDescription = result?.description;
    }
  }
}
