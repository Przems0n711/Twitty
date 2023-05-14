const BASE_URL = '/api';

export async function getData() {
    const response = await fetch(`${BASE_URL}/data`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}