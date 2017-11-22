Object creation patterns in JavaScript: 
    JavaScript has no formal support for classes 
    4 different patterns to create 
        1. Constructor Pattern 
        2. Factory Pattern 
        3. Prototype Pattern 
        4. Dynamic Prototype Pattern 


-> Problem with constructor pattern is, it gets all the function properties and functions in all objects, which is redundant 
-> Problem with prototype pattern is first we need to create an empty object and we cannot create object in single line 
-> Prototype saves memory as it attaches properties and functions to shared space, where constructor allocates memory everytime function has called 



Creating a Singleton: 
Closures :

