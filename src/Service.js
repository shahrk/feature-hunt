const baseUrl = "http://localhost:5000/";
 //const baseUrl = "https://damp-citadel-25681.herokuapp.com/"

//  const requestOptionsBuilder = (method, body, headers) => {
//    let options = {
//      method: method,
//      headers: {'Content-Type': 'application/json'},
//    };
//    if (body) options['body'] = JSON.stringify(body);
//    if (headers) options.headers = headers;
//    return options;
// };

const postRequestOptionsBuilder = (method, body, headers) => {
  let options = {
    method: method,
    headers: {},
  };
  if (body) options['body'] = body;
  if (headers) options.headers = headers;
  return options;
};

const get = async (path, params) => {
  path = sanitizePath(path);
  if (params) path += new URLSearchParams(params);
  const response = await fetch(baseUrl + path);
  const data = await response.json();
  if (response.status >= 400 && response.status < 600) {
    return Promise.reject(response);
  }
  return data;
};
const post = async (path, body) => {
   path = sanitizePath(path);
   const response = await fetch(
          baseUrl + path,
     postRequestOptionsBuilder('POST', body)
      );
      const data = await response.json();
      if (response.status >= 400 && response.status < 600) {
        return Promise.reject(response);
      }
      return data;
   };
//   const data = await response.json();
//   if (response.status >= 400 && response.status < 600) {
//     return Promise.reject(response);
//   }
//   return data;
// };
// const put = async (path, body) => {
//   path = sanitizePath(path);
//   const response = await fetch(
//     baseUrl + path,
//     requestOptionsBuilder('PUT', body)
//   );
//   const data = await response.json();
//   if (response.status >= 400 && response.status < 600) {
//     return Promise.reject(response);
//   }
//   return data;
// };
// const remove = async (path) => {
//   path = sanitizePath(path);
//   const response = await fetch(baseUrl + path, requestOptionsBuilder('DELETE'));
//   const data = await response.json();
//   if (response.status >= 400 && response.status < 600) {
//     return Promise.reject(response);
//   }
//   return data;
// };
const sanitizePath = (p) => (p.charAt && p.charAt(0) === '/' ? p.slice(1) : p);
// const Service = {get, post, put, delete: remove};
const Service = {get, post};
export default Service;
