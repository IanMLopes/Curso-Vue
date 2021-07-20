<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'texto'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'"> Usando diretiva personalisada</p>
		<p v-destaque.atrasar="cor"> Usando diretiva personalisada</p>
	</div>
</template>

<script>
export default {
	data(){
		return {
			cor: 'red'
		}
	}
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
