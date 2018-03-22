import * as firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAhcvRrhrAiRKZo9PzccPEYJT763cHpieQ",
  authDomain: "vue-tutorial-ajax.firebaseapp.com",
  databaseURL: "https://vue-tutorial-ajax.firebaseio.com",
  projectId: "vue-tutorial-ajax",
  storageBucket: "vue-tutorial-ajax.appspot.com",
  messagingSenderId: "733927182903"
});

export const db = app.database();
export const itemsRef = db.ref('items');
// export const storeItemsRef = itemsRef.orderByChild("selectedStores");