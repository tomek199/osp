import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public getYear(): number {
    let date = new Date();
    return date.getFullYear();
  }
}
