$(function() {
    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        var autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */
            (document.getElementById('autocomplete')));

    };
    initAutocomplete();

    //save button clink event
    $(document).on("click", "#btnCreateEvent", async function(event) {
        event.preventDefault();
        //validate the data
        //if error throw error back
        //update the database with details
        var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));

        console.log("on click event");

        var crammingClique = {
            "id": null,
            "host": userSessionEntity.email,//"ravish.rao@gmail.com",//,
            "title": $("#eventTitle").val(),
            "description": $("#description").val(),
            "where": $("#autocomplete").val(),
            "date": $("#date").val(),
            "time": $("#time").val(),
            "attendees": [{
                "attendee": userSessionEntity.email//"ravish.rao@gmail.com"//
            }]
        };

        try {
            var insertStatus = await insertNewEventDetails(crammingClique);
        } catch (e) {
            console.log(e);
            console.log("I am at 6");
        }
        //redirect the feed page
        window.location.href = "feed.html";
    });


});