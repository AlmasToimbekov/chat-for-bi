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
                        name: 'Medved',
                        text: 'you are not my friend'
                    }
                ]
            },
            {
                id: 2, messages: [
                    {
                        id: 1,
                        name: 'Nurik',
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
        selectedChat: ''
    },
    mutations: {
        addMessage (state, id, message) {
            state.messages.find(messages => messages.id === id).messages.push(message)
        }
    },
    actions: {},
    modules: {}
})
