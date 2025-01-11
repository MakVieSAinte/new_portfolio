<template>
  <div>

    <TheNavBarComponentVue></TheNavBarComponentVue>

    <the-nav-bar-component-vue>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNavBarComponentVue from '../base/TheNavBarComponent.vue'

export default defineComponent({

    name: 'Home',

    components: {
        TheNavBarComponentVue
    },

    data() {
        return {
    
        }
    },

    methods: {

    },

    mounted() {

    }
});
</script>

<style scoped>

</style>