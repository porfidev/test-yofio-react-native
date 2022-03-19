import {doRequest} from './doRequest.js';

const obtainUsers = async url => {
  const response = await doRequest(`${url}`);
};

export {obtainUsers};
