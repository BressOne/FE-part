const serverUrl = "http://localhost:3000:3000";

export const post = (url, payload) => {
  return fetch(`${serverUrl}/${url}`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
};
