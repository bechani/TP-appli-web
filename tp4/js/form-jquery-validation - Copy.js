$(document).ready(function () {


    $("#button").click(function (event) {

        event.preventDefault();


        if (($("#nom").val() && $("#prenom").val() && $("#date").val() && $("#adresse").val() && $("#email").val()) != "") {


            $('#myModal').modal({ show: true })
            $(".modal-title").text("Bienvenue " + $("#prenom").val());

            var city = $("#adresse").val();
            var date = $("#date").val();
            $('#modal-content').html(image);
            var image = '<img width="250px" src="https://maps.googleapis.com/maps/api/staticmap?markers='+city+'&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg">';
  

            $(".modal-body").html(`Vous êtes nés ${date} et vous habitez :
            <a class="link"  href="http://maps.google.com/maps?" ><img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Lien Google Maps </a>`);

        } else {

            $('#myModal').modal({ show: true })
            $(".modal-body").html('Veuillez renseigner tous les champs s\'il vous plait');

        }
    });





});




