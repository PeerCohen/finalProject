import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveTableRequestComponent } from './dialog-save-table-request.component';

describe('DialogSaveTableRequestComponent', () => {
  let component: DialogSaveTableRequestComponent;
  let fixture: ComponentFixture<DialogSaveTableRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaveTableRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSaveTableRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
