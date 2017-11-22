/* Factory Pattern */
var empFactory = function(name, id){
    var temp = {};
    temp.id = id;
    temp.name = name; 
    temp.showEmp = function(){
        console.log(this.name+ " " + this.id);
    };
   // this.temp = temp;
    //this = temp;
     return temp;
};


var emp1 = new empFactory('Test', 1);
var emp2 = new empFactory('Test1', 2);

emp1.showEmp();
emp2.showEmp();

/*Constructor Pattern*/

var empConstructor = function (name, id){
    this.name = name;
    this.id= id;
    this.showEmp = function(){
        console.log(this.name +" "+ this.id);
    }
}

var Emp3 = new empConstructor("Test3", 3);
Emp3.showEmp();

/* ProtoType Pattern */

var empPrototype = function(){

};

empPrototype.prototype.name ="Default";
empPrototype.prototype.id = 0;
empPrototype.prototype.showEmp = function(){
    console.log(this.name + " "+ this.id);
}

var emp4 = new empPrototype();
emp4.name ="Test4";
emp4.id=4; 
emp4.showEmp();

console.log('name' in emp4);
console.log(emp4.hasOwnProperty('name'));
//console.dir(empPrototype);

/* Dynamic Prototype Pattern */
var empDynamicProto = function(name, id){
    this.name = name;
    this.id = id; 

    if(typeof this.showEmp !== 'function'){
        empDynamicProto.prototype.showEmp = function(){
            console.log(this.name +" "+ this.id);
        }
    }
}

var emp5 = new empDynamicProto("Test5", 5);
console.log('name' in emp4);
console.log(emp4.hasOwnProperty('name'));