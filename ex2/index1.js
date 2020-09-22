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
           Người sở hữu: ${yourName}---------------------
           ${this.persons};
           `);
       }
    
       addCrushEx(){
            let check1 = true;

            while (check1){
                let InputCrushEx = prompt("Do you want add Crush or Ex-Lover(cr/ex) ?");
                    if (InputCrushEx == "cr") {
                        let name = prompt("Input name your crush: ");
                        let age = prompt("Input age your crush:");
                        let address = prompt("Input address your crush:");
                        let appearance = prompt("Input  appearance your crush:");
                        let favorite = prompt("Input favorite your crush: ");
                        let nameCrush= new Crush(name,age,address,appearance,favorite);
                        this.persons.push(nameCrush);
                        console.log(persons);
                    } else if(InputCrushEx == "ex"){
                        let name = prompt("Input name your crush: ");
                        let age = prompt("Input age your crush:");
                        let address = prompt("Input address your crush:");
                        let appearance = prompt("Input  appearance your crush:");
                        let favorite = prompt("Input favorite your crush: ");
                        let nameEx= new Crush(name,age,address,appearance,favorite);
                        this.persons.push(nameEx);
                        console.log(persons);
                    } else {};
                    let inputContinue = prompt("Do you want continue(yes/no)?");
                    if (inputContinue == "yes" ){
                        check1 = true;
                    } else if (inputContinue == "no"){
                        check1 = false;
                    }
            }
       }
}

let yourName = prompt("Input your name:");
check2=true;
let persons = [];
let list = new List(yourName,persons);

while(check2) {
    let question = prompt(`
    1. Input Crush or Ex-lover
    2. Show all List
    3. End programe
    `)
    if (question == 1){
        list.addCrushEx();
    }   else if (question == 2){
        list.showAll();
    } else {
        check2 = false;
    }
}