// JavaScript Document
angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'cong viec 1', done:true},
      {text:'cong viec 2', done:false},
	    {text:'cong viec 3', done:true},
	    {text:'cong viec 4', done:false},
	    {text:'cong viec 5', done:true}
	  ];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:true});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });