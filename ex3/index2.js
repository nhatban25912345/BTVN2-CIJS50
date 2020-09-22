const string = prompt("Nhap mang goc:");
const stringInput = prompt("Nhap mang can kiem tra:");

// const string = "hanh";
// const stringInput = "nhha";

const array = string.split("");
const arrayInput = stringInput.split("");

array.sort();
arrayInput.sort();

console.log(array);
console.log(arrayInput);

check = true;
for (let i = 0; i<array.length;i++) {
    if (array[i] !== arrayInput[i]) {
        check = false;
    }
}
console.log(check);