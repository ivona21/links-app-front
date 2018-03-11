import { Tag } from "./tag.model";

export class Link {
    public OriginalUrl: string;
    public Tags: Tag []

    constructor(url: string, tags: Tag []){
        this.OriginalUrl = url;
        this.Tags = tags;
    }
}