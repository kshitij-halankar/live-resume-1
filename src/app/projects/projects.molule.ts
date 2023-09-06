import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectsComponent } from "./projects.component";
import { ProjectsCarouselComponent } from "./projects-carousel/projects-carousel.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { TranslatePipeModule } from "src/pipes/translate/translate.pipe.module";

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, CoreModule, BrowserAnimationsModule, TranslatePipeModule ],
    declarations: [ ProjectsComponent, ProjectsCarouselComponent ],
    exports: [ ProjectsComponent ]
})

export class ProjectsModule { }