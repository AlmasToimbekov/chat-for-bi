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
    import Chats from '@/components/Chats.vue'
    import ChatForm from '@/components/ChatForm.vue'
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
