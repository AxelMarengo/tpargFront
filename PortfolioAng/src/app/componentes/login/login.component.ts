import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logged = false;
  username = "";
  password = "";

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.logged = true
    } else {
      console.log('Invalid username or password');
    }
  }
}
