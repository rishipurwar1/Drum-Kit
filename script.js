const list = document.querySelectorAll('li');

const alphabets = [];
const keyData = {
    a: {
        sound: new Howl({
            src: ['sounds/clap.wav']
        }),
        value: list[0]
    },
    s: {
        sound: new Howl({
            src: ['sounds/hihat.wav']
        }),
        value: list[1]
    },
    d: {
        sound: new Howl({
            src: ['sounds/kick.wav']
        }),
        value: list[2]
    },
    f: {
        sound: new Howl({
            src: ['sounds/openhat.wav']
        }),
        value: list[3]
    },
    g: {
        sound: new Howl({
            src: ['sounds/boom.wav']
        }),
        value: list[4]
    },
    h: {
        sound: new Howl({
            src: ['sounds/ride.wav']
        }),
        value: list[5]
    },
    j: {
        sound: new Howl({
            src: ['sounds/snare.wav']
        }),
        value: list[6]
    },
    k: {
        sound: new Howl({
            src: ['sounds/tom.wav']
        }),
        value: list[7]
    },
    l: {
        sound: new Howl({
            src: ['sounds/tink.wav']
        }),
        value: list[8]
    }
}

document.addEventListener('keydown', event => {
    if(keyData[event.key.toLowerCase()]) {
        keyData[event.key.toLowerCase()].sound.play();

        list.forEach(item => {
            if(item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        keyData[event.key.toLowerCase()].value.classList.add('active')
    }
})

document.addEventListener('keyup', event => {
    if(keyData[event.key.toLowerCase()]) {
        keyData[event.key.toLowerCase()].value.classList.remove('active')
    }
})