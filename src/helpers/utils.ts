/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const createError = (err: any) => {
  let errorMsg = 'Unknown error occurred';

  if (err.response) {
    if (err.response.data && err.response.data.error) {
      errorMsg = err.response.data.error;
    } else {
      errorMsg = err.response.statusText;
    }
  } else if (err.message) {
    errorMsg = err.message;
  }

  return errorMsg;
};
