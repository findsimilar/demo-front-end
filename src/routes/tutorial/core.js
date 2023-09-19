import { dev } from '$app/environment'

const IS_MOCK_RESULTS = true // change it to get responses from server

export async function fetch_data(url, method, data, mocked_result={}) {

        const mock_results = dev ? IS_MOCK_RESULTS : false
        if (mock_results) {
            return mocked_result
        }

        const api_url = `api${url}`
        const production_url = 'http://api.findsimilar.org/'
        const full_url = dev ? `http://127.0.0.1:8000/${api_url}` : `${production_url}${api_url}`
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