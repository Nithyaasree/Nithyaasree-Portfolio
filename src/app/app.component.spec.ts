import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose the resume profile name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Nithiyaa Sree Vasudevananth Rajalakshmi');
  });

  it('should render the portfolio sections', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-top-nav')).not.toBeNull();
    expect(compiled.querySelector('app-professional-summary')).not.toBeNull();
    expect(compiled.querySelector('app-technical-skills')).not.toBeNull();
    expect(compiled.querySelector('app-work-summary')).not.toBeNull();
    expect(compiled.querySelector('app-education')).not.toBeNull();
  });
});
