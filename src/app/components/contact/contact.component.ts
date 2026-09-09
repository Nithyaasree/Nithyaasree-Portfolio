import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  showEmailOptions = false;

  readonly profile = {
    FullName: 'Nithiyaa Sree Vasudevananth Rajalakshmi',
    email: '  sreenithya2311@gmail.com',
    secondaryEmail: '  nithiyaasree2395@gmail.com',
    phone: '  +1 848-219-6633',
    visaStatus: '  H4 EAD'
  };

  toggleEmailOptions(): void {
    this.showEmailOptions = !this.showEmailOptions;
  }

  closeEmailOptions(): void {
    this.showEmailOptions = false;
  }

  selectEmail(email: string): void {
    window.location.href = `mailto:${email}`;
    this.showEmailOptions = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.email-selector')) {
      this.closeEmailOptions();
    }
  }
}
