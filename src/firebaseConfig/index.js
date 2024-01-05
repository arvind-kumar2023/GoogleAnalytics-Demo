// Import necessary functions from the "firebase/app" and "firebase/auth" libraries
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Import the configuration object from the "Config" file
import config from "../Config";

// Define the Firebase configuration object using values from the imported config object
const firebaseConfig1 = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASURMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBYv4yPCHP1lCHooLoXTQDFWyvEwETgPUs",
//   authDomain: "my--analytics-7b4a2.firebaseapp.com",
//   projectId: "my--analytics-7b4a2",
//   storageBucket: "my--analytics-7b4a2.appspot.com",
//   messagingSenderId: "962914312691",
//   appId: "1:962914312691:web:439ba370a4438c02553286",
//   measurementId: "G-1H94SNJN28"
// };

// Initialize the Firebase app using the configuration object

export const app1 = initializeApp(firebaseConfig1, "GoogleAnalytics");
// export const app2 = initializeApp(firebaseConfig2, "project2");

// Get the authentication instance using the initialized Firebase app
export const analytics = getAnalytics(app1);

// Page View Google Analytics Tag Event
export const analyticsEvent = (title) => {
  logEvent(analytics, "page_view", {
    page_title: title,
  });
};

//  Add To Card Google Analytics Tag Event
export const addToCard = (item) => {
  logEvent(analytics, 'add_to_cart', {
    item_id: item.id,
    item_name: item.title,
    price: item.price,
    currency: "INR",
    quantity: 1,
  })
}

// View Items Google Analytics Tag Event
export const viewItem = (item) => {
  logEvent(analytics, 'view_item', {
    item_id: item.id,
    item_name: item.title,
    price: item.price,
    currency: "INR",
    value: item.price,
  })
}
