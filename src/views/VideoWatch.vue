<template>
    <div>
        <h1>Hi, let's watch a video</h1>
        <h3>{{this.$route.params.id}}</h3>
        <div v-if="video">
            {{video.description}}
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            video() {
                return this.$store.state.videos.find(vid => vid.id == this.$route.params.id)
            }
        }
    }
</script>