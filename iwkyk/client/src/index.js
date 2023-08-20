import React from 'react';
//import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import { QueryClient, QueryClientProvider} from 'react-query'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

const root = createRoot(document.getElementById('root'))

// const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    <React.StrictMode>
      {/* <QueryClientProvider client={queryClient}> */}
        <App />
      {/* </QueryClientProvider> */}
    </React.StrictMode>
  </Provider>,
)

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );
