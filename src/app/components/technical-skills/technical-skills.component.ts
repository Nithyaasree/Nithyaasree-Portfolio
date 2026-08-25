import { Component } from '@angular/core';
import { SkillGroup } from '../../models/portfolio.model';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.css'
})
export class TechnicalSkillsComponent {
  readonly skillGroups: SkillGroup[] = [
    { label: 'Programming', skills: ['C#', 'JavaScript', 'HTML5', 'CSS3', 'VBA'] },
    { label: '.NET & Backend', skills: ['.NET Framework', '.NET Core', 'ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'Entity Framework Core', 'ADO.NET', 'LINQ', 'Razor Views', 'Blazor', 'WPF', 'WinForms'] },
    { label: 'Frontend', skills: ['Angular 10/13/14/16/18', 'React.js', 'Bootstrap 4/5', 'jQuery', 'AJAX', 'Telerik Controls'] },
    { label: 'Data', skills: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'T-SQL', 'Stored Procedures', 'Views', 'Functions'] },
    { label: 'Cloud & DevOps', skills: ['AWS EC2', 'AWS S3', 'Azure DevOps', 'Git', 'TFS', 'CI/CD', 'Docker', 'NuGet'] },
    { label: 'AI & Integration', skills: ['OpenAI API Integration', 'ML.NET', 'GenAI', 'RESTful APIs', 'FastAPI', 'Postgrid API', 'WCF', 'COM Interop'] },
    { label: 'Security & Architecture', skills: ['OAuth', 'JWT', 'Role-Based Authorization', 'N-Tier Architecture', 'Microservices Architecture', 'MVC', 'OOP', 'Design Patterns'] },
    { label: 'Delivery', skills: ['Agile Scrum', 'SDLC', 'Asynchronous Programming', 'Multithreading', 'UAT', 'Postman', 'Jira', 'RedGate SQL Source Control'] }
  ];
  expandedGroupIndex: number | null = null;

  toggleGroup(index: number): void {
    this.expandedGroupIndex = this.expandedGroupIndex === index ? null : index;
  }
}
