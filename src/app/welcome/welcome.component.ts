import { Component, OnInit } from "@angular/core";
import { environment } from '../../environments/environment';
import { tags } from "src/assets/tags/tags";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"]
})

export class WelcomeComponent {

  constructor() {}

  get characterIllustration(): string {
    return tags.tag_welcome_img;
  }

  get characterName(): string {
    return tags.tag_name;
  }

}
