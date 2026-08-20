import { Component, HostListener } from '@angular/core';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfessionalSummaryComponent } from './components/professional-summary/professional-summary.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { WorkSummaryComponent } from './components/work-summary/work-summary.component';

@Component({
  selector: 'app-root',
  imports: [TopNavComponent, ProfessionalSummaryComponent, TechnicalSkillsComponent, WorkSummaryComponent, EducationComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly title = 'Nithiyaa Sree Vasudevananth Rajalakshmi';
  showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 500;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
