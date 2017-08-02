/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppDemoFormSkuComponent } from './app-demo-form-sku.component';

describe('AppDemoFormSkuComponent', () => {
  let component: AppDemoFormSkuComponent;
  let fixture: ComponentFixture<AppDemoFormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDemoFormSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDemoFormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
