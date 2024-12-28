import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResidencesComponent} from "./residences/residences.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ResidencesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atelier1';
}
