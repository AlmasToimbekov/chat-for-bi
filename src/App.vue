<template>
    <v-app app>
        <chats/>

        <v-content>
            <router-view/>
            <chat-form/>
        </v-content>
    </v-app>
</template>

<script>
    import Chats from '@/views/Chats.vue'
    import ChatForm from '@/views/ChatForm.vue'
    export default {
        name: 'App',
        data: () => ({
        }),
        methods: {
            exit() {}
        },
        components: {Chats, ChatForm},
    };
</script>
