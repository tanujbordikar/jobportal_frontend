import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index'; 

const store = configureStore({
  reducer: rootReducer,
});

const root = document.getElementById('root');

const rootInstance = createRoot(root);
rootInstance.render(
  <Provider store={store}>
    <App />
  </Provider>
);