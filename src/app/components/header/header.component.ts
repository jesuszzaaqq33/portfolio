import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  menuActive = false; // Estado del menú
  toggleMenu() {
    this.menuActive = !this.menuActive; // Cambia el estado entre visible y oculto
  }
  closeMenu(){
    this.menuActive = false; // Cierra el menú
  }
}
