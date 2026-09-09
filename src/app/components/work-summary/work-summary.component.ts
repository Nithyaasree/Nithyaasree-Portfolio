import { Component } from '@angular/core';
import { ExperienceItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-work-summary',
  standalone: true,
  templateUrl: './work-summary.component.html',
  styleUrl: './work-summary.component.css'
})
export class WorkSummaryComponent {
  readonly expandedExperiences = new Set<number>();

  toggleExperience(index: number): void {
    if (this.expandedExperiences.has(index)) {
      this.expandedExperiences.delete(index);
    } else {
      this.expandedExperiences.add(index);
    }
  }

  isExperienceExpanded(index: number): boolean {
    return this.expandedExperiences.has(index);
  }

  readonly experiences: ExperienceItem[] = [
    {
      company: 'Geico Insurance', location: 'Chevy Chase, MD', role: 'Senior .NET Developer', period: 'Jun 2025 - Present', technologies: ['C#', 'ASP.NET Core', '.NET 8', 'Angular 18', 'ML.NET', 'SQL Server', 'PostgreSQL', 'Kafka', 'RabbitMQ', 'Azure DevOps', 'GitLab CI/CD'], highlights: [
        'Implemented ML pipelines using ML.NET in C#, including sentiment analysis and classification, enabling real-time GenAI-powered insights within ASP.NET Core services.',
        'Exposed ML-powered prediction APIs—wrapped in ASP.NET Core endpoints—to deliver low-latency inference as part of flight notification.',
        'Orchestrated real-time data processing pipelines with Kafka and RabbitMQ, boosting insight generation speed by 40%.',
        'Implementing asynchronous processing in .NET 8 using async/await, Task Parallel Library (TPL), and background services to handle long-running operations without blocking HTTP request threads.',
        'Reengineering the back end with C# and ASP.NET Core Web API on .NET 8 to replace legacy VB.NET services and enable scalable, cross-platform development.',
        'Securing APIs using OAuth2 with JWT tokens to enforce role-based access and ensure secure communication between Blazor UI and the server.',
        'Develop User interfaces for Modern Rich Single Page intranet applications with Angular 18 and ASP.NET Web API.',
        'Built automated CI/CD pipelines using GitLab CI/CD and Azure DevOps, reducing deployment time and minimizing release errors.',
        'Integrated ML.NET workflows to enable predictive analytics and automated decision-making within the platform.',
        'Created comprehensive SDLC documentation, executed peer code reviews, and resolved user-facing technical issues.',
        'Deployed real-time AI workloads with Flask, FastAPI, and REST interfaces connecting to LLM endpoints.',
        'Worked with SQL Server and PostgreSQL, designing schemas and optimizing queries for data integrity.',
        'Migrate legacy .NET Framework apps to .NET Core to improve performance.',
        'Developed Three-tier architecture with UI, Business, and Data Access layers.',
        'Worked on ASP.NET client-side state management (view state, cookies, and query strings) and server-side state management (application state, session state, and profile properties) using C#.',
        'Build reusable Angular 16+ components to speed up front-end development.',
        'Participated in Agile/Scrum processes, CI/CD pipelines, and Docker-based deployments.',
        'Used SQL Server extensively for writing complex queries, optimizing stored procedures, and improving overall database performance.',
        'Collaborated with cross-functional agile teams with Product Owners and QA to deliver features in bi-weekly sprints using Scrum.',
      ]
    },
    {
      company: 'Avis Budget Group', location: 'Parsippany, NJ', role: '.NET Application Developer', period: 'Oct 2024 - May 2025', technologies: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework Core', 'SQL Server', 'MySQL', 'Angular 14', 'React', 'Azure DevOps'], highlights: [
        'Analyzed, developed, and integrated ASP.NET applications with legacy VBA systems using COM Interop, ensuring seamless backward compatibility.',
        'Extensively involved in developing components for Business and Data tier using C#.NET.',
        'Implemented business, database access layer classes in C#.NET using UML class diagrams and sequence diagrams.',
        'Used Entity Framework Core to access data from SQL data sources.',
        'Graphical User Interface (GUI) was designed using ASP.NET Core MVC and the business logic was coded in C# [MVC Controllers].',
        'Built and integrated RESTful APIs using ASP.NET Core Web API with full CRUD operations, incorporating Data Annotation validation to enforce business rules.',
        'Extensively used ASP.NET controls like Master Page Templates, Menu Controls, Grid View Controls, and File Upload Controls.',
        'Implemented Entity Framework 6 (EF6) and MySQL, optimizing database interactions, resulting in 25% increase in query performance and 15% reduction in database-related issues.',
        'Created dynamic web interfaces using Razor Views, HTML5, CSS3, React, Bootstrap, and AJAX, enhancing user experience.',
        'Developed Angular 14 template-driven forms and model-driven forms builder by using models.',
        'Created Web API used to post back data to external client.',
        'Involved in development of forms for Application Process and Selection Process in Angular 14.',
        'Implemented Web API CRUD operations and database connection by using Entity Framework and Object Mapper.',
        'Used Visual Studio .NET IDE to design the forms, develop, and debug the application.',
        'Used Agile (Scrum) Methodology for rapid and more disciplined development during implementation.',
        'Led the integration of ASP.NET features into VBA systems, streamlining user experience and cross-platform data handling.',
        'Applied design patterns, asynchronous processing, and multi-threading to improve code performance and maintainability.',
        'Communicated closely with system analysts to gather and refine requirements and ensured successful project delivery.',
        'Created comprehensive technical documentation and provided production support for deployed applications.',
      ]
    },
    
    {
      company: 'iBeris Global LLC', location: 'Edison, NJ', role: 'volunteer .NET Developer', period: 'Sep 2022 - Aug 2024', technologies: ['C#', '.NET Framework','AWS','AWS s3','AWS EC2','IAM Roles' ,'ASP.NET MVC', '.NET Web API', 'Angular', 'SQL Server', 'jQuery'], highlights: [
        'Developed web applications using C#, ASP.NET, .NET Framework, LINQ, SQL Server, and Entity Framework, ensuring responsive and interactive functionality.',
        'Developed Windows Forms applications using C# and .NET to create interactive and user-friendly desktop applications.',
        'Developed and maintained ASP.NET MVC applications and implemented caching, security, and performance optimization features.',
        'Created RESTful APIs using .NET Web API and used Dapper and Entity Framework for efficient database access and data management.',
        'Developed responsive and interactive user interfaces using Angular 10, HTML5, CSS3, JavaScript, jQuery, AJAX, and JSON.',
        'Designed and implemented SQL Server database objects, including tables, views, functions, and T-SQL stored procedures for efficient data management.',
        'Created and optimized stored procedures to retrieve and manipulate data from multiple related tables.',
        'Utilized LINQ to SQL, LINQ to XML, and LINQ to Objects for efficient querying and data manipulation.',
        'Worked with AWS services, including Amazon EC2 for application hosting and Amazon S3 for secure file storage and retrieval.',
        'Configured AWS IAM roles and permissions to provide secure and controlled access to AWS resources, including EC2 and S3.',
        'Participated in daily and weekly team meetings to discuss application development, code changes, and project requirements.',
      ]
    },
    {
      company: 'O Clock Software Solution', location: 'Chennai, India', role: 'Full Stack Developer / Software Engineer', period: 'Sep 2020 - Jun 2022', project: 'PayOutt, SGQuickPay, and JUZ ERP', technologies: ['.NET Core', '.NET Framework', 'C#', 'Angular 8/13', 'SQL Server', 'MySQL', 'SSIS', 'Azure DevOps', 'Git', 'Postman'], highlights: [
        'Developed secure and scalable web-based healthcare applications using ASP.NET, C#, and SQL Server, ensuring compliance with healthcare industry standards.',
        'Engineered N-tier architecture (UI, Business Logic, Data Access Layers) to ensure modularity, maintainability, and performance.',
        'Used CSS and ASP.NET for designing the web pages, Master Pages, and user controls.',
        'Developed various ASP.NET user controls and custom controls for the ASP.NET forms.',
        'Designed the internal applications using C# and ASP.NET technologies.',
        'Extensively worked on consuming, calling, transmitting, and processing Web Services and WCF services.',
        'Heavily used ADO.NET objects, DataSet, DataTable, and DataAdapter for manipulating, retrieving, storing, and displaying data from SQL Server.',
        'Involved in the creation of new WPF Browser Applications and maintenance of old ASP.NET modules.',
        'Created dynamic web pages with ASP.NET, incorporating JavaScript, jQuery, HTML controls, Telerik Controls, and client-side validation for interactive and user-friendly experiences.',
        'Designed and optimized relational database structures for efficient storage and retrieval of clinical and operational data.',
        'Developed stored procedures, triggers, and custom SQL queries to support critical operations related to patient records and appointments.',
        'Utilized Team Foundation Server (TFS) for version control, task tracking, and collaborative source code management.',

      ]
    },
    {
      company: 'Chennovate Solutions', location: 'Chennai, India', role: 'Full Stack Developer / Software Developer', period: 'Jan 2018 - Aug 2020', project: 'Innowork', technologies: ['.NET Core', 'C#', 'Entity Framework', 'Angular', 'HTML', 'CSS', 'jQuery', 'TFS', 'Azure DevOps'], highlights: [
        'Collaborated with Agile Scrum teams to plan, develop, and deliver project features across sprint cycles.',
        'Developed REST APIs using .NET Core and Entity Framework and maintained backend application services.',
        'Built front-end features using Angular 10 and supported responsive application functionality.',
        'Debugged production issues, performed root cause analysis, and implemented fixes to reduce downtime.',
        'Troubleshot build and deployment issues and supported release activities with minimal disruption.',
        'Coordinated product releases with development, QA, and support teams across global locations.',
        'Used TFS for issue tracking and Azure DevOps for CI/CD workflows.',
        'Participated in the full development life cycle, including analysis, design, development, unit testing, deployment, and sprint tracking using Jira or Azure DevOps.',  
      ]
    }
  ];
}
