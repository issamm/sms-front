import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeanceMiddleWithVideoComponent } from './detail-seance-middle-with-video.component';

describe('DetailSeanceMiddleWithVideoComponent', () => {
  let component: DetailSeanceMiddleWithVideoComponent;
  let fixture: ComponentFixture<DetailSeanceMiddleWithVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSeanceMiddleWithVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSeanceMiddleWithVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
