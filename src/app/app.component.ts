import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { union } from 'set-utilities';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-test';

  a = new Set([1,2,3]);
  b = new Set([4,5,6]);
  c = union(this.a, this.b);
}
