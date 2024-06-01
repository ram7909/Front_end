class Books {
    constructor(bookNumber,bookName,author,publisher,price,numberOfCopy){
        this.bookNumber = bookNumber;
        this.bookName = bookName;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.numberOfCopy = numberOfCopy;
        this.issue = 0;
    }
    issueBook = ()=>{
        if(this.issue < this.numberOfCopy){
            this.issue++;
            console.log("Book Issued");
        }
        else{
            console.log("Book Not Available");
        }
    }
    return = ()=>{
        if(this.issue > 0){
            this.issue--;
            console.log("Book Returned");
        }
        else{
            console.log("Book Not Issue Yet");
        }
    }
    display = ()=>{
        console.log("Book Number :",this.bookNumber);
        console.log("Book Name :",this.bookName);
        console.log("Author Name :",this.author);
        console.log("Publisher :",this.publisher);
        console.log("Price :",this.price);
        console.log("Number of Copy :",this.numberOfCopy);
        console.log("Issued :",this.issue);
    }
}
let book = new Books(10,"Ramayan","C. Rajagopalchari","Bhartiya Vidhya Bhavan","500rs",5)
book.issueBook();
book.display();
book.return();

