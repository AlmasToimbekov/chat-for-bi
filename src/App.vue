<template>
    <v-app app>
        <v-navigation-drawer app v-model="drawer">
            <v-list subheader>
                <v-subheader>Recent chat</v-subheader>

                <v-list-item
                        v-for="item in users" :key="item.id" @click.prevent>
<!--                    <v-list-item-avatar>-->
<!--                        <v-img :src="item.avatar"></v-img>-->
<!--                    </v-list-item-avatar>-->

                    <v-list-item-content>
                        <v-list-item-title v-text="item.name" />
                    </v-list-item-content>

                    <v-list-item-icon>
                        <v-icon :color="item.id === 2 ? 'primary' : 'grey'">chat_bubble</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click="exit">
                <v-icon>arrow-back</v-icon>
            </v-btn>
            <v-toolbar-title class="headline text-uppercase">
                <span>BI-chat</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn to="/">Home</v-btn>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({
            drawer: true,
            users: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
            ]
        }),
        methods: {
            exit() {}
        },
        components: {},
    };
</script>
