import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent  implements OnInit{
  bookId: number;
  book: Library
  constructor(private route: ActivatedRoute,
    private libraryService: LibraryService){}

  ngOnInit(): void {
    this.bookId=this.route.snapshot.params['bookId'];
    this.book=new Library();
    this.libraryService.getBookById(this.bookId).subscribe(data=>{
      this.book=data;
    })

  }

}
