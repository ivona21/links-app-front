import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LinksService } from "./links.service";
import { Link } from "./link.model";
import { Tag } from "./tag.model";
import { MatDialog } from "@angular/material";
import { AlertDialogComponent } from "../shared/dialogs/alertDialog/alert-dialog.component";
import { AlertDialogData } from "../shared/dialogs/alertDialog/alert-dialog-data.model";


@Component({
    selector: "app-links",
    templateUrl: "./links.component.html",
    styleUrls: ["./links.component.css"]
})
export class LinksComponent implements OnInit {
    linkForm: FormGroup
    link: Link = new Link("", []);
    suggestedTags: Tag[] = [];
    suggestedKeywords: string[];
    constructor( private alert: MatDialog, private linksService: LinksService) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.linkForm = new FormGroup({
            "link": new FormControl(null, Validators.required),
            "tags": new FormControl(null, Validators.required)
        })
    }

    suggestTags() {      
        this.link.OriginalUrl = this.linkForm.value.link;
        this.linksService.suggestTags(this.link).subscribe(
            (response) => {
                this.suggestedTags = response;
                if (this.suggestedTags.length < 1){
                    this.alert.open(AlertDialogComponent, {
                        width: "300px",
                        data: new AlertDialogData("No suggested tags yet", "")
                    });                     
                }               
            }, (error) => {    
                this.alert.open(AlertDialogComponent, {
                    width: "300px",
                    data: new AlertDialogData(error.error, "")
                });   
            }
        )
    }

    private createTags(tagsString: string): Tag[] {
        return tagsString.split(',').map(t => {
            return new Tag(t);
        })
    }

    onSubmit() {
        this.link.OriginalUrl = this.linkForm.value.link;
        this.link.Tags = this.createTags(this.linkForm.value.tags);
        this.linksService.saveLink(this.link).subscribe(
            (response) => {
                this.suggestedKeywords = <string[]>response.body;
                if (this.suggestedKeywords.length < 1){
                    this.alert.open(AlertDialogComponent, {
                        width: "300px",
                        data: new AlertDialogData("Link saved! There is no suggested keywords for this link", "")
                    });                     
                } else {
                    this.alert.open(AlertDialogComponent, {
                        width: "800px",
                        data: new AlertDialogData("Link saved!", "Suggested keywords: " + this.suggestedKeywords.toString())
                    });                         
                }                
                this.linkForm.reset();
                this.suggestedTags = [];
            }, (error) => {
                this.alert.open(AlertDialogComponent, {
                    width: "300px",
                    data: new AlertDialogData(error.error, "")
                });   
            }
        )
    }
}