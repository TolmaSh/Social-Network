import React from 'react';
import {DialogsPageType} from '../../../store/store';

import {addMessageAC, updateMessageText} from '../../../store/dialogsReducer';
import {Messages} from './Messages';
import StoreContext from '../../../StoreContext';

export const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state: DialogsPageType = store.getState().dialogsPage
                    const addMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    const updateMessage = (text: string) => {
                        store.dispatch(updateMessageText(text))
                    }
                    return (<Messages userList={state.userList}
                                      messageList={state.messageList}
                                      newMessageText={state.newMessageText}
                                      addMessage={addMessage}
                                      updateMessage={updateMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )


}