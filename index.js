console.log("Hello Git and Github");
const age = 25;
console.log("git init");
console.log("git add <file_Name>");
console.log("(git add .) add all the files in the staging area");
console.log("git diff");
console.log("git blame <file_Name>");
console.log("git log");
console.log("git log --oneline");
console.log("git show <commit id>");
console.log("git reset --hard <commit id>");
console.log("git push -f");
console.log("git push");
const { add, sub, mul, div, isAbove, sayName } = require("./math");
add(10, 20);
sub(10, 20);
mul(10, 20);
div(10, 20);
sayName("John");
isAbove(20);
isAbove(10);
console.log("push code on the github successfully");
const { featureA } = require("./A");
featureA();
