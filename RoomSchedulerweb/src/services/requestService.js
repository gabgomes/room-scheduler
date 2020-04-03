import axios from 'axios';

export const allRequest = (url, data, params, method) => {
    return new Promise((resolve, reject) => {
        let configObj = _config(data, params, method);
        console.log("configObj", configObj)
        let urlValue = configObj.urlParams
            ? `${url}?${configObj.urlParams}`
            : `${url}`;

        try {
            fetch({
                ...configObj.config,
                method: String(method).toUpperCase(),
                url: urlValue,
            })
                .then(r => {
                    resolve(r);
                    // if (API_STATUS_MESSAGE[r.status]) {
                    //     // r.data = _processReturn(r.status, r.status, `${API_STATUS_MESSAGE[r.status].MESSAGE} ${urlValue} `);
                    //     reject(r);
                    // } else {
                    //     if (isJson(r.data)) {
                    //         resolve(r);
                    //     } else {
                    //         // r.data = _processReturn(500, 500, `${API_STATUS_MESSAGE[500].MESSAGE} ${urlValue} `);
                    //         reject(r);
                    //     }
                    // }
                })
                .catch(error => {
                    // reject(trataCatch(error.response));
                });
        } catch (error) {
            // r.data = _processReturn(500, 500, `${API_STATUS_MESSAGE[500].MESSAGE} ${urlValue} `);
            reject(error);
        }
    });
};

const _config = (data, paramsObj, method, token) => {
    let myHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    if (token) {
        myHeaders['X-ApiToken'] = token;
    }

    let config = {
        method: method,
        cache: 'no-cache',
        mode: 'cors',
        headers: myHeaders,
    };

    if (method === 'post' || method === 'put') {
        config.data = data;
        config.dataParse = data ? JSON.parse(data) : data;
    }
    if (method === 'get') {
        config.timeout = 1000 * 10;
    }

    let esc = encodeURIComponent;
    let query = '';
    if (paramsObj) {
        query = Object.keys(paramsObj)
            .map(k => esc(k) + '=' + esc(paramsObj[k]))
            .join('&');
    }
    return {
        urlParams: query,
        config: config,
    };
};

export const getRequest = (url, data) => {
    return allRequest(url, {}, data, 'get');
};

export const postRequest = (url, data) => {
    return allRequest(url, JSON.stringify(data), {}, 'post');
};

export const putRequest = (url, data) => {
    return allRequest(url, JSON.stringify(data), {}, 'put');
};

export const removeRequest = url => {
    return allRequest(url, {}, {}, 'delete');
};