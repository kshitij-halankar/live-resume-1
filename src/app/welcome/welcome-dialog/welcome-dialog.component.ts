import { Component, OnInit, Input } from "@angular/core";
import { tags } from "src/assets/tags/tags";

@Component({
    selector: "app-welcome-dialog",
    templateUrl: "./welcome-dialog.component.html",
    styleUrls: [ "./welcome-dialog.css", "./welcome-dialog.responsivity.css" ]
})

export class WelcomeDialogComponent {

    public dialog_phrases = [ tags.tag_dialog_phrase2, tags.tag_dialog_phrase3, tags.tag_dialog_phrase4 ];
    constructor() {}

}
