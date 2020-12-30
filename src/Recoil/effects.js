export const initDetailsEffect = (param) => async ({ setSelf, trigger }) => {
    if (param && trigger === 'get') {
        const response = await fetch(`http://localhost:3001/details/${param}`);
        const data = await response.json();
        setSelf(data);
    }
};

export const persistDetailsEffect = (param) => async ({ onSet }) => {
    onSet( async (newValue, oldValue) => {
        if (param) {
            if (newValue !== oldValue) {
                const headers = { 'Content-Type': 'application/json' };
                const method = 'PUT';
                const body = JSON.stringify(newValue);
                const response = await fetch(`http://localhost:3001/details/${ param }`, {headers, method, body});
                const data = await response;
            }
        } else {
            const headers = { 'Content-Type': 'application/json' };
            const method = 'POST';
            let body = JSON.stringify(newValue);
            const detailsResponse = await fetch(`http://localhost:3001/details`, {headers, method, body});
            const detailsData = await detailsResponse;

            body = JSON.stringify({ id: newValue.id, name: newValue.name });
            const listResponse = await fetch(`http://localhost:3001/list`, {headers, method, body});
            const listData = await listResponse;
        }
    });
};