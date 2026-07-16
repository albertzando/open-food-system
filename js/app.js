fetch("data/equipe.json")
.then(res => res.json())
.then(equipe=>{

const conteudo=document.getElementById("conteudo");

conteudo.innerHTML="";

equipe.forEach(pessoa=>{

conteudo.innerHTML+=`

<div class="card">

<h2>${pessoa.nome}</h2>

<p class="funcao">${pessoa.funcao}</p>

<span class="badge">Ativo</span>

</div>

`;

});

});
