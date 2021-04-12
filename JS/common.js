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

const startTime = new Date();
var fizzBuzz = 0;
var fizz = 0;
var buzz = 0;
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
}

WorkOne();
WorkTwo();

// Workerを作成する
const worker = new Worker('./worker.js');

// メッセージを送信する
worker.postMessage('こんにちは！');
