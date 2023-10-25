function open_card() {
    let items = document.querySelectorAll(`.item`);
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        item.classList.remove("item_closed");
    }
}

function hide() {
    rules.classList.add("d-none");

}

function open_rules() {
    counter = 0;
    counterNode.innerHTML = `Счётчик: ` + counter;
    rules.classList.remove("d-none");
}

function start() {
    let btn__start = document.querySelector(`#btn-start_game`);
    btn__start.classList.add("d-none");
    arr.sort(() => Math.random() - 0.5);

    for (let i = 0; i < arr.length; i++) {
        container.innerHTML += arr[i];
    }

    container.addEventListener(`click`, function(evt){
        let game = document.querySelector(`.gameover`);
        // let winsNode = document.querySelector(`.wins`);
        // let losesNode = document.querySelector(`.loses`);
        let node = evt.target;
        if (node.classList.contains(`item_closed`) && !(node.classList.contains(`item_bomb`))){
            counter++;
            counterNode.innerHTML = `Счётчик: ${counter}`;
        }
        node.classList.remove(`item_closed`);
        if (node.classList.contains(`item_bomb`)) {
            game.innerHTML = `Вы проиграли!`;
            game.style.color = `#E3170A`;
            btn__start.classList.remove("d-none");
            // loses++;
            // losesNode.innerHTML = `Поражений: ${loses}`;
            hide()
            open_card()
        }
        if (counter == 12 && !(node.classList.contains(`item_bomb`))) {
            game.innerHTML = `Вы выиграли!`;
            game.style.color = `#0CCA4A`;
            btn__start.classList.remove("d-none");
            // wins++;
            // winsNode.innerHTML = `Побед: ${wins}`;
            hide()
            open_card()
    
        }
    });
}

let container = document.querySelector(`.container`);
let arr = [`<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, 
`<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, 
`<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, 
`<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, `<div class="item item_closed"></div>`, `<div class="item item_closed item_bomb"></div>`, `<div class="item item_closed item_bomb"></div>`];

let counter = 0;
// let wins = 0;
// let loses = 0;
let counterNode = document.querySelector(`.counter`);
let rule = document.querySelector(`.rule`);
let btn_start = document.querySelector(`#btnNode_start`);
let btn_save = document.querySelector(`#btn-save`);
let minesweeper = document.querySelector(`.minesweeper`);
let avator = document.querySelector(`.avator`);
let rules = document.querySelector(`.rules`);
let h1_text = document.querySelector(`.h1-text`);

let nickname = document.querySelector(`#nickname`);
let earings_1 = document.querySelector(`#earings`);
let glasses_1 = document.querySelector(`#glasses`);
let hat_1 = document.querySelector(`#hat`);
let ears = document.querySelector(`#ears`);
let hair_1 = document.querySelector(`#hair`);
let tshirt_1 = document.querySelector(`#tshirt-color_1`);
let frame_1 = document.querySelector(`#frame-1`);
let btn_rule = document.querySelector(`#btn-rule`);
let btn_content = document.querySelector(`#btn-content`);
let btn_create = document.querySelector(`#btn-create`);
let title = document.querySelector(`.title`);
let rules_div = document.querySelector(`.rules-div`);
let btn_back = document.querySelector(`#btn_back`);
let btn_back2 = document.querySelector(`#btn_back2`);
let btn_back3 = document.querySelector(`#btn_back3`);


btn_back3.addEventListener(`click`, function() {
    minesweeper.classList.add(`d-none`);
    avator.classList.remove(`d-none`);
});

btn_back2.addEventListener(`click`, function() {
    title.classList.remove(`d-none`);
    avator.classList.add(`d-none`);
});

btn_back.addEventListener(`click`, function() {
    title.classList.remove(`d-none`);
    rules_div.classList.add(`d-none`);
});

btn_create.addEventListener(`click`, function() {
    title.classList.add(`d-none`);
    avator.classList.remove(`d-none`);
});

btn_rule.addEventListener(`click`, function() {
    title.classList.add(`d-none`);
    rules_div.classList.remove(`d-none`);
});

btn_save.addEventListener(`click`, function() {
    minesweeper.classList.remove("d-none");
    avator.classList.add("d-none");
    h1_text.classList.add("d-none");
});

btn_start.addEventListener(`click`, function() {
    container.innerHTML = `<h1 class="gameover"><b class="danger">Dangerous</b> field</h1>`;
    counter = 0;
    loses = 0;
    wins = 0;
    start()
    open_rules()
});


// Создание аватара
let usernameNode_1 = document.querySelector(`#username`);
let username_container = document.querySelector(`.username-container`);
usernameNode_1.addEventListener(`input`, function(evt) {
    username_container.innerHTML = evt.target.value;
    nickname.innerHTML = evt.target.value;
});

let frame_pickerNode = document.querySelector(`#frame-picker`);
let frame = document.querySelector(`.frame`);
frame_pickerNode.addEventListener(`input`, function(evt) {
    frame.style.backgroundColor = evt.target.value;
    frame_1.style.backgroundColor = evt.target.value;
});

let tshirt_picker = document.querySelector(`#tshirt-picker`);
let tshirt_color = document.querySelector(`.tshirt-color`);
tshirt_picker.addEventListener(`input`, function(evt) {
    tshirt_color.style.fill = evt.target.value;
    tshirt_1.style.fill = evt.target.value;
});

let frame_select = document.querySelector(`#frame-select`);
frame_select.addEventListener(`input`, function(evt) {
    frame.classList = `frame frame-${evt.target.value}`;
    frame_1.classList = `frame frame-${evt.target.value}`;
});

let hair_range = document.querySelector(`#hair-range`);
let hair = document.querySelector(`.hair`);
hair_range.addEventListener(`input`, function(evt) {
    hair.src = `assets/hair-${evt.target.value}.svg`;
    hair_1.src = `assets/hair-${evt.target.value}.svg`;
});

let hat_check = document.querySelector(`#hat-check`)
let hat_range = document.querySelector(`#hat-range`);
hat = document.querySelector(`.hat`);
hat_check.addEventListener(`input`, function(evt) {
    if (evt.target.checked) { 
        hat_range.disabled = false;
        hat.classList.remove(`hidden`);
        hat_1.classList.remove(`hidden`);
    } else {
        hat_range.disabled = true;
        hat.classList.add(`hidden`);
        hat_1.classList.add(`hidden`);
    }
});

hat_range.addEventListener(`input`, function(evt){
    hat.src = `assets/hat-${evt.target.value}.svg`;
    hat_1.src = `assets/hat-${evt.target.value}.svg`;
});

let glasses_check = document.querySelector(`#glasses-check`);
let glasses_range = document.querySelector(`#glasses-range`);
let glasses = document.querySelector(`.glasses`);
glasses_check.addEventListener(`input`, function(evt){
    if (evt.target.checked) {
        glasses_range.disabled = false;
        glasses.classList.remove(`hidden`);
        glasses_1.classList.remove(`hidden`);
    } else {
        glasses_range.disabled = true;
        glasses.classList.add(`hidden`);
        glasses_1.classList.add(`hidden`);
    }
});

glasses_range.addEventListener(`input`, function(evt){
    glasses.src = `assets/glasses-${evt.target.value}.svg`;
    glasses_1.src = `assets/glasses-${evt.target.value}.svg`;
});

earings_check = document.querySelector(`#earings-check`);
let earings = document.querySelector(`.earings`);
let earings_range = document.querySelector(`#earings-range`);
earings_check.addEventListener(`input`, function(evt){
    if (evt.target.checked) {
        earings_range.disabled = false;
        earings.classList.remove(`hidden`);
        earings_1.classList.remove(`hidden`);
    } else {
        earings_range.disabled = true;
        earings.classList.add(`hidden`);
        earings_1.classList.add(`hidden`);
    }
});

earings_range = document.querySelector(`#earings-range`)
earings_range.addEventListener(`input`, function(evt){
    earings.src = `assets/earings-${evt.target.value}.svg`;
    earings_1.src = `assets/earings-${evt.target.value}.svg`;
});
