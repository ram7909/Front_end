class Batsman {
    constructor(fname,lname,runs,four,six){
        this.fname = fname;
        this.lname = lname;
        this.runs = runs;
        this.four = four;
        this.six = six;
        this.update = 0;
    }
    updateRun=()=>{
        this.update = this.runs+(this.four*4)+(this.six*6);
    }
    batsmanInfo = ()=>{
        console.log("First Name :",this.fname);
        console.log("Last Name :",this.lname);
        console.log("Runs :",this.runs);
        console.log("Six :",this.six);
        console.log("Four :",this.four);
        console.log("Total Runs :",this.update);
    }
}
let batsman = new Batsman("Virat","Kohli",420,10,6)
batsman.updateRun();
batsman.batsmanInfo();