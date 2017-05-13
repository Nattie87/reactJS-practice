import React from 'react';


export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <button onClick={this.onEditClick.bind(this)}>Save</button>
        <button>Cancel</button>
      );
    }
    return (
      <button onClick={this.onEditClick.bind(this)}>Edit</button>
      <button>Delete</button>
    );
  }
  render() {
    return (
      <tr>
        <td>{this.props.task}</td>
        {this.renderActionSection()}
      </tr>
    );
  }
  onEditClick() {
    this.setState({ isEditing: true });
  }
}
