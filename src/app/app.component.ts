import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Idval: number = 100;
  title = 'my-app';
  constructor() {
    console.log("anguler constructor");
  }
  // ngOnInit(): void {
  //   console.log("ng-onInit");
  //   this.changeTitle();

  // }
  changeTitle = () => {
    this.title = "Creative tools"
  }
}
