import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: [
            {
                id: 1, messages: [
                    {
                        id: 1,
                        name: 'Almas',
                        text: 'Hello, my friend'
                    },
                    {
                        id: 2,
                        name: 'User',
                        text: 'you are not my friend'
                    }
                ]
            },
            {
                id: 2, messages: [
                    {
                        id: 1,
                        name: 'User',
                        text: 'Hello, father'
                    },
                    {
                        id: 2,
                        name: 'Medved',
                        text: 'I am not your father'
                    }
                ]
            }
        ],
        chats: [
            {id: 1, name: 'Almas'},
            {id: 2, name: 'Medved'},
        ],
        selectedChat: 1
    },
    mutations: {
        addMessage (state, message) {
            state.messages.find(messages => messages.id === state.selectedChat).messages.push(message)
        }
    },
    actions: {},
    modules: {}
})
