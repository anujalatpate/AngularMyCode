function Demo() {
    var Languages = ["C", "java", "python", "Typescript"];
    return Languages;
}
var Arr;
Arr = Demo();
console.log("Eleemnts of array are: ");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
