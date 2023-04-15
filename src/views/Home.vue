<script setup>
	import {ref} from 'vue'
	import Card from '../components/container/Card.vue'
	import navbar from	'../components/container/NavBar.vue'
	import Input from	'../components/base/Input.vue'
	const arr = Array(10).fill('');
	console.log(arr);

	const valueInput = ref('')
</script>


<template>

	<navbar></navbar>
	<section class="home__search">
		<Input v-model="valueInput" placeholder="Search"></Input>
	</section>
	<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4" >
		<Card v-for="item in arr"
			:url="'https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
			:title="'Card Title'"
			:price="12.35"
			:description="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
			:icon="'icon_inbox_stack'"
			:pieces="6"
    	/>
	</div>
</template>