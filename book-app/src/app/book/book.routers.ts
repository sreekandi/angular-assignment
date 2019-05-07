import { Routes } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { BookDetailsComponents } from './book-details.component';
export const bookRoutes: Routes = [
    { path: "books/:category", component: BookListComponent },
    { path: "book/:bookId", component: BookDetailsComponents }
];

