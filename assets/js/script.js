let hourInfos = 
[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const workCurrentHour = document.querySelector(".workCurrentHour");
const workPreviousHour = document.querySelector(".workPreviousHour");
const playCurrentHour = document.querySelector(".playCurrentHour");
const playPreviousHour = document.querySelector(".playPreviousHour");
const studyCurrentHour = document.querySelector(".studyCurrentHour");
const studyPreviousHour = document.querySelector(".studyPreviousHour");
const exerciseCurrentHour = document.querySelector(".exerciseCurrentHour");
const exercisePreviousHour = document.querySelector(".exercisePreviousHour");
const socialCurrentHour = document.querySelector(".socialCurrentHour");
const socialPreviousHour = document.querySelector(".socialPreviousHour");
const selfcareCurrentHour = document.querySelector(".selfcareCurrentHour");
const selfcarePreviousHour = document.querySelector(".selfcarePreviousHour");

//default values
workCurrentHour.innerHTML = hourInfos[0].timeframes.daily.current + "hrs";
workPreviousHour.innerHTML = hourInfos[0].timeframes.daily.previous + "hrs";
playCurrentHour.innerHTML = hourInfos[1].timeframes.daily.current + "hrs";
playPreviousHour.innerHTML = hourInfos[1].timeframes.daily.previous + "hrs";
studyCurrentHour.innerHTML = hourInfos[2].timeframes.daily.current + "hrs";
studyPreviousHour.innerHTML = hourInfos[2].timeframes.daily.previous + "hrs";
exerciseCurrentHour.innerHTML = hourInfos[3].timeframes.daily.current + "hrs";
exercisePreviousHour.innerHTML = hourInfos[3].timeframes.daily.previous + "hrs";
socialCurrentHour.innerHTML = hourInfos[4].timeframes.daily.current + "hrs";
socialPreviousHour.innerHTML = hourInfos[4].timeframes.daily.previous + "hrs";
selfcareCurrentHour.innerHTML = hourInfos[5].timeframes.daily.current + "hrs";
selfcarePreviousHour.innerHTML = hourInfos[5].timeframes.daily.previous + "hrs";


function dailyInfo(){
    daily.addEventListener("click", e => {
        e.preventDefault();        
        for (const info of hourInfos) {
            if (info.title == "Work") {
                workCurrentHour.innerHTML = info.timeframes.daily.current + "hrs";
                workPreviousHour.innerHTML = info.timeframes.daily.previous + "hrs";
            }
            if (info.title == "Play") {
                playCurrentHour.innerHTML = info.timeframes.daily.current + "hrs";
                playPreviousHour.innerHTML = info.timeframes.daily.previous + "hrs";
            }
            if (info.title == "Study") {
                studyCurrentHour.innerHTML = info.timeframes.daily.current + "hrs";
                studyPreviousHour.innerHTML = info.timeframes.daily.previous + "hrs";
            }
            if (info.title == "Exercise") {
                exerciseCurrentHour.innerHTML = info.timeframes.daily.current + "hrs";
                exercisePreviousHour.innerHTML = info.timeframes.daily.previous + "hrs";
            }
            if (info.title == "Social") {
                socialCurrentHour.innerHTML = info.timeframes.daily.current + "hrs";
                socialPreviousHour.innerHTML = info.timeframes.daily.previous + "hrs";
            }
            if (info.title == "Self Care") {
                selfcareCurrentHour.innerHTML = info.timeframes.daily.current + "hrs";
                selfcarePreviousHour.innerHTML = info.timeframes.daily.previous + "hrs";
            }

        }
        
    });
}

function weeklyInfo(){
    weekly.addEventListener("click", e => {
        e.preventDefault();        
        for (const info of hourInfos) {
            if (info.title == "Work") {
                workCurrentHour.innerHTML = info.timeframes.weekly.current + "hrs";
                workPreviousHour.innerHTML = info.timeframes.weekly.previous + "hrs";
            }
            if (info.title == "Play") {
                playCurrentHour.innerHTML = info.timeframes.weekly.current + "hrs";
                playPreviousHour.innerHTML = info.timeframes.weekly.previous + "hrs";
            }
            if (info.title == "Study") {
                studyCurrentHour.innerHTML = info.timeframes.weekly.current + "hrs";
                studyPreviousHour.innerHTML = info.timeframes.weekly.previous + "hrs";
            }
            if (info.title == "Exercise") {
                exerciseCurrentHour.innerHTML = info.timeframes.weekly.current + "hrs";
                exercisePreviousHour.innerHTML = info.timeframes.weekly.previous + "hrs";
            }
            if (info.title == "Social") {
                socialCurrentHour.innerHTML = info.timeframes.weekly.current + "hrs";
                socialPreviousHour.innerHTML = info.timeframes.weekly.previous + "hrs";
            }
            if (info.title == "Self Care") {
                selfcareCurrentHour.innerHTML = info.timeframes.weekly.current + "hrs";
                selfcarePreviousHour.innerHTML = info.timeframes.weekly.previous + "hrs";
            }

        }
        
    });
}

function monthlyInfo(){
    monthly.addEventListener("click", e => {
        e.preventDefault();        
        for (const info of hourInfos) {
            if (info.title == "Work") {
                workCurrentHour.innerHTML = info.timeframes.monthly.current + "hrs";
                workPreviousHour.innerHTML = info.timeframes.monthly.previous + "hrs";
            }
            if (info.title == "Play") {
                playCurrentHour.innerHTML = info.timeframes.monthly.current + "hrs";
                playPreviousHour.innerHTML = info.timeframes.monthly.previous + "hrs";
            }
            if (info.title == "Study") {
                studyCurrentHour.innerHTML = info.timeframes.monthly.current + "hrs";
                studyPreviousHour.innerHTML = info.timeframes.monthly.previous + "hrs";
            }
            if (info.title == "Exercise") {
                exerciseCurrentHour.innerHTML = info.timeframes.monthly.current + "hrs";
                exercisePreviousHour.innerHTML = info.timeframes.monthly.previous + "hrs";
            }
            if (info.title == "Social") {
                socialCurrentHour.innerHTML = info.timeframes.monthly.current + "hrs";
                socialPreviousHour.innerHTML = info.timeframes.monthly.previous + "hrs";
            }
            if (info.title == "Self Care") {
                selfcareCurrentHour.innerHTML = info.timeframes.monthly.current + "hrs";
                selfcarePreviousHour.innerHTML = info.timeframes.monthly.previous + "hrs";
            }

        }
        
    });
}


dailyInfo();
weeklyInfo();
monthlyInfo();
