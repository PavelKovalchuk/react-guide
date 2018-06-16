import {createStore} from 'redux';
import reducer from '../reducers';

//console.log('reducer: ', reducer);

const store = createStore(reducer);

export default store;