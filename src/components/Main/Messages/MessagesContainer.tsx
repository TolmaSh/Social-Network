import React from 'react';
import { StateType} from '../../../store/store';

import {addMessageAC, updateMessageText} from '../../../store/dialogsReducer';
import {Messages} from './Messages';
import {connect} from 'react-redux';


const mapStateToProps = (state: StateType) => {
    return {
        userList: state.dialogsPage.userList,
        messageList: state.dialogsPage.messageList,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {dispatch(addMessageAC())},
        updateMessage: (text: string) => {dispatch(updateMessageText(text))}

    }
}
export const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)