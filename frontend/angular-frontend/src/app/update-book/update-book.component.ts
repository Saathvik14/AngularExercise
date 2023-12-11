import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{

  bookId: number;
  book: Library=new Library();

  constructor(private libraryService: LibraryService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
this.bookId=this.route.snapshot.params['bookId'];
    this.libraryService.getBookById(this.bookId).subscribe(data => {
      this.book=data;
    },error=> console.log(error));
  }

  onSubmit(){
   this.libraryService.updateBook(this.bookId, this.book).subscribe(data=>{
    this.goToBookList();
   },
   error=>console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }
}
