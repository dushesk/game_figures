
const count_items = [20, 8, 28];
const count_tasks = 10;
const time_wait = 10;

//for 1 level
const quest_color = {
    blue: 'синие',
    orange: 'оранжевые',
    green: 'зеленые',
    red: 'красные',
    pink: 'розовые',
    white: 'белые',
    yellow: 'желтые',
    purple: 'фиолетовые'
}

//figures (diamond, hexagon, square, circle, waves, star, triangle, cross)
const colors = ["blue", "orange", "green", "red", "pink", "yellow", "purple"]
const shapes = ["diamond", "hexagon", "square", "arrow", "star", "cross", "triangle", "pentagon"];
const shapesBoard = {
    diamond: {
        quest: "бриллиант",
        w: "750 230 150 200",
        svg: "871.674,279.535 824.65,279.535 777.626,279.535 756.394,305.757 824.65,397.056 892.906,305.757  "
    },
    hexagon: {
        quest: "шестиугольники",
        w: "520 270 150 150",
        svg: "659.112,372.424 659.112,304.168 600,270.039 540.888,304.168 540.888,372.424 600,406.552"
    },
    square: {
        quest: "ромбы",
        w: "750 450 150 200",
        svg: "824.65,458.371 762.979,531.056 824.65,603.742 886.321,531.056"
    },
    arrow: {
        quest: "стрелки",
        w: "530 470 150 120",
        svg: "659.724,471.332 597.8,487.924 610.52,500.645 540.276,570.889 560.167,590.78    630.411,520.536 643.131,533.256"
    },
    star: {
        quest: "звезды",
        w: "70 450 150 150",
        svg: "150.7,466.141 171.792,508.878 218.956,515.732 184.828,548.998 192.885,595.971    150.7,573.794 108.515,595.971 116.572,548.998 82.444,515.732 129.608,508.878"
    },
    cross: {
        quest: "кресты",
        w: "70 260 170 170",
        svg: "218.956,321.471 167.525,321.471 167.525,270.039 133.875,270.039 133.875,321.471 82.444,321.471 82.444,355.12 133.875,355.12 133.875,406.552 167.525,406.552 167.525,355.12 218.956,355.12"
    },
    triangle: {
        quest: "треугольники",
        w: "300 80 150 150",
        svg: "375.35,86.424 307.094,204.647 443.606,204.647"
    },
    pentagon: {
        quest: "пятиугольники",
        w: "300 270 150 160",
        svg: "375.35,273.38 307.094,322.971 333.165,403.211 417.535,403.211 443.606,322.971"
    }
}; 

const blobs = [`<svg class="blob" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
<path fill="rgba(166, 167, 237, 0.86)" d="M393.5,273Q389,306,369,334Q349,362,331.5,414Q314,466,267.5,445Q221,424,194,395.5Q167,367,144,346.5Q121,326,83,304Q45,282,72,246Q99,210,93.5,170Q88,130,109,90Q130,50,175,48.5Q220,47,254.5,68.5Q289,90,340,81Q391,72,381.5,126.5Q372,181,385,210.5Q398,240,393.5,273Z" />
</svg>`,
`<svg class="blob" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
<path fill="rgba(166, 167, 237, 0.86)" d="M398.5,267Q406,294,412.5,332Q419,370,372,363.5Q325,357,316.5,403Q308,449,274,433Q240,417,204,439Q168,461,141,437Q114,413,85.5,393Q57,373,55,337Q53,301,61.5,270.5Q70,240,49.5,205.5Q29,171,47.5,142Q66,113,105,110Q144,107,158,68.5Q172,30,206,61Q240,92,271,70Q302,48,316,82.5Q330,117,351.5,130.5Q373,144,391,164.5Q409,185,400,212.5Q391,240,398.5,267Z" />
</svg>`,
`<svg class="blob" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
<path fill="rgba(166, 167, 237, 0.86)" d="M434,281Q464,322,430.5,346.5Q397,371,374,402Q351,433,309.5,416Q268,399,235.5,424Q203,449,185.5,407Q168,365,138,358Q108,351,90.5,326Q73,301,37.5,270.5Q2,240,42,211Q82,182,99,159Q116,136,133,110.5Q150,85,180.5,80Q211,75,242.5,60Q274,45,314.5,43Q355,41,365.5,83.5Q376,126,391,152.5Q406,179,405,209.5Q404,240,434,281Z" />
</svg>`,
`<svg class="blob" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
<path fill="rgba(166, 167, 237, 0.86)" d="M418,263.5Q377,287,370.5,311.5Q364,336,360,377Q356,418,322,424Q288,430,255.5,440Q223,450,198.5,420.5Q174,391,134,395Q94,399,78,368Q62,337,64.5,303Q67,269,52,237.5Q37,206,54,177.5Q71,149,93,126.5Q115,104,139.5,85Q164,66,192.5,36Q221,6,257.5,16.5Q294,27,326,43.5Q358,60,357.5,104.5Q357,149,401,159.5Q445,170,452,205Q459,240,418,263.5Z" />
</svg>`,
`<svg class="blob" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
<path fill="rgba(166, 167, 237, 0.86)" d="M450,275.5Q460,311,429,333Q398,355,363,358Q328,361,310.5,381.5Q293,402,266.5,425Q240,448,209,440Q178,432,159.5,404.5Q141,377,109.5,367.5Q78,358,63.5,330Q49,302,26.5,271Q4,240,15,205Q26,170,38.5,136.5Q51,103,100.5,109.5Q150,116,160.5,71.5Q171,27,205.5,26.5Q240,26,269.5,43Q299,60,313.5,89.5Q328,119,344.5,135.5Q361,152,409,160.5Q457,169,448.5,204.5Q440,240,450,275.5Z" />
</svg>`
];

let currentTask = 0;
let countAnsw = 0;

let userScore = 0;
let level = localStorage.getItem("last_level");
let task_tracking = document.querySelector('.task_tracking').children;

// добавление паузы
document.querySelector('.header_button').insertAdjacentHTML('beforebegin',
    `<button class="header_button pause" onclick="pause()" type="button"><img src="styles/icons/pause.svg" alt="svg"></button>`
)

// добавление индикаторов
document.querySelector('.task_tracking').innerHTML = '<div class="task_indicator"></div>'.repeat(count_tasks);

if (level == 2){
    generate_cvetango();
    document.querySelector('.title_quest').style = 'padding: 40px 0 20px 0; display: flex; justify-content: center; align-items: center;';
    
    showRules(2);
}
else {
    generate_task();
    showRules(level);
}

function showRules(level){
    document.querySelector('.timer_slider').style.animationPlayState = 'paused';
    if (level == 2){
        document.querySelector('body').insertAdjacentHTML('beforeend',
        `<div class="wrap_res">
            <h1 class="title">Правило</h1>
            <h style="font-size: 14pt">Выбрать все фигуры, не пересекающиеся ни цветом, ни формой с данными фигурами</h style="font-size: 14pt">
            <form><button class="button" type="button">поехали</button></form>
        </div>
        <div class="mask"></div>`);
    }
    else{
        document.querySelector('body').insertAdjacentHTML('beforeend',
        `<div class="wrap_res">
            <h1 class="title">Правило</h1>
            <h style="font-size: 14pt">Выбрать все фигуры с заданным свойством (формой или цветом)</h style="font-size: 14pt">
            <form><button class="button" type="button">поехали</button></form>
        </div>
        <div class="mask"></div>`);
    }
    document.querySelector('.button').addEventListener('click', ()=>{
        document.querySelector('.timer_slider').style.animationPlayState = 'running';
        document.querySelector('.mask').remove();
        document.querySelector('.wrap_res').remove();
    });
    let res = document.querySelector('.wrap_res');
}

//генерация задания
function generate_task(){
    let items = document.querySelector('.items');
    let title = document.querySelector('.title_quest');
    countAnsw = 0;
    let task_figures = [];

    //выбор случайных фигур
    for (let i = 0; i < count_items[level-1]; i++){
        task_figures.push({shape: shapes[random(shapes.length)] , color: colors[random(colors.length)] });
    }

    // выбор цвета или формы для задания
    let property;
    let is_shape_property = random(2); //0 - color, 1 - shape
    if (is_shape_property){
        property = shapes[random(shapes.length)]
        title.innerHTML = `Выберите все <span style="font-weight: bold; margin: 0 5px">${shapesBoard[property].quest}</span>`;
        task_figures[random(task_figures.length)].shape = property; //для гарантии правильных ответов
    } else{
        property = colors[random(colors.length)]
        title.innerHTML = `Выберите все <span style="color: ${property}; margin: 0 5px">${quest_color[property]}</span> фигуры`;
        task_figures[random(task_figures.length)].color = property;
    }

    items.replaceChildren(); // очищение от фигур

    // вставка фигур
    items.insertAdjacentHTML('beforeend', 
        `${setFigures(task_figures)}`
    );

    isStartTimer(true); // запуск таймера

    let arrAnswers = Array.from(document.querySelectorAll(`.${property}`));
    //обработка нажатия на ответы
    document.querySelectorAll('.figure').forEach( item =>{
        item.addEventListener('click', ()=>{ processing(item, arrAnswers, generate_task) })
    });

    // 3 уровень
    if (level ==  3){
        let timeAni = Math.random()+1;
        document.querySelectorAll('.svg_fig').forEach( elem => {
            if (random(2)){ elem.style = `animation: spinning ${timeAni}s linear infinite` }
            else { elem.style = `animation: wobble ${timeAni}s linear infinite` }
        });

        document.querySelectorAll('.figure').forEach( elem => { elem.style = 'width: clamp(15px, 6%, 150px)'});
        setInterval(()=>{
            document.querySelector('header').insertAdjacentHTML('beforebegin', 
            `<div class="wrap_blob" style="left: calc(${random(90)}% + 10px); top: calc(${random(70)}% + 20px)"> ${blobs[random(blobs.length)]} </div>`);
            setTimeout(()=>{
                document.querySelector('body').firstChild.remove();
            }, 800);
        }, 600);
    }
}

function generate_cvetango(){
    let items = document.querySelector('.items');
    let title = document.querySelector('.title_quest');
    countAnsw = 0;
    let task_figures = [];

    // выбор цветов и форм для задания
    let properties = [];
    properties.push(shapes[random(shapes.length)]);
    properties.push(shapes[random(shapes.length)]);
    properties.push(colors[random(colors.length)]);
    properties.push(colors[random(colors.length)]);

    // заполнение массива фигур
    task_figures.push({shape: properties[0], color: properties[3]});
    task_figures.push({shape: properties[1], color: properties[2]});
    task_figures.push({shape: properties[0], color: properties[2]});
    task_figures.push({shape: properties[1], color: properties[3]});
    let availableShapes = shapes.filter(x => !properties.includes(x));
    let availableColors = colors.filter(x => !properties.includes(x));
    task_figures.push({shape: availableShapes[random(availableShapes.length)], color: availableColors[random(availableColors.length)]});
    for (let i = 0; i < count_items[level-1]-5; i++){
        task_figures.push({shape: shapes[random(shapes.length)], color: colors[random(colors.length)]});
    }

    title.innerHTML = `Дано:
        <div class="minifigure ${properties[0]} ${properties[2]}">${wrapFigure(task_figures[2].shape)}</div>
        <div class="minifigure ${properties[1]} ${properties[3]}">${wrapFigure(task_figures[3].shape)}</div>`;
    
    items.replaceChildren(); // очищение от фигур
    
    task_figures = shuffle(task_figures); // перемешивание массива

    // вставка фигур
    items.insertAdjacentHTML('beforeend', 
        `${setFigures(task_figures)}`
    );
    // изменение размеров
    document.querySelectorAll('.figure').forEach( elem => { elem.style = 'width: clamp(15px, 11%, 200px)' });

    isStartTimer(true); // запуск таймера

    // нахождение правильных ответов
    console.log(task_figures);
    let arrWrongFigures = Array.from(document.querySelectorAll(`.${properties[0]}`));
    arrWrongFigures = arrWrongFigures.concat(Array.from(document.querySelectorAll(`.${properties[1]}`)));
    arrWrongFigures = arrWrongFigures.concat(Array.from(document.querySelectorAll(`.${properties[2]}`)));
    arrWrongFigures = arrWrongFigures.concat(Array.from(document.querySelectorAll(`.${properties[3]}`)));
    // убираем дубликаты
    let arrAnswers = Array.from(document.querySelectorAll('.figure')).filter(x => !arrWrongFigures.includes(x));

    //обработка нажатия на ответы
    document.querySelectorAll('.figure').forEach( item =>{
        item.addEventListener('click', ()=>{ processing(item, arrAnswers,generate_cvetango) })
    });
}

function isStartTimer(a){
    if (a){ // добавление таймера
        document.querySelector('.timer').insertAdjacentHTML('afterbegin', `<div class="timer_slider"></div>`);
        let timer_slider = document.querySelector('.timer_slider');
        timer_slider.style = `animation: ${time_wait}s timer forwards linear`;
        timer_slider.addEventListener('animationend', ()=>{
            task_tracking[currentTask++].style = 'background: brown';
            if (currentTask == count_tasks){
                showRes();
            }
            else{
                isStartTimer(false);
                generate_task();
            }
        });
    }
    else{ // удаление таймера
        document.querySelector('.timer').replaceChildren();
    }
}

function showRes(){
    document.querySelector('.pause').remove();
    document.querySelector('.timer_slider').remove();
    document.querySelector('body').insertAdjacentHTML('beforeend',
    `<div class="wrap_res">
        <h class="title">Ваш результат: ${userScore}</h>
        <form><button class="button" type="submit">ещё раз</button></form>
    </div>
    <div class="mask"></div>`);
    
    // сохранение результата
    let name = localStorage.getItem("last_player");
    let userScores = localStorage.getItem(name).split(',');
    userScores[level-1] = userScore > (userScores[level-1]||0)? userScore: userScores[level-1];
    if (isNaN(userScores[level-1])){
        userScores[level-1] = userScore;
    }
    userScores[level-1] = +userScores[level-1];
    localStorage.setItem(name, userScores);
    let res = document.querySelector('.wrap_res');
}

function processing(item, arrAnswers, generate){
    if (arrAnswers.includes(item)){
        countAnsw += 1; // количество выбранных правильных ответов
        // item.removeEventListener('click', ()=>{ processing(item, arrAnswers) });
        item.style = 'background: rgb(90 169 90)';
        
        if (countAnsw == arrAnswers.length){
            userScore += 1;
            task_tracking[currentTask++].style = 'background: green';
            if (currentTask == count_tasks){
                showRes();
            }
            else{
                isStartTimer(false);
                generate();
            }
        }
    }
    else{
        task_tracking[currentTask++].style = 'background: brown';
        if (currentTask == count_tasks){
            showRes();
        }
        else{
            isStartTimer(false);
            generate();
        }
    }
}

function setFigures(figures){
    return figures.map(
        (item) => `<div class="figure ${item.shape} ${item.color}"> ${wrapFigure(item.shape)} </div>`
    ).join('');
}

function wrapFigure(shape){
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            version="1.1" x="0px" y="0px" viewBox="${shapesBoard[shape].w}" xml:space="preserve">
        <g class="g_figure"><polygon points="${shapesBoard[shape].svg}"></polygon></g></svg>`;
}

function random(n){
    return Math.floor(Math.random()*n);
}

function shuffle(items){
    let randOrderArr = items;
    let rnd;
    let len = items.length-1;
    for (let i = 0; i < len; i++){
        rnd = Math.floor(Math.random() * (len - i + 1) + i);
        let tempItem = randOrderArr[i];
        randOrderArr[i] = randOrderArr[rnd];
        randOrderArr[rnd] = tempItem;
    }
    return randOrderArr;
}