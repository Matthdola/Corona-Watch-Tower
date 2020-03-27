// path : d3/models/node.ts
import * as d3 from 'd3';
import APP_CONFIG from '../../app.config';

// Implementing SimulationNodeDatum interface in our custom Node class
export class Node implements d3.SimulationNodeDatum {
  id: string;
  linkCount: number = 0;

  // Optional -defining optional implementation properties - required
  // for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  xy?: number;
  fx?: number | null;
  fy?: number | null;


  constructor(id: string) {
    this.id = id;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }
}
