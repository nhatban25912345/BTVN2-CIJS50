const string = "hanh";
const stringInput = "hahn";

const array = string.split("");
const arrayInput = stringInput.split("");

for (let i=0; i < array.length;i++ ) {
    checkValue = true;
    for (let j=0; j < arrayInput.length;j++){
        if  (array[i] == arrayInput[j]){
            checkValue = false;
            
        }
    }
}