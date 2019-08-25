/**
* Set Google Analytics Client Id in cooke and 
* widow object to pass it with form post either get
* it form javascript
*/
function setGaCid() {

    var clientId = '';

    //if directly set
    ga(function(tracker) {
        clientId = tracker.get('clientId');
    });

    //if not check if set with tag manager and have multiple then select first
    if(clientId == '') {
        ga(function(tracker) {
            clientId = ga.getAll()[0].get('clientId');
        });
    }


    //set cookie to get information in server side and window object for frontend
    document.cookie = "ga_client_id=" + clientId;
    window.ga_client_id = clientId;
}

/**
* Check Google Analytics Loaded
* retry 5 times
*/
var counter = 1;
function checkIfAnalyticsLoaded() {
    if (window.ga) {
        setGaCid();
    } else {

        //this counter set stack for this setTimeout
        counter = counter + 1;
        if (counter < 6){
            setTimeout('checkIfAnalyticsLoaded()', 500);
        } else {
            setGaCid();
            return;
        }
    }
}
window.onload = checkIfAnalyticsLoaded();