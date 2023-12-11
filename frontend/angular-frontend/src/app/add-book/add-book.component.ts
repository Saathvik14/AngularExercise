import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  book: Library=new Library();
  constructor(private libraryService: LibraryService,
    private router: Router){}

  ngOnInit(): void {
    
  }
saveBook(){
  this.libraryService.addBook(this.book).subscribe( data=> {
    console.log(data);
    this.goToBookList();
  },
  error=> console.log(error));
  
}

goToBookList(){
  this.router.navigate(['/books']);
}

  onSubmit(){
    console.log(this.book);
    this.saveBook();

  }

}
