
// html references
const divtodoList = document.querySelector('.todo-list');


export const createTodoHtml = (todo) => {
  
  const todoHtml = ` <li class="${ (todo.completed) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
							<label>${todo.todo}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li> `;
  const div = document.createElement('div');
  div.innerHTML = todoHtml;

  
  divtodoList.append(div.firstElementChild);

  
  return div;
} 