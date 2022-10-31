<script setup lang="ts">
const statusCheck = ref(5);
const ratingValue = ref(5);
const refreshIntervalMS = ref(2000);
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex w-4/6 max-w-lg flex-col">
      <h1 class="text-xl dark:text-white">
        Welcome to
        <a href="https://github.com/sidebase/sidebase" target="_blank"
          >sidebase</a
        >!
      </h1>
      <p>
        sidebase is a production ready, fullstack typescript nuxt 3 starter. It
        has a lot of batteries like testing, DB ORM, API examples, ... included.
        The data you see below is fetched from an API that is connected to a
        running database. DB, Frontend and Backend all start with a single
        command: <b>npm run dev</b>
      </p>
      <p>
        Make this starter your own - this page is just a boring placeholder. We
        rate this scaffold with:
      </p>
    </div>
  </div>
</template>
