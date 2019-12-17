import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.css']
})
export class EquipmentCardComponent implements OnInit {
  @Input() public operational: any;

  constructor() {
  }

  ngOnInit() {
  }

}
