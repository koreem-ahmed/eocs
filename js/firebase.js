// Firebase setup + Firestore logic

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Your config
const firebaseConfig = {
    apiKey: "AIzaSyDfYyQOf-qmJChGuG8IWsbqyeYNC1pJ2M0",
    authDomain: "eocs-2027.firebaseapp.com",
    projectId: "eocs-2027",
    storageBucket: "eocs-2027.firebasestorage.app",
    messagingSenderId: "854476826369",
    appId: "1:854476826369:web:759f09c5f2cfd8f4b59d00",
    measurementId: "G-PDE7JT5765"
};

// Init
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// ============================
// 🔹 ADD AMBASSADOR
// ============================
export async function addAmbassador(data) {
    try {
        await addDoc(collection(db, "ambassadors"), data);
        return true;
    } catch (err) {
        console.error("Error adding ambassador:", err);
        return false;
    }
}

// ============================
// 🔹 GET LEADERBOARD
// ============================
export async function getLeaderboard() {
    const q = query(collection(db, "ambassadors"), orderBy("points", "desc"));
    const snapshot = await getDocs(q);

    const list = [];

    snapshot.forEach(doc => {
        list.push(doc.data());
    });

    return list;
}