import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  experiences = [
    {
      title: 'Developer AI',
      company: 'NTT DATA',
      job_type:'Jornada completa',
      location: 'España',
      duration: 'sept. 2024 - Actualidad',
      description: 'Implementación de modelos de lenguaje (LLM), diseño y optimización de prompts. Además de desarrollo de modelos predictivos utilizando técnicas de machine learning. Para ello, empleo Python y Node.js como herramientas principales.'
    },
    {
      title: 'Junior Developer',
      company: 'NTT DATA',
      job_type:'Jornada completa',
      location: 'España',
      duration: 'sept. 2023 - sept. 2024',
      description: 'Desarrollo de pruebas de concepto, scraping de datos, automatización de procesos manuales, así como la extracción, transformación, y visualización de datos. Todo esto utilizando tecnologías como Node.js y Power BI.'
    },
    {
      title: 'Full-stack Developer',
      company: 'LabsLand',
      job_type:'Jornada parcial',
      location: 'España',
      duration: 'may. 2023 - sept. 2023',
      description: 'Mantenimiento de una página web enfocada en laboratorios remotos. Uso de tecnologías como Angular y python.'
    }
  ];
}
