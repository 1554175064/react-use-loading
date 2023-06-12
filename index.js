"use strict";
const react = require("react");

const useLoading = (asyncFn) => {
  const [isLoading, setIsLoading] = react.useState(false);
  const fn = react.useCallback(
    function () {
      return new Promise((res, rej) => {
        setIsLoading(true);
        asyncFn(...arguments)
          .then((data) => {
            res(data);
          })
          .catch((err) => {
            rej(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
    },
    [asyncFn]
  );
  return [isLoading, fn];
};
module.exports = useLoading;
