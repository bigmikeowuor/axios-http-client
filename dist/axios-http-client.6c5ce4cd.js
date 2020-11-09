parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(){axios.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:8}}).then(function(e){return l(e)}).catch(function(e){return console.error(e)})}function t(){axios.post("https://jsonplaceholder.typicode.com/todos",{title:"New ToDo",completed:!1}).then(function(e){return l(e)}).catch(function(e){return console.error(e)})}function n(){axios.patch("https://jsonplaceholder.typicode.com/todos/1",{title:"Updated using PATCH",completed:!0}).then(function(e){return l(e)}).catch(function(e){return console.error(e)})}function o(){axios.delete("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return l(e)}).catch(function(e){return console.error(e)})}function c(){axios.all([axios.get("https://jsonplaceholder.typicode.com/todos?_limit=8"),axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")]).then(axios.spread(function(e,t){return l(t)})).catch(function(e){return console.error(e)})}function s(){axios.post("https://jsonplaceholder.typicode.com/todos",{title:"New ToDo",completed:!1},{headers:{"Content-Type":"application/json",Authorization:"jwt-token"}}).then(function(e){return l(e)}).catch(function(e){return console.error(e)})}function r(){var e={method:"post",url:"https://jsonplaceholder.typicode.com/todos",data:{title:"Hello there?"},transformResponse:axios.defaults.transformResponse.concat(function(e){return e.title=e.title.toUpperCase(),e})};axios(e).then(function(e){return l(e)})}function i(){axios.get("https://jsonplaceholder.typicode.com/todoss").then(function(e){return l(e)}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers),404===e.response.status&&alert("Error: Page Not Found")):e.request?console.error(e.request):console.error(e.message)})}function a(){var e=axios.CancelToken.source();axios.get("https://jsonplaceholder.typicode.com/todos",{cancelToken:e.token}).then(function(e){return l(e)}).catch(function(e){axios.isCancel(e)&&console.log("Request canceled",e.message)}),e.cancel("Request canceled!")}axios.defaults.headers.common["X-Auth-Token"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",axios.interceptors.request.use(function(e){return console.log("".concat(e.method.toUpperCase()," request sent to ").concat(e.url," at ").concat((new Date).getTime())),e},function(e){return Promise.reject(e)});var d=axios.create({baseURL:"https://jsonplaceholder.typicode.com"});function l(e){document.getElementById("res").innerHTML='\n  <div class="card card-body mb-4">\n    <h5>Status: '.concat(e.status,'</h5>\n  </div>\n  <div class="card mt-3">\n    <div class="card-header">\n      Headers\n    </div>\n    <div class="card-body">\n      <pre>').concat(JSON.stringify(e.headers,null,2),'</pre>\n    </div>\n  </div>\n  <div class="card mt-3">\n    <div class="card-header">\n      Data\n    </div>\n    <div class="card-body">\n      <pre>').concat(JSON.stringify(e.data,null,2),'</pre>\n    </div>\n  </div>\n  <div class="card mt-3">\n    <div class="card-header">\n      Config\n    </div>\n    <div class="card-body">\n      <pre>').concat(JSON.stringify(e.config,null,2),"</pre>\n    </div>\n  </div>\n")}document.getElementById("get").addEventListener("click",e),document.getElementById("post").addEventListener("click",t),document.getElementById("update").addEventListener("click",n),document.getElementById("delete").addEventListener("click",o),document.getElementById("sim").addEventListener("click",c),document.getElementById("headers").addEventListener("click",s),document.getElementById("transform").addEventListener("click",r),document.getElementById("error").addEventListener("click",i),document.getElementById("cancel").addEventListener("click",a);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/axios-http-client.6c5ce4cd.js.map