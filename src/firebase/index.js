import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGE_SERNDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
});


export default firebaseApp;
// export default function install(Vue) {
//   Object.defineProperty(Vue.prototype, "$firebase", {
//     get() {
//       return firebaseApp;
//     },
//   });
// }
