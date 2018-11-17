function Image(src) {
    this.src = src;
    this.size = "20vh";
}

//SET IMAGE FILES AS VARS SO THEY ARE EASILY SEEN IN ARRAY
//COULD HAVE JUST PUT IMAGE FILES DIRECTLY IN ARRAY BUT YOLO
var aliens = new Image('./images/aliens.jpg');
var doge = new Image('./images/doge.jpg');
var ermahgerd = new Image('./images/ermahgerd.jpg');
var grumpyCat = new Image('./images/grumpyCat.jpg');
var ndt = new Image('./images/ndt.jpg');
var notSureIf = new Image('./images/notSureIf.jpg');
var philoso = new Image('./images/philoso.jpg');
var scumbagSteve = new Image('./images/scumbagSteve.jpg');
var success = new Image('./images/success.jpg');
var trollFace = new Image('./images/trollFace.jpg');
var wat = new Image('./images/wat.jpg');
var xzibit = new Image('./images/xzibit.jpg');

var bbq = new Image('./images/2018/bbq.jpg');
var crowder = new Image('./images/2018/crowder.jpg');
var distractedBoyfriend = new Image('./images/2018/distractedBoyfriend.jpg');
var fellowKids = new Image('./images/2018/fellowKids.jpg')
var gru = new Image('./images/2018/gru.jpg');
var illDie = new Image('./images/2018/illDie.png');
var mocking = new Image('./images/2018/mocking.jpg');
var seagull = new Image('./images/2018/seagull.jpg');
var slapsRoof = new Image('./images/2018/slapsRoof.jpg');
var steamedHams = new Image('./images/2018/steamedHams.jpg');
var trumpSigned = new Image('./images/2018/trumpSigned.jpg');
var wojak = new Image('./images/2018/wojak.jpg');

var bobSponge = new Image('./images/Spongebob/bobSponge.jpg');
var boi = new Image('./images/Spongebob/boi.jpg');
var caveman = new Image('./images/Spongebob/caveman.jpg');
var cheesing = new Image('./images/Spongebob/cheesing.jpg');
var chocolate = new Image('./images/Spongebob/chocolate.jpg');
var confusedKrabs = new Image('./images/Spongebob/confusedKrabs.jpg');
var doodlebob = new Image('./images/Spongebob/doodlebob.jpg');
var handsomeSquid = new Image('./images/Spongebob/handsomeSquid.jpg');
var imagination = new Image('./images/Spongebob/imagination.png');
var instrument = new Image('./images/Spongebob/instrument.jpg');
var kenny = new Image('./images/Spongebob/kenny.jpg');
var mocking = new Image('./images/Spongebob/mocking.jpg');


var classicArrayMaster = [aliens, aliens, doge, doge, ermahgerd, ermahgerd,
    grumpyCat, grumpyCat, ndt, ndt, notSureIf, notSureIf,
    philoso, philoso, scumbagSteve, scumbagSteve, success, success,
    trollFace, trollFace, wat, wat, xzibit, xzibit
];

var classicArrayHard = [aliens, aliens, doge, doge, ermahgerd, ermahgerd,
    grumpyCat, grumpyCat, ndt, ndt, notSureIf, notSureIf,
    philoso, philoso, scumbagSteve, scumbagSteve, success, success,
    trollFace, trollFace
];

var classicArrayMedium = [aliens, aliens, doge, doge, ermahgerd, ermahgerd,
    grumpyCat, grumpyCat, ndt, ndt, notSureIf, notSureIf,
    philoso, philoso, scumbagSteve, scumbagSteve,
];

var classicArrayEasy = [aliens, aliens, doge, doge, ermahgerd, ermahgerd,
    grumpyCat, grumpyCat, ndt, ndt, notSureIf, notSureIf
];

var eighteenArrayMaster = [bbq, bbq, crowder, crowder, distractedBoyfriend, distractedBoyfriend,
    fellowKids, fellowKids, gru, gru, illDie, illDie,
    mocking, mocking, seagull, seagull, slapsRoof, slapsRoof,
    steamedHams, steamedHams, trumpSigned, trumpSigned, wojak, wojak
];

var eighteenArrayHard = [bbq, bbq, crowder, crowder, distractedBoyfriend, distractedBoyfriend,
    fellowKids, fellowKids, gru, gru, illDie, illDie,
    mocking, mocking, seagull, seagull, slapsRoof, slapsRoof,
    steamedHams, steamedHams,
];

var eighteenArrayMedium = [bbq, bbq, crowder, crowder, distractedBoyfriend, distractedBoyfriend,
    fellowKids, fellowKids, gru, gru, illDie, illDie,
    mocking, mocking, seagull, seagull,
];

var eighteenArrayEasy = [bbq, bbq, crowder, crowder, distractedBoyfriend, distractedBoyfriend,
    fellowKids, fellowKids, gru, gru, illDie, illDie,
];

var spongebobArrayMaster = [bobSponge, bobSponge, boi, boi, caveman, caveman,
    cheesing, cheesing, chocolate, chocolate, confusedKrabs, confusedKrabs,
    doodlebob, doodlebob, handsomeSquid, handsomeSquid, imagination, imagination,
    instrument, instrument, kenny, kenny, mocking, mocking,
];

var spongebobArrayHard = [bobSponge, bobSponge, boi, boi, caveman, caveman,
    cheesing, cheesing, chocolate, chocolate, confusedKrabs, confusedKrabs,
    doodlebob, doodlebob, handsomeSquid, handsomeSquid, imagination, imagination,
    instrument, instrument,
];

var spongebobArrayMedium = [bobSponge, bobSponge, boi, boi, caveman, caveman,
    cheesing, cheesing, chocolate, chocolate, confusedKrabs, confusedKrabs,
    doodlebob, doodlebob, handsomeSquid, handsomeSquid,
];

var spongebobArrayEasy = [bobSponge, bobSponge, boi, boi, caveman, caveman,
    cheesing, cheesing, chocolate, chocolate, confusedKrabs, confusedKrabs,
];

var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var counter = 0;
var limit = 50;


var memory_array = [];


//CHOOSE THEME & DIFFICULTY


$(document).keypress(function (e) {
    if (e.which == 13) {
        var themevalue = $('#theme').val();
        var difficultyValue = $('#difficulty').val();
        if (themevalue == "classic" && difficultyValue == "easy") {
            memory_array = classicArrayEasy;
        } else if (themevalue == "classic" && difficultyValue == "medium") {
            memory_array = classicArrayMedium;
        } else if (themevalue == "classic" && difficultyValue == "hard") {
            memory_array = classicArrayHard;
        } else if (themevalue == "classic" && difficultyValue == "master") {
            memory_array = classicArrayMaster;
        } else if (themevalue == "eighteen" && difficultyValue == "easy") {
            memory_array = eighteenArrayEasy;
        } else if (themevalue == "eighteen" && difficultyValue == "medium") {
            memory_array = eighteenArrayMedium;
        } else if (themevalue == "eighteen" && difficultyValue == "hard") {
            memory_array = eighteenArrayHard;
        } else if (themevalue == "eighteen" && difficultyValue == "master") {
            memory_array = eighteenArrayMaster;
        } else if (themevalue == "spongebob" && difficultyValue == "easy") {
            memory_array = spongebobArrayEasy;
        } else if (themevalue == "spongebob" && difficultyValue == "medium") {
            memory_array = spongebobArrayMedium;
        } else if (themevalue == "spongebob" && difficultyValue == "hard") {
            memory_array = spongebobArrayHard;
        } else {
            memory_array = spongebobArrayMaster;
        }
        var modalStart = document.getElementById('modal-start');
        modalStart.style.display = "none";
        timer();
        newgame();
        return memory_array;
    }
});




//RELOAD GAME - ON BUTTON CLICK AND AFTER GAME ENDS
function newgame() {
    $("#memory_board").html("");
    clearInterval(timeFunc);
    $('#time').text("00:00");
    $('#guesses').text("0");
    timer();
    newBoard();
}


//LIMIT USER GUESSES TO MAX GUESSES/MOVE LIMIT
$('#limit').on("change", getlimit);

function getlimit() {
    limit = $("#limit").val();
    return limit;
}


//SHUFFLE ARRAY APPLIED
Array.prototype.memory_tile_shuffle = function () {
    var i = this.length;
    var j;
    var temp;
    while (i-- > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}


// CREATE BOARD AND PLACE CARDS ON IT
function newBoard() {
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i].src + '\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}


//CREATES AND CHECKS TILES TO SEE IF MATCHES
function memoryFlipTile(tile, val) {

    // WHEN USER CREATESE A MATCH
    if (tile.innerHTML == "" && memory_values.length < 2) {
        tile.style.size = '2em';
        tile.style.background = 'url(' + val + ') no-repeat';
        tile.style.backgroundSize = 'cover';

        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] == memory_values[1]) {
                tiles_flipped += 2;
                // CLEAR MEMORY_VALUES AND MEMORY_TILE_IDS ARRAYS
                memory_values = [];
                memory_tile_ids = [];
                // IF ALL TILES FLIPPED PROVIDE WININNING MESSAGE
                if (tiles_flipped == memory_array.length) {
                    document.getElementById('playStats').innerHTML = 'It took you ' + document.getElementById('time').textContent + ' and ' + document.getElementById('guesses').textContent + ' guesses.'
                    var modalWinner = document.getElementById("modal-winner");
                    modalWinner.style.display = "block";
                    // alert("Your the man now dog!");           //PRE-MODAL
                    document.getElementById('memory_board').innerHTML = "";
                }
            } else {
                //INCORECT GUESSES
                counter++;
                //CHANGE COUNTER TO REFLECT WRONG GUESSES
                $('#guesses').text(counter);
                //LOSE GAME IF COUNTER > LIMIT
                if (counter > limit) {
                    var modalLoser = document.getElementById("modal-loser");
                    modalLoser.style.display = "block";
                }


                function flip2Back() {
                    //FLIP TILES TO BACK (LOSS.IMG)
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(./Images/loss.jpg) no-repeat';
                    tile_1.style.backgroundPosition = 'center';
                    tile_1.style.backgroundSize = '20vh';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(./Images/loss.jpg) no-repeat';
                    tile_2.style.backgroundPosition = 'center';
                    tile_2.style.backgroundSize = "20vh"
                    tile_2.innerHTML = "";
                    //CLEAR VALUES AND TILE ARRAYS
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 1000);
            }
        }
    }
}

$(document).keypress(function (e) {
    if (e.which == 70) {
        var modalStart = document.getElementById('modal-start');
        modalStart.style.display = "block";
        var modalWinner = document.getElementById("modal-winner");
        modalWinner.style.display = "none";
        var modalLoser = document.getElementById("modal-loser");
        modalLoser.style.display = "none";
        $("#memory_board").html("");
        clearInterval(timeFunc);
        $('#time').text("00:00");
        $('#guesses').text("0");    }
});


//CREATE TIMER
function timer() {
    var minutes = 00;
    var seconds = 00;
    var interval;
    timeFunc = setInterval(function () {
        if (minutes < 60) {
            seconds++;
            seconds = (seconds < 10) ? ('0' + seconds) : (seconds);
            if (seconds == 60) {
                minutes++;
                seconds = 00;
            }
        }

        document.getElementById('time').innerHTML = minutes + ":" + seconds;
    }, 1000);
};