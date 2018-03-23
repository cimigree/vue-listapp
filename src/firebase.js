import * as firebase from "firebase";
import moment from "moment";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAhcvRrhrAiRKZo9PzccPEYJT763cHpieQ",
  authDomain: "vue-tutorial-ajax.firebaseapp.com",
  databaseURL: "https://vue-tutorial-ajax.firebaseio.com",
  projectId: "vue-tutorial-ajax",
  storageBucket: "vue-tutorial-ajax.appspot.com",
  messagingSenderId: "733927182903"
});

const nowDate = moment().add(1, 'days').format('x');
export const db = app.database();
export const itemsRefByDate = db.ref('items').orderByChild('date').endAt(nowDate);
export const itemsRef = db.ref('items');
