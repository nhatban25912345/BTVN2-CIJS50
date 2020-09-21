const string = "hanh";
const stringInput = "nhha";

const array = string.split("");
const arrayInput = stringInput.split("");

// for (let i=0; i < array.length;i++ ) {
//     let checkValue = true;
//     for (let j=0; j < arrayInput.length;j++){
//         if  (array[i] == arrayInput[j]){
//             checkValue = false;
//             arrayInput.splice(j,1);
//             array.splice(i,1);a
//             // i--;
//             // j--;
//         } else{
//                j++;
//         }
//     }
//     i++;

// }

let i=0;
let j=0;
let s ;
while (i < array.length) {
    s = true;
    let check;
    while(j < arrayInput.length){
        let l = arrayInput.length;
        if ( array[i] == arrayInput[j] ){
        arrayInput.splice(j,1);
        // array.splice(i,1);
        s = false;
        // break;

        
        if (arrayInput.length == l){
            check = true;
        } else {
            check = false;
        }
        if  (check == false){
            j = j +1;
        }


        } else {
            j++;
        }
        
        console.log(`       for1 j${j} => ${array}`);
        console.log(`       for1 j${j} => ${arrayInput}`);
    }
    if (s == false) {
        array.splice(i,1);
    } else {
        i++;
        console.log(`for2 i${i} => ${array}`);
        console.log(`for2 i${i} => ${arrayInput}`);
    }
}

console.log(array);
console.log(arrayInput);

if (array.length == 0 ) {
    console.log(true);
} else {
    console.log(false);
}