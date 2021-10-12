<template>
  <div class="w-screen md:w-max rounded-2xl border-solid shadow-lg">
    <div id="title" class="bg-green-400 rounded-t-2xl">
      <h1 class="text-center text-2xl md:text-4xl text-white p-10 italic">Your To-Do List</h1>
    </div>

    <form @submit.prevent="validUsername()">
      <div class="p-5 flex justify-center flex-col">
        <input
          v-model="username"
          class="form-input border-gray-300 shadow-md px-3 py-2 rounded focus:outline-none focus:ring-1 focus:border-blue-300"
          type="text" name="username" id="username"
          placeholder="Digite seu nome"
        >

        <button
          class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-5"
          id="submit-username" type="submit">Começar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data: () => {
    return {
      username: ""
    }
  },
  methods: {
    validUsername: function() {
      if (!this.username) {
        Swal.fire({
          icon: 'info',
          title: 'Informação',
          text: 'Por favor, informe seu nome para continuar.',
          confirmButtonColor: '#34d399'
        });
      } else {
        localStorage.setItem('user-guess', this.username);
        if (!localStorage.getItem('list')) {
          localStorage.setItem('list', JSON.stringify([]));
        }

        this.$router.push('/your-list');
      }
    }
  }
}
</script>
