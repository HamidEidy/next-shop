'use server'
const BASE_URL = '#';

async function fetchData(url: string, method: string, body?: any) {
    const options: RequestInit = {
        method: method,
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const response = await fetch(`${BASE_URL}${url}`, options);
    return await response.json();
}

const getFetch = async (url:any, headers = {}) => {
    const res = await fetch(`${BASE_URL}${url}`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...headers
        }
    });

    if (res.ok) {
        
        return await res.json();
    } else {
        throw new Error(`مشکل در دریافت اطلاعات کد : ${res.status}`);
    }
}
const postFetch = async (url:any, body:any, headers = {}) => {
    const res = await fetch(`${BASE_URL}${url}`, {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...headers
        },
        body: JSON.stringify(body)
    });

    return await res.json();
}

export { getFetch, postFetch };