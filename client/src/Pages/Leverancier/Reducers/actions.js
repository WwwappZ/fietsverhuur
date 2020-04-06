export const SET_LEVERANCIERS = 'SET_LEVERANCIERS';
export const ADD_LEVERANCIERS = 'ADD_LEVERANCIERS';
export const LEVERANCIER_ERROR = 'LEVERANCIER_ERROR';
export const SET_LEVERANCIER = 'SET_LEVERANCIER'

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response.statusText;
    throw error;
  }
}


export function set(results) {
  return {
    type: SET_LEVERANCIERS,
    results
  }
}
export function setone(results) {
  return {
    type: SET_LEVERANCIER,
    results
  }
}
export function add(results) {
  return {
    type: ADD_LEVERANCIERS,
    results
  }
}
export function itemError(error) {
  return {
    type: LEVERANCIER_ERROR,
    payload: error
  };
}

export function saveleverancier(data) {
  return dispatch => {
    return fetch('/api/admin/leverancier', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token')
      }
    }).then(handleResponse).then(results => {
      return dispatch(add(results));
    }).catch((err) => {   
      return dispatch(itemError('Er is een fout opgetreden bij het insert database'));
    });
  };
}

export function editleverancier(id, data) {
  return dispatch => {
    return fetch('/api/admin/leverancier/'+id, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token')
      }
    }).then(handleResponse).then(results => {
      return dispatch(add(results));
    }).catch((err) => {
        console.log(err);
        
      return dispatch(itemError('Er is een fout opgetreden bij het insert database'));
    });
  };
}

export function fetchleverancier() {
  return dispatch => {
    return fetch('/api/admin/leverancier/', {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token')
      }
    }).then(handleResponse).then(results => {
      return dispatch(set(results.results));
    }).catch((err) => {
      return dispatch(itemError('Er is een fout opgetreden bij het insert database'));
    });
  };
}

export function getleverancier(id) {
  return dispatch => {
    return fetch('/api/admin/leverancier/'+id, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token')
      }
    }).then(handleResponse).then(results => {
      return dispatch(setone(results.results));
    }).catch((err) => {
      return dispatch(itemError('Er is een fout opgetreden bij het insert database'));
    });
  };
}
