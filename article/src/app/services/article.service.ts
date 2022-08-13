import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';
const baseUrl="http://localhost:5050/api/articles";
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http:HttpClient) { }
  getArticles():Observable<Article[]>
  {
    return this.http.get<Article[]>(`${baseUrl}`);
  }
  postArticles(data:any):Observable<any>
  {
    return this.http.post(`${baseUrl}`,data);
  }
  deleteArticles():Observable<any>
  {
    return this.http.delete(`${baseUrl}`);
  }
  getArticle(id:String):Observable<Article>
  {
    return this.http.get<Article>(`${baseUrl}/${id}`);
  }
  deleteArticle(id:String):Observable<any>
  {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  patchArticle(id:String,data:any):Observable<any>
  {
    return this.http.patch(`${baseUrl}/${id}`,data);
  }


}
