import { Filters } from './Filters.js';
import { FilterButton } from './FilterButton.js';
import { APP_ALL, APP_ACTIVE, APP_COMPLETED } from './const.js';
export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("p", null, this.props.activeItemCount, " ", this.props.activeItemCount > 1 ? "items" : "item", " left"), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement(FilterButton, {
      filterName: APP_ALL,
      filter: this.props.filter,
      handleClick: e => this.props.handleFilter(APP_ALL, e)
    }), /*#__PURE__*/React.createElement(FilterButton, {
      filterName: APP_ACTIVE,
      filter: this.props.filter,
      handleClick: e => this.props.handleFilter(APP_ACTIVE, e)
    }), /*#__PURE__*/React.createElement(FilterButton, {
      filterName: APP_COMPLETED,
      filter: this.props.filter,
      handleClick: e => this.props.handleFilter(APP_COMPLETED, e)
    })), this.props.completedItemCount > 0 && /*#__PURE__*/React.createElement("button", {
      id: "clear-all",
      onClick: this.props.clearCompleted
    }, "Clear completed"));
  }

}