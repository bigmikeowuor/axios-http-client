// GET request.
function getTodos() {
	// 	axios({
	// 		method: 'get',
	// 		url: 'http://jsonplaceholder.typicode.com/todos',
	// 		params: {
	// 			_limit: 8,
	// 		},
	// 	})
	// 		.then((res) => showOutput(res))
	// 		.catch((err) => console.error(err));

	axios
		.get('http://jsonplaceholder.typicode.com/todos', { params: { _limit: 8 } })
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// POST request.
function addTodo() {
	// axios({
	// 	method: 'post',
	// 	url: 'http://jsonplaceholder.typicode.com/todos',
	// 	data: {
	// 		title: 'New ToDo',
	// 		completed: false,
	// 	},
	// })
	// 	.then((res) => showOutput(res))
	// 	.catch((err) => console.error(err));

	axios
		.post('http://jsonplaceholder.typicode.com/todos', {
			title: 'New ToDo',
			completed: false,
		})
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// PUT/PATCH request.
function updateTodo() {
	// axios
	// .put('http://jsonplaceholder.typicode.com/todos/1', {
	// 	title: 'Updated using PUT',
	// 	completed: true,
	// })
	// .then((res) => showOutput(res))
	// .catch((err) => console.error(err));

	axios
		.patch('http://jsonplaceholder.typicode.com/todos/1', {
			title: 'Updated using PATCH',
			completed: true,
		})
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// DELETE request.
function removeTodo() {
	axios
		.delete('http://jsonplaceholder.typicode.com/todos/1')
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
	console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
	console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
	console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
	console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
	console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
	document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
