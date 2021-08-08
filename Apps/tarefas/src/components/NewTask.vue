<template>
    <div class="new-tas">
        <input v-model="name" @keydown.enter="add" type="text"
            class="form-element" placeholder="Nova tarefa?">
        <button class="form-element" @click="add">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: { 
        add() {
            this.$emit('taskAdded', { name: this.name })
            this.name = ''
        }
    }
}
</script>

<style>
    .form-element{
        outline: nome;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 10px;
        color:white
    }
    input.form-element{
        width: 500px;
        background-color: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    button.form-element{
        border-left: none;
        background-color: #2196f3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>