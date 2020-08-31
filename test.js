let myB = [0, 1, 2];
let myQ = [0, 1, 2];
console.log('myQ');
console.log(myQ);
console.log('index de "0" em myQ é: '+myQ.indexOf(myB[0]));

let removed = myQ.splice(myQ.indexOf(myB[0]), 1);
console.log('myQ');
console.log(myQ);
console.log('elemento removido: '+removed);
Array.prototype.push.apply(myQ, removed);
console.log('myQ');
console.log(myQ);
console.log('index de "0" em myQ agora é: '+myQ.indexOf(myB[0]));
console.log('myB');
console.log(myB);
for (let i = 0; i <= myB.length-1; i++) {
    console.log(myQ.indexOf(myB[i]));
    myB[i] = myQ.indexOf(myB[i]);
}
console.log('myB');
console.log(myB);
console.log('myQ');
console.log(myQ);
