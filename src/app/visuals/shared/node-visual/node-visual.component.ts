import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../../d3/models';
@Component({
  selector: 'app-node-visual',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.scss']
})
export class NodeVisualComponent implements OnInit {
  @Input() node: Node;
  constructor() { }

  ngOnInit(): void {
  }

}
