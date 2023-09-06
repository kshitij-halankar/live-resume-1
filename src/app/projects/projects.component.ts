import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IProject } from "./projects-interfaces";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AbstractSwipeSection } from "../core/shared/abstract.swipe.section";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss", "./projects.component.responsivity.scss"]
})
export class ProjectsComponent extends AbstractSwipeSection implements OnInit {

  currentPage: number = 1;
  resultsPerPage: number;
  projects: IProject[] = [];
  
  faChevronLeft: IconDefinition;
  faChevronRight: IconDefinition;

  constructor(private dataService: DataService) {
    super();
   }

  ngOnInit(): void {
    this.faChevronLeft = faChevronLeft;
    this.faChevronRight = faChevronRight;
    
    // Fetch the Projects from the Data Service
    this.dataService.getProjects()
      .subscribe((projects: IProject[]) => {
        this.projects = projects;
      });
  }

  public onClickPrevious(): void {
    this.currentPage--;
  }

  public onClickNext() {
    this.currentPage++;
  }

  public updateNavigation(resultsPerPage: number) {
    this.resultsPerPage = resultsPerPage;
  }

  public disablePreviousNavigation(): boolean {
    return this.currentPage === 1;
  }

  public disableNextNavigation(): boolean {
    return this.currentPage === Math.ceil(this.projects?.length / this.resultsPerPage);
  } 
}