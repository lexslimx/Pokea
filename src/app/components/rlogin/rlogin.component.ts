import { Component, OnInit } from '@angular/core';
import {IUser} from '../Interfaces/IUser';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent implements OnInit {

  constructor() { }
  user: IUser;

  
  ngOnInit() {
  }

}
