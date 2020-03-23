import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeanceStartWithQuestionsComponent } from './detail-seance-start-with-questions.component';

describe('DetailSeanceStartWithQuestionsComponent', () => {
  let component: DetailSeanceStartWithQuestionsComponent;
  let fixture: ComponentFixture<DetailSeanceStartWithQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSeanceStartWithQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSeanceStartWithQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
