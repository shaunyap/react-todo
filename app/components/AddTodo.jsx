var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.todoText.value;
    if(text.length > 1) {
      this.refs.todoText.value='';
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className='container__footer'>
        <form ref='form' onSubmit={this.handleSubmit} className='todo-form'>
          <input type='text' ref='todoText' placeholder='What do you want to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
