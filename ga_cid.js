/**
 * Set Google Analytics Client Id in cooke and
 * widow object to pass it with form post either get
 * it form javascript
 */
function setGaCid() {

    if(typeof ga == "undefined") {
        console.warn('package @mae/gacid object ga is not defined.. include google analytics to get ga_client_id');
        return;
    }

    ga(function(tracker) {
        var clientId = '';

        clientId = tracker.get('clientId');
        if(clientId == '') {
            clientId = ga.getAll()[0].get('clientId');
        }

        window.ga_client_id = clientId;
        document.cookie = clientId;
        console.log('ga client ' + tracker.get('clientId'));
    });
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
            setTimeout(() => {
                if(typeof checkIfAnalyticsLoaded == 'function') {
                    checkIfAnalyticsLoaded()
                }
                else {
                    console.warn('package @mae/gacid function checkIfAnalyticsLoaded is not defined!');
                }

            }, 500);
        } else {
            setGaCid();
            return;
        }
    }
}
window.onload = checkIfAnalyticsLoaded();
