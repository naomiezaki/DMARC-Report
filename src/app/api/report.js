const url = 'https://dmarc.postmarkapp.com';

export const fetchRecord = (payload) => {
    return fetch(`${url}/records/my`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json",
            "X-Api-Token": payload.apiToken
        }
    })
    .then(response => {
        return response.json()
    })
}