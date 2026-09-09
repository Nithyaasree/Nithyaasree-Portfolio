import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-summary',
  standalone: true,
  templateUrl: './professional-summary.component.html',
  styleUrl: './professional-summary.component.css'
})
export class ProfessionalSummaryComponent implements OnInit, OnDestroy {
  private typingTimer?: ReturnType<typeof setTimeout>;
  private phraseIndex = 0;
  private characterIndex = 0;
  private deleting = false;
  readonly deliveringPhrases = ['Secure APIs', 'AI workflows', 'Angular interfaces', 'Cloud-ready systems'];
  typedText = '';
  readonly profile = {
    name: 'Nithiyaa Sree',
    title: '.NET Full Stack Developer',
    email: 'sreenithya2311@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nithyaa-sree-vasudevananth-rajalakshmi-dotnetdeveloper'
  };
  readonly summary = [
    'Senior .NET Full Stack Developer experienced in designing, developing, testing, deploying, and maintaining scalable enterprise web applications using Microsoft .NET technologies and Angular .',
    'Strong expertise in C#, .NET Framework, .NET Core, ASP.NET Core, ASP.NET MVC, Web API, Entity Framework, Entity Framework Core, LINQ, SQL Server, Angular, JavaScript, HTML5, CSS3, Bootstrap, jQuery, and RESTful APIs.',
    'Experienced in application security, cloud storage, AI-powered workflows, modern Angular interfaces, database optimization, and full SDLC delivery within Agile/Scrum teams.',
    'Proficient with AI tools including ChatGPT, GitHub Copilot, and Claude AI for enhanced productivity, code generation, and intelligent problem-solving.'
  ];

  ngOnInit(): void {
    this.scheduleTyping();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

  private typePhrase(): void {
    const phrase = this.deliveringPhrases[this.phraseIndex];

    if (!this.deleting) {
      this.characterIndex += 1;
      this.typedText = phrase.slice(0, this.characterIndex);
      if (this.characterIndex === phrase.length) {
        this.deleting = true;
        this.scheduleTyping(1400);
        return;
      }
    } else {
      this.characterIndex -= 1;
      this.typedText = phrase.slice(0, this.characterIndex);
      if (this.characterIndex === 0) {
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.deliveringPhrases.length;
      }
    }
    this.scheduleTyping();
  }

  private scheduleTyping(delay = 105): void {
    this.typingTimer = setTimeout(() => this.typePhrase(), delay);
  }
}
