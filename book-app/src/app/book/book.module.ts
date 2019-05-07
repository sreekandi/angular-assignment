import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookListComponent } from './book-list.component';
import { BookDetailsComponents } from './book-details.component';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routers';
import{HttpClientModule}from '@angular/common/http'
import { BookService } from './book.service';



@NgModule({
    declarations:[BookListComponent,BookDetailsComponents],
    imports:[BrowserModule,RouterModule.forChild(bookRoutes),HttpClientModule],
    exports:[BookListComponent,BookDetailsComponents,RouterModule],
    providers:[BookService]
})
export class BookModule {


}