import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer-iej';
  tempo: any;
  tempoTreino = 5;
  tempoDescansoSegundo = 1;

  constructor(){

  }

  onComplete() {
    alert('fim timer');
  }
}
