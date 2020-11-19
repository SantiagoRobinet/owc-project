import { ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('Home Component', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ HomeComponent ]
        }).compileComponents();
    })


    beforeEach(() => {
        fixture =  TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('should render a custom button with "label" innerText', () => {
        expect(de.query(By.css('owc-button')).nativeElement.buttonElement.innerText).toBe('label');
    })
  
    it('should render a custom button with background color rgb(0, 204, 153)', () => {
        expect(de.query(By.css('owc-button')).nativeElement.buttonElement.style.background).toBe('rgb(0, 204, 153)');
    })
    
    it('should render a custom button with 1px solid border', () => {
        expect(de.query(By.css('owc-button')).nativeElement.buttonElement.style.border).toBe('1px solid rgb(0, 204, 153)');
    })
    
})