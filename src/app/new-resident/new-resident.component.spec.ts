import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '../home/home.component';
import { NewResidentComponent } from './new-resident.component';

describe('NewResidentComponent', () => {
  let component: NewResidentComponent;
  let fixture: ComponentFixture<NewResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewResidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
