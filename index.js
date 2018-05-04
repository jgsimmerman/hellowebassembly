const mod = import('./hello_world');
let hw;
mod.then(wasm => {
    hw = wasm;
    let btn = document.getElementById('say-hello');
    if (!btn) return console.error('No button found');
    btn.addEventListener('click', sayHello);
});

function sayHello() {
    let input = document.getElementById('your-name');
    if (!input || input.value == '') {
        updateMessage(hw.generate_greeting());
    } else {
        updateMessage(hw.generate_custom_greeting(input.value));
    }
}

function updateMessage(msg) {
    let div = document.getElementById('message-container');
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(msg))
    div.appendChild(h1);
}
