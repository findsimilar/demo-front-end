import { dev } from '$app/environment'

const IS_MOCK_RESULTS = false // change it to get responses from server

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
            console.log(data)
            params.body = JSON.stringify(data)
        }
        const res = await fetch(full_url, params)

        console.log('res', res)
        if (res.ok) {
            const json = await res.json()
            return json
        }
        else if (res.status == 400) {
            const json = await res.json()
            const error_result = {
                errors: json
            }
            return error_result;
        }
        else {
            throw new Error('Request failed. Something went wrong :(');
        }
    }

export async function get_similars(
    text, 
    texts, 
    remove_stopwords=true, 
    language='english',
    count=10,
    ) {
    const url = '/'
    const data = {
            text_to_check: text,
            texts: texts,
            remove_stopwords: remove_stopwords,
            language: language,
            count: count,
        }

    const mocked_result = [
        {
        text: 'one',
        cos: 1.0,
        },
        {
        text: 'two',
        cos: 0.6,
        },
        {
        text: 'three',
        cos: 0.2,
        },
        {
        text: 'thour',
        cos: 0.0
        },
    ]
    return fetch_data(url, 'POST', data, mocked_result)
    }