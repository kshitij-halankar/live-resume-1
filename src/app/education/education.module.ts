import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { TranslatePipeModule } from "src/pipes/translate/translate.pipe.module";
import { EducationComponent } from "./education.component";
import { EducationTimelineComponent } from "./education-timeline/education-timeline.component";

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, CoreModule, TranslatePipeModule ],
    declarations: [ EducationComponent, EducationTimelineComponent ],
    exports: [ EducationComponent ]
})

export class EducationModule { }