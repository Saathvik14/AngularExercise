import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from './library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private baseURL= "http://localhost:8092/book/";
  constructor(private httpClient: HttpClient) { }

  getLibraryList(): Observable<Library[]>{
    return this.httpClient.get<Library[]>(`${this.baseURL}`+'listallbook');
  }

  addBook(book: Library): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'addbook',book);
  }

  getBookById(bookId: number): Observable<Library>{
    return this.httpClient.get<Library>(`${this.baseURL}`+`viewbyid/${bookId}`);
  }

  updateBook(bookId: number,book: Library) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+`update/${bookId}`, book);
  }

  deleteBook(bookId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+`delete/${bookId}`,{responseType:'text'});
  }
}
