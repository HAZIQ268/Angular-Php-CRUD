import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyuserComponent } from "./myuser/myuser.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyuserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';
}
