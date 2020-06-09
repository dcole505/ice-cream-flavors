$(document).ready(function(){
  const flavors = ["Fudge Brownie", "Salted-Caramel", "Pistachio", "Butter Pecan", "Charcoal"];

  flavors.forEach(function(flavor){
    $("#display-flavors").append("<li>" + flavor + "</li>");
  });
})