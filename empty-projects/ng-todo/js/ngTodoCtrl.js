ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {

	$scope.todos = [
		{ val: "A new cool thing", complete: false},
		{ val: "A newer cool thing", complete: true},
		{ val: "A new cooler thing", complete: false},
		{ val: "A newer cooler thing", complete: false},
		{ val: "A newest cool thing", complete: false},
		{ val: "A new coolest thing", complete: true}
	];
});