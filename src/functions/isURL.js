module.exports = function (str) {
  if (!str) return false;

  if (typeof str !== "string") false;

  const windowsPathPattern = /^[a-zA-Z]:\\/;

  if (windowsPathPattern.test(str)) return false;

  const urlPattern = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

  return urlPattern.test(str);
};
