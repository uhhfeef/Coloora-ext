// var FLASK_ENDPOINT = 'https://coloora-400822.et.r.appspot.com/send-analytics';

let clientId;

async function getOrCreateClientId() {
    if (clientId) {
        return clientId;
    }

    const result = await chrome.storage.local.get('clientId');
    clientId = result.clientId;

    if (!clientId) {
        // Generate a unique client ID, the actual value is not relevant
        clientId = self.crypto.randomUUID();
        console.log('generated clientid')
        await chrome.storage.local.set({ clientId });
    }

    console.log(clientId)
    return clientId;
}

async function sendInitialEvent(eventName, elementId) {
    console.log("inside gaanalytics");
    clientId = await getOrCreateClientId();
    if (clientId !== "a1e0c334-cbc9-43bf-8de0-16d4a4f89ab7") {
        try {
            fetch(
                FLASK_ENDPOINT,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        client_id: await getOrCreateClientId(),
                        event_name: eventName,
                        event_params: {
                            id: elementId,
                        },
                    }),
                }
            );
            console.log("event sent");
        }
        catch (error) {
            console.error("Error sending data to Flask server:", error);
        }
    } else {
        console.log("demo user, event not sent");
        return;
    }
}

export { sendInitialEvent };
