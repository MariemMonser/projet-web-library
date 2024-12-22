function bienvenue(){
	alert("veuillez remplir le formulaire suivant");
}
function verif(){
    let user = document.getElementById("User").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let num = document.getElementById("numcard").value;
    let cpass = document.getElementById("cpass").value;
    let b1 = document.getElementById("chekb1").checked;
    let b2 = document.getElementById("chekb2").checked;
    if (user.length==0){
         alert("il faut remplir ton nom");return false; 
        
    }
    if (!mail.includes("@gmail.com")) {
        alert("Entrer un mail valid sous forme nomprenom@gmail.com");return false;
    }
    if (pass.length < 3) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        return false;
    }
    if (pass!=cpass){
        alert("Confirmer Vote Mot De Passe");return false;
    }
    if(num.length!=16){
        alert("verifier Le Numéro De La Carte.");
        return false;
    }

    if (!b1 || !b2) {
        alert("Vous devez accepter les termes et conditions et sauvegarder votre compte.");
        return false;
    }
    
}
function resetForm() {
  document.getElementById("form").reset();
}