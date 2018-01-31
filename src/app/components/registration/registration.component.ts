import { Component, OnInit } from '@angular/core';
import { ProviderAst } from '@angular/compiler';
import { RegistrationService } from './registration.service';
import { IRegistrationInterface } from '../Interfaces/IRegistrationInterface';
import { IUser } from '../Interfaces/IUser';
import { error } from 'util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  constructor(private _registrationService: RegistrationService) {
  }
  ngOnInit() {
  }

  userRegistrationViewModel: IRegistrationInterface = {
    email: "",
    password: "",
    confirmPassword: ""
  };
  errorMessage: string;
  currentUser: IUser;

  getUser(): void{
    this._registrationService.getUser()
    .subscribe(user=>this.currentUser,
    error=>this.errorMessage = <any>error);
  }

  register(): void {
    this._registrationService.register(this.userRegistrationViewModel);
    console.log('register');
    console.log('completed successfully');
    console.log('cant touch this bitches');
  }
}