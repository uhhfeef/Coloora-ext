const GA_ENDPOINT = 'https://www.google-analytics.com/mp/collect';
const MEASUREMENT_ID = `G-2BBSSZBKEP`;
const API_SECRET = `TUHix_4URgGljI971eQi2A`;

async function getOrCreateClientId() {
    const result = await chrome.storage.local.get('clientId');
    let clientId = result.clientId;
    if (!clientId) {
        // Generate a unique client ID, the actual value is not relevant
        clientId = self.crypto.randomUUID();
        await chrome.storage.local.set({ clientId });
    }
    return clientId;
}

async function sendEvent(eventName, params) {
    const body = JSON.stringify({
        client_id: await getOrCreateClientId(),
        events: [
            {
                name: eventName,
                params: params,
            },
        ],
    });

    fetch(
        `${GA_ENDPOINT}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
        {
            method: 'POST',
            body: body,
        }
    );
}

window.sendEvent = sendEvent;