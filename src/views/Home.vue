<template>
    <div class="home">

        <h1>Videos</h1>
        <div class="video-container">
            <div v-for="video in videos" v-bind:key="video.name" >
                <router-link :to="{ name: 'video-watch', params: { id: video.id }}">
                    <v-card hover
                            width="300px"
                            class="ma-2">
                        <v-card-title class="headline mb-1">{{ video.name }}</v-card-title>
                        <v-card-text class="headline font-weight-bold">
                            <div v-html="video.description"></div>
                        </v-card-text>
                        <v-img
                                :src="video.thumbnail"
                        ></v-img>
                    </v-card>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'home',
        components: {
        },
        data() {
            return {
                videos: this.$store.state.videos
            }
        }
    }
</script>
