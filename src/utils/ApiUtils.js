const ApiUtils = {
  checkStatus: (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response.statusText);
      error.response = JSON.parse(response._bodyText);
      error.response.code = response.status;
      throw error;
    }
  }
};
export { ApiUtils as default };
