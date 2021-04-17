// メッセージを受信してコンソールに表示する
self.addEventListener('message', (message) => {
    console.log(message.data);
    var startTime = message.data;

function Work1(){
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
    console.log("Work1 : " + elapsedTime + "秒");
    // document.getElementById("work1").textContent='処理1 : ' + elapsedTime + '秒'+" | fizzBuzz : " + fizzBuzz + " fizz : " + fizz + " buzz : " + buzz;
}

Work1();

});