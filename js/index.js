$(document).ready(function () {
    $('#submit-btn').click(function () {
        event.preventDefault();

        //storing the textbox entry in the city 
        var city = $('#city-type').val().toLowerCase().trim();
        if (city == "new york" || city == "new york city" || city == "nyc") {
            $('body').attr('class', 'nyc');
            $('#city-type').val('');
        }
        else if (city == "san francisco" || city == "bay area" || city == "sf") {
            $('body').attr('class', 'sf');
            $('#city-type').val('');
        }
        else if (city == "los angeles" || city == "la" || city == "lax") {
            $('body').attr('class', 'la');
            $('#city-type').val('');
        }
        else if (city == "austin" || city == "atx") {
            $('body').attr('class', 'austin');
            $('#city-type').val('');
        }
        else if (city == "sydney" || city == "syd") {
            $('body').attr('class', 'sydney');
            $('#city-type').val('');
        }
            //alert to check if the city name is valid string
        else if (!isNaN(city)) {

            $('body').removeClass('nyc sydney la austin');
            $('#city-type').val('');
            alert("Please enter a proper city name");
            return;
        }
            //alert to check  if the city name is appropriate
        else {
            $('body').removeClass('nyc sydney la austin');
            $('#city-type').val('');
            alert("Please enter a proper city name");
            return;
        }
    });
});