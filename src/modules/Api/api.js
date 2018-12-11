export function apiCall(url, options) {
  return fetch(url, options).then(response => {
    if (response.status === 200) {
      return res => res.json();
    } else if (response.status === 401) {
      throw new Error("Not authorized");
    }
  });
}

export function get(url, data) {
  return apiCall(url, {
    method: "get"
    // ...
  });
}

export function post(url, data) {
  return apiCall(url, {
    method: "post"
    // ...
  });
}

// А дальше твои обращения к api

function login(email, pass) {
  return post("/login", { email, pass });
}
