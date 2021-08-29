<template>
  <section>
    <div class="bg-green-400 shadow-sm mb-5 md:mb-10 flex justify-center">
      <NuxtLink to="/">
        <h1 class="text-center text-2xl text-white p-5 italic">Your To-Do List</h1>
      </NuxtLink>
    </div>
    <div class="container mx-auto flex flex-col">
      <PanelCreateList/>
      <PanelList/>
    </div>
  </section>
</template>
