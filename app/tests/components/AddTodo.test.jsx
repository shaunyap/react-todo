var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch when valid text is input into todo', () => {
    var todoText = 'Check mail';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch addtodo if invalid text is entered', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
