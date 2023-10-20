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