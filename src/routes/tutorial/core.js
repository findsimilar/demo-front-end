import { dev } from '$app/environment'

export async function fetch_data(url, method, data) {
        const api_url = `api${url}`
        const full_url = dev ? `http://127.0.0.1:8000/${api_url}` : `http://188.64.12.238:8000/${api_url}`
        let params = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: method,
        }
        if (data !== 'undefined') {
            params.body = JSON.stringify(data)
        }
        const res = await fetch(full_url, params)

        console.log('res', res)
        if (res.ok) {
            return await res.json();
        } else {
            throw new Error('Request failed');
        }
    }