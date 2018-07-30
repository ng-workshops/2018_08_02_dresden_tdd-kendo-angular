import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {
    id: 1,
    name: 'Chuck Norris',
    showSecret: false,
    hobbies: ['eat', 'sleep', 'drink']
  };

  callMe(phone: string) {
    alert(phone);
  }
}
