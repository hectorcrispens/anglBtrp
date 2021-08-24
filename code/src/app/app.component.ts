import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angl';

  sendToConsole() {
    alert("hice click");
  }
  mostrarEstado(value:string)
  {
    this.title = value
  }
}

