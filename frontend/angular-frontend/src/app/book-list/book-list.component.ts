import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Library} from '../library'
import { LibraryService } from '../library.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

books: Library[];

constructor(private libraryService: LibraryService,
  private router: Router){}
ngOnInit(): void {
  this.getBooks();

  }
  private getBooks(){
    this.libraryService.getLibraryList().subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

  updateBook(bookId: number){
    this.router.navigate(['updatebook',bookId]);
  }

  deleteBook(bookId: number){
    this.libraryService.deleteBook(bookId).subscribe(data=>{
      console.log(data);
      this.getBooks();
    })

  }
  bookDetails(bookId:number){
    this.router.navigate(['bookdetails',bookId]);
  }

  
 
}


