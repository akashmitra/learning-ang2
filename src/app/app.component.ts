import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  // [] means property binding one way - Components to Dom
  // () means event binding - Dom to Components

  title = 'My First Angular 2 App';
  name = 'Akash';
  fontcolor = 'green';

  changeColor() {
    this.fontcolor = this.fontcolor === 'green' ? 'red' : 'green';
  }

}
