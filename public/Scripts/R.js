/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ajaxError(function(e, xhr, settings, err) {
    console.log(xhr);
    alert(err);
})

$(document).on("click", "nav ul li", function() {
    $.get("http://localhost:8000/" + $(this).attr("data-re"), {}, function (r) { console.log(r); $("#company-info").html(r); }, "text")
    
})