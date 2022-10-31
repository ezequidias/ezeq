<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Typed } from '@duskmoon/vue3-typed-js'
import type { TypedOptions } from '@duskmoon/vue3-typed-js'

defineProps<{
  classHeader?: String
}>()

const options: TypedOptions = {
  strings: ['Senior Software Engineer', 'Developer', 'AI Enthusiast'],
  loop: true,
  typeSpeed: 65,
  backSpeed: 65,
}

const route = useRoute()

const menus = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  // { name: 'Education', to: '/education' },
  // { name: 'Experience', to: '/experience' },
  { name: 'Projects', to: '/portfolio' },
  { name: 'Skills', to: '/skills' },
  { name: 'Contact', to: '/contact' },
]
</script>

<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header-tops" :class="classHeader">
    <div class="container">
      <h1>
        <NuxtLink to="/">
          Ezequiel Dias
        </NuxtLink>
      </h1>

      <h2 style="color:#fff">
        <Typed :options="options">
          I'm <span class="typing" style="color:#12D640" />
        </Typed>
      </h2>
      <nav class="nav-menu">
        <ul>
          <li v-for="item, index in menus" :key="index" :class="{ active: item.to === route.path }">
            <NuxtLink :to="item.to">
              <span>{{ item.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="social-links">
        <a href="https://www.linkedin.com/in/ezee" target="_blank" class="linkedin"><Icon icon="bxl:linkedin" /></a>
        <a href="https://www.github.com/ezequidias" target="_blank" class="github"><Icon icon="bxl:github" /></a>
      </div>
    </div>
  </header><!-- End Header -->
</template>
