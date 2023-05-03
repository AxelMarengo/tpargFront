import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  login() {
    console.log(this.email);
    console.log(this.password);
    if (this.email=="juan") {console.log("pablo")};
    this.router.navigate(['/']);
  }
}