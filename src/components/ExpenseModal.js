import React from 'react';
import Modal from 'react-modal';

const ExpenseModal = (props) =>
{
    return (
        <div>
           <Modal
           isOpen={!! props.selectedExpense}
           contentLabel="Selected Expense"
           closeTimeoutMS={200}
           className="modal"
           >
            <h1 className="modal__title">Delete</h1>
             <p className="modal__message">Are you sure do you want to delete this expense? </p>
             <div className="modal__buttons">
             <button 
             className="cancelButton"
             onClick={props.handleClearSelectedExpense}
             >Cancel
             </button>&nbsp;&nbsp;
             <button
             className="deleteButton"
             onClick={props.onRemove}
             >Delete
             </button>
             </div>
           </Modal>
        </div>
    );
};

export default ExpenseModal;