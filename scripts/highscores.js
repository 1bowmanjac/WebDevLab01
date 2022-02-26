window.onload = function(){
    var highscores = [{"date": "2021/03/00", "duration": "2:51"},
    {"date": "2021/03/01", "duration": "2:51"},
    {"date": "2021/03/02", "duration": "2:51"},
    {"date": "2021/03/03", "duration": "2:51"},
    {"date": "2021/03/04", "duration": "2:51"},
    {"date": "2021/03/05", "duration": "2:51"},
    {"date": "2021/03/06", "duration": "2:51"},
    {"date": "2021/03/07", "duration": "2:51"},
    {"date": "2021/03/08", "duration": "2:51"},
    {"date": "2021/03/09", "duration": "2:51"},
    {"date": "2021/03/10", "duration": "2:51"}
    ]
    var scoreTable = document.getElementById("highScoreTable");
    var dates = scoreTable.getElementsByClassName("date");
    var times = scoreTable.getElementsByClassName("time");

    for(let i = 0; i < dates.length; i++){
        let date = highscores[i].date;
        let time = highscores[i].duration;

        dates.item(i).textContent = date;
        times.item(i).textContent = time;

    }
    
}