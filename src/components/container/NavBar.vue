<script setup>
import Button from '../base/Button.vue'
</script>

<template>
    <nav class="navbar mb-8">
        <svg class="navbar__logo icon icon_agora"></svg>
        <div class="navbar__buttons">
            <Button :icon="'icon_shopping_bag_dark'"></Button>
            <Button :icon="'icon_user'"></Button>
        </div>
    </nav>
</template>