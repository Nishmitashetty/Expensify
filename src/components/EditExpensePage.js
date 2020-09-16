import React from 'react';
import {connect} from 'react-redux';
import {
     editExpense,
     startEditExpense,
     startRemoveExpense
    } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import ExpenseModal from './ExpenseModal';

// To Avoid inline Functions we have to create class based components

export class EditExpensePage extends React.Component
{
    state ={
        selectedExpense:undefined
    };

    onSubmit= (expense) =>
    {
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    };

    handleClearSelectedExpense = () =>
    {
        this.setState(() => ({
            selectedExpense:undefined
        }));
    };

    onRemove = () =>
    {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.setState(() => ({
            selectedExpense:undefined
        }));
        this.props.history.push('/');
    };

    onClick = () =>
    {
        this.setState(() =>({
            selectedExpense:this.props.expense.description
        }));
    };

    render()
    {
        return (
            <div>
              <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
              </div>
              <div className="content-container">
              <ExpenseForm 
              expense={this.props.expense}
              onSubmit={this.onSubmit}
              />
            <button 
            className="button button--secondary"
            onClick={this.onClick}
            >
            Remove Expense
            </button>
            <ExpenseModal 
             selectedExpense={this.state.selectedExpense}
             handleClearSelectedExpense={this.handleClearSelectedExpense}
             onRemove={this.onRemove}
            />
            </div>
            </div>
        );
    }
};

//es6 --short-hand-syntax

const mapStateToProps = (state,props) => ({   expense:state.expenses.find((expense) => expense.id === props.match.params.id) });

const mapDispatchToProps = (dispatch) => ({
     startEditExpense:(id,expense) => dispatch(startEditExpense(id,expense)),
     startRemoveExpense:(data) => dispatch(startRemoveExpense(data))
    });

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);