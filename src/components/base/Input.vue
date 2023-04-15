<script setup>
    import {computed} from 'vue'

    const props = defineProps(['modelValue', 'title', 'placeholder', 'type'])
    /* ModelValue: valor del input, title: titulo del input, type:indica que tipo de input va a ser */
    const emit= defineEmits(["update:modelValue"])
    /* define los emits */


    const value = computed({
        get (){
            return props.modelValue
        },
        set (value){
            emit("update:modelValue",value)
        }
    })
</script>

<template>
    <label class="field">
        <span class="field__title">{{ title }}</span>
        <input class="field__input" :type="type" v-model="value" :placeholder="placeholder">
    </label>
</template>