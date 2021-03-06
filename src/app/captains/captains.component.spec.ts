import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'

import { CaptainsComponent } from './captains.component';
import { CaptainDetailComponent } from '../captain-detail/captain-detail.component';

describe('CaptainsComponent', () => {
  let component: CaptainsComponent;
  let fixture: ComponentFixture<CaptainsComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ 
        CaptainsComponent,
        CaptainDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
