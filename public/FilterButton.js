export class FilterButton extends React.Component {
  constructor(props) {
    super(props);
  }

  capitalize(filterName) {
    return filterName.charAt(0).toUpperCase() + filterName.slice(1);
  }

  render() {
    let filterName = this.props.filterName;
    return /*#__PURE__*/React.createElement("button", {
      id: filterName,
      className: this.props.filter === filterName ? "selected" : undefined,
      onClick: this.props.handleClick
    }, this.capitalize(filterName));
  }

}