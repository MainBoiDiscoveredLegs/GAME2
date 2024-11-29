var gameState = "StartingScreen";
var levelNo = '0';
var shooter = '0';
var rocketNo = '0';
var levelNoCOM = '0';

//Starting Screen
var monBdyIMG;
var monBdy;

var shopButton;
var levelsButton;
var howToPlayButton;
var backButton;

//audio
var bgmsc;
var click;
var drop;
var dropTF = "F1";
var inBox;
var money;
var winmsc;
var winmscTF = "F1";
var pickUp;

//levels screen
var earthIMG;
var earth;

var marsIMG;
var mars;
var rocketIMG;
var rocket;

var lvl1;
var lvl2;
var lvl3;

//shop
var rocketNo;
var shooter;
var sellBtn, rocketBtn, shooterBtn;
var showRKT, showGUN, showCAP, rktimg;

var shopCapCount = 0;

//level 1
var capSeller;
var sellerIMGR;
var sellerIMGL;

var monkey1;
var monkeyIMGR;
var monkeyIMGL;

var cap1, cap2, cap3;
var capIMGR;
var capIMGL;

var capCount = 0;
var moneyCount = 0;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7;
var door;

var lever1, lever2;
var lever1Click = "FALSE";

// level 2
var score = 0;
var astroidGroup;
var buletsGroup;
var rocketBody;
var state = "play";

var explosion;


function preload() {
    //audio
    click = loadSound('click.mp3');
    drop = loadSound('drop.mp3');
    inBox = loadSound('inBox.mp3');
    money = loadSound('money.mp3');
    winmsc = loadSound('WIN.mp3');
    pickUp = loadSound("footStep.mp3");
    explosion = loadSound("explostion.mp3");

    //starting screen
    monBdyIMG = loadImage("monkey_fullbody.png");

    //levels screen
    earthIMG = loadImage("earth.png");
    marsIMG = loadImage("mars.png");
    rocketIMG = loadImage("rocket.png");

    //level 1
    capIMGL = loadImage("hatL.png");
    capIMGR = loadImage("hatR.png");

    monkeyIMGL = loadImage("monkyHeadL.png");
    monkeyIMGR = loadImage("monkyHeadR.png");

    sellerIMGL = loadImage("sellerL.png");
    sellerIMGR = loadImage("sellerR.png");

    boxIMG = loadImage("box.png");

    //shop
    gunIMG = loadImage("shooter.png")
    rktimg = loadImage("showrkt.png")

    //level 2
    astroidIMG = loadImage("asteroid.png");
    bulletIMG = loadImage("bullet.png");

}

function setup() {
    canvas = createCanvas(1000, 500);
    background("#000000");
    fill("#fcfbfb");
    quad(1, 1, 999, 1, 999, 499, 1, 499);

    backButton = createButton("BACK");
    backButton.position(910, 581);
    backButton.hide();

    resetButton = createButton('RESTART LEVEL');
    resetButton.position(750, 581);
    resetButton.hide();

    //starting screen
    monBdy = createSprite(250, 250, 50, 50);
    monBdy.addImage("bdyIMG", monBdyIMG);
    monBdy.visible = false;


    shopButton = createButton("SHOP");
    shopButton.position(650, 250);
    shopButton.hide();
    levelsButton = createButton("LEVELS");
    levelsButton.position(650, 340);
    levelsButton.hide();
    howToPlayButton = createButton("HOW TO PLAY?");
    howToPlayButton.position(650, 430);
    howToPlayButton.hide();

    //levels screen
    earth = createSprite(210, 250, 50, 50);
    earth.addImage("earth", earthIMG);
    earth.scale = 0.8;
    earth.visible = false;

    mars = createSprite(790, 250, 50, 50);
    mars.addImage("mars", marsIMG);
    mars.scale = 0.8;
    mars.visible = false;

    lvl1 = createButton('LVL 1');
    lvl1.position(190, 430);
    lvl1.hide();

    lvl2 = createButton('LVL 2');
    lvl2.position(480, 370);
    lvl2.hide();

    lvl3 = createButton('LVL 3');
    lvl3.position(770, 430);
    lvl3.hide();

    rocket = createSprite(490, 250);
    rocket.addImage('rocket', rocketIMG);
    rocket.scale = 0.6;
    rocket.visible = false;

    //SHOP
    showRKT = createSprite(530, 300);
    showRKT.addImage("rocketimg", rktimg);
    showRKT.scale = 0.7;
    showRKT.visible = false;

    showCAP = createSprite(170, 330);
    showCAP.addImage("cap", capIMGR);
    showCAP.scale = 0.6;
    showCAP.visible = false;

    showGUN = createSprite(780, 300);
    showGUN.addImage("cap", gunIMG);
    showGUN.scale = 0.5;
    showGUN.visible = false;

    sellBtn = createButton("SELL");
    sellBtn.position(170, 450);
    sellBtn.hide();

    rocketBtn = createButton("BUY");
    rocketBtn.position(500, 450);
    rocketBtn.hide();

    shooterBtn = createButton("BUY");
    shooterBtn.position(750, 450);
    shooterBtn.hide();

    //level 1
    lever1 = createSprite(1000, 400);
    lever1.shapeColor = "#c85d8d";
    lever1.visible = false;


    lever2 = createSprite(1800, 400);
    lever2.shapeColor = "#c85d8d";
    lever2.visible = false;


    wall6 = createSprite(1500, 450, 20, 100);
    wall6.shapeColor = "black";
    wall6.visible = false;


    wall7 = createSprite(2000, 450, 20, 100);
    wall7.shapeColor = "black";
    wall7.visible = false;

    door = createSprite(2300, 400, 20, 800);
    door.shapeColor = "#c85d8d";
    door.visible = false;


    box = createSprite(150, 400);
    box.addImage("box", boxIMG);
    box.scale = 0.5;
    box.visible = false;

    capSeller = createSprite(400, 345);
    capSeller.addImage("seller", sellerIMGR);
    capSeller.scale = 0.5;
    capSeller.visible = false;

    monkey1 = createSprite(600, 350);
    monkey1.addImage("monkey", monkeyIMGR);
    monkey1.scale = 0.5;
    monkey1.visible = false;

    cap1 = createSprite(900, 280);
    cap1.addImage("cap", capIMGR);
    cap1.scale = 0.5;
    cap1.visible = false;

    cap2 = createSprite(1500, 430);
    cap2.addImage("cap", capIMGR);
    cap2.scale = 0.5;
    cap2.visible = false;

    cap3 = createSprite(2400, 420);
    cap3.addImage("cap", capIMGR);
    cap3.scale = 0.5;
    cap3.visible = false;

    wall1 = createSprite(0, 0, 7000);
    wall1.shapeColor = "black";
    wall1.visible = false;

    wall2 = createSprite(0, 510, 7000);
    wall2.shapeColor = "black";
    wall2.visible = false;

    wall3 = createSprite(20, 0, 0, 1000);
    wall3.shapeColor = "black";
    wall3.visible = false;

    wall4 = createSprite(150, 250, 150, 20);
    wall4.shapeColor = "black";
    wall4.visible = false;

    wall5 = createSprite(850, 300, 400, 20);
    wall5.shapeColor = "black";
    wall5.visible = false;

    //level 2

    rocketBody = createSprite(100, displayHeight / 2, 50, 50);
    rocketBody.addImage("recket", rocketIMG);
    rocketBody.scale = 1;
    rocketBody.visible = false;

    astroidGroup = new Group();
    buletsGroup = new Group();

}

function draw() {

    drawSprites();

    if (gameState === 'StartingScreen') {
        background("#000000");
        fill("#fcfbfb");
        quad(1, 1, 999, 1, 999, 499, 1, 499);
        drawSprites();
        monBdy.visible = true;
        backButton.hide();
        shopButton.show();
        howToPlayButton.show();
        levelsButton.show();

        textSize(50);
        fill("black");
        textFont('monospace')
        text("SPACE EXPEDITION", 450, 120);
        textSize(15);
        text("One small step for man, a giant leap for mankind", 470, 150);

        shopButton.mousePressed(function () {
            click.play();
            if (levelNoCOM != '0') {
                gameState = "SHOP";
            } else {
                alert("Earn Caps and complete LV 1 first to unlock the SHOP!");
            }
        });

        levelsButton.mousePressed(function () {
            click.play();
            gameState = "LEVELS";

        });

        howToPlayButton.mousePressed(function () {
            click.play();
            gameState = "H2P?";

        });

    } else {
        shopButton.hide();
        levelsButton.hide();
        howToPlayButton.hide();

    };


    if (gameState === 'H2P?') {
        background("#000000");
        fill("#fcfbfb");
        quad(1, 1, 999, 1, 999, 499, 1, 499);
        drawSprites();

        shopButton.hide();
        levelsButton.hide();
        howToPlayButton.hide();
        monBdy.visible = true;
        backButton.show();

        textSize(50);
        fill("black");
        textFont('monospace')
        text("HOW TO PLAY?", 490, 85);

        textSize(15);
        text("> You are the Cap Seller who wants to become an \n  astronaut! \n\n"
            + "> These pesky monkeys have stolen your caps, so\n  you have to get them back. \n\n"
            + "> It just so happens that the monkeys will follow \n  everything you do! \n\n"
            + "> Use the 'up, down, left, right' arrows to move. \n  Once you collect the hat, hold 'space bar' to drop \n  he hat in the box. \n\n"
            + "> Make the monkeys pick up the caps and drop them \n  off in their respective boxes. \n\n"
            + "> Earn money by selling your caps in the SHOP and \n  buy a shooter and rocket ship to advance to space!", 490, 130);

        backButton.mousePressed(function () {
            click.play();
            gameState = "StartingScreen";
        });
        backButton.position(910, 581);

    }

    if (gameState == 'SHOP') {
        background("#000000");
        fill("#fcfbfb");
        quad(1, 1, 999, 1, 999, 499, 1, 499);

        backButton.show();
        sellBtn.show();
        rocketBtn.show();
        shooterBtn.show();

        showCAP.visible = true;
        showGUN.visible = true;
        showRKT.visible = true;

        textSize(60);
        fill("black");
        textFont('monospace')
        text("SHOP", 500, 105);

        fill("#aace93");
        quad(75, 45, 300, 45, 300, 130, 75, 130);
        textSize(20);
        fill("black");
        text('MONEY : $' + moneyCount, 90, 80);
        text('CAPS : ' + shopCapCount, 100, 110);

        text('1 CAP = $300', 110, 190);
        text('$700', 500, 190);
        text('$200', 750, 190);

        fill("#c85d8d");
        stroke("#c85d8d");
        quad(75, 200, 300, 200, 300, 380, 75, 380);

        fill("#c85d8d");
        quad(375, 200, 900, 200, 900, 380, 375, 380);

        drawSprites();
        monBdy.visible = false;

        sellBtn.mousePressed(function () {
            if (shopCapCount >= 1) {
                money.play();
                shopCapCount = shopCapCount - 1;
                moneyCount = moneyCount + 300;
            }
        });
        rocketBtn.mousePressed(function () {
            if (moneyCount >= 700) {
                money.play();
                moneyCount = moneyCount - 700;
                rocketNo = "1";
            }
        });
        shooterBtn.mousePressed(function () {
            if (moneyCount >= 200) {
                money.play();
                moneyCount = moneyCount - 200;
                shooter = "1";
            }
        });




        backButton.mousePressed(function () {
            click.play();
            gameState = "StartingScreen";
        });
        backButton.position(910, 581);
    } else {

        sellBtn.hide();
        rocketBtn.hide();
        shooterBtn.hide();

        showCAP.visible = false;
        showGUN.visible = false;
        showRKT.visible = false;

    };

    if (gameState == 'LEVELS') {
        background("#000000");
        drawSprites();
        backButton.show();
        monBdy.visible = false;


        earth.visible = true;
        mars.visible = true;

        strokeWeight(0);
        textSize(60);
        fill("white");
        textFont('monospace')
        text("L E V E L S", 320, 100);

        if (levelNoCOM === '0') {
            lvl1.show();
            textSize(15)
            text("A group of Monkeys are caled a 'troop', \n'tribe' or a 'mission'.", 350, 430);
            lvl1.mousePressed(function () {
                click.play();
                gameState = 'LVL1';
            });
        }
        if (levelNoCOM === '1') {
            textSize(15)
            text("Some monkeys have a 'prehensile tail' which \nis like a second hand.", 320, 430);
            textSize(40);
            text("✔", 200, 430);
        }
        if (levelNoCOM === '2') {
            lvl3.show();
            textSize(40);
            text("✔", 200, 430);
            text("✔", 490, 340);
            textSize(15);
            text("Monkeys have large brains when \ncomparred to their body \nproportions; \nthis is why they're so intellegent.", 350, 400);
            lvl3.mousePressed(function () {
                click.play();
                gameState = 'LVL3';
            });
        }

        if (shooter === '1' && rocketNo === '1') {

            fill("white");
            stroke("white");
            strokeWeight(5);
            for (var i = 315; i < 380; i = i + 20) {
                line(i, 240, i + 10, 240);
            }
            if (levelNoCOM === '2') {
                for (var i = 610; i < 680; i = i + 20) {
                    line(i, 240, i + 10, 240);
                }
            }
            if (levelNoCOM == '1') {
                lvl2.show();
            }
            rocket.visible = true;
            lvl2.mousePressed(function () {
                click.play();
                gameState = 'LVL2';
            });
        }



        backButton.mousePressed(function () {
            click.play();
            gameState = "StartingScreen";
        });
        backButton.position(910, 581);

    } else {
        earth.visible = false;
        mars.visible = false;
        rocket.visible = false;

        lvl1.hide();
        lvl2.hide();
        lvl3.hide();


    };

    if (gameState == "LVL1") {
        background("#fcfbfb");

        textSize(15);
        textFont('monospace')
        fill("black");
        text("Stand here and drop \n ↓ ↓ the cap ↓ ↓", 80, 210);


        // fill("#fcfbfb");
        // quad(1, 1, 1000, 1, 1000, 499, 1, 499);
        backButton.show();
        drawSprites();
        text(capCount + "/3", 230, 445)


        wall1.visible = true;
        wall2.visible = true;
        wall3.visible = true;
        wall4.visible = true;
        wall5.visible = true;
        wall6.visible = true;
        wall7.visible = true;

        lever1.visible = true;
        lever2.visible = true;

        door.visible = true;
        box.visible = true;

        cap1.visible = true;
        cap2.visible = true;
        cap3.visible = true;

        resetButton.show();

        monkey1.visible = true;
        capSeller.visible = true;

        capSeller.collide(box);
        monkey1.collide(box);
        capSeller.collide(wall3);
        monkey1.collide(wall3);
        capSeller.collide(wall4);
        monkey1.collide(wall4);
        capSeller.collide(wall1);
        monkey1.collide(wall1);
        capSeller.collide(wall2);
        monkey1.collide(wall2);
        capSeller.collide(wall6);
        monkey1.collide(wall6);
        capSeller.collide(wall7);
        monkey1.collide(wall7);
        capSeller.collide(door);
        monkey1.collide(door);
        door.collide(wall2);
        
        capSeller.collide(lever2);
        monkey1.collide(lever2);

        monkey1.setCollider('rectangle', 10, 40, 250, 250);
        // monkey1.debug = true;
        // cap1.debug = true;
        cap1.setCollider('circle', 0, -70, 100);
        cap2.setCollider('circle', 0, -70, 100);
        cap3.setCollider('circle', 0, -70, 100);
        // capSeller.debug=true;
        capSeller.setCollider('rectangle', 0, 30, 300, 350);
        // box.debug = true;
        box.setCollider("rectangle", 0, 20, 350, 200)


        //gravity
        capSeller.velocityY = +5;
        monkey1.velocityY = +5;

        if (capSeller.x >= 510) {
            camera.position.x = capSeller.x;
        }
        camera.position.y = 260;


        if (keyDown(UP_ARROW)) {
            if (capSeller.y > 250) {
                capSeller.velocityY = -5;
            }
            monkey1.velocityY = -5;

        }
        if (keyDown(LEFT_ARROW)) {
            capSeller.x = capSeller.x - 5;
            monkey1.x = monkey1.x - 5;
            capSeller.addImage('seller', sellerIMGL);
            monkey1.addImage('monkey', monkeyIMGL);
            if (monkey1.isTouching(cap1)) {
                cap1.addImage('cap1', capIMGL);
            }
            if (monkey1.isTouching(cap2)) {
                cap2.addImage('cap2', capIMGL);
            }
            if (monkey1.isTouching(cap3)) {
                cap3.addImage('cap3', capIMGL);
            }
        }
        if (keyDown(RIGHT_ARROW)) {
            capSeller.x = capSeller.x + 5;
            monkey1.x = monkey1.x + 5;
            capSeller.addImage('seller', sellerIMGR);
            monkey1.addImage('monkey', monkeyIMGR);
            if (monkey1.isTouching(cap1)) {
                cap1.addImage('cap1', capIMGR);
            }
            if (monkey1.isTouching(cap2)) {
                cap2.addImage('cap2', capIMGR);
            }
            if (monkey1.isTouching(cap3)) {
                cap3.addImage('cap3', capIMGR);
            }
        }

        if(dropTF=="T1"){
            dropTF="F2";
            drop.play();
        }
        if(dropTF=="T2"){
            dropTF="F3";
            drop.play();
        }
        if(dropTF=="T3"){
            dropTF="F4";
            drop.play();
        }

        if (keyDown('SPACE') && monkey1.isTouching(cap1)) {
            cap1.velocityY = +10;
        } else if (monkey1.isTouching(cap1)) {
            if(dropTF == "F1"){
                dropTF = "T1"
            }
            cap1.y = monkey1.y;
            cap1.x = monkey1.x;
        }
        if (keyDown('SPACE') && monkey1.isTouching(cap2)) {
            cap2.velocityY = +10;
        } else if (monkey1.isTouching(cap2)) {
            if(dropTF == "F2"){
                dropTF = "T2"
            }
            cap2.y = monkey1.y;
            cap2.x = monkey1.x;
        }
        if (keyDown('SPACE') && monkey1.isTouching(cap3)) {
            cap3.velocityY = +10;
        } else if (monkey1.isTouching(cap3)) {
            if(dropTF == "F3"){
                dropTF = "T3"
            }
            cap3.y = monkey1.y;
            cap3.x = monkey1.x;
        }

        if (cap1.isTouching(box)) {
            inBox.play();
            capCount += 1;
            cap1.x = 3000;
            cap1.y = 500;
        }
        if (cap2.isTouching(box)) {
            inBox.play();
            capCount += 1;
            cap2.x = 3000;
            cap2.y = 500;
        }
        if (cap3.isTouching(box)) {
            inBox.play();
            capCount += 1;
            cap3.x = 3000;
            cap3.y = 500;
        }

        if (winmscTF === "T") {
            winmsc.play();
            winmscTF = "F2";
        }

        if (capCount === 3) {
            if(winmscTF==="F1"){
                winmscTF = "T"
            }
            noStroke();
            fill("#c85d8d8b");
            rect(0, 0, displayWidth, displayHeight);
            strokeWeight(0);
            textSize(70);
            fill("white");
            textFont('monospace')
            text("WELL DONE!", 300, 200);
            textSize(40);
            text("You have completed the first level!", 100, 250);
            resetButton.hide();
            backButton.position(500, 350);
            levelNoCOM = '1';
            shopCapCount = 3;

        }

        if (monkey1.isTouching(lever1)) {
            lever1Click = "TRUE";
        }

        if (monkey1.isTouching(lever2) || capSeller.isTouching(lever2)) {
            door.velocityY = -1;
        } else {
            door.velocityY = +20;
        }

        if (lever1Click === "FALSE") {
            capSeller.collide(wall5);
            monkey1.collide(wall5);
        } else {
            wall5.visible = false;
        }

        backButton.mousePressed(function () {
            click.play();
            gameState = "LEVELS";
            shopCapCount = capCount;
        });

        resetButton.mousePressed(function () {
            click.play();
            location.reload();
        });
    } else {

        wall1.visible = false;
        resetButton.hide();
        wall2.visible = false;
        wall3.visible = false;
        wall4.visible = false;
        wall5.visible = false;
        wall6.visible = false;
        wall7.visible = false;
        lever2.visible = false;
        door.visible = false;
        lever1.visible = false;
        box.visible = false;

        cap1.visible = false;
        cap2.visible = false;
        cap3.visible = false;

        monkey1.visible = false;
        capSeller.visible = false;

        camera.position.x = 500;
        camera.position.y = 250;


    };

    if (gameState == "LVL2") {

        background("black");
        backButton.hide();

        rocketBody.visible = true;

        if (state === "play") {
            rocketBody.y = World.mouseY
            if (keyDown("SPACE")) {
                createBullet();
            }

            if (World.frameCount % 50 == 0) {
                astroid();
            }
            if (buletsGroup.isTouching(astroidGroup)) {
                astroidGroup.destroyEach();
                score = score + 1;
                buletsGroup.destroyEach();
                explosion.play();
            }
            if (astroidGroup.isTouching(rocketBody)) {
                astroidGroup.destroyEach();
                buletsGroup.destroyEach();
                explosion.play();
                state = "end";
            }
            if (score >= 17) {
                astroidGroup.destroyEach();
                buletsGroup.destroyEach();
                state = "finish";
                if (winmscTF==="F2"){
                    winmscTF = "T2";
                }
            }
        }

        if (winmscTF==="T2"){
            winmsc.play();
            winmscTF = "F3";
        }

        if (state === "finish") {
            rocketBody.velocityX = 8;
            rocketBody.lifetime = 1000;
            rocketBody.y = 250;

            if (rocketBody.x > 1000) {
                levelNoCOM = '2';
                backButton.show();
                backButton.position(480,250);
            }
        }

        if (state === "end") {
            score = 0;
            if (keyDown(UP_ARROW)) {
                state = "play";
            }
        }

        drawSprites();
        fill("white");
        textSize(15);
        textFont('monospace')
        text("SCORE : " + score, 450, 50);
        if (state === "end") {
            text("retry? Click up arrow", 400, 80);
        }
        if (state === "finish") {
            fill("white");
            textSize(20);
            textFont('monospace')
            text("There have only been 18 successful missions to Mars...", 40, 450);


        }

        backButton.mousePressed(function () {
            click.play();
            gameState = "LEVELS";
        });

    } else {
        rocketBody.visible = false;
    };

    if (gameState == "LVL3") {
////////////////////////////////////////////////////
    };
}

function astroid() {
    var obstacle = createSprite(1100, Math.round(random(50, 370)), 10, 10);
    obstacle.addImage(astroidIMG);
    obstacle.velocityX = -Math.round(random(10,30))
    obstacle.lifetime = 250;
    obstacle.scale = random(0.1,0.6);


    astroidGroup.add(obstacle);
    return obstacle;

}

function createBullet() {
    var bulet = createSprite(100, 100, 60, 10);
    bulet.addImage(bulletIMG);
    bulet.x = 360;
    bulet.y = rocketBody.y;
    bulet.velocityX = 15;
    bulet.lifetime = 250;
    bulet.scale = 0.1;

    buletsGroup.add(bulet);
    return bulet;

}
