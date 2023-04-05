/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyC7pSKiJ6UqnaJba0bx7Wr6rmMwq6boUc8",
  authDomain: "friendlychat-67e97.firebaseapp.com",
  projectId: "friendlychat-67e97",
  storageBucket: "friendlychat-67e97.appspot.com",
  messagingSenderId: "785136084799",
  appId: "1:785136084799:web:9520f54437d379e214d58a"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
};