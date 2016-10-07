// document.getElementById('add-btn').addEventListener('click', add);
show();

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    // document.getElementById('task').setItem('');
    show();

    return false;
}

function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str != null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function show() {
    var todos = get_todos();

    // var html = '<ul>';
    var html = '';
    for(var i=0; i<todos.length; i++) {
        html += '<h3>' + todos[i] + '<button class="remove btn btn-remove" id="' + i  + '">X</button></h3>';
    };
    // html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
