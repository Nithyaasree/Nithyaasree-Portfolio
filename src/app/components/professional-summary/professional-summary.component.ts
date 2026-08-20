import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-professional-summary',
  standalone: true,
  templateUrl: './professional-summary.component.html',
  styleUrl: './professional-summary.component.css'
})
export class ProfessionalSummaryComponent implements OnInit, OnDestroy {
  private readonly data = inject(PortfolioDataService);
  private typingTimer?: ReturnType<typeof setTimeout>;
  private phraseIndex = 0;
  private characterIndex = 0;
  private deleting = false;
  readonly deliveringPhrases = ['Secure APIs', 'AI workflows', 'Angular interfaces', 'Cloud-ready systems'];
  typedText = '';
  readonly profile = this.data.profile;
  readonly summary = this.data.summary;

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
