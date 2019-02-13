console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery');
    $('#addRestaurantButton').on('click', addRestaurant);
}//end onReady 


function getRestaurants() {
    $.ajax({
        type: 'GET',
        url: 'restaurants'
    }).then(function (response) {
        $('#restaurantTableBody').empty();
        for (let i = 0; i < response.length; i++) {
            $('#restaurantTableBody').append(`
                <tr>
                    <td>${response[i].name}</td>
                    <td>${response[i].type}</td>
                </tr>
            `);
        }
    })
}//end getRestaurants

function addRestaurant() {
    console.log('addRestaurant being clicked');
    let restaurantName = $('#restaurantName').val();
    let restaurantType = $('#restaurantType').val();
    $('#restaurantName').val('');
    $('#restaurantType').val('');
}//end addRestaurant

