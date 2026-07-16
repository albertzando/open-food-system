fetch("data/equipe.json")
  .then(response => response.json())
  .then(equipe => {

    const conteudo = document.getElementById("conteudo");

    equipe.forEach(pessoa => {

      conteudo.innerHTML += `
        <div style="border:1px solid #ccc; padding:15px; margin:10px; border-radius:8px;">
          <h2>${pessoa.nome}</h2>
          <p><strong>Função:</strong> ${pessoa.funcao}</p>
        </div>
      `;

    });

  });
