import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeanceEndWithQuestionsComponent } from './detail-seance-end-with-questions.component';

describe('DetailSeanceEndWithQuestionsComponent', () => {
  let component: DetailSeanceEndWithQuestionsComponent;
  let fixture: ComponentFixture<DetailSeanceEndWithQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSeanceEndWithQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSeanceEndWithQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
