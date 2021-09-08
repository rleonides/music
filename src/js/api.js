const fetch = require('isomorphic-fetch');

const api =  (art_name) => {
 let arr_ = art_name.trim().split(' ');
 const url = ('/api/v1/json/1/search.php?s='+ arr_.join('_'));
    
  return fetch(url, {
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  }).then(checkStatus)
    .then(res => res.json())
    
}

function checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      const error = new Error(`HTTP Error ${res.statusText}`);
      error.status = res.statusText;
      error.response = res;
      console.log(error);
      throw error;
    }
  }

  //api();
  export default api 
  
  //console.log("sdfsf")