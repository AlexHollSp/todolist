  /**
 * Lista de Tarefas - Sistema simples para adicionar e remover itens
 * 
 * Este código implementa uma lista dinâmica onde o usuário pode adicionar novos itens
 * através de um campo de texto e remover itens existentes clicando em "Excluir".
 */

// Seleção dos elementos HTML necessários
let listElement = document.querySelector('.list');         // Elemento que contém a lista de itens
let textElement = document.querySelector('input');         // Campo de entrada de texto
let buttonElement = document.querySelector('button');      // Botão para adicionar itens

// Array inicial com itens pré-definidos
let arr = [
  'Conteúdo 1',
  'Conteúdo 2',
  'Conteúdo 3',
];

/**
 * Renderiza todos os itens da lista na interface
 * Esta função limpa a lista atual e recria todos os elementos baseados no array 'arr'
 */
function renderTodo() {
    // Código comentado (loop for tradicional)
    /*
    for(var i = 0; i < arr.length; i++){
        console.log(i)
    }
    */
    
    // Limpa o conteúdo atual da lista
    listElement.innerHTML = '';
    
    // Itera sobre cada item do array usando forEach
    arr.forEach((item, index) => {
        // Cria os elementos necessários para cada item da lista
        var liElement = document.createElement('li');                // Elemento de lista
        var liText = document.createTextNode(item);                  // Texto do item
        var linkLi = document.createElement('a');                    // Link para excluir
        var TextLink = document.createTextNode('Excluir');           // Texto do link
        
        // Configura o link de exclusão
        linkLi.setAttribute('href', '#');                            // Previne navegação ao clicar
        linkLi.setAttribute('onclick', 'deleteItem('+ index +')');   // Associa função de exclusão com o índice correto
        
        // Adiciona o texto ao link
        linkLi.appendChild(TextLink);
        
        // Monta o elemento de lista com seu texto e link de exclusão
        liElement.appendChild(liText);
        liElement.appendChild(linkLi);
        
        // Adiciona o item completo à lista no DOM
        listElement.appendChild(liElement);
        
        // Código comentado (alternativa usando addEventListener)
        //linkElement.addEventListener('click', deleteItem);
    });
}

// Renderiza a lista inicial ao carregar a página
renderTodo();

// Adiciona um listener de evento ao botão para chamar a função addItem quando clicado
buttonElement.addEventListener('click', addItem);

/**
 * Adiciona um novo item à lista
 * Captura o texto do campo de entrada e adiciona ao array, depois atualiza a visualização
 */
function addItem() {
  var itemTexto = textElement.value;  // Obtém o texto do campo de entrada
  arr.push(itemTexto);                // Adiciona o texto ao final do array
  renderTodo();                       // Atualiza a visualização da lista
}

/**
 * Remove um item da lista
 * @param {number} pos - A posição (índice) do item a ser removido
 */
function deleteItem(pos) {
  arr.splice(pos, 1);                 // Remove 1 elemento na posição 'pos' do array
  renderTodo();                       // Atualiza a visualização da lista
}
