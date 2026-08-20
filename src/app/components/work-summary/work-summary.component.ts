import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-work-summary',
  standalone: true,
  templateUrl: './work-summary.component.html',
  styleUrl: './work-summary.component.css'
})
export class WorkSummaryComponent {
  readonly experiences = inject(PortfolioDataService).experiences;
}
