import React from 'react';
import colors from '../colors';

const QuestionHelperText = ({ comment }) => {
    return (
        <div 
            className=''
            style={{
                marginTop: '20px',
            }}>
            <button 
                style={{
                    fontSize: '14px',
                    padding: '10px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    border: `1px solid ${colors.const_dark_subtext}`, 
                }}
                type="button" 
                className="btn cursor-pointer shadow-md hover:shadow-md-bl transition" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal">
                    Comment
            </button>
            <div 
                className="modal fade" 
                id="exampleModal" 
                tabIndex="-1"
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true">
                <div 
                    className="modal-dialog modal-dialog-centered">
                    <div 
                        className="modal-content">
                        <div 
                            className="modal-header">
                            <div></div>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close">
                            </button>
                        </div>
                        <div 
                            style={{
                                fontSize: '16px',
                            }}
                            className="modal-body">
                            {comment}
                        </div>
                        {/* <div 
                            className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                data-bs-dismiss="modal">
                                    Close
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary">
                                    Save changes
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionHelperText;