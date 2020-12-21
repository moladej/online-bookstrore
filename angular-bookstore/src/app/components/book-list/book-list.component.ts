import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import {Book} from 'src/app/common/book'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector:'app-book-list',
  templateUrl:'./grid.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] | undefined ;
  currentCategoryId : number | undefined;
  constructor(private _bookService: BookService, 
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>
    {
      this.listBooks();
    })

  }
  listBooks(){

   const hasCategoryId: boolean  = this._activatedRoute.snapshot.paramMap.has('id');

   if(hasCategoryId)
   {
     this.currentCategoryId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    }
   else
   {
     this.currentCategoryId = 1;
   }
    this._bookService.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
      
    
        )
  }
}
