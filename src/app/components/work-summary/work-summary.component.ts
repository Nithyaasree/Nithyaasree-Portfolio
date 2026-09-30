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
      company: 'Geico Insurance', 
      location: 'Chevy Chase, MD', 
      role: 'Senior .NET Developer', 
      period: 'Jun 2025 - Present',
      technologies: ['C#', 'ASP.NET Core', 'Angular 15+', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Angular CDK', 'Entity Framework Core', 'Azure SQL Database', 'Azure Cache for Redis', 'Azure API Management', 'Azure Application Insights'],
      highlights: [
        'Developed scalable ASP.NET Core Web APIs using C# for modernizing legacy claims application functionality.',
        'Designed and implemented RESTful APIs following clean and maintainable service-layer architecture.',
        'Developed responsive Angular 15+ applications using TypeScript, Angular Material, and Angular CDK for claims-related workflows.',
        'Implemented reactive frontend functionality using RxJS and NgRx for asynchronous operations and application state management.',
        'Integrated Angular applications with backend ASP.NET Core Web APIs to support end-to-end business workflows.',
        'Used Entity Framework Core with Azure SQL Database for data access, entity mapping, LINQ queries, and transactional operations.',
        'Implemented Azure Cache for Redis for frequently accessed data to improve application responsiveness and reduce unnecessary database calls.',
        'Worked with Azure API Management (APIM) for API exposure, routing, policies, and managing backend API integrations.',
        'Used Azure Application Insights to monitor application performance, investigate exceptions, analyze requests, and troubleshoot production issues.',
        'Participated in Agile/Scrum activities including sprint planning, daily stand-ups, backlog refinement, sprint reviews, and retrospectives.',
        'Participated in code reviews and unit testing, following development standards and identifying potential issues before deployment.',
        'Performed debugging, root-cause analysis, and defect resolution across Angular, Web API, and database layers.',
        'Supported application releases and production troubleshooting, working with team members to investigate and resolve application issues.',
        'Worked closely with developers, QA, business analysts, and technical leads to understand requirements and deliver features within the SDLC.',

      ]
    },
    {
      company: 'Avis Budget Group',
      location: 'Parsippany, NJ', 
      role: '.NET Application Developer', 
      period: 'Oct 2024 - May 2025',
      technologies: ['C#', 'ASP.NET Core', 'ASP.NET MVC', '.NET', 'Angular', 'Angular 18', 'HTML5', 'CSS3', 'Bootstrap', 'AJAX', 'Entity Framework Core', 'Entity Framework 6', 'LINQ', 'SQL Server', 'MySQL', 'Azure API Management', 'Azure Pipelines', 'Azure Application Insights', 'Visual Studio', 'COM Interop', 'VBA'],
      highlights: [
        'Developed and maintained enterprise applications using C#, ASP.NET Core, ASP.NET MVC, and .NET, following scalable and maintainable application architecture.',
        'Designed reusable business and data-layer components to support application functionality and separation of concerns.',
        'Used UML class and sequence diagrams to understand system architecture, business workflows, and technical requirements.',
        'Developed backend functionality using ASP.NET Core MVC, C# controllers, and service components.',
        'Built RESTful ASP.NET Core Web APIs with CRUD operations, validation, JSON-based communication, and integration with external client applications.',
        'Used Entity Framework Core, LINQ, and SQL Server for database access, entity relationships, queries, and data persistence.',
        'Worked with Entity Framework 6 and MySQL, gaining experience with ORM concepts and database integration.',
        'Developed responsive web applications using Angular, HTML5, CSS3, Bootstrap, and AJAX.',
        'Developed Angular 18 template-driven and reactive forms, including form controls, validations, and API integration.',
        'Implemented end-to-end application workflows by integrating Angular frontends with ASP.NET Core Web APIs.',
        'Applied async/await, asynchronous programming, and multithreading concepts where appropriate to support application responsiveness and performance.',
        'Applied common design patterns and object-oriented programming principles to improve code organization, reusability, and maintainability.',
        'Used Azure API Management (APIM) to publish and manage APIs and Azure Pipelines for build and deployment activities.',
        'Used Azure Application Insights for application monitoring, exception tracking, API performance analysis, dependency monitoring, and production troubleshooting.',
        'Used Visual Studio for development, debugging, troubleshooting, and maintenance of .NET applications.',
        'Worked with COM Interop and VBA integration to support interaction with legacy applications and backward compatibility requirements.',
        'Participated in Agile/Scrum ceremonies, collaborating with system analysts, QA engineers, and development teams throughout the SDLC.',
        'Participated in code reviews, defect resolution, technical documentation, and production support, helping maintain application quality and reliability.',

      ]
    },
    
    {
      company: 'iBeris Global LLC',
      location: 'Edison, NJ', 
      role: 'volunteer .NET Developer', 
      period: 'Sep 2022 - Aug 2024', 
      technologies: ['C#', 'ASP.NET Core', '.NET', 'Angular','TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'AWS EC2', 'Amazon S3', 'IAM', 'SQL Server', 'JWT', 'OAuth 2.0', 'OpenAI Chatbot' ,'GitHub Copilot', 'Git'],
      highlights: [
        'Developed and maintained ASP.NET Core Web APIs using C# and .NET, supporting business functionality and application integrations.',
        'Built responsive web interfaces using Angular, TypeScript, HTML5, CSS3, and Bootstrap, including reusable components and application forms.',
        'Worked with AWS EC2 for hosting and supporting .NET applications, including application configuration and environment management.',
        'Used Amazon S3 to store and manage application files and documents, configuring IAM roles and permissions for secure application access to S3 buckets.',
        'Supported AWS deployment and pipeline processes for application builds, deployments, and releases across environments.',
        'Designed and optimized SQL Server stored procedures, views, tables, joins, and queries for application data processing.',
        'Integrated SQL Server stored procedures with ASP.NET Core Web APIs for data retrieval and transactional operations.',
        'Implemented JWT authentication, OAuth 2.0, and role-based authorization to secure application resources and APIs.',
        'Used async/await and background processing in .NET for non-blocking application operations.',
        'Integrated an AI chatbot with a .NET application to analyze resumes and job descriptions, evaluate matching skills and experience, and generate a resume-to-JD match score with relevant comparison insights.',
        'Used GitHub Copilot during Angular development for code generation, UI component development, debugging, and productivity.',
        'Followed Agile/Scrum and Git-based development practices, participating in code reviews, testing, debugging, documentation, and production support.',

      ]
    },
    {
      company: 'O Clock Software Solution', 
      location: 'Chennai, India', 
      role: 'Full Stack Developer / Software Engineer', 
      period: 'Sep 2020 - Jun 2022', 
      project: 'PayOutt, SGQuickPay, and JUZ ERP', 
      technologies: ['C#', 'ASP.NET', '.NET', 'ASP.NET MVC', 'Razor Views', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'Microservices', 'REST APIs', 'Web Services', 'PostgreSQL', 'Entity Framework', 'ADO.NET', 'WPF', 'Telerik UI', 'Telerik Reporting', 'TFS'],
      highlights: [
        'Developed web-based money exchange applications using C#, ASP.NET, and .NET technologies.',
        'Implemented real-time currency conversion functionality for converting foreign currencies to SGD based on current exchange rates.',
        'Developed responsive application interfaces using ASP.NET MVC and Razor Views, HTML, CSS, JavaScript, and jQuery.',
        'Designed and implemented Microservices architecture separating UI, business logic, and data access layers.',
        'Developed business logic using C# for currency exchange, transaction processing, validation, and application workflows.',
        'Built and consumed REST APIs and web services for retrieving and processing currency exchange information.',
        'Used PostgreSQL for storing and managing application and transaction data.',
        'Developed and maintained stored procedures, functions, queries, and database objects to support application functionality.',
        'Used Entity Framework and ADO.NET for database connectivity, data retrieval, and application data processing.',
        'Implemented client-side validation and dynamic functionality using JavaScript, jQuery, HTML, and AJAX.',
        'Worked with WPF and ASP.NET applications, supporting development and maintenance of existing application modules.',
        'Gained basic knowledge of AI/ML concepts and their application for analyzing currency and transaction-related data.',
        'Gained knowledge of Telerik UI components and Telerik Reporting, including reports, filtering, sorting, grouping, paging, and report parameters.',
        'Used TFS for source control, task tracking, code management, and team collaboration.',
        'Participated in Agile/Scrum development, debugging, testing, technical documentation, and production support activities.',
      ]
    },
    {
      company: 'Chennovate Solutions', 
      location: 'Chennai, India', 
      role: 'Full Stack Developer / Software Developer', 
      period: 'Jan 2018 - Aug 2020', 
      project: 'Innowork', 
      technologies: ['C#', '.NET', 'SQL Server', 'Blazor', '.NET Core', 'REST APIs', 'Entity Framework', 'T-SQL', 'TFS', 'Azure DevOps'],
      highlights: [
        'Developed an employee performance management application using C#, .NET, and SQL Server.',
        'Developed role-based functionality to provide appropriate access to employees, managers, and administrators.',
        'Built front-end features using Blazor for interactive and responsive application screens.',
        'Developed backend functionality and REST APIs using .NET Core for application data and business operations.',
        'Used Entity Framework and T-SQL for database access, data processing, and application functionality.',
        'Implemented automated email notifications to communicate employee performance updates and application activities.',
        'Participated in Agile/Scrum development, working on assigned features across sprint cycles.',
        'Used TFS and Azure DevOps for source control, work-item tracking, and development activities.',
        'Performed debugging, defect resolution, unit testing, and production issue troubleshooting under team guidance.',
        'Participated in the full software development life cycle, including requirements analysis, development, testing, deployment, and application maintenance.',
      ]
    }
  ];
}
