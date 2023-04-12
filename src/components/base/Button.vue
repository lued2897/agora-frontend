<script setup>
    defineProps({
        onClick: Function,
        icon: String,
    })
</script>

<template>
    <!--usando los dos puntos antes de class generamos una clase dinamica -->
    <button type="button" v-on:click="onClick" :class="classname">
        <svg class="icon" :class="icon"></svg>

        <slot> </slot>
        <!--usamos slot para poder meter otra etiqueta dentro del boton-->
    </button>
</template>