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

                var state = teamState

 
                

                let lat = obj.StadiumDetails.GeoLat

               
                    
                let lon = obj.StadiumDetails.GeoLong

                

var ApiKey = "AIzaSyCIe1mV6aksKfFkYsuJHOmQgse94B6ZHzM"


var oneCallApi = `https://maps.googleapis.com/maps/api/staticmap?center=${state}=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${ApiKey}`;

$.ajax({
    url: oneCallApi,
    method: "GET"
  })

  .then(function (data) {
      // Create the script tag, set the appropriate attributes
var script = document.createElement('script');

let map;

      function initMap() {
        let lat = obj.StadiumDetails.GeoLat;
        
        let lon = obj.StadiumDetails.GeoLong;
          console.log(lon);
          console.log(lat);
        map = new google.maps.Map(document.getElementById("map"), {
          center: {
            lat: lat,
            lng: lon
          },
          zoom: 14

        });
    

      }
     
      initMap();
      


    console.log(data)

                //create the heading
                $("#teamName").html(homeTeamFullName + " Home Schedule");

                //loop through opponents
                for (i = 0; i < awayTeamDetails.length; i++) {
                    $("#teamGame")
                        .append($("<li>")
                            .html('<a href="#risk-info">' + awayTeamDetails[i].FullName + " @ " + homeTeamFullName + "</a>")
                            .addClass("tablerow")
                            .attr("id", "teamRow")
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
                    let covidCases = obj.positive;
                    $("#cases").text("Total Cases: " + covidCases);
                    // COVID Calculations
                    let covidRisk;
                    let covidSeats;
                    if (obj.positiveIncrease >= 1000) {
                        covidRisk = "HIGH";
                        covidSeats = stadiumCap / 4;
                        covidSeatsBtwn = "3";
                    } else {
                        covidRisk = "AVERAGE";
                        covidSeats = stadiumCap / 3;
                        covidSeatsBtwn = "2";
                    }
                    $("#risk-info").addClass("d.block");
                    $("#cityRisk").text("City Risk Level: " + covidRisk);
                    $("#availableSeats").text("Total Available Seats (Adjusted COVID risk): " + covidSeats.toFixed(0));
                    $("#btwnSeats").text("Seats in between seats (based on COVID risk): " + covidSeatsBtwn + "Empty Seats");

                    
                })

                
            });
        });
    });//closes event listener

});//closes ready fcn

// Sportsdata.io API urls:

    // https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=6306de6ffce1432bae3dc370a38a8de3

    // https://api.sportsdata.io/v3/nfl/scores/json/Stadiums?key=6306de6ffce1432bae3dc370a38a8de3

  
});