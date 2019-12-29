<template>
    <div class="home">
        <div class="msg-container">
<!--            <div v-for="msg in messages" v-bind:key="msg.name" >-->
<!--                <router-link :to="{ name: 'msg-watch', params: { id: '1' }}">-->
<!--                    <v-card hover-->
<!--                            width="300px"-->
<!--                            class="ma-2">-->
<!--                        <v-card-title class="headline mb-1">{{ msg.name }}</v-card-title>-->
<!--                        <v-card-text class="headline font-weight-bold">-->
<!--                            <div v-html="msg.description"></div>-->
<!--                        </v-card-text>-->
<!--                    </v-card>-->
<!--                </router-link>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {
        },
        data() {
            return {
                selectedId: '1',
                messages: this.$store.state.messages
            }
        }
    }
</script>
