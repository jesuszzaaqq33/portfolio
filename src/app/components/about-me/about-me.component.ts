import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  showMore: boolean = false; // Variable para controlar la visibilidad

  toggleMore(): void {
    this.showMore = !this.showMore; // Cambia el estado de showMore
  }
}
