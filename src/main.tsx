import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { cononicalOrigin } from './utils/pathname';

(async () => {
  if (window.location.origin === cononicalOrigin) {
    const { initializeApp } = await import('firebase/app');
    const { getPerformance } = await import('firebase/performance');
    const { getAnalytics } = await import('firebase/analytics');

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyACzk3YVunrszZtjVSYBvK-eGxEoRC_VYE',
      authDomain: 'ruiningli-c219a.firebaseapp.com',
      databaseURL: 'https://ruiningli-c219a.firebaseio.com',
      projectId: 'ruiningli-c219a',
      storageBucket: 'ruiningli-c219a.appspot.com',
      messagingSenderId: '1046202803988',
      appId: '1:1046202803988:web:75fe693860ba5098d2c401',
      measurementId: 'G-P7RV6JMDCF',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getPerformance(app);
    getAnalytics(app);
  }
})();

const container = document.getElementById('root');
if (!container) {
  throw new Error('Cannot find root container element.');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
