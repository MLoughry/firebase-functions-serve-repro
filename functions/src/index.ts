import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
console.log(functions.config().cert.message);

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send(functions.config().cert.message);
});
