import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) {}

  getColor(){
    if (this.appareilStatus === 'allumé'){
      return 'green';
    } else if (this.appareilStatus === 'éteint'){
      return 'red';
    }
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

}
