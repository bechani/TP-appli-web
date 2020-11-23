
$(document).ready(function () {


    //afficher le nombre de caractère saisie en temps réel pour chaque input:
    //je cible tous les inputes par la classe "form-control" et je calcule this.val.length et je l'affiche dns un div de class "compteur" pour ts les inputes 
    //.parent() ça fait remonter l’élémént ciblé d’1 niveau $(this): cible ton <input> et $(this).parent() : cible l’élément parent de <input> = <div class="col-sm-9>

    $('.form-control').keyup(function () {

        var nombreCaractere = $(this).val().length;
        $(this).parent().parent().find(".compteur").text(nombreCaractere + " car.");
    })

    //Affichage du datepicker jQuery:
    $("#date").datepicker({

        dateFormat: "dd-mm-yy",
        maxDate: " ",

    });

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
            //Enregistrer le contact dans un tableau JSON 
            contactStore.add($('#nom').val(), $('#prenom').val(), $('#date').val(), $('#adresse').val(), $('#email').val());

            //Affichage des contacts dans le tableau
            $("#table_contact tbody").html("");
            for (var i in contactStore.getList()) {
               
                $("#table_contact tbody").append(
                    '<tr>' +
                    '<th scope="row">' + i + '</th>' +
                    '<td>' + contactStore.getList()[i].name + '</td>' +
                    '<td>' + contactStore.getList()[i].firstname + '</td>' +
                    '<td>' + contactStore.getList()[i].date + '</td>' +
                    '<td>' + contactStore.getList()[i].adress + '</td>' +
                    '<td>' + contactStore.getList()[i].mail + '</td>' +
                    '</tr>'
                );
            }


        } else {

            $('#myModal').modal({ show: true })
            $(".modal-body").html('Veuillez renseigner tous les champs s\'il vous plait');

        }
    });





});

