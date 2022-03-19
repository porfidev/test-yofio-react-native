import axios from 'axios';

const doRequest = ({url, method, requestBody}) => {
  try {
    const requestParams = {
      url,
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: requestBody,
    };

    return axios(requestParams).then(response => response.data);
  } catch (error) {
    return errorHandler(error);
  }
};

const errorHandler = error => {
  if (error.response) {
    console.error('REQUEST Error on response');
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.error('REQUEST Error on Request');
    console.log(error.request);
    return {
      success: false,
      msg: 'Ocurrió un problema, No se recibió respuesta del servidor',
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('REQUEST Error on config');
    console.log('Error', error.message);
    return {
      success: false,
      msg: 'Ocurrió un problema al configurar la petición',
    };
  }
};

const objectToQueryString = initialObj => {
  const reducer =
    (obj, parentPrefix = null) =>
    (prev, key) => {
      const val = obj[key];
      key = encodeURIComponent(key);
      const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key;

      if (val == null || typeof val === 'function') {
        prev.push(`${prefix}=`);
        return prev;
      }

      if (['number', 'boolean', 'string'].includes(typeof val)) {
        prev.push(`${prefix}=${encodeURIComponent(val)}`);
        return prev;
      }

      prev.push(Object.keys(val).reduce(reducer(val, prefix), []).join('&'));
      return prev;
    };

  return Object.keys(initialObj).reduce(reducer(initialObj), []).join('&');
};

export {doRequest, errorHandler, objectToQueryString};
