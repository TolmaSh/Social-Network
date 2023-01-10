import {addMessageAC, updateMessageTextAC} from '../../../store/dialogsReducer';
import {Messages} from './Messages';
import {connect} from 'react-redux';
import {rootReducerType} from '../../../store/redux-store';


const mapStateToProps = (state: rootReducerType) => {
    return {
        userList: state.dialogsPage.userList,
        messageList: state.dialogsPage.messageList,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessage: (text: string) => {
            dispatch(updateMessageTextAC(text))
        }

    }
}
export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)