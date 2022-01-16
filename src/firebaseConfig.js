// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCtEXU9biRSHSfG_5Blwbf7GrRI2rQxSjE',
	authDomain: 'vdev-3dd1d.firebaseapp.com',
	projectId: 'vdev-3dd1d',
	storageBucket: 'vdev-3dd1d.appspot.com',
	messagingSenderId: '451691169187',
	appId: '1:451691169187:web:ef83f3d4f4c47445380616',
	measurementId: 'G-WFJW6X0LFN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
