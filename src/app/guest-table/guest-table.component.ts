import { Component, Input, OnInit } from '@angular/core';
import { Guest } from '../guest.model';

@Component({
  selector: 'app-guest-table',
  templateUrl: './guest-table.component.html',
  styleUrls: ['./guest-table.component.css']
})
export class GuestTableComponent implements OnInit {

  constructor() { }
  @Input() guests: Guest[];
  ngOnInit(): void {
  }

}
