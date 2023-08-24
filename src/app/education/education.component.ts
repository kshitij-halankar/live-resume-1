import { Component, OnInit, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { DataService } from "../core/data.service";
import { SorterService } from "../core/sorter.service";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { AbstractSwipeSection } from "../core/shared/abstract.swipe.section";
import { IEducation } from "./education-interfaces";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss", "education-component.responsivity.scss"]
})
export class EducationComponent extends AbstractSwipeSection implements OnInit {
  
  SELECTED_CLASS: string = "selected";
  LEAVE_RIGHT_CLASS: string = "leave-right";
  ENTER_RIGHT_CLASS: string = "enter-right";
  LEAVE_LEFT_CLASS: string = "leave-left";
  ENTER_LEFT_CLASS: string = "enter-left";
  TRANSITION_TIME: number = 400;

  education: IEducation[];
  educationOrdered: IEducation[] = [];
  currentField: number;
  backgroundUrl: string;

  previousYear: string;
  currentYear: string;
  nextYear: string;

  @ViewChild("orderedList") orderedList: ElementRef;

  constructor(
    private dataService: DataService,
    private sortService: SorterService,
    private renderer: Renderer2,
    private library: FaIconLibrary
  ) {
    super();
    library.addIconPacks(fas, fab);
  }

  ngOnInit(): void {

    // Fetch the Education from the Data Service
    this.dataService.getEducation()
        .subscribe((education: IEducation[]) => {
          this.currentField = education.length;
          this.education = education;

          this.educationOrdered = [...education];
          this.educationOrdered.sort(this.sortService.sort("field", "desc"));       
          this.backgroundUrl = this.retrieveBackgroundUrl();
          this.updateMobileNavigationView();
          this.preloadBounderyImages(education.map(xp => xp.backgroundUrl));
        });
  }

  public disablePreviousNavigation(): boolean {
    return this.currentField === 1;
  }

  public disableNextNavigation(): boolean {
    return this.currentField === this.educationOrdered?.length;
  } 

  // Preloads the boundaries images related to the current position in order to avoid the "blinking" of the background while navigating.
  private preloadBounderyImages(images: string[]) {
    images.forEach(function (image, i) {
      const preloadImages = new Array();
      preloadImages[i] = new Image();
      preloadImages[i].src = image;
    });
  }

  private createListSelector(position: number): string {
    return `li[id="${position}"]`;
  } 

  onClickPrevious(targetPos?: number): void {
    const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentField));
    this.renderer.removeClass(currElem, this.SELECTED_CLASS);
    this.renderer.addClass(currElem, this.LEAVE_RIGHT_CLASS);

    setTimeout(() => {
      this.renderer.removeClass(currElem, this.LEAVE_RIGHT_CLASS);
    }, this.TRANSITION_TIME);
    
    // Subtracts one to the current position in order to move backwards in the timeline.
    this.currentField = (targetPos ? +targetPos : this.currentField - 1);
    this.backgroundUrl = this.retrieveBackgroundUrl();
    
    const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentField));
    this.renderer.addClass(targetElem, this.SELECTED_CLASS);
    this.renderer.addClass(targetElem, this.ENTER_LEFT_CLASS);

    setTimeout(() => {
      this.renderer.removeClass(targetElem, this.ENTER_LEFT_CLASS);
    }, this.TRANSITION_TIME);

    this.updateMobileNavigationView();
  }

  onClickNext(targetPos?: number): void {
    const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentField));
    this.renderer.removeClass(currElem, this.SELECTED_CLASS);
    this.renderer.addClass(currElem, this.LEAVE_LEFT_CLASS);

    setTimeout(() => {
      this.renderer.removeClass(currElem, this.LEAVE_LEFT_CLASS);
    }, this.TRANSITION_TIME);
    
    // Sums one to the current position in order to move further in the timeline.
    this.currentField = (targetPos ? +targetPos : this.currentField + 1);
    this.backgroundUrl = this.retrieveBackgroundUrl();

    const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentField));
    this.renderer.addClass(targetElem, this.SELECTED_CLASS);
    this.renderer.addClass(targetElem, this.ENTER_RIGHT_CLASS);

    setTimeout(() => {
      this.renderer.removeClass(targetElem, this.ENTER_RIGHT_CLASS);
    }, this.TRANSITION_TIME);
    
    this.updateMobileNavigationView();
  }

  updateNavigation(targetPos: number) {
    // in case of == nothing to do here
    if(targetPos > this.currentField) {
      this.onClickNext(targetPos);
    } else if (targetPos < this.currentField) {
      this.onClickPrevious(targetPos);
    }
  }

  private retrieveBackgroundUrl(): string {
    return this.education[this.currentField - 1].backgroundUrl;
  }

  private updateMobileNavigationView() {
    this.previousYear = 
      this.education[this.currentField - 2]?.startAt || this.education[this.currentField - 1].startAt;
    this.currentYear = 
      this.education[this.currentField - 1].startAt;
    this.nextYear = 
      this.education[this.currentField]?.startAt || this.education[this.currentField - 1].startAt;
  }
}
