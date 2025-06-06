<template>
  <nav class="bg-black/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="text-xl font-cyber font-bold tracking-wider text-white">
        <span class="text-martial">M</span><span class="text-coding">u</span><span class="text-gaming">s</span>cle<span class="text-martial">H</span><span class="text-coding">u</span><span class="text-gaming">n</span>ter
      </div>
      <div class="hidden md:flex space-x-6">
        <a href="#about" class="text-white hover:text-martial transition-colors">About</a>
        <a href="#projects" class="text-white hover:text-martial transition-colors">Projects</a>
        <a href="#skills" class="text-white hover:text-coding transition-colors">Skills</a>
        <a href="#social" class="text-white hover:text-gaming transition-colors">Social</a>
      </div>
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-black/90 backdrop-blur-md py-4">
      <div class="container mx-auto px-4 flex flex-col space-y-3">
        <a @click="isMenuOpen = false" href="#about" class="text-white hover:text-martial transition-colors">About</a>
        <a @click="isMenuOpen = false" href="#projects" class="text-white hover:text-martial transition-colors">Projects</a>
        <a @click="isMenuOpen = false" href="#skills" class="text-white hover:text-coding transition-colors">Skills</a>
        <a @click="isMenuOpen = false" href="#social" class="text-white hover:text-gaming transition-colors">Social</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>
