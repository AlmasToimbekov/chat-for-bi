<template>
    <div>
        <v-navigation-drawer app v-model="drawer">
            <v-list subheader>
                <v-subheader>List of contacts</v-subheader>

                <v-list-item v-for="item in chats" :key="item.id" v-on:click="select(item.id)">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"/>
                    </v-list-item-content>

                    <v-list-item-icon>
                        <v-icon :color="item.id === selectedChat ? 'primary' : 'grey'">chat_bubble</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"/>
            <v-toolbar-title class="headline text-uppercase">
                <span>BI-chat</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-btn to="/">Home</v-btn>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true
            }
        },
        methods: {
            select(id) {
                this.$store.state.selectedChat = id
            }
        },
        components: {},
        computed: {
            chats() {
                return this.$store.state.chats
            },
            selectedChat() {
                return this.$store.state.selectedChat
            }
        }
    }
</script>
