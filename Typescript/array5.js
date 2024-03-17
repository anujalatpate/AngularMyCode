var Marks = [11, 21, 51, 101, 111];
var i = 0;
console.log("Array travesal using for loop");
for (i = 0; i < Marks.length; i++) {
    console.log(Marks[i]);
}
console.log("Array travesal using While loop");
i = 0;
while (i < Marks.length) {
    console.log(Marks[i]);
    i++;
}
console.log("Array travesal using Do While loop");
i = 0;
do {
    console.log(Marks[i]);
    i++;
} while (i < Marks.length);
