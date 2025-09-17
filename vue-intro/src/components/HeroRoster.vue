<script setup>
import { AppState } from '@/AppState.js';
import { gameService } from '@/services/GameService.js';
import { computed } from 'vue';


const heroes = computed(() => AppState.heroes)

function attackBoss(heroName) {
    console.log(heroName, 'attacking');
    gameService.attackBoss(heroName)
}
</script>


<template>
    <section class="row justify-content-between">
        <div v-for="hero in heroes" :key="hero.name" class="col-4">
            <div class=" card">
                <button @click="attackBoss(hero.name)" class="btn btn-outline-vue" v-if="hero.health > 0">Attack with {{
                    hero.type }}</button>
                <img class="hero-img" :class="{ dead: hero.health <= 0 }" :src="hero.img" alt="hero">
                <div class="card-body">
                    <h5>{{ hero.name }} <span class="text-pink">lv.{{ hero.level }}</span></h5>
                    <p><em>{{ hero.type }}</em></p>
                    <div class="progress">
                        <div class="progress-bar" :style="{ width: `${hero.healthPercent}%` }">{{ hero.health }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- <div>{{ heroes }}</div> -->
</template>


<style lang="scss" scoped>
.hero-img {
    height: 150px;
    width: 150px;
    object-position: center;
    margin-inline: auto;
}

.dead {
    transform: rotate(180deg);
}
</style>