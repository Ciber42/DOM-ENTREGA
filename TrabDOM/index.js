document.addEventListener("DOMContentLoaded", function () {
    var selectHora = document.getElementById("hora");

    for (var i = 6; i <= 22; i++) {
        var hora = i < 10 ? "0" + i : i;
        var option = document.createElement("option");
        option.value = i;
        option.text = hora + ":00";
        selectHora.appendChild(option);
    }

    var form = document.getElementById("formtarefas");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var texto = document.getElementById("texto").value;
        var tipoTarefa = document.getElementById("tarefa").value;
function arquivar() {
    var texto = document.getElementById("texto").value;}        
    var horaSelecionada = document.getElementById("hora").value;

        if (texto === "" || tipoTarefa === "" || horaSelecionada === "") {
            alert("Preencher todos os dados.");
            return;
        }

        var caixa = document.createElement("div");
        caixa.classList.add("div-shadow");

        var descricao = document.createElement("span");
        descricao.innerHTML = "Descrição da Tarefa: " + texto;
        caixa.appendChild(descricao);

        var hora = document.createElement("span");
        hora.innerHTML = "Hora da Tarefa: " + horaSelecionada + ":00";
        caixa.appendChild(hora);

        var tipo = document.createElement("span");
        tipo.innerHTML = "Tipo de Atividade: " + tipoTarefa;
        caixa.appendChild(tipo);

        var excluir = document.createElement("button");
        excluir.classList = "btn-add";
        excluir.innerHTML = "Excluir";
        excluir.addEventListener("click", function () {
            caixa.remove();
        });
        caixa.appendChild(excluir);

        var editar = document.createElement("button");
        editar.classList = "btn-add";
        editar.innerHTML = "Editar";
        editar.addEventListener("click", function () {
            var alterar = prompt(" Nome da tarefa: (" +  texto + ") Altere o Nome");
            if (alterar !== null && alterar !== "") {
                descricao.innerHTML = "Descrição da Tarefa: " + alterar;
                texto = alterar;
            }

            var alterarHora = prompt("Hora da tarefa: (" + horaSelecionada + ") Altere a Hora");
            if (alterarHora !== null && alterarHora !== "") {
                hora.innerHTML = "Hora da Tarefa: " + alterarHora + ":00";
                horaSelecionada = alterarHora;
            }

            var alterarTipo = prompt("Tipo de atividade: (" + tipoTarefa + ") Altere a Atividade");
            if (alterarTipo !== null && alterarTipo !== "") {
                tipo.innerHTML = " Tipo de Atividade: " + alterarTipo;
                tipoTarefa = alterarTipo;
            }
        });
        caixa.appendChild(editar);

        document.body.appendChild(caixa);
    });
});
