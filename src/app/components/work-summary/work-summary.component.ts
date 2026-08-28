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
        'Exposed ML-powered prediction APIs, wrapped in ASP.NET Core endpoints, to deliver low-latency inference as part of flight notification services.',
        'Orchestrated real-time data processing pipelines with Kafka and RabbitMQ, boosting insight generation speed by 40%.',
        'Implemented asynchronous processing in .NET 8 using async/await, Task Parallel Library (TPL), and background services to handle long-running operations without blocking HTTP request threads.',
        'Reengineered the back end using C# and ASP.NET Core Web API on .NET 8 to replace legacy VB.NET services and enable scalable, cross-platform development.',
        'Secured APIs using OAuth 2.0 with JWT tokens to enforce role-based access and ensure secure communication between Blazor UI and the server.',
        'Developed user interfaces for modern, rich, single-page intranet applications using Angular 18 and ASP.NET Web API.',
        'Built automated CI/CD pipelines using GitLab CI/CD and Azure DevOps, reducing deployment time and minimizing release errors.',
        'Integrated ML.NET workflows to enable predictive analytics and automated decision-making within the platform.',
        'Created comprehensive SDLC documentation, conducted peer code reviews, and resolved user-facing technical issues.',
        'Deployed real-time AI workloads using Flask, FastAPI, and REST interfaces connecting to LLM endpoints.',
        'Worked with SQL Server and PostgreSQL, designing database schemas and optimizing queries to ensure data integrity.',
        'Migrated legacy .NET Framework applications to .NET Core to improve performance and scalability.',
        'Developed three-tier architecture with UI, Business, and Data Access layers.',
        'Worked on ASP.NET client-side state management, including ViewState, cookies, and query strings, and server-side state management, including application state, session state, and profile properties, using C#.',
        'Built reusable Angular 16+ components to accelerate front-end development.',
        'Participated in Agile/Scrum processes, CI/CD pipelines, and Docker-based deployments.',
        'Used SQL Server extensively to write complex queries, optimize stored procedures, and improve overall database performance.',
        'Collaborated with cross-functional Agile teams, Product Owners, and QA to deliver features in bi-weekly sprints using Scrum.',
        'Worked with AWS S3 for secure storage and retrieval of application files and documents, implementing appropriate access controls and bucket configurations.',
        'Utilized AWS IAM to manage user roles, permissions, and access policies for secure application and AWS resource access.',
        'Deployed and supported application workloads on AWS EC2, monitoring application availability and assisting with configuration and troubleshooting.'


      ]
    },
    {
      company: 'Avis Budget Group', location: 'Parsippany, NJ', role: '.NET Application Developer', period: 'Oct 2024 - May 2025', technologies: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework Core', 'SQL Server', 'MySQL', 'Angular 14', 'React', 'Azure DevOps'], highlights: [
        'Analyzed, developed, and integrated ASP.NET applications with legacy VBA systems using COM Interop, ensuring seamless backward compatibility.',
        'Extensively involved in developing components for the Business and Data tiers using C#.NET.',
        'Implemented business and data access layer classes in C#.NET using UML class diagrams and sequence diagrams.',
        'Used Entity Framework Core to access data from SQL data sources.',
        'Designed the Graphical User Interface (GUI) using ASP.NET Core MVC and implemented business logic in C# using MVC Controllers.',
        'Built and integrated RESTful APIs using ASP.NET Core Web API with full CRUD operations, incorporating data annotation validation to enforce business rules.',
        'Extensively used ASP.NET controls, including Master Page Templates, Menu Controls, GridView Controls, and File Upload Controls.',
        'Implemented Entity Framework 6 (EF6) and MySQL, optimizing database interactions and achieving a 25% increase in query performance and a 15% reduction in database-related issues.',
        'Created dynamic web interfaces using Razor Views, HTML5, CSS3, React, Bootstrap, and AJAX, enhancing the overall user experience.',
        'Developed Angular 14 template-driven and model-driven forms using reusable models.',
        'Created Web APIs to post data to external client applications.',
        'Involved in the development of Angular 14 forms for application processing and selection processes.',
        'Implemented Web API CRUD operations and database connectivity using Entity Framework and Object Mapper.',
        'Used Visual Studio .NET IDE to design forms, develop applications, and troubleshoot and debug issues.',
        'Used Agile (Scrum) methodology to support rapid and disciplined development throughout implementation.',
        'Led the integration of ASP.NET features into VBA systems, streamlining the user experience and cross-platform data handling.',
        'Applied design patterns, asynchronous processing, and multithreading to improve code performance and maintainability.',
        'Communicated closely with system analysts to gather and refine requirements and ensure successful project delivery.',
        'Utilized AWS S3 for storing and retrieving application files and data, supporting secure and scalable object storage.',
        'Worked with AWS IAM to configure roles, permissions, and access policies following security and least-privilege practices.',
        'Supported application deployment and hosting on AWS EC2, including environment configuration, application troubleshooting, and operational support.'

      ]
    },
    
    {
      company: 'iBeris Global LLC', location: 'Edison, NJ', role: 'volunteer .NET Developer', period: 'Sep 2022 - Aug 2024', technologies: ['C#', '.NET Framework', 'ASP.NET MVC', '.NET Web API', 'Dapper', 'Angular', 'SQL Server', 'WCF', 'jQuery'], highlights: [
        'Developed web applications using Microsoft .NET Framework 3.5, C#, ASP.NET, LINQ, and SQL Server, ensuring responsive and interactive functionality aligned with user needs.',
        'Developed Windows Forms using C# .NET to provide a high degree of interactivity.',
        'Developed ASP.NET caching features, configured ASP.NET optimizations, and secured ASP.NET web applications.',
        'Used the .NET Web API framework to create RESTful APIs and Dapper to fetch data from the database.',
        'Worked on client-side validation using JavaScript, jQuery, and CSS3 to address validation requirements.',
        'Worked on the UI layer using HTML5 and CSS3 to build rich, flexible, and interactive web pages.',
        'Implemented Angular 10 views using various controls and filters to format and display results.',
        'Provided a seamless user experience by utilizing jQuery, AJAX, and JSON to communicate with ASP.NET WCF web services and handlers without disrupting application usage.',
        'Used the .NET Framework for coding business logic and database logic using Entity Framework.',
        'Developed, deployed, and maintained ASP.NET MVC applications using the .NET Framework.',
        'Designed and implemented complex database objects, including tables, views, functions, and T-SQL stored procedures, to manage and retrieve structured educational content and user activity data.',
        'Created advanced stored procedures to fetch and manipulate data from multiple related tables, optimizing performance and reliability.',
        'Utilized LINQ to SQL, LINQ to XML, and LINQ to Objects to enable efficient querying and manipulation of data within the application.'
      ]
    },
    {
      company: 'O Clock Software Solution', location: 'Chennai, India', role: 'Full Stack Developer / Software Engineer', period: 'Sep 2020 - Jun 2022', project: 'PayOutt, SGQuickPay, and JUZ ERP', technologies: ['.NET Core', '.NET Framework', 'C#', 'Angular 8/13', 'SQL Server', 'MySQL', 'SSIS', 'Azure DevOps', 'Git', 'Postman'], highlights: [
        'Developed secure and scalable web-based healthcare applications using ASP.NET, C#, and SQL Server, ensuring compliance with healthcare industry standards.',
        'Engineered N-tier architecture (UI, Business Logic, Data Access Layers) to ensure modularity, maintainability, and performance.',
        'Used CSS and ASP.NET for designing web pages, master pages, and user controls.',
        'Developed various ASP.NET user controls and custom controls for ASP.NET forms.',
        'Designed internal applications using C# and ASP.NET technologies.',
        'Extensively worked on consuming, calling, transmitting, and processing Web Services and WCF services.',
        'Heavily used ADO.NET objects, DataSet, DataTable, and DataAdapter for manipulating, retrieving, storing, and displaying data from SQL Server.',
        'Involved in the creation of new WPF Browser Applications and maintenance of legacy ASP.NET modules.',
        'Created dynamic web pages with ASP.NET, incorporating JavaScript, jQuery, HTML controls, Telerik Controls, and client-side validation for interactive and user-friendly experiences.',
        'Designed and optimized relational database structures for efficient storage and retrieval of clinical and operational data.',
        'Developed stored procedures, triggers, and custom SQL queries to support critical operations related to patient records and appointments.',
        'Utilized Team Foundation Server (TFS) for version control, task tracking, and collaborative source code management.'

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
        'Participated in the full development life cycle, including analysis, design, development, unit testing, deployment, and sprint tracking using Jira or Azure DevOps.'

      ]
    }
  ];
}
