import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.css'
})
export class TechnicalSkillsComponent {
  readonly skillGroups = inject(PortfolioDataService).skillGroups;
  expandedGroupIndex: number | null = null;

  toggleGroup(index: number): void {
    this.expandedGroupIndex = this.expandedGroupIndex === index ? null : index;
  }
}
