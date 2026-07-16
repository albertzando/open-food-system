function abrirTela(tela){

const conteudo = document.getElementById("conteudo");

if(tela=="dashboard"){

conteudo.innerHTML=`
<h2>Dashboard</h2>
<p>Resumo geral da operação.</p>
`;

}

if(tela=="inventario"){

conteudo.innerHTML=`
<h2>Inventário</h2>
<p>Lista de equipamentos.</p>
`;

}

if(tela=="equipe"){

conteudo.innerHTML=`
<h2>Equipe</h2>
<p>Colaboradores.</p>
`;

}

if(tela=="compras"){

conteudo.innerHTML=`
<h2>Compras</h2>
<p>Itens para aquisição.</p>
`;

}

if(tela=="cronograma"){

conteudo.innerHTML=`
<h2>Cronograma</h2>
<p>Planejamento da operação.</p>
`;

}

if(tela=="checklist"){

conteudo.innerHTML=`
<h2>Checklist</h2>
<p>Checklists operacionais.</p>
`;

}

}

abrirTela("dashboard");
