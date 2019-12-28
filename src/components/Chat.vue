<template>
    <div>
        <ul>
            <li v-for="m in messages" :key="m.text">{{m.text}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {

        },
        computed: {
            messages () {
                return this.$store.state.messages
            }
        }
    }
</script>
