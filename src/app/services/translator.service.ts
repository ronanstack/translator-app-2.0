import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TranslateData } from '../models/translate.model';
import { Observable } from 'rxjs';
// import * as deepl from 'deepl-node';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  // translator = new deepl.Translator(environment.key)
  key = environment.key;
  url = environment.url;

  constructor(private http: HttpClient) { }

  // Connect frontend to API
  translateText(text: string, source: string, target: string): Observable<TranslateData> {
    return this.http.get<TranslateData>(this.url + "?auth_key=" + this.key + "&text=" + text + "&source_lang=" + source + "&target_lang=" + target)
  }
}
