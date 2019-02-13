console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery');
    $('#addRestaurantButton').on('click', addRestaurant);
    getRestaurants();
}//end onReady 


function getRestaurants() {
    $.ajax({
        type: 'GET',
        url: '/restaurants'
    }).then(function (response) {
        console.log(response);
        $('#restaurantTableBody').empty();
        for (let i = 0; i < response.length; i++) {
            $('#restaurantTableBody').append(`
                <tr>
                    <td>${response[i].restaurant_name}</td>
                    <td>${response[i].restaurant_type}</td>
                </tr>
            `);
        }
    })
}//end getRestaurants

function addRestaurant() {
    console.log('in addRestaurant function');
    let restaurantName = $('#restaurantName').val();
    let restaurantType = $('#restaurantType').val();
    $('#restaurantName').val('');
    $('#restaurantType').val('');
    $.ajax({
        type: 'POST',
        url: '/restaurants',
        data: {
            restaurantName: restaurantName,
            restaurantType: restaurantType
        }
    }).then(function () {
        getRestaurants();
    })
}//end addRestaurant

