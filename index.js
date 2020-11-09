// Axios globals.
axios.defaults.headers.common['X-Auth-Token'] =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

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

// Simultaneous data.
function getData() {
	// axios
	// 	.all([axios.get('http://jsonplaceholder.typicode.com/todos'), axios.get('http://jsonplaceholder.typicode.com/posts')])
	// 	.then((res) => {
	// 		console.log(res[0]);
	// 		console.log(res[1]);
	// 		showOutput(res[1]);
	// 	})
	// 	.catch((err) => console.error(err));

	axios
		.all([axios.get('http://jsonplaceholder.typicode.com/todos?_limit=8'), axios.get('http://jsonplaceholder.typicode.com/posts?_limit=5')])
		.then(axios.spread((todos, posts) => showOutput(posts)))
		.catch((err) => console.error(err));
}

// Custom headers
function customHeaders() {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'jwt-token',
		},
	};

	axios
		.post(
			'http://jsonplaceholder.typicode.com/todos',
			{
				title: 'New ToDo',
				completed: false,
			},
			config
		)
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// Transforming requests and responses.
function transformResponse() {
	const options = {
		method: 'post',
		url: 'http://jsonplaceholder.typicode.com/todos',
		data: {
			title: 'Hello there?',
		},
		transformResponse: axios.defaults.transformResponse.concat((data) => {
			data.title = data.title.toUpperCase();
			return data;
		}),
	};

	axios(options).then((res) => showOutput(res));
}

// Error handling.
function errorHandling() {
	console.log('Error Handling');
}

// Cancel token.
function cancelToken() {
	console.log('Cancel Token');
}

// Intercepting requests and responses.
axios.interceptors.request.use(
	(config) => {
		console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

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
