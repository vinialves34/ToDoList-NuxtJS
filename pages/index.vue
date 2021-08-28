<template>
  <section class="container mx-auto">
    <div class="flex flex-row justify-around items-center h-screen">
      <div class="pl-14">
        <img class="h-96" :src="artLogin" alt="art_login">
      </div>
      <div class="pr-14">
        <Login/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      artLogin: null
    }
  },
  created: function() {
    this.randomArt();
  },
  methods: {
    randomArt() {
      let arts = [
        require('~/assets/images/complete_task.svg'),
        require('~/assets/images/to_do_list.svg'),
        require('~/assets/images/list.svg'),
        require('~/assets/images/selection_list.svg'),
        require('~/assets/images/task_list.svg'),
      ];

      this.artLogin = arts[Math.floor(Math.random()*arts.length)];
    }
  }
}
</script>
