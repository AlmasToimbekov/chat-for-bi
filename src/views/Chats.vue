<template>
    <div>
        <v-navigation-drawer app v-model="drawer">
            <v-list subheader>
                <v-subheader>List of contacts</v-subheader>
                <input placeholder="Find chat" type="text" v-model="search"/>
                <v-list-item :key="item.id" v-for="item in filteredChats" v-on:click="select(item.id)">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"/>
                    </v-list-item-content>

                    <v-list-item-icon>
                        <v-icon :color="item.id === selectedChat ? 'primary' : 'grey'">chat_bubble</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
            <v-row justify="center">
                <v-dialog max-width="600px" persistent v-model="dialog">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on">Add user</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">User Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-text-field label="Write here user's name*" required v-model="newUser"></v-text-field>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="cancel" color="blue darken-1" text>Close</v-btn>
                            <v-btn @click="addUser" color="blue darken-1" text>Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
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
                drawer: true,
                search: '',
                dialog: false,
                newUser: ''
            }
        },
        methods: {
            select(id) {
                this.$store.state.selectedChat = id
            },
            addUser() {
                let newUser = {
                    id: Date.now(),
                    name: this.newUser
                };
                let newMessages = {
                    id: newUser.id,
                    messages: []

                };
                this.$store.state.chats.push(newUser);
                this.$store.state.messages.push(newMessages);
                this.newUser = '';
                this.dialog = false
            },
            cancel() {
                this.dialog = false;
                this.newUser = ''
            }
        },
        components: {},
        computed: {
            chats() {
                return this.$store.state.chats

            },
            selectedChat() {
                return this.$store.state.selectedChat
            },
            filteredChats() {
                return this.chats.filter((chat) => {
                    return chat.name.match(this.search)
                })
            }
        }
    }
</script>
