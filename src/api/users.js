import {doRequest} from './doRequest.js';

const obtainUsers = url => {
  return doRequest({url, method: 'GET'}).then(response => {
    return response;
  });
};

export {obtainUsers};
