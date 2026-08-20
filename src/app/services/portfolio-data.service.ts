import { Injectable } from '@angular/core';
import { EducationItem, ExperienceItem, SkillGroup } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profile = {
    name: 'Nithiyaa Sree Vasudevananth Rajalakshmi',
    title: '.NET Full Stack Developer',
    email: 'sreenithya2311@gmail.com',
    phone: '+1 848-219-6633',
    linkedin: 'https://www.linkedin.com/in/nithyaa-sree-vasudevananth-rajalakshmi-dotnetdeveloper',
    visaStatus: 'H4 EAD'
  };

  readonly summary = [
    'Senior .NET Full Stack Developer experienced in designing, developing, testing, deploying, and maintaining scalable enterprise web applications using Microsoft .NET technologies.',
    'Strong expertise in C#, .NET Framework, .NET Core, ASP.NET Core, ASP.NET MVC, Web API, Entity Framework, Entity Framework Core, LINQ, SQL Server, Angular, JavaScript, HTML5, CSS3, Bootstrap, jQuery, and RESTful APIs.',
    'Experienced in application security, cloud storage, AI-powered workflows, modern Angular interfaces, database optimization, and full SDLC delivery within Agile/Scrum teams.'
  ];

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

  readonly experiences: ExperienceItem[] = [
    {
      company: 'Geico Insurance', location: 'Chevy Chase, MD', role: 'Senior .NET Developer', period: 'Jun 2025 - Present', technologies: ['C#', 'ASP.NET Core', '.NET 8', 'Angular 18', 'ML.NET', 'SQL Server', 'PostgreSQL', 'Kafka', 'RabbitMQ', 'Azure DevOps', 'GitLab CI/CD'], highlights: [
        'Reengineered legacy VB.NET services using C#, ASP.NET Core Web API, and .NET 8.',
        'Built reusable Angular components and modern enterprise web applications.',
        'Implemented ML.NET pipelines for sentiment analysis, classification, predictive analytics, and intelligent decision-making.',
        'Integrated GenAI and LLM workloads through Flask, FastAPI, REST interfaces, and AI endpoints.',
        'Secured APIs with OAuth2, JWT-based authentication, authorization, and role-based access.',
        'Orchestrated real-time data processing with Kafka and RabbitMQ and built automated CI/CD pipelines.'
      ]
    },
    {
      company: 'Avis Budget Group', location: 'Parsippany, NJ', role: '.NET Application Developer', period: 'Apr 2024 - May 2025', technologies: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework Core', 'SQL Server', 'MySQL', 'Angular 14', 'React', 'Azure DevOps'], highlights: [
        'Developed enterprise applications, RESTful APIs, reusable business components, and data-access components.',
        'Improved database performance through query optimization in SQL Server and MySQL.',
        'Built responsive interfaces using Angular, React, Razor Views, JavaScript, AJAX, and Bootstrap.',
        'Integrated ASP.NET applications with legacy VBA systems using COM Interop.',
        'Applied asynchronous processing, multithreading, and design patterns to improve maintainability.'
      ]
    },
    {
      company: 'iBeris Global LLC', role: 'Full Stack Developer - Freelance', period: 'Nov 2024 - Jun 2026', project: 'Human Resource Management System (HRMS)', technologies: ['.NET Core', 'ASP.NET Core Web API', 'Entity Framework Core', 'Angular 16', 'TypeScript', 'SQL Server', 'AWS S3', 'OpenAI API'], highlights: [
        'Developed RESTful APIs and responsive, reusable Angular components for an HRMS.',
        'Integrated OpenAI APIs for resume analysis, job requirement validation, skill matching, and candidate scoring.',
        'Implemented secure AWS S3 resume storage and time-limited pre-signed URLs.',
        'Applied file validation, error handling, logging, and IAM roles and policies.'
      ]
    },
    {
      company: 'Syneos Health', location: 'Morrisville, NC', role: '.NET Developer', period: 'Aug 2022 - Mar 2024', technologies: ['C#', '.NET Framework', 'ASP.NET MVC', '.NET Web API', 'Dapper', 'Angular', 'SQL Server', 'WCF', 'jQuery'], highlights: [
        'Developed ASP.NET MVC applications, RESTful APIs, Windows Forms applications, and business logic components.',
        'Created and optimized complex SQL Server objects, queries, and stored procedures.',
        'Built Angular UI functionality with filters and dynamic views and integrated WCF services using AJAX and JSON.',
        'Participated in application development, debugging, testing, production support, and team meetings.'
      ]
    },
    {
      company: 'O Clock Software Solution', location: 'Chennai, India', role: 'Full Stack Developer / Software Engineer', period: 'Sep 2020 - Jun 2022', project: 'PayOutt, SGQuickPay, and JUZ ERP', technologies: ['.NET Core', '.NET Framework', 'C#', 'Angular 8/13', 'SQL Server', 'MySQL', 'SSIS', 'Azure DevOps', 'Git', 'Postman'], highlights: [
        'Developed RESTful APIs and responsive frontend features for multiple enterprise applications.',
        'Designed SQL Server and MySQL database objects and worked on SSIS and ETL processes.',
        'Developed scalable applications using n-tier architecture and integrated Web Services and WCF services.',
        'Supported debugging, root-cause analysis, production resolution, CI/CD, API testing, and releases.'
      ]
    },
    {
      company: 'Chennovate Solutions', location: 'Chennai, India', role: 'Full Stack Developer / Software Developer', period: 'Jan 2018 - Aug 2020', project: 'Innowork', technologies: ['.NET Core', 'C#', 'Entity Framework', 'Angular', 'HTML', 'CSS', 'jQuery', 'TFS', 'Azure DevOps'], highlights: [
        'Developed RESTful APIs, backend services, business logic, and reusable Angular UI components.',
        'Participated in analysis, design, development, testing, deployment, and production support.',
        'Troubleshot build and deployment issues and supported application releases with development, QA, and support teams.'
      ]
    }
  ];

  readonly education: EducationItem[] = [
    { degree: 'Master of Science in Information Technology', institution: 'SRM University', location: 'Chennai, Tamil Nadu, India', period: 'Jul 2016 - Apr 2018' },
    { degree: 'Bachelor of Science in Computer Science', institution: 'Madras University', location: 'Chennai, Tamil Nadu, India', period: 'Jul 2013 - Apr 2016' }
  ];
}
