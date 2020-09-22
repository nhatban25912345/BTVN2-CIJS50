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
let k = 0;
let i=0;
let j=0;
let s ;

while (i < array.length) {
    s = true;
    // let check;
    while(j < arrayInput.length){
        let l = arrayInput.length;
        
        if ( array[i] == arrayInput[j] ){
            if (k==0) {
                arrayInput.splice(j,1);
                array.splice(i,1);
                // s = false;
                k++;
            }
        } else {
            j++;
        }

        
        // check
        console.log(`       for1 j${j} => ${array}`);
        console.log(`       for1 j${j} => ${arrayInput}`);
    }
    // if (s == false) {
    //     array.splice(i,1);
    // } else {
    //     i++;
    //     // check
    //     console.log(`for2 i${i} => ${array}`);
    //     console.log(`for2 i${i} => ${arrayInput}`);
    // }
    k=0;
}

// check
console.log(array);
console.log(arrayInput);

if (array.length == 0 ) {
    console.log(true);
} else {
    console.log(false);
}

