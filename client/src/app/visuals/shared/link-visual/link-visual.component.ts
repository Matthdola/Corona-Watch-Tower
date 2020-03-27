import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/d3';

@Component({
  selector: 'app-link-visual',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.scss']
})
export class LinkVisualComponent implements OnInit {
  @Input('linkVisual') link: Link;

  constructor() { }

  ngOnInit(): void {
  }

}
