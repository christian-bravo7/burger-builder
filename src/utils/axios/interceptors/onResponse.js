export const onResponseSuccess = response => {
  console.log(response);

  return response;
};

export const onResponseError = error => {
  console.log(error);

  throw error;
};
