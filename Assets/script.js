$(document).ready(function () {




    // $('#dropdownMenuButton').on('click', function (event) {
    //     console.log($(this).val())


    // })

    // document.querySelector("#dropdownMenuButton")
    //     .addEventListener("change", function (evt) {
    //         alert(evt.target.value)

    //         console.log(this)
    //     });



    // function myFunction() {
    //     document.getElementById("#dropdownMenuButton").classList.toggle("show");

    //     console.log(this)
    // }
    // $("#falcons").on("click", function() {

    //})

    // $("#dropdownMenuButton :selected").text(); // The text content of the selected option
    // $("#dropdownMenuButton :selected").val(this);

    // console.log(val)

    $(".dropdown-menu a").click(function () {
        var teamAbbreviation = ($(this).attr("id"));
        console.log("run");
        // });








        // $("dropdown-menu a").on("click", function (event) {

        console.log("called")

        event.preventDefault();

        var queryURL = "https:/api.sportsdata.io/v3/nfl/scores/json/Teams?key=6306de6ffce1432bae3dc370a38a8de3";



        //select team from dropdown

        //load team home schedule from array or API

        //pull state and stadium capacity from football.io API

        //use state to pull COVID cases from covid API

        //use math to create a risk level

        //display ticket availability from stubhub/ticketmaster



        // ! Working Sportsdata.io Api url:

        // https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=6306de6ffce1432bae3dc370a38a8de3

        // https://api.sportsdata.io/v3/nfl/scores/json/Stadiums?key=6306de6ffce1432bae3dc370a38a8de3


        // ! "queryURL for schedule"
        // https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=6306de6ffce1432bae3dc370a38a8de3

        // ! THis is the Ajax call template.   
        $.ajax({
                url: queryURL,
                method: "GET"
            })


            .then(function (response) {

                console.log(response)

                var = $()


                // console.log(response[0].StadiumDetails.Capacity)
            });

    });
}); //close ready fcn
