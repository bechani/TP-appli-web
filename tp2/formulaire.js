function validation()
{
  var nom = document.getElementById("nom").value;
 
  if(nom.length < 5){
    // afficher le block error
    document.getElementById("error").style.display = "block"; 
    // masquer le block resultat
    document.getElementById("resultat").style.display = "none"; 
  
  } else {
      document.getElementById("error").style.display = "none"; 
      document.getElementById("resultat").style.display = "block"; 

      // ca
      //document.getElementById("resultat").innerHTML="Bienvenue "+ document.getElementById("prenom").value;
      // ou ca
      document.getElementById("resultat").innerHTML="Bienvenue "+ document.querySelector("#prenom").value;
      
  }
}

{

  var adresse = document.getElementById("adresse").value;
  
  if(adresse.length < 5){
    // afficher le block error
    document.getElementById("error").style.display = "block"; 
    // masquer le block resultat
    document.getElementById("resultat").style.display = "none"; 
      
  } else {
      document.getElementById("error").style.display = "none"; 
      document.getElementById("resultat").style.display = "block"; 
  
      // ca
      document.getElementById("resultat").innerHTML="Bienvenue "+ document.getElementById("adresse").value;
      // ou ca
      //document.getElementById("resultat").innerHTML="Bienvenue "+ document.querySelector("#adresse").value;
  }
}