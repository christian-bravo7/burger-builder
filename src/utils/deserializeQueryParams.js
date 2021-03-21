const deserializeQueryParams = queryParams => {
  const urlParams = new URLSearchParams(queryParams);
  const entries = urlParams.entries();
  const params = {};

  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    params[key] = value;
  }

  return params;
};

export default deserializeQueryParams;
