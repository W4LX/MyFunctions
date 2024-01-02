const config = require("../../config.json");

module.exports = async function (type, query) {
  if (!type || typeof type !== "string") {
    throw new Error("The type must be a string.");
  }

  if (!query || typeof query !== "string") {
    throw new Error("The query must be a string.");
  }

  const url = new URL(config.api_url + type);

  url.searchParams.append("query", query);

  const response = await fetch(url.href);

  return await response.json();
};
