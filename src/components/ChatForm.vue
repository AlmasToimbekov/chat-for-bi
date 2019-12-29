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
                console.log("Sending: " + this.text)
                this.text = ''
            }
        }
    }
</script>