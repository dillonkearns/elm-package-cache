const fetch = require("node-fetch");

module.exports = async (req, res) => {
  console.log("Fetching search.json");
  const response = await fetch(`https://package.elm-lang.org/search.json`);
  const docJson = await response.json();
  const secondsIn1Hour = 3600;
  res.setHeader("Cache-Control", `s-maxage=${secondsIn1Hour}`);
  res.json(docJson);
};
