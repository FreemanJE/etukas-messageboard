/**
 * Adds a delay to the execution of a function execution
 * @param {function} callback
 * @param {number} delay
 * @returns {function}
 */
export const debounce = (() => {
  let delayedFunction;

  return (callback, delay) => {
    if (delayedFunction) {
      clearTimeout(delayedFunction);
    }

    delayedFunction = setTimeout(() => {
      callback();
    }, delay);
  };
})();
