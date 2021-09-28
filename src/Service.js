const baseUrl = "http://localhost:5000/";
const requestOptionsBuilder = (method, body, headers) => {
  let options =  {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  }
  if (body)
    options['body'] = JSON.stringify(body);
  if (headers)
    options.headers = headers;
  return options;
};
const get = async (path, params) => {
  path = sanitizePath(path);
  if (params)
    path += new URLSearchParams(params);
  const response = await fetch(baseUrl + path);
  const data = await response.json();
  if (response.status >= 400 && response.status < 600) {
    return Promise.reject(response);
  }
  return data;
}
const post = async (path, body) => {
  path = sanitizePath(path);
  const response = await fetch(baseUrl + path, requestOptionsBuilder('POST', body));
  const data = await response.json();
  if (response.status >= 400 && response.status < 600) {
    return Promise.reject(response);
  }
  return data;
}
const put = async (path, body) => {
  path = sanitizePath(path);
  const response = await fetch(baseUrl + path, requestOptionsBuilder('PUT', body));
  const data = await response.json();
  if (response.status >= 400 && response.status < 600) {
    return Promise.reject(response);
  }
  return data;
}
const remove = async (path) => {
  path = sanitizePath(path);
  const response = await fetch(baseUrl + path, requestOptionsBuilder('DELETE'));
  const data = await response.json();
  if (response.status >= 400 && response.status < 600) {
    return Promise.reject(response);
  }
  return data;
}
const sanitizePath = (p) => p.charAt && p.charAt(0) === '/' ? p.slice(1) : p;
const Service = {get, post, put, delete: remove};
export default Service;
