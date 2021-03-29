/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
   
    $("#beolvas").on("click", beolvas);
    $("#add").on("click", adatKuld);
//    $("article").delegate(".torol", "click", adatTorol);
//    $("article").delegate(".szerkeszt", "click", adatSzerkeszt);
//    $("#megse").on("click", adatMegse);
//    $("#modosit").on("click", adatModosit);
    
});
function beolvas(){
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function(result){
            console.log(result);
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem);
            kiir();
        },
        error:function(){
            alert("Hiba az adatok betöltésekor!");
        }
    });
}