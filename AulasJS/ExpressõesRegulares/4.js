const IP = /[0-9]{3}\.[0-9]{1}\.[0-9]{1}\.[0-9]{1}/;

console.log(IP.test("127.0.0.1"));
console.log(IP.test("127.06.058.100"));