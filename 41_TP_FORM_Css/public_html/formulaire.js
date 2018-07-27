/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validation(input, pattern, mss) {

    var reg = new RegExp(pattern);
    if (!reg.test(input.value)) {
        input.style.backgroundColor = "#fba";
        alert(mss);
        return false;
    } else {
        input.style.backgroundColor = "";
    }
}

function testInterne(param) {
    
    if (event.preventDefault){

    validation(document.getElementById("nom"), "^[a-zA-Z][a-zA-Z-]{1,25}", "Erreur nom");
    validation(document.getElementById("prenom"), "^[a-zA-Z][a-zA-Z-]{1,25}", "Erreur prenom");
//    validation(document.getElementById("cp"), "^[0-9]{5}$", "Erreur du code postal");
//    validation(document.getElementById("ville"), "^[a-zA-Z][a-zA-Z-]{1,40}$", "Erreur ville");
    validation(document.getElementById("mail"), "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$", "Erreur mail");
    validation(document.getElementById("telephone"), "^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$", "Erreur n° telephone");

    
        event.preventDefault();
    }
    
}

