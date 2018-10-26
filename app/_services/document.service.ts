import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Document } from '../_models/index';

@Injectable()
export class DocumentService {
    constructor(private http: HttpClient) { }

    /* getAll() {
        return this.http.get<Document[]>(appConfig.apiUrl + '/documents');
    }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/documents/' + _id);
    } */

    create(doc: Document) {
        return this.http.post(appConfig.apiUrl + '/documents/upload', doc);
    }

    /* update(doc: Document) {
        return this.http.put(appConfig.apiUrl + '/documents/' + doc._id, doc);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/documents/' + _id);
    } */
}