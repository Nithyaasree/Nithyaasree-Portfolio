import { Component } from '@angular/core';
import { EducationItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  readonly education: EducationItem[] = [
    { degree: 'Master of Science in Information Technology', institution: 'SRM University', location: 'Chennai, Tamil Nadu, India', period: 'Jul 2016 - Apr 2018' },
    { degree: 'Bachelor of Science in Computer Science', institution: 'Madras University', location: 'Chennai, Tamil Nadu, India', period: 'Jul 2013 - Apr 2016' }
  ];
}
