let contador = 0;
let btnAdd = document.getElementById("btn-add");
let UserTask = document.getElementById("inp-add");
let tasks = document.getElementById("tasks");

function add() {
  if (UserTask !== "" && UserTask !== null && UserTask !== undefined) { 
    contador++;
    let novoItem = `
            <div id="${contador}" class="tarefa">
              <div class="btn-check" onclick="done(${contador})">
                <i class="fi fi-rr-memo-circle-check"></i>
              </div>
              <div id="question">${UserTask.value}</div>
              <div class="delete-btn" onclick="deletar(${contador})">
                <i class="fi fi-rr-trash"></i>
              </div>
            </div>
            `;

            tasks.innerHTML += novoItem

            UserTask.value = "";
            UserTask.focus();
 }
}

function done(id) {
  let tarefa = document.getElementById(id);
  let btnCheck = tarefa.querySelector('.btn-check, .btn-checked');

  // Verifica se a tarefa está marcada
  if (btnCheck.classList.contains('btn-check')) {
    // Marca a tarefa como concluída
    btnCheck.classList.remove('btn-check');
    btnCheck.classList.add('btn-checked');

    // Armazena a posição original da tarefa
    tarefa.dataset.originalIndex = Array.from(tasks.children).indexOf(tarefa);

    // Move a tarefa para o final da lista
    tasks.appendChild(tarefa);
  } else {
    // Desmarca a tarefa
    btnCheck.classList.remove('btn-checked');
    btnCheck.classList.add('btn-check');

    // Recupera a posição original
    let originalIndex = tarefa.dataset.originalIndex;

    // Insere a tarefa de volta na posição original
    if (originalIndex !== undefined) {
      tasks.insertBefore(tarefa, tasks.children[originalIndex]);
    }
  }
}


function deletar(id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
}
