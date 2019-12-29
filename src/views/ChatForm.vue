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
                let newMessage = {
                        id: Date.now(),
                        name: 'User',
                        text: this.text
                    }
                this.$store.commit('addMessage', newMessage)
                this.text = ''
            }
        }
    }
</script>