$(document).ready(function () {

    $("button").on("click", function () {
        $("#teamGame").empty();

    });


    schedule = [
        {
            "team": "ARI",
            "week": ["Detroit Lions @ Arizona Cardinals",
                "Washington Football Team @ Arizona Cardinals",
                "Seattle Seahawks @ Arizona Cardinals",
                "Miami Dolphins @ Arizona Cardinals",
                "Buffalo Bills @ Arizona Cardinals",
                "Los Angeles Rams @ Arizona Cardinals",
                "Philadelphia Eagles @ Arizona Cardinals",
                "San Francisco 49ers @ Arizona Cardinals"]
        },
        {
            "team": "ATL",
            "week": ["Seattle Seahawks @ Atlanta Falcons",
                "Chicago Bears @ Atlanta Falcons",
                "Carolina Panthers @ Atlanta Falcons",
                "Detroit Lions @ Atlanta Falcons",
                "Denver Broncos @ Atlanta Falcons",
                "Las Vegas Raiders @ Atlanta Falcons",
                "New Orleans Saints @ Atlanta Falcons",
                "Tampa Bay Buccaneers @ Atlanta Falcons"]
        },
        {
            "team": "CAR",
            "week": ["Las Vegas Raiders @ Carolina Panthers",
                "Arizona Cardinals @ Carolina Panthers",
                "Chicago Bears @ Carolina Panthers",
                "Atlanta Falcons @ Carolina Panthers",
                "Tampa Bay Buccaneers @ Carolina Panthers",
                "Detroit Lions @ Carolina Panthers",
                "Denver Broncos @ Carolina Panthers",
                "New Orleans Saints @ Carolina Panthers"]
        },
        {
            "team": "CHI",
            "week": ["New York Giants @ Chicago Bears",
                "Indianapolis Colts @ Chicago Bears",
                "Tampa Bay Buccaneers @ Chicago Bears",
                "New Orleans Saints @ Chicago Bears",
                "Minnesota Vikins @ Chicago Bears",
                "Detroit Lions @ Chicago Bears",
                "Houston Texans @ Chicago Bears",
                "Green Bay Packers @ Chicago Bears"]
        },
        {
            "team": "DAL",
            "week": ["Atlanta Falcons @ Dallas Cowboys",
                "Cleveland Browns @ Dallas Cowboys",
                "New York Giants @ Dallas Cowboys",
                "Arizona Cardinals @ Dallas Cowboys",
                "Pittsburgh Steelers @ Dallas Cowboys",
                "Washington Football Team @ Dallas Cowboys",
                "San Francisco 49ers @ Dallas Cowboys",
                "Philadelphia Eagles @ Dallas Cowboys"]
        },
        {
            "team": "DET",
            "week": ["Chicago Bears @ Detroit Lions",
                "New Orleans Saints @ Detroit Lions",
                "Indianapolis Colts @ Detroit Lions",
                "Washington Football Team @ Detroit Lions",
                "Houston Texans @ Detroit Lions",
                "Green Bay Packers @ Detroit Lions",
                "Tampa Bay Buccaneers @ Detroit Lions",
                "Minnesota Vikings @ Detroit Lions"]
        },
        {
            "team": "GB",
            "week": ["Detroit Lions @ Green Bay Packers",
                "Atlanta Falcons @ Green Bay Packers",
                "Minnesota Vikings @ Green Bay Packers",
                "Jacksonville Jaguars @ Green Bay Packers",
                "Chicago Bears @ Green Bay Packers",
                "Philadelphia Eagles @ Green Bay Packers",
                "Carolina Panthers @ Green Bay Packers",
                "Tennessee Titans @ Green Bay Packers"]
        },
        {
            "team": "LAR",
            "week": ["Dallas Cowboys @ Los Angeles Rams",
                "New York Giants @ Los Angeles Rams",
                "Chicago Bears @ Los Angeles Rams",
                "Seattle Seahawks @ Los Angeles Rams",
                "San Francisco 49ers @ Los Angeles Rams",
                "New England Patriots @ Los Angeles Rams",
                "New York Jets @ Los Angeles Rams",
                "Arizona Cardinals @ Los Angeles Rams"]
        },
        {
            "team": "MIN",
            "week": ["Green Bay Packers @ Minnesota Vikings",
                "Tennessee Titans @ Minnesota Vikings",
                "Atlanta Falcons @ Minnesota Vikings",
                "Detroit Lions @ Minnesota Vikings",
                "Dallas Cowboys @ Minnesota Vikings",
                "Carolina Panthers @ Minnesota Vikings",
                "Jacksonville Jaguars @ Minnesota Vikings",
                "Chicago Bears @ Minnesota Vikings"]
        },
        {
            "team": "NO",
            "week": ["Tampa Bay Buccaneers @ New Orleans Saints",
                "Green Bay Packers @ New Orleans Saints",
                "Los Angeles Chargers @ New Orleans Saints",
                "Carolina Panthers @ New Orleans Saints",
                "San Francisco 49ers @ New Orleans Saints",
                "Atlanta Falcons @ New Orleans Saints",
                "Kansas City Chiefs @ New Orleans Saints",
                "Minnesota Vikings @ New Orleans Saints"]
        },
        {
            "team": "NYG",
            "week": ["Pittsburgh Steelers @ New York Giants",
                "San Francisco 49ers @ New York Giants",
                "Washington Football Team @ New York Giants",
                "Tampa Bay Buccaneers @ New York Giants",
                "Philadelphia Eagles @ New York Giants",
                "Arizona Cardinals @ New York Giants",
                "Cleveland Browns @ New York Giants",
                "Dallas Cowboys @ New York Giants"]
        },
        {
            "team": "PHI",
            "week": ["Los Angeles Rams @ Philadelphia Eagles",
                "Cincinnati Bengals @ Philadelphia Eagles",
                "Baltimore Ravens @ Philadelphia Eagles",
                "New York Giants @ Philadelphia Eagles",
                "Dallas Cowboys @ Philadelphia Eagles",
                "Seattle Seahawks @ Philadelphia Eagles",
                "New Orleans Saints @ Philadelphia Eagles",
                "Washington Football Team @ Philadelphia Eagles"]
        },
        {
            "team": "SF",
            "week": ["Arizona Cardinals @ San Francisco 49ers",
                "Philadelphia Eagles @ San Francisco 49ers",
                "Miami Dolphins @ San Francisco 49ers",
                "Los Angeles Rams @ San Francisco 49ers",
                "Green Bay Packers @ San Francisco 49ers",
                "Buffalo Bills @ San Francisco 49ers",
                "Washington Football Team @ San Francisco 49ers",
                "Seattle Seahawks @ San Francisco 49ers"]
        },
        {
            "team": "SEA",
            "week": ["New England Patriots @ Seattle Seahawks",
                "Dallas Cowboys @ Seattle Seahawks",
                "Minnesota Vikings @ Seattle Seahawks",
                "San Francisco 49ers @ Seattle Seahawks",
                "Arizona Cardinals @ Seattle Seahawks",
                "New York Giants @ Seattle Seahawks",
                "New York Jets @ Seattle Seahawks",
                "Los Angeles Rams @ Seattle Seahawks"]
        },
        {
            "team": "TB",
            "week": ["Carolina Panthers @ Tampa Bay Buccaneers",
                "Los Angeles Chargers @ Tampa Bay Buccaneers",
                "Green Bay Packers @ Tampa Bay Buccanneers",
                "New Orleans Saints @ Tampa Bay Buccaneers",
                "Los Angeles Rams @ Tampa Bay Buccaneers",
                "Kansas City Chiefs @ Tampa Bay Buccaneers",
                "Minnesota Vikings @ Tampa Bay Buccaneers",
                "Atlanta Falcons @ Tampa Bay Buccaneers"]
        },
        {
            "team": "WAS",
            "week": ["Philadelphia Eagles @ Washington Football Team",
                "Baltimore Ravens @ Washington Football Team",
                "Los Angeles Rams @ Washington Football Team",
                "Dallas Cowboys @ Washington Football Team",
                "New York Giants @ Washington Football Team",
                "Cincinnati Bengals @ Washington Football Team",
                "Pittsburgh Steelers @ Washington Football Team",
                "Seattle Seahawks @ Washington Football Team",
                "Carolina Panthers @ Washington Football Team"]
        },
        {
            "team": "BAL",
            "week": ["Cleveland Browns @ Baltimore Ravens",
                "Kansas City Chiefs @ Baltimore Ravens",
                "Cincinnati Bengals @ Baltimore Ravens",
                "Pittsburgh Steelers @ Baltimore Ravens",
                "Tennessee Titans @ Baltimore Ravens",
                "Dallas Cowboys @ Baltimore Ravens",
                "Jacksonville Jaguars @ Baltimore Ravens",
                "New York Giants @ Baltimore Ravens"]
        },
        {
            "team": "BUF",
            "week": ["New York Jets @ Buffalo Bills",
                "Los Angeles Rams @ Buffalo Bills",
                "Kansas City Chiefs @ Buffalo Bills",
                "New England Patriots",
                "Seattle Seahawks @ Buffalo Bills",
                "Los Angeles Chargers @ Buffalo Bills",
                "Pittsburg Steelers @ Buffalo Bills",
                "Miami Dolphins @ Buffalo Bills"]
        },
        {
            "team": "CIN",
            "week": ["Los Angeles Chargers @ Cincinnati Bengals",
                "Jacksonville Jaguars @ Cincinnati Bengals",
                "Cleveland Browns @ Cincinnati Bengals",
                "Tennessee Titans @ Cincinnati Bengals",
                "Dallas Cowboys @ Cincinnati Bengals",
                "Pittsburgh Steelers @ Cincinnati Bengals",
                "Baltimore Ravens @ Cincinnati Bengals"]
        },
        {
            "team": "CLE",
            "week": ["Cincinnati Bengals @ Cleveland Browns",
                "Washington Football Team @ Cleveland Browns",
                "Inianapolis Colts @ Cleveland Browns",
                "Las Vegas Raiders @ Cleveland Browns",
                "Houston Texans @ Cleveland Browns",
                "Philadelphia Eagles @ Cleveland Browns",
                "Baltimore Ravens @ Cleveland Browns",
                "Pittsburgh Steelers @ Cleveland Browns"]
        },
        {
            "team": "DEN",
            "week": ["Tennessee Titans @ Denver Broncos",
                "Tampa Bay Buccaneers @ Denver Broncos",
                "Miami Dolphins @ Denver Broncos",
                "Kansas City Chiefs @ Denver Broncos",
                "Los Angeles Chargers @ Denver Broncos",
                "New Orleans Saints @ Denver Broncos",
                "Buffalo Bills @ Denver Broncos",
                "Las Vegas Raiders @ Denver Broncos"]
        },
        {
            "team": "HOU",
            "week": ["Baltimore Ravens @ Houston Texans",
                "Minnesota Vikings @ Houston Texans",
                "Jacksonville Jaguars @ Houston Texans",
                "Green Bay Packers @ Houston Texans",
                "New England Patriots @ Houston Texans",
                "Indianapolis Colts @ Houston Texans",
                "Cincinnati Bengals @ Houston Texans",
                "Tennessee Titans @ Houston Texans"]
        },
        {
            "team": "IND",
            "week": ["Minnesota Vikings @ Inianapolis Colts",
                "New York Jets @ Inianapolis Colts",
                "Cincinnati Bengals @ Inianapolis Colts",
                "Baltimore Ravens @ Inianapolis Colts",
                "Green Bay Packers @ Inianapolis Colts",
                "Tennessee Titans @ Inianapolis Colts",
                "Houston Texans @ Inianapolis Colts",
                "Jacksonville Jaguars @ Inianapolis Colts"]
        },
        {
            "team": "JAX",
            "week": ["Indianapolis Colts @ Jacksonville Jaguars",
                "Miami Dolphins @ Jacksonville Jaguars",
                "Detroit Loins @ Jacksonville Jaguars",
                "Houston Texans @ Jacksonville Jaguars",
                "Pittsburgh Steelers @ Jacksonville Jaguars",
                "Cleveland Browns @ Jacksonville Jaguars",
                "Tennessee Titans @ Jacksonville Jaguars",
                "Chicago Bears @ Jacksonville Jaguars"]
        },
        {
            "team": "KC",
            "week": ["Houston Texans @ Kansas City Chiefs",
                "New England Patriots @ Kansas City Chiefs",
                "Las Vegas Raiders @ Kansas City Chiefs",
                "New York Jets @ Kansas City Chiefs",
                "Carolina Panthers @ Kansas City Chiefs",
                "Denver Broncos @ Kansas City Chiefs",
                "Atlanta Falcons @ Kansas City Chiefs",
                "Los Angeles Chargers @ Kansas City Chiefs"]
        },
        {
            "team": "LV",
            "week": ["New Orleans Saints @ Las Vegas Raiders",
                "Buffalo Bills @ Las Vegas Raiders",
                "Tampa Bay Buccaneers @ Las Vegas Raiders",
                "Denver Broncos @ Las Vegas Raiders",
                "Kansas City Chiefs @ Las Vegas Raiders",
                "Indianapolis Colts @ Las Vegas Raiders",
                "Los Angeles Chargers @ Las Vegas Raiders",
                "Miami Dolphins @ Las Vegas Raiders"]
        },
        {
            "team": "LAC",
            "week": ["Kansas City Chiefs @ Los Angeles Chargers",
                "Carolina Panthers @ Los Angeles Chargers",
                "New York Jets @ Los Angeles Chargers",
                "Jacksonville Jaguars @ Los Angeles Chargers",
                "Las Vegas Raiders @ Los Angeles Chargers",
                "New England Patriots @ Los Angeles Chargers",
                "Atlanta Falcons @ Los Angeles Chargers",
                "Denver Broncos @ Los Angeles Chargers"]
        },
        {
            "team": "MIA",
            "week": ["Buffalo Bills @ Miami Dolphins",
                "Seattle Seahawks @ Miami Dolphins",
                "Los Angeles Chargers @ Miami Dolphins",
                "Los Angeles Rams @ Miami Dolphins",
                "New York Jets @ Miami Dolphins",
                "Cincinnati Bengals @ Miami Dolphins",
                "Kansas City Chiefs @ Miami Dolphins",
                "New England Patriots @ Miami Dolphins"]
        },
        {
            "team": "NE",
            "week": ["Miami Dolphins @ New England Patriots",
                "Las Vegas Raiders @ New England Patriots",
                "Denver Broncos @ New England Patriots",
                "San Francisco 49ers @ New England Patriots",
                "Baltimore Ravens @ New England Patriots",
                "Arizona Cardinals @ New England Patriots",
                "Buffalo Bills @ New England Patriots",
                "New York Jets @ New England Patriots"]
        },
        {
            "team": "NYJ",
            "week": ["San Francisco 49ers @ New York Jets",
                "Denver Broncos @ New York Jets",
                "Arizona Cardinals @ New York Jets",
                "Buffalo Bills @ New York Jets",
                "New England Patriots @ New York Jets",
                "Miami Dolphins @ New York Jets",
                "Las Vegas Raiders @ New York Jets",
                "Cleveland Browns @ New York Jets"]
        },
        {
            "team": "PIT",
            "week": ["Denver Broncos @ Pittsburgh Steelers",
                "Houston Texans @ Pittsburgh Steelers",
                "Philadelphia Eagles @ Pittsburgh Steelers",
                "Cleveland Browns @ Pittsburgh Steelers",
                "Cincinnati Bengals @ Pittsburgh Steelers",
                "Baltimore Ravens @ Pittsburgh Steelers",
                "Washington Football Team @ Pittsburgh Steelers",
                "Indianapolis Colts @ Pittsburgh Steelers"]
        },
        {
            "team": "TEN",
            "week": ["Jacksonville Jaguars @ Tennessee Titans",
                "Pittsburgh Steelers @ Tennessee Titans",
                "Buffalo Bills @ Tennessee Titans",
                "Houston Texans @ Tennessee Titans",
                "Chicago Bears @ Tennessee Titans",
                "Indianapolis Colts @ Tennessee Titans",
                "Cleveland Browns @ Tennessee Titans",
                "Detroit Lions @ Tennessee Titans"]
        }
    ];

    $("#ARI").on("click", function () {
        $.each(schedule[0].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "red");
            $("tr:even").css("background-color", "grey");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#ATL").on("click", function () {
        $.each(schedule[1].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "black")
            $("tr:odd").css("color", "white");
            $("tr:even").css("background-color", "red");
        });
    });

    $("#CAR").on("click", function () {
        $.each(schedule[2].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#4B9CD3");
            $("tr:even").css("background-color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#CHI").on("click", function () {
        $.each(schedule[3].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#CC5500");
            $("tr:even").css("background-color", "#000080");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#DAL").on("click", function () {
        $.each(schedule[4].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "white");
            $("tr:even").css("background-color", "blue");
            $("tr:even").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#DET").on("click", function () {
        $.each(schedule[5].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#006db0");
            $("tr:even").css("background-color", "silver");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#GB").on("click", function () {
        $.each(schedule[6].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "gold");
            $("tr:even").css("background-color", "darkgreen");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#LAR").on("click", function () {
        $.each(schedule[7].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#4169e1");
            $("tr:even").css("background-color", "gold");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#MIN").on("click", function () {
        $.each(schedule[8].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "purple");
            $("tr:even").css("background-color", "gold");
            $("tr:odd").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#NO").on("click", function () {
        $.each(schedule[9].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#CFB53B");
            $("tr:even").css("background-color", "black");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#NYG").on("click", function () {
        $.each(schedule[10].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "blue");
            $("tr:even").css("background-color", "red");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#PHI").on("click", function () {
        $.each(schedule[11].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#004953");
            $("tr:even").css("background-color", "#36454f");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#SF").on("click", function () {
        $.each(schedule[12].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#FF2400");
            $("tr:even").css("background-color", "gold");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#SEA").on("click", function () {
        $.each(schedule[13].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "blue");
            $("tr:even").css("background-color", "#39ff14");
            $("tr:odd").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#TB").on("click", function () {
        $.each(schedule[14].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "red");
            $("tr:even").css("background-color", "#36454f");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#WAS").on("click", function () {
        $.each(schedule[15].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#800020");
            $("tr:even").css("background-color", "gold");
            $("tr:odd").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#BAL").on("click", function () {
        $.each(schedule[16].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "black");
            $("tr:even").css("background-color", "purple");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#BUF").on("click", function () {
        $.each(schedule[17].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "white");
            $("tr:even").css("background-color", "#4169e1");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#CIN").on("click", function () {
        $.each(schedule[18].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "black");
            $("tr:even").css("background-color", "orange");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#CLE").on("click", function () {
        $.each(schedule[19].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "brown");
            $("tr:even").css("background-color", "orange");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#DEN").on("click", function () {
        $.each(schedule[20].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "Orange");
            $("tr:even").css("background-color", "#000080");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#HOU").on("click", function () {
        $.each(schedule[21].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#03202F");
            $("tr:even").css("background-color", "#a71930");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#IND").on("click", function () {
        $.each(schedule[22].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "blue");
            $("tr:even").css("background-color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#JAX").on("click", function () {
        $.each(schedule[23].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "teal");
            $("tr:even").css("background-color", "black");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#KC").on("click", function () {
        $.each(schedule[24].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "red");
            $("tr:even").css("background-color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#LV").on("click", function () {
        $.each(schedule[25].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "black");
            $("tr:odd").css("color", "silver");
            $("tr:even").css("background-color", "silver");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#LAC").on("click", function () {
        $.each(schedule[26].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "gold");
            $("tr:even").css("background-color", "#B0E0E6");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#MIA").on("click", function () {
        $.each(schedule[27].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#03bb85");
            $("tr:even").css("background-color", "#00FFFF");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#NE").on("click", function () {
        $.each(schedule[28].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "#000080");
            $("tr:even").css("background-color", "red");
            $("tr").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#NYJ").on("click", function () {
        $.each(schedule[29].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "green");
            $("tr:even").css("background-color", "white");
            $("tr").css("color", "black");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#PIT").on("click", function () {
        $.each(schedule[30].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "black");
            $("tr:even").css("background-color", "gold");
            $("tr:odd").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    $("#TEN").on("click", function () {
        $.each(schedule[31].week, function () {
            $("#teamGame").append("<tr><td>" + this + "</td></tr>");
            $("tr:odd").css("background-color", "silver");
            $("tr:even").css("background-color", "lightblue");
            $("tr:even").css("color", "white");
            $("td").css("padding", "2em");
            $("td").css("border", "solid black");
        });
    });

    let test;

    //event listener for the drop-down menu
    $(".dropdown-menu a").click(function (event) {
        event.preventDefault();
        let teamState;
        let stadiumCap;
        //grab the position in the array
        let arrayPos = parseInt(($(this).attr("arrayPos")));

        //pull state and stadium capacity from football.io API
        $.ajax({
            url: "https:/api.sportsdata.io/v3/nfl/scores/json/Teams?key=6306de6ffce1432bae3dc370a38a8de3",
            method: "GET"
        }).then(function (response) {
            teamState = response[arrayPos].StadiumDetails.State;
            stadiumCap = response[arrayPos].StadiumDetails.Capacity;
            console.log(teamState + ", " + stadiumCap);

                $.ajax({
                    url: "https://covidtracking.com/api/v1/states/current.json",
                    method: "GET"
                }).then(function (covidResponse) {
                    console.log(covidResponse);
                    console.log(teamState + ", " + stadiumCap) //state array is still jacked up
                    let obj = covidResponse.find(obj => (obj.state === teamState));

                    let covidRisk;
                    if (obj.positiveIncrease >= 1000) {
                        covidRisk = "high";
                        $("#cityRisk").text("HIGH"); //we need to have the landing page linked up to test this
                    } else {
                        covidRisk = "average";
                        $("#cityRisk").text("AVERAGE"); //we need to have the landing page linked up to test this
                    }
                    console.log(covidRisk);
                })
        });
    });
//"hello this is my branch"

    //hard code index of each team to pull state and capacty from sportsdata.io --> Charles
    //display schedule from array based on team selected --> Jake
    //take state, use COVID API to get cases --> Adam




    //use cases to create risk level and adjust stadium capacity --> Adam
    //explore maps API to get bar/restaurant/hospital info nearby --> Manuel



    // ! Working Sportsdata.io Api url:

    // https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=6306de6ffce1432bae3dc370a38a8de3

    // https://api.sportsdata.io/v3/nfl/scores/json/Stadiums?key=6306de6ffce1432bae3dc370a38a8de3

    // https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=6306de6ffce1432bae3dc370a38a8de3


});
