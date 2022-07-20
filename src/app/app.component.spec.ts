import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Guest } from './guest.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Curso-Angular-Parte4'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Curso-Angular-Parte4');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to my Angular course number 4');
  });

  it('should add a custom guest', () => {
    const testGuest = new Guest('Lucas','Lemus','Brother', 30);
    expect(100).toEqual(100);
  });
});
