const urlPrefix = "https://api.themoviedb.org/3/";
const apiKey = "b4852ba4cc3dea19bfddfe6958462359";

const url = (path) => {
  return urlPrefix
    .concat(path.join("/"))
    .concat(`&api_key=${apiKey}&language=pt-BR`);
};

export default (config) => {
  const { method, path, body } = config;

  const opt = {
    method,
    data: body,
  };

  return fetch(url(path), opt)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
};
