import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics: string[] = ['Node.js', 'Angular', 'Web Scraping', 'AI & Machine Learning', 'Python', 'Javascript'];
  currentTopic: string = '';
  index = 0;
  isDeleting = false;

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect(): void {
    let currentStringIndex = 0;
    let showCursor = true; // Variable para controlar el parpadeo de la barra

    const type = () => {
      // Si está eliminando caracteres
      if (this.isDeleting) {
        this.currentTopic = this.topics[this.index].substring(0, currentStringIndex) + (showCursor ? "|" : ""); // Mostrar u ocultar la barra;
        currentStringIndex--;
      }
      // Si está escribiendo caracteres
      else {
        this.currentTopic = this.topics[this.index].substring(0, currentStringIndex +1)+ (showCursor ? "|" : ""); // Mostrar u ocultar la barra;
        currentStringIndex++;
      }

      // Si se ha terminado de escribir la palabra
      if (currentStringIndex === this.topics[this.index].length && !this.isDeleting) {
        this.currentTopic = this.currentTopic + "."
        setTimeout(() => {
          this.isDeleting = true; // Cambiar a modo de eliminación después de la pausa
          type();
        }, 2000); // Pausa de 2 segundos
        return;
      }

      // Si se ha eliminado completamente la palabra
      else if (currentStringIndex === 0 && this.isDeleting) {
        this.isDeleting = false; // Cambiar a modo de escritura
        this.index = (this.index + 1) % this.topics.length; // Ir al siguiente tema
      }
      // Cambiar el estado de la barra (para parpadeo)
    showCursor = !showCursor;
      setTimeout(type, 100);
    };
    type();
  }
}
