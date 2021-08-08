<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress"/>
		<NewTask @taskAdded="addTask"/>
		<TaskGrid :tasks="tasks" 
			@taskDeleted="deleteTask" 
			@taskStateChanged="toggleTaskState" 
		/>
	</div>
</template>

<script>
	import TasksProgress from './components/TasksProgress'
	import NewTask from './components/NewTask'
	import TaskGrid from './components/TaskGrid.vue'
	
	export default {
		components: { TasksProgress, TaskGrid, NewTask, NewTask },
		data() {
			return {
				tasks: [
					{ name: 'Lavar a louça', pending: false},
					{ name: 'Lavar a carro', pending: true},
					{ name: 'pagar energia', pending: true},
				]
			}
		},
		watch: { // Faz a observação de mudanças
			tasks:{
				deep: true,
				handler(){
					localStorage.setItem('tasks', JSON.stringify(this.tasks))
				}
			}
		},
		computed: {
			progress(){
				const total = this.tasks.length
				const done = this.tasks.filter(t => !t.pending).length
				return Math.round(done / total * 100) || 0
			}
		},
		methods: {
			addTask(task){ // adiciona no array
				const sameName = t => t.name === task.name || task.name == '' //Aqui achei
				const reallNew = this.tasks.filter(sameName).length == 0
				if(reallNew){
					this.tasks.push({
						name: task.name,
						pending: task.pending || true
					})
				}
			},
			deleteTask(i){ // Apaga os dados pelo indice
				this.tasks.splice(i, 1)
			},
			toggleTaskState(i){
				this.tasks[i].pending = !this.tasks[i].pending
			}
		},
		created(){ // guarda os dados
			const json = localStorage.getItem('tasks')
			const array = JSON.parse(json)
			this.tasks = Array.isArray(array) ? array : []
		}
	}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
