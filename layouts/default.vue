<template>
	<main class="headers">
		<div class="navbar">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </div>
		<slot />
	</main>
</template>

<style scoped>
ul{
    display: flex;
}
li{
    margin: 0 2%;
}
</style>
