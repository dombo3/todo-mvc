import { APP_ALL, APP_ACTIVE, APP_COMPLETED, ENTER_KEYCODE, ESCAPE_KEYCODE } from 'const.mjs';
import { TodoItem } from './TodoItem.mjs';
import { TodoApp } from './TodoApp.mjs';
import { Item } from './Item.mjs';
import { Footer } from './Footer.mjs';
ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), document.getElementById("root"));