import { ENTER_KEYCODE, ESCAPE_KEYCODE } from './const.js';
export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.editTodoInput = React.createRef();
    this.state = {
      editText: ''
    };
  }

  handleChange(event) {
    this.setState({
      editText: event.target.value
    });
  }

  handleSave(item) {
    item.name = this.state.editText;
    this.setState({
      editText: ''
    });
    this.props.onSave(item);
  }

  handleKeyDown(item, event) {
    if (event.which === ENTER_KEYCODE) {
      this.handleSave(item);
    } else if (event.which === ESCAPE_KEYCODE) {
      this.props.onSave(item);
      this.setState({
        editText: ''
      });
    }
  }

  doubleClick(item) {
    this.setState({
      editText: item.name
    });
    this.props.onEdit(item);
  }

  componentDidUpdate(props) {
    if (props.item.isEditable) {
      const element = this.editTodoInput.current;
      element.focus();
      element.setSelectionRange(element.value.length, element.value.length);
    }
  }

  render() {
    const item = this.props.item;
    const listItem = item.isEditable ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("input", {
      id: "todo-edit",
      type: "text",
      ref: this.editTodoInput,
      value: this.state.editText,
      onChange: this.handleChange.bind(this),
      onBlur: this.handleSave.bind(this, item),
      onKeyDown: this.handleKeyDown.bind(this, item)
    })) : /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onChange: e => this.props.onToggle(item, e),
      checked: item.isCompleted,
      className: "todo-toggle",
      id: "todo-toggle-" + item._id
    }), /*#__PURE__*/React.createElement("label", {
      className: "todo-toggle-label",
      htmlFor: "todo-toggle-" + item._id
    }), /*#__PURE__*/React.createElement("label", {
      id: "todo-label",
      className: item.isCompleted ? "completed" : undefined,
      onDoubleClick: this.doubleClick.bind(this, item)
    }, item.name), /*#__PURE__*/React.createElement("button", {
      id: "delete",
      onClick: e => this.props.onDelete(item, e)
    }));
    return listItem;
  }

}