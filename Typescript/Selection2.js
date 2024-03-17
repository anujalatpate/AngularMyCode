function CheckEven(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var Value = 11;
var Result;
Result = CheckEven(Value);
if (Result == true) {
    console.log("It is even number");
}
else {
    console.log("It is odd number");
}
