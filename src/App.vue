<template>
    <v-app app>
        <chats />

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import Chats from '@/components/Chats.vue'
    export default {
        name: 'App',
        data: () => ({
        }),
        methods: {
            exit() {}
        },
        components: {Chats},
    };
</script>
