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
{ label: 'Programming', skills: ['C#', 'TypeScript', 'JavaScript', 'HTML', 'HTML5', 'CSS', 'CSS3', 'VBA'] },
{ label: '.NET & Backend', skills: ['.NET', '.NET Framework', '.NET Core', 'ASP.NET', 'ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Core MVC', 'ASP.NET Web API', 'REST APIs', 'Web Services', 'Entity Framework', 'Entity Framework Core', 'Entity Framework 6', 'ADO.NET', 'LINQ', 'Razor Views', 'Blazor', 'WPF', 'COM Interop'] },
{ label: 'Frontend', skills: ['Angular', 'Angular 15+', 'Angular 18', 'Angular Material', 'Angular CDK', 'RxJS', 'NgRx', 'Bootstrap', 'Bootstrap 4/5', 'jQuery', 'AJAX', 'Telerik UI'] },
{ label: 'Data', skills: ['SQL Server', 'Azure SQL Database', 'MySQL', 'PostgreSQL', 'T-SQL', 'Stored Procedures', 'Views', 'Functions', 'LINQ'] },
{ label: 'Cloud & DevOps', skills: ['AWS EC2', 'Amazon S3', 'IAM', 'Azure API Management', 'Azure Pipelines', 'Azure DevOps', 'Azure Cache for Redis', 'Azure Application Insights', 'TFS', 'Git'] },
{ label: 'AI & Integration', skills: ['AI Chatbot', 'REST APIs', 'Web Services'] },
{ label: 'AI Tools', skills: ['GitHub Copilot', 'Claude AI','ChatGPT'] },
{ label: 'Security & Architecture', skills: ['JWT', 'OAuth 2.0', 'Role-Based Authorization', 'Microservices', 'MVC', 'OOP', 'Design Patterns', 'Async/Await', 'Asynchronous Programming', 'Multithreading'] },
{ label: 'Delivery', skills: ['Agile Scrum', 'SDLC', 'Unit Testing','PostMan','Swagger','Debugging', 'Code Reviews', 'Production Support', 'Technical Documentation', 'Visual Studio'] },
  ];
  expandedGroupIndex: number | null = null;

  toggleGroup(index: number): void {
    this.expandedGroupIndex = this.expandedGroupIndex === index ? null : index;
  }
}
