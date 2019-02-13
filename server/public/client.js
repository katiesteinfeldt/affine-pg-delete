console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery');
    $('#addRestaurantButton').on('click', addRestaurant);
}//end onReady 

function addRestaurant() {
    console.log('addRestaurant being clicked');
    let restaurantName = $('#restaurantName').val();
    let restaurantType = $('#restaurantType').val();
    $('#restaurantName').val('');
    $('#restaurantType').val('');
}//end addRestaurant