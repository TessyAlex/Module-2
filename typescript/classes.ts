class Employee1{
   private fname:string;
   private mname?: string;
   private lname: string;

   constructor(string:fname,string:mname,string:lname){
      this.fname=fname;
      this.mname=mname;
      this.lname=lname;
   }

   getMname():string{
      return this.mname;
   } let e1=new Employee1("a","b","c");
   console.log(e1.getMname());
   let e1=

}

class Employee{
//Always make the instance variable as private.
private empno: number;
private ename: string;
private sal: number;
private attendance: any;

}
constructor(empno: number, ename: string,sal:number,attendance:any){
   this.empno=empno;
   this.ename=ename;
   this.sal=sal;
   this.attendence=attendance; 
}
 public int getEmpno():number{
    return this.empno;
 }
 public int getEname():string{
    return this.ename;
 }
 public int getSal():number{
    return this.sal;
 }
 public int getAttendance():number{
    return this.attendance;
 }
print():void{
    console.log(this.empno,this.ename,this.sal,this.attendance)
}

    var emp = new Employee();
    var emp1 = new Employee();
    emp1.empno=102;
    var emp2 = new Employee();
    emp2.empno=103;
    let emp= new Employee(1,'abc',3000,20);
    let emp1= new Employee(2,'def',2000,30);
    let emp2= new Employee(3,'ghi',1000,40);
    emp.print();
    emp1.print();
    emp2.print();
}

var emparray:Employee[]=[emp, emp1, emp2];
emparray.forEach(element => {
   console.log(emparray);
});