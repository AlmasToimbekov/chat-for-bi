<template>
    <v-flex xs12>
        <v-text-field label="Type your message" outline v-model="text" @keydown.enter="send"/>
    </v-flex>
</template>

<script>
    export default {
        data:() => ({
            text: ''
        }),
        methods: {
            send() {
                let selectedId = this.$store.state.selectedChat
                let newMessage = {
                        id: this.$store.state.messages.length + 1,
                        name: 'User',
                        text: this.text
                    }
                this.$store.state.messages.find(chat => chat.id === selectedId).messages.push(newMessage)
            }
        }
    }
</script>