if (typeof window != 'undefined') {
    var body = window.document.getElementsByTagName("body")[0];
    
    const timedateStyles = window.getComputedStyle(document.getElementById('top'), "");
    }

function currentDate() {

    var dateObj = new Date();
    //var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const shortName = dateObj.toLocaleString('en-US', {month: 'short'});
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    var shortDate = shortName + ' ' + date + ' ' + year;
    document.getElementById('date').innerHTML = shortDate;
//alert(shortDate);
}