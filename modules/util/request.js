import fetch from 'isomorphic-fetch';
import qs from 'qs';

let postHeader = {
  "Content-Type": "application/x-www-form-urlencoded"
};

let request = {

  get(url, query) {

  },

  post(url, data) {
    return new Promise((resolve, reject) => {

      fetch(url, {
        method: 'post',
        body: qs.stringify(data),
        headers: postHeader
      }).then(resp => {
        return resp.json();
      }).then(body => {
        resolve(body);
      }).catch(err => {
        reject(err);
      });

    });
  }

};

export default request;