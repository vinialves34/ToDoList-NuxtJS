<template>
  <section class="bg-white rounded shadow-md">
    <form class="flex flex-col m-10" @submit.prevent>
      <h1 class="text-xl text-center md:text-left mb-5">Adicione sua lista</h1>
      <div class="mb-7 flex md:block">
        <label for="title">
          Title da lista
          <input id="title" name="tilte" class="block form-input border-gray-300 shadow-md px-3 py-2 rounded focus:outline-none focus:ring-1 focus:border-blue-300" type="text">
        </label>
      </div>
      <div class="mb-7 flex md:block">
        <label for="description">
          Descrição
          <input type="text" name="description" id="description" class="block form-input border-gray-300 shadow-md px-3 py-2 rounded focus:outline-none focus:ring-1 focus:border-blue-300">
        </label>
      </div>
      <div class="flex md:block">
        <button
          class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-1 md:m-0"
          type="submit">Adicionar
        </button>

        <button
          class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded m-1 md:m-0"
          type="reset">Limpar
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>
