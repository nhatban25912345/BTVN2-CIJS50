class Person{
    name;
    age;
    sex;
    address;
    constructor(name,age,sex,address){
        this.name = name ;
        this.age = age;
        this.sex = sex ;
        this.address = address;
    }
    speak(){ 
        console.log(`Xin chào! Rất vui được gặp bạn !`);
    }
    introduce(){
        console.log(`Mình là một người bình thường .`);
    }
}

// Crush ----------------------------
class Crush extends Person {
    appearance;
    favorite;
    constructor(name,age,address,appearance,favorite){
        super(name,age,"female",address) ;
        this.appearance = appearance;
        this.favorite = favorite;
    }
    speak(){
        console.log('Chúng ta là bạn tốt 😆😆😆 !');
    }
    introduce(){
        console.log(`Chào bạn! Mình là mẫu người độc thân vui tính, rất vui được làm bạn với bạn!`);
    }
}

// EX-Love---------------------------------------------------
class Ex_Love extends Person {
    appearance;
    constructor(name,age,address,appearance){
        super(name,age,"female",address);
        this.appearance = appearance;
    }
    speak(){
        console.log('Chúng ta vẫn là bạn của nhau !');
    }
    introduce(){
        console.log(`
        Chào bạn! 
        Mình là mẫu người độc thân vui tính, rất vui được làm bạn với bạn!
        Mình đã từng có người yêu .`);
    }
}

// List-----------------------------------------------------------------------------------
class List {
    owner;
    persons = [ ];
    constructor(owner,persons){
        this.owner = owner;
        this. persons = persons;
    }


       showAll(){
           console.log(`
           Người sở hữu: ${owner};
           person 1;
           `);
       }
    
       addCrush(){
            let name = prompt("Input name your crush: ");
            let age = prompt("Input age your crush:");
            let address = prompt("Input address your crush:");
            let appearance = prompt("Input  appearance your crush:");
            let favorite = prompt("Input favorite your crush: ");
            let nameCrush= new Crush(name,age,address,appearance,favorite);
            this.persons.push(nameCrush);
            console.log(persons);
       }


}
let Violet = new List("Nhat");
Violet.addCrush("somebody");
console.log(Volet);
