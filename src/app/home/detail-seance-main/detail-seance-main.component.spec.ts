import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeanceMainComponent } from './detail-seance-main.component';

describe('DetailSeanceMainComponent', () => {
  let component: DetailSeanceMainComponent;
  let fixture: ComponentFixture<DetailSeanceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSeanceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSeanceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
