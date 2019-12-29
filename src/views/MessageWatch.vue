<template>
    <div>
        <h1>Hi, let's watch messages</h1>
        <h3>{{this.$route.params.id}}</h3>
        <div class="message" v-for="m in messages" :key="m.id">
            <v-card
                    class="mx-auto"
                    color="#385F73"
                    dark>
                <v-card-title>
                    <v-icon
                            large
                            left>
                        mdi-message
                    </v-icon>
                    <span class="title font-weight-light">{{m.name}}</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                    {{m.text}}
                </v-card-text>

            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            messages() {
                return this.$store.state.messages.find(msg => msg.id == this.$route.params.id).messages
            }
        }
    }
</script>