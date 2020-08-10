$(document).ready(function () {

    $("button").on("click", function () {
        $("#teamGame").empty();
        $("#teamName").empty();
    });

    //event listener for the drop-down menu
    $(".dropdown-menu a").click(function (event) {
        event.preventDefault();
        //grab the team name based on user selection
        selectedTeam = $(this).attr("id");

        // use football.io Schedules API to create an array of opponents of the selected team
        $.ajax({
            url: "https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=6306de6ffce1432bae3dc370a38a8de3",
            method: "GET"
        }).then(function (response) {
            //just the games where the selected team is home
            let homeTeamGames = response.filter(homeTeamGames => (homeTeamGames.HomeTeam === selectedTeam && homeTeamGames.AwayTeam != "BYE"));

            //array of the opponents
            let awayTeams = []
            for (let i = 0; i < homeTeamGames.length; i++) {
                awayTeams.push(homeTeamGames[i].AwayTeam);
            }

            //use football.io Teams API to obtain opponent info, state, and capacity 
            $.ajax({
                url: "https:/api.sportsdata.io/v3/nfl/scores/json/Teams?key=6306de6ffce1432bae3dc370a38a8de3",
                method: "GET"
            }).then(function (response) {
                //find the abbreviation for the selected team
                let obj = response.find(obj => (obj.Key === selectedTeam));
                //team's full name
                var homeTeamFullName = obj.FullName;
                //state the team plays in
                let teamState = obj.StadiumDetails.State;
                //team's primary color
                let homeTeamPrimary = obj.PrimaryColor;
                //team's secondary color
                let homeTeamSecondary = obj.SecondaryColor;
                //stadium capacity
                let stadiumCap = obj.StadiumDetails.Capacity;

                let awayTeamDetails = [];
                awayTeams.map(function (currentAwayTeam) {
                    awayTeamDetails.push(response.find(obj => (obj.Key === currentAwayTeam)))
                })
                console.log(awayTeamDetails);

                //create the heading
                $("#teamName").html(homeTeamFullName + " Home Schedule");

                //loop through opponents
                for (i = 0; i < awayTeamDetails.length; i++) {
                    $("#teamGame")
                        .append($("<tr>")
                            .text(awayTeamDetails[i].FullName + " @ " + homeTeamFullName)
                            .addClass("tablerow")
                            .attr("id", "teamRow")
                            .attr("href", "#landingPage.html")
                            // .css("background", "linear-gradient(90deg, #" + awayTeamDetails[i].PrimaryColor + " 20%, #" + awayTeamDetails[i].SecondaryColor + " 50%, #" + homeTeamPrimary + " 50%, #" + homeTeamSecondary + " 80%")
                            .css("background", "linear-gradient(180deg, #" + awayTeamDetails[i].PrimaryColor + " 35%, #" + awayTeamDetails[i].SecondaryColor + " 65%")
                        );
                }

                //obtain COVID case data from covidtracking API
                $.ajax({
                    url: "https://covidtracking.com/api/v1/states/current.json",
                    method: "GET"
                }).then(function (response) {
                    //find the object with the selected state
                    let obj = response.find(obj => (obj.state === teamState));
                    //num people in the state who are positive
                    let positive = obj.positive;
                    // console.log("number positive: ", positive);
                })
            });
        });
    });//closes event listener

});//closes ready fcn

// Sportsdata.io API urls:

    // https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=6306de6ffce1432bae3dc370a38a8de3

    // https://api.sportsdata.io/v3/nfl/scores/json/Stadiums?key=6306de6ffce1432bae3dc370a38a8de3

    // https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=6306de6ffce1432bae3dc370a38a8de3