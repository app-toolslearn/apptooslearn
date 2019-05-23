import { Component } from '@angular/core';

/**
 * Generated class for the TestEasyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-easy',
  templateUrl: 'test-easy.html'
})
export class TestEasyComponent {

  text: string;

  constructor() {
    console.log('Hello TestEasyComponent Component');
    this.text = 'Hello World';
  }

}
