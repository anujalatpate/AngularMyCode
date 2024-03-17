
class Demo
{
    // Characteristics
    No1: number;
    No2: number;
    
    // Parametrised constructor
    constructor(A: number, B: number)
    {
        console.log("Inside Parametrised constructor");
        this.No1 = A;
        this.No2 = B;
        
    }

    // Behaviour
    Display()
    {
        
        console.log("Inside Display function of demo class");
        
    }
}

var obj1 = new Demo(10,11);
var obj2 = new Demo(20,21);


