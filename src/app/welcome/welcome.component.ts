import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { tags } from "src/assets/tags/tags";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"]
})

export class WelcomeComponent {

  constructor() {}

  @ViewChild('audio') audio: ElementRef;

  audioPath = '../../assets/Hes_a_pirate.mp3';

  ngAfterViewInit(): void {
    this.audio.nativeElement.play();
  }

  get characterIllustration(): string {
    return tags.tag_welcome_img;
  }

  get characterName(): string {
    return tags.tag_name;
  }

}
