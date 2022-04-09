import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

    public postData = {
        image: '',
        text: ''
    };

    constructor(private service: DataService) {
    }

    ngOnInit(): void {
    }

    addPost() {
        this.service.post(this.postData).subscribe(response => {
            console.log('post has been sent')
        });
    }

}
