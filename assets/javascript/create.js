$(function() {
    //get the current user from session 
    //if user not present, then redirect to index.html

    //save button clink event
    $(document).on("click", "#btnCreateEvent", function(event) {
        event.preventDefault();
        //validate the data
        //if error throw error back
        //update the database with details
        var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));

        console.log("on click event");

        var crammingUser = {
            "id": userSessionEntity.id,
            "name": $("#validationName").val(),
        };
        database.ref("/crammingUsers").push(crammingUser);
        //redirect the feed page
        window.location.href = "feed.html";
    });

    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        var autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */
            (document.getElementById('autocomplete')));

    };
    initAutocomplete();
});