import { Component } from '@angular/core';
import { HOME_BUTTONS } from '../../../constants/home-buttons.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeButtons = HOME_BUTTONS;
}
