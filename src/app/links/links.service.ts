import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Link } from "./link.model";
import { Tag } from "./tag.model";

@Injectable()
export class LinksService {
    constructor(private http : HttpClient) { }
    url : string = "http://localhost:5000/api/"

    
    suggestTags(link : Link){       
        const token = localStorage.getItem("token");       

        return this.http.post<Tag[]>(this.url + "tags/suggested", link, {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json', 'Authorization' : "Bearer " + token }),
            observe: "body"
        });
    }

    saveLink(link: Link){      
        const token = localStorage.getItem("token");      

        return this.http.post(this.url + "links", link, {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json', 'Authorization' : "Bearer " + token }),
            observe: "response"
        });
    }
}