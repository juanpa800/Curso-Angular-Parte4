import { Component, Input, OnInit } from '@angular/core';
import { Guest } from '../guest.model';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  constructor() { }
  @Input() guest: Guest;
  ngOnInit(): void {
  }

}
