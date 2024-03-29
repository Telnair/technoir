import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import './index.css';
import { defaultTheme } from './theme/default';
import { Provider } from 'react-redux';
import { store } from './store';
import { RouterProvider } from 'react-router5';
import { router } from './store/routes';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
