console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery');
    $('#addRestaurantButton').on('click', addRestaurant);
    $('#restaurantTableBody').on('click', '.deleteButton', deleteRestaurant);
    $('#restaurantTableBody').on('click', '.saveButton', saveRestaurant);
    getRestaurants();
}//end onReady 


function getRestaurants() {
    $.ajax({
        type: 'GET',
        url: '/restaurants'
    }).then(function (response) {
        $('#restaurantTableBody').empty();
        for (let i = 0; i < response.length; i++) {
            $('#restaurantTableBody').append(`
                <tr>
                    <td>${response[i].restaurant_name}</td>
                    <td>${response[i].restaurant_type}</td>
                    <td><input value="${response[i].rating}"/></td>
                    <td><button class="saveButton" data-id="${response[i].id}">Save</button>
                    <td><button class="deleteButton" data-id="${response[i].id}">Delete</button></td>
                </tr>
            `);
        }
    })
}//end getRestaurants

function addRestaurant() {
    let restaurantName = $('#restaurantName').val();
    let restaurantType = $('#restaurantType').val();
    let restaurantRating = $('#restaurantRating').val();
    $('#restaurantName').val('');
    $('#restaurantType').val('');
    $('#restaurantRating').val('');
    $.ajax({
        type: 'POST',
        url: '/restaurants',
        data: {
            restaurantName: restaurantName,
            restaurantType: restaurantType,
            restaurantRating: restaurantRating
        }
    }).then(function () {
        getRestaurants();
    })
}//end addRestaurant

function deleteRestaurant() {
    console.log('delete was clicked!');
    console.log($(this).data().id);
    restaurantId = $(this).data().id;
    $.ajax({
        type: 'DELETE',
        url: '/restaurants/' + restaurantId

    }).then(function () {
        getRestaurants();
    })
}// deleteRestaurant

function saveRestaurant() {
    console.log('save was clicked!');
    console.log($(this).data().id);
    restaurantId = $(this).data().id;
    $.ajax({
        type: 'PUT',
        url: '/restaurants/' + restaurantId,
        data: {
            rating: $(this).closest('tr').find('input').val()
        }
    }).then(function () {
        getRestaurants();
    })
}// saveRestaurant