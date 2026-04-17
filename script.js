let alunos = [];

        document.getElementById('btnCadastrar').onclick = function() {
            
            const nome = document.getElementById('novoAluno').value;
            const nota1 = parseFloat(document.getElementById('nota1').value);
            const nota2 = parseFloat(document.getElementById('nota2').value); 

            if (nome && !isNaN(nota1) && !isNaN(nota2)) {

                const media = (nota1 + nota2) / 2;

                let aluno = {
                    nome: nome,
                    nota1: nota1,
                    nota2: nota2,
                    media: media
                };

                alunos.push(aluno);

                const status = media >= 7 ? "Aprovado" : "Reprovado";

                alert(`Aluno cadastrado com sucesso! ${status} com média: ${media.toFixed(2)}`);

                limparCampos();

            } else {
                alert("Por favor, preencha todos os campos corretamente.");
            }
        };

        document.getElementById('btnListar').onclick = function() {
            let output = "<h3>Lista de Alunos:</h3>";

            alunos.forEach(aluno => {
                output += `Nome: ${aluno.nome} | Média: ${aluno.media.toFixed(2)}<br>`;
            });

            document.getElementById('Listado').innerHTML = output;
        };

        function limparCampos() {
            document.getElementById('novoAluno').value = "";
            document.getElementById('nota1').value = "";
            document.getElementById('nota2').value = "";
        }

        
