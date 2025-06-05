<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    <NavBar />
    <main>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <SocialSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import SocialSection from './components/SocialSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import Footer from './components/Footer.vue';
</script>
