<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const monster = computed(() => AppState.monster)

function attackMonster() {
    AppState.monster.health--
}

</script>


<template>
    <section class="row justify-content-center">
        <img @click="attackMonster()" class="boss-img"
            src="https://em-content.zobj.net/source/whatsapp/420/troll_1f9cc.png" alt="ogre">
        <h3>{{ monster.name }}</h3>
        <p><em>{{ monster.title }}</em></p>
        <div class="col-6">
            <div class="progress">
                <div class="progress-bar" :style="`width: ${monster.health}%`">{{ monster.health }}</div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped></style>