import { Component } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code-alchemists-angular';
}
