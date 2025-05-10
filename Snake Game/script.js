//Define HTML elements
const board = document.getElementById("game-board");
const instructionsText=document.getElementById("instruction-text");
const logo=document.getElementById("logo");
const score=document.getElementById("score");
const highScoreText=document.getElementById("highScore");

//Define game variables
const gridSize = 20;
let snake=[{x: 10, y: 10}]; //Since we have a grid of 20x20, our snake will start from 10x10 position on the grid
let food = generateFood();
let highScore=0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay=200;
let gameStarted=false;

//Draw game map, snake, food
function draw(){
    board.innerHTML=''; //Every time we call the board, it's gonna reset
    drawSnake();
    drawFood();
    updateScore();
}

//Draw snake
function drawSnake(){
    if(gameStarted){
        snake.forEach((segment) =>{
            const snakeElement = createGameElement("div", "snake");
            setPosition(snakeElement, segment);
            board.appendChild(snakeElement);
        });
    }
}

//Create a snake or food cube/div
function createGameElement(tag, className){      //tag=div, className=snake
    const element = document.createElement(tag); //Here we are creating a div
    element.className = className;               //with the className of sname
    return element;
}

//Set the position of snake or food
function setPosition(element, position){
    element.style.gridColumn=position.x;
    element.style.gridRow=position.y;
}

//Draw food function
function drawFood(){
    if(gameStarted){
        const foodElement=createGameElement("div", "food");
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }   
}

//Generate food
function generateFood(){
    const x =Math.floor(Math.random()*gridSize)+1;
    const y =Math.floor(Math.random()*gridSize)+1;
    return{x, y};
}

//Moving the snake
function move(){
    const head = {...snake[0]}; //shallow copying snake from our game variables

    //In case of grid, the origin(0,0) is at left top-most position
    //So if you move down you'll increase y coordinate and vice-versa
    switch (direction) {
        case 'right':
            head.x++;  //if you press right you will increase x coordinate value
            break;
        case 'left':
            head.x--;  //if you press left you will decrease x coordinate value
            break;
        case 'up':
            head.y--;  //if you press up you will decrease y coordinate value
            break;
        case 'down':
            head.y++;  //if you press down you will increase y coordinate value
            break;
    }
    snake.unshift(head);
    // snake.pop(); // If we don't pop, then snake will grow automatically. We only want snake to grow when it hits the food
    if(head.x===food.x && head.y===food.y){
        food=generateFood();
        increaseSpeed();
        clearInterval(gameInterval); //Clear past interval
        gameInterval=setInterval(()=>{
            move();
            checkCollision();
            draw();
        }, gameSpeedDelay);
    }else{
        snake.pop();
    }
}

//Start game function
function startGame(){
    gameStarted=true; //Keep track of a running game
    instructionsText.style.display='none';
    logo.style.display='none';
    gameInterval=setInterval(()=>{
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}

//keypress event listener
function handleKeyPress(event){
    if(
        (!gameStarted && event.code==='Space') ||
        (!gameStarted && event.key===' ')
    
    ){
        startGame();
    } else{
        switch(event.key){
            case "ArrowUp":
                direction="up";
                break;
            case "ArrowDown":
                direction="down";
                break;
            case "ArrowLeft":
                direction="left";
                break;
            case "ArrowRight":
                direction="right";
                break;
        }
    }
}

document.addEventListener("keydown", handleKeyPress);

function increaseSpeed(){
    console.log(gameSpeedDelay);
    if(gameSpeedDelay>150){
        gameSpeedDelay-=5;
    } else if(gameSpeedDelay>100){
        gameSpeedDelay-=3;
    } else if(gameSpeedDelay>50){
        gameSpeedDelay-=2;
    } else if(gameSpeedDelay>25){
        gameSpeedDelay-=1;
    }
}

function checkCollision(){
    const head=snake[0];
    if(head.x<1 || head.x>gridSize || head.y<1 || head.y>gridSize){
        resetGame();
    }

    for(let i=1; i<snake.length; i++){
        if(head.x===snake[i].x && head.y===snake[i].y){
            resetGame();
        }
    }
}

function resetGame(){
    upadteHighScore();
    stopGame();
    snake=[{x:10, y:10}];
    food=generateFood();
    direction="right";
    gameSpeedDelay=200;
    updateScore();
}

function updateScore(){
    const currentScore=snake.length-1;
    score.textContent=currentScore.toString().padStart(3,'0'); //padstart keeps the 0 in front of two digit or one digit score i.e 002, 020, etc
}

function stopGame(){
    clearInterval(gameInterval);
    gameStarted=false;
    instructionsText.style.display='block';
    logo.style.display='block';
}

function upadteHighScore(){
    const currentScore=snake.length-1;
    if(currentScore>highScore){
        highScore=currentScore;
        highScoreText.textContent=highScore.toString().padStart(3, '0');
    }
    highScoreText.style.display="block";
}



