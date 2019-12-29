<template>
    <div>
        <v-navigation-drawer app v-model="drawer">
            <v-list subheader>
                <v-subheader>List of contacts</v-subheader>

<!--                <div v-for="msg in messages" v-bind:key="msg.name" >-->
<!--                    <router-link :to="{ name: 'msg-watch', params: { id: msg.id }}">-->
<!--                        <v-card hover-->
<!--                                width="300px"-->
<!--                                class="ma-2">-->
<!--                            <v-card-title class="headline mb-1">{{ msg.name }}</v-card-title>-->
<!--                            <v-card-text class="headline font-weight-bold">-->
<!--                                <div v-html="msg.description"></div>-->
<!--                            </v-card-text>-->
<!--                        </v-card>-->
<!--                    </router-link>-->
<!--                </div>-->

                <v-list-item
                        v-for="item in chats" :key="item.id" :to="{ name: 'msg-watch', params: { id: item.id }}">
<!--                                <v-card hover-->
<!--                                        width="300px"-->
<!--                                        class="ma-2">-->
<!--                                    <v-card-title class="headline mb-1">{{ msg.name }}</v-card-title>-->
<!--                                    <v-card-text class="headline font-weight-bold">-->
<!--                                        <div v-html="msg.description"></div>-->
<!--                                    </v-card-text>-->
<!--                                </v-card>-->


                    <!--                    <v-list-item-avatar>-->
                    <!--                        <v-img :src="item.avatar"></v-img>-->
                    <!--                    </v-list-item-avatar>-->

                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"/>
                    </v-list-item-content>

                    <v-list-item-icon>
                        <v-icon :color="item.id === 2 ? 'primary' : 'grey'">chat_bubble</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>BI-chat</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
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
        // created () {
        //     this.$store.dispatch('loadChats')
        // },

        methods: {
        },
        components: {},
        computed: {
            chats() {
                return this.$store.state.chats
            },
        }
    }
</script>
