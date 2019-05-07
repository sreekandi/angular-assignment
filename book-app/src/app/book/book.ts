
export class Author{
    firstname:string;
    lastName:string

}


export class Book{
    bookId:number;
    imageUrl:string;
    title:string;
    authors:Author;
    category:string;
    publisher:string;
    noOfPages:number;
    rating:number;
    edition:number;
    price:number;
    releaseDate:Date;

     

}