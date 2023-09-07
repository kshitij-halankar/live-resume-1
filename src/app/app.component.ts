import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { tags } from "src/assets/tags/tags";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(tags.tag_title);

    this.metaTagService.addTags([
      { name: "keywords", content: tags.tag_share_text },
      { name: "robots", content: "index, follow" },
      { name: "author", content: tags.tag_name },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2023-09-12", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: tags.tag_share_text }
    );
  }
}
