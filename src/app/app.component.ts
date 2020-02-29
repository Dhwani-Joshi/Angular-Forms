import { Component } from '@angular/core';
import { User } from './tdf/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular' , 'React', 'Vue'];

  userModel = new User('', 'rob@test.com', 9879645124, '', 'morning', true);
  onSubmit() {
    console.log(this.userModel);
  }
}
