module.exports = (...args) => {
  if (__DEV__) {
    console.log.apply(console, args);
  }
};
