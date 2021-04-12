// メッセージを受信してコンソールに表示する
self.addEventListener('message', (message) => {
    console.log(message.data);
});