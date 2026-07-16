ffetch("data/equipe.json")
.then(r=>r.json())
.then(equipe=>{

document.getElementById("totalEquipe").innerHTML=equipe.length;

});
