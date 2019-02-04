import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar/Calendar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calendar />, document.getElementById('root'));
serviceWorker.unregister();
