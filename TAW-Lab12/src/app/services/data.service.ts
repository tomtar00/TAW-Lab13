import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url: string = 'http://localhost:3000'//'https://taw-posts.herokuapp.com';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url + '/api/posts');
    }

    getById(id: string) {
        return this.http.get(this.url + '/api/posts/' + id);
    }

    post(body: any) {
        return this.http.post(this.url + '/api/posts', body)
    }

}
