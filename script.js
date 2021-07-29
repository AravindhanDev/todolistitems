/** @format */

function get_todos() {
	var todos = new Array();
	var todos_str = localStorage.getItem('todo');
	if (todos_str !== null) {
		todos = JSON.parse(todos_str);
	}
	return todos;
}

function add() {
	var task = document.getElementById('task').value;
	if (task !== '') {
		var todos = get_todos();
		todos.push(task);
		localStorage.setItem('todo', JSON.stringify(todos));

		show();
		return false;
	}
}

function remove() {
	var id = this.getAttribute('id');
	var todos = get_todos();
	todos.splice(id, 1);
	localStorage.setItem('todo', JSON.stringify(todos));

	show();

	return false;
}

function show() {
	var todos = get_todos();

	var html = '<ul>';
	for (var i = 0; i < todos.length; i++) {
		html +=
			'<li>' +
			todos[i] +
			'<button class="remove" id="' +
			i +
			'"><i class="fas fa-trash"></i></button> </li>';
	}
	html += '</ul>';

	document.getElementById('todos').innerHTML = html;

	var buttons = document.querySelectorAll('.remove');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', remove);
	}
}

document.getElementById('add').addEventListener('click', function () {
	add();
	task.value = '';
});

document.getElementById('task').addEventListener('keydown', function (e) {
	if (e.keyCode == 13) {
		add();
		task.value = '';
	}
});
show();
