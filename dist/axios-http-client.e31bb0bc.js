// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
// Axios globals.
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; // GET request.

function getTodos() {
  // 	axios({
  // 		method: 'get',
  // 		url: 'https://jsonplaceholder.typicode.com/todos',
  // 		params: {
  // 			_limit: 8,
  // 		},
  // 	})
  // 		.then((res) => showOutput(res))
  // 		.catch((err) => console.error(err));
  axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      _limit: 8
    }
  }).then(function (res) {
    return showOutput(res);
  }).catch(function (err) {
    return console.error(err);
  });
} // POST request.


function addTodo() {
  // axios({
  // 	method: 'post',
  // 	url: 'https://jsonplaceholder.typicode.com/todos',
  // 	data: {
  // 		title: 'New ToDo',
  // 		completed: false,
  // 	},
  // })
  // 	.then((res) => showOutput(res))
  // 	.catch((err) => console.error(err));
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'New ToDo',
    completed: false
  }).then(function (res) {
    return showOutput(res);
  }).catch(function (err) {
    return console.error(err);
  });
} // PUT/PATCH request.


function updateTodo() {
  // axios
  // .put('https://jsonplaceholder.typicode.com/todos/1', {
  // 	title: 'Updated using PUT',
  // 	completed: true,
  // })
  // .then((res) => showOutput(res))
  // .catch((err) => console.error(err));
  axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
    title: 'Updated using PATCH',
    completed: true
  }).then(function (res) {
    return showOutput(res);
  }).catch(function (err) {
    return console.error(err);
  });
} // DELETE request.


function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
    return showOutput(res);
  }).catch(function (err) {
    return console.error(err);
  });
} // Simultaneous data.


function getData() {
  // axios
  // 	.all([axios.get('https://jsonplaceholder.typicode.com/todos'), axios.get('https://jsonplaceholder.typicode.com/posts')])
  // 	.then((res) => {
  // 		console.log(res[0]);
  // 		console.log(res[1]);
  // 		showOutput(res[1]);
  // 	})
  // 	.catch((err) => console.error(err));
  axios.all([axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8'), axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')]).then(axios.spread(function (todos, posts) {
    return showOutput(posts);
  })).catch(function (err) {
    return console.error(err);
  });
} // Custom headers


function customHeaders() {
  var config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'jwt-token'
    }
  };
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'New ToDo',
    completed: false
  }, config).then(function (res) {
    return showOutput(res);
  }).catch(function (err) {
    return console.error(err);
  });
} // Transforming requests and responses.


function transformResponse() {
  var options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello there?'
    },
    transformResponse: axios.defaults.transformResponse.concat(function (data) {
      data.title = data.title.toUpperCase();
      return data;
    })
  };
  axios(options).then(function (res) {
    return showOutput(res);
  });
} // Error handling.


function errorHandling() {
  axios.get('https://jsonplaceholder.typicode.com/todoss').then(function (res) {
    return showOutput(res);
  }).catch(function (err) {
    if (err.response) {
      // server responded with a status other than 200 range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);

      if (err.response.status === 404) {
        alert('Error: Page Not Found');
      }
    } else if (err.request) {
      // Request was made but no response
      console.error(err.request);
    } else {
      console.error(err.message);
    }
  });
} // Cancel token.


function cancelToken() {
  var source = axios.CancelToken.source();
  axios.get('https://jsonplaceholder.typicode.com/todos', {
    cancelToken: source.token
  }).then(function (res) {
    return showOutput(res);
  }).catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    }
  });

  if (true) {
    source.cancel('Request canceled!');
  }
} // Intercepting requests and responses.


axios.interceptors.request.use(function (config) {
  console.log("".concat(config.method.toUpperCase(), " request sent to ").concat(config.url, " at ").concat(new Date().getTime()));
  return config;
}, function (error) {
  return Promise.reject(error);
}); // Axios Instances.

var axiosInstance = axios.create({
  // Other custom settings
  baseURL: 'https://jsonplaceholder.typicode.com'
}); // axiosInstance.get('/comments').then(res => showOutput(res));
// Show output in browser

function showOutput(res) {
  document.getElementById('res').innerHTML = "\n  <div class=\"card card-body mb-4\">\n    <h5>Status: ".concat(res.status, "</h5>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      Headers\n    </div>\n    <div class=\"card-body\">\n      <pre>").concat(JSON.stringify(res.headers, null, 2), "</pre>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      Data\n    </div>\n    <div class=\"card-body\">\n      <pre>").concat(JSON.stringify(res.data, null, 2), "</pre>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      Config\n    </div>\n    <div class=\"card-body\">\n      <pre>").concat(JSON.stringify(res.config, null, 2), "</pre>\n    </div>\n  </div>\n");
} // Event listeners


document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54617" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/axios-http-client.e31bb0bc.js.map