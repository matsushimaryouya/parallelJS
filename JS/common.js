/// OS名を取得
var OSName = 'Unknown';
if (navigator.userAgent.indexOf("Win")!=-1) OSName="Windows";
if (navigator.userAgent.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.userAgent.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.userAgent.indexOf("Linux")!=-1) OSName="Linux";
console.log('OS name : ', OSName);/// OS名を表示
const coreNum = navigator.hardwareConcurrency;//CPUコア数
console.log("core : " + coreNum);
console.log("memory : " + navigator.deviceMemory + "GB");//メモリー
document.getElementById("osName").textContent='OS name : ' + OSName;
document.getElementById("coreNum").textContent="core : " + coreNum;
document.getElementById("memoryName").textContent="memory : " + navigator.deviceMemory + "GB";

var startTime;

function WorkFive(){
    // fizzBuzz
    var fizzBuzz = 0;
    var fizz = 0;
    var buzz = 0;
    for (let i = 0; i < 100000000; i++) {
        if(i%15 == 0){
            fizzBuzz++;
        }else if(i%3 == 0){
            fizz++;
        }else if(i%5 == 0){
            buzz++;
        }
    }
    console.log("fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz);

    const endTime = new Date();
    const elapsedTime = (endTime - startTime)/1000;
    console.log("WorkFive : " +elapsedTime + "秒");
    document.getElementById("work5").textContent='処理5 : ' + elapsedTime + '秒'+" | fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz;
}
function WorkFour(){
    // fizzBuzz
    var fizzBuzz = 0;
    var fizz = 0;
    var buzz = 0;
    for (let i = 0; i < 100000000; i++) {
        if(i%15 == 0){
            fizzBuzz++;
        }else if(i%3 == 0){
            fizz++;
        }else if(i%5 == 0){
            buzz++;
        }
    }
    console.log("fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz);

    const endTime = new Date();
    const elapsedTime = (endTime - startTime)/1000;
    console.log("WorkFour : " +elapsedTime + "秒");
    document.getElementById("work4").textContent='処理4 : ' + elapsedTime + '秒'+" | fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz;
}
function WorkThree(){
    // fizzBuzz
    var fizzBuzz = 0;
    var fizz = 0;
    var buzz = 0;
    for (let i = 0; i < 100000000; i++) {
        if(i%15 == 0){
            fizzBuzz++;
        }else if(i%3 == 0){
            fizz++;
        }else if(i%5 == 0){
            buzz++;
        }
    }
    console.log("fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz);

    const endTime = new Date();
    const elapsedTime = (endTime - startTime)/1000;
    console.log("WorkThree : " +elapsedTime + "秒");
    document.getElementById("work3").textContent='処理3 : ' + elapsedTime + '秒'+" | fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz;
}
function WorkTwo(){
    // fizzBuzz
    var fizzBuzz = 0;
    var fizz = 0;
    var buzz = 0;
    for (let i = 0; i < 100000000; i++) {
        if(i%15 == 0){
            fizzBuzz++;
        }else if(i%3 == 0){
            fizz++;
        }else if(i%5 == 0){
            buzz++;
        }
    }
    console.log("fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz);

    const endTime = new Date();
    const elapsedTime = (endTime - startTime)/1000;
    console.log("WorkTwo : " +elapsedTime + "秒");
    document.getElementById("work2").textContent='処理2 : ' + elapsedTime + '秒'+" | fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz;
}
function WorkOne(){
    var fizzBuzz = 0;
    var fizz = 0;
    var buzz = 0;
    // fizzBuzz
    for (let i = 0; i < 100000000; i++) {
        if(i%15 == 0){
            fizzBuzz++;
        }else if(i%3 == 0){
            fizz++;
        }else if(i%5 == 0){
            buzz++;
        }
    }
    console.log("fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz);

    const endTime = new Date();
    const elapsedTime = (endTime - startTime)/1000;
    console.log("WorkOne : " + elapsedTime + "秒");
    document.getElementById("work1").textContent='処理1 : ' + elapsedTime + '秒'+" | fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz;
}

function sequential(){
    startTime = new Date();
    WorkOne();
    WorkTwo();
    WorkThree();
    WorkFour();
    WorkFive();
}

function parallel(){
    // Workerを作成する
    const worker1 = new Worker('https://matsushimaryouya.github.io/parallelJS/JS/worker1.js');
    const worker2 = new Worker('https://matsushimaryouya.github.io/parallelJS/JS/worker2.js');
    const worker3 = new Worker('https://matsushimaryouya.github.io/parallelJS/JS/worker3.js');
    const worker4 = new Worker('https://matsushimaryouya.github.io/parallelJS/JS/worker4.js');
    const worker5 = new Worker('https://matsushimaryouya.github.io/parallelJS/JS/worker5.js');
    
    // メッセージを送信する
    worker1.postMessage(startTime);
    worker2.postMessage(startTime);
    worker3.postMessage(startTime);
    worker4.postMessage(startTime);
    worker5.postMessage(startTime);
}