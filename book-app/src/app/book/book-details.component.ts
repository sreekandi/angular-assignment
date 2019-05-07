import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "book-details",
    templateUrl: "./book-details.component.html"
})
export class BookDetailsComponents implements OnInit{

    book:Book;
    constructor(private bookService: BookService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
       this.route.paramMap.subscribe((map) => {
           let bookId = +map.get("bookId");
         
        this.bookService.findBookById(bookId).subscribe((data)=>{
            this.book = data;
        });
       });
    }
    // book = 
    //     {
    //         "bookId": 103,
    //  "imageUrl": "assets/images/angular_2_cookbook.jpeg",
    //  "title": "Angular 2 Cookbook",
    //  "authors": [
    //        {"firstName": "Matt", "lastName": "Frisbie"}
    //   ],
    //   "category": "programming",
    //   "publisher": "Packt",
    //   "noOfPages": 464, 
    //   "rating": 3.0,
    //   "edition": 1,
    //   "price": 958,
    //   "releaseDate": new Date(2017, 12, 25)
    // 

    }