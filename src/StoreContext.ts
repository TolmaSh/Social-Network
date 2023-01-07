import React from 'react';
import store from './store/redux-store';


const storeContext = React.createContext(store)

export default storeContext