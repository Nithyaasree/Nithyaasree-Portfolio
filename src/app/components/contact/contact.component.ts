import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly profile = {
    email: 'sreenithya2311@gmail.com',
    phone: '+1 848-219-6633',
    visaStatus: 'H4 EAD'
  };
}
