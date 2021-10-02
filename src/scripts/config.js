import axios from 'axios';

const auth_token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzcyNmJiNGRjZmM3YmMyYjg0MGMzM2QwZGU5YjgyYWY2Yzk4ODJkODZkNGYwNmY0ODAzNWYxNDliNDA2ZTA4NzdiZmFlM2Q3MWNiNzA1OWIiLCJpYXQiOjE2MDIzNDQ3MzIsIm5iZiI6MTYwMjM0NDczMiwiZXhwIjoxNjMzODgwNzMyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HIaWJaJ3uvCXl241DLH-3pfGdp56sdzy_o4PucD-Cx8xgGVs8mGMz7hGS7Z2W_i-aPatCIXmEbgrpGamoSGXCuIv_ENmYaEtVeaGgGUVKAw4-dCPBaDaCBxOf_tdOjxbNCxGdSquTIT02aYkQ1Yi67Ok27EDHHBGR3FH8aZwtl-1FTQ-Z1ZDGwyDAzmI7Ey0l1xdwEHx_pTUx2o4GCewMhKj3RQPM5VVGAGs8RMBMvpVC-aI04-GMaAtMVds-CK5__HO8foMlQWgPJ5Q70J4ZrNASXiS7wPwoKDc5dFSn-w1Rq0JKEcu3p15kNxPZX1wNRt_dUpVOYKUYG8LgutdovrS_s-aOrEnU7KpnUrP3VwxfFzGGjRFUm8mlo_qTnJi60eNuLb4sGGsc-xNYFvPeeCK-eq1RxXIEleKbErWWWbLNNg7jwiVLp6-wcvU4ZFNhNYCJcygT8MmP46ZOpewh9nWcMPXAFnDOCqFurNm9Usxc0kQwroSqMCSq20BiWv3FHONcpZISsMTKIPUSYtRt7676NSC89tpbrI8LA9CaemRsLZDr-MT3GvXk521LSNy5igEh_SHhW0AvalEIsgkUgTG1txDqE-E7l_E296PyGMHxMlffRuL0stUrG5EG099FX0P15uZrnx6SI8RUr2HXEjusDrVH2fejBqlJDplsUc';

axios.defaults.headers.common['Authorization'] = `Bearer ${auth_token}`;
axios.defaults.headers.common['Content-Type'] = `application/json`;

// url
// const url = 'https://importacioneslaguia.com';
const url = 'https://fakestoreapi.com';
// const urlAPI = `${url}/api`;
const urlAPI = `${url}/`;
const urlStorage = `${url}/uploads`;

// host local
const host= '//' + window.location.host;

const urlLocalAPI = `${ host }/assets/data`;
const urlStorageLocal = `${ host }/assets/storage`;
const urlImageLocal = `${ host }/assets/images`;

// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, (error)=> {
//   console.log(error);
//   // Promise.reject(error);
//   // Do something with response error
//   return Promise.reject(error);
//   // return [{ data: [] }];
//   // return Promise.resolve({ data: [] });
// });



export {
  url,
  urlAPI,
  urlStorage,
  urlLocalAPI,
  urlStorageLocal,
  urlImageLocal
}
