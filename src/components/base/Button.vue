<script setup>
    defineProps({
        onClick: Function,
        icon: String
    })
    const className=`w-full p-1 flex justify-center gap-3 items-center
                    text-white-100 font-bold rounded`
</script>

<template>
        <!--usando los dos puntos antes de class generamos una clase dinamica, la  -->
        <button type="button" v-on:click="onClick" :class="className">
            <svg v-if="icon" class="w-5 h-5 icon" :class="icon"></svg>
            <slot></slot>
            <!--usamos slot para poder meter otra etiqueta dentro del boton-->
        </button>
</template>