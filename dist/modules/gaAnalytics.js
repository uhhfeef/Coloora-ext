var FLASK_ENDPOINT="https://coloora-400822.et.r.appspot.com/send-analytics";let clientId;async function getOrCreateClientId(){if(clientId)return clientId;const e=await chrome.storage.local.get("clientId");return clientId=e.clientId,clientId||(clientId=self.crypto.randomUUID(),console.log("generated clientid"),await chrome.storage.local.set({clientId})),console.log(clientId),clientId}async function sendInitialEvent(e,t){if(console.log("inside gaanalytics"),clientId=await getOrCreateClientId(),"a1e0c334-cbc9-43bf-8de0-16d4a4f89ab7"!==clientId)try{fetch(FLASK_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:await getOrCreateClientId(),event_name:e,event_params:{id:t}})}),console.log("event sent")}catch(e){console.error("Error sending data to Flask server:",e)}else console.log("demo user, event not sent")}export{sendInitialEvent};