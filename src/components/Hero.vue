<template>
  <section class="h-screen flex items-center relative overflow-hidden">
    <!-- Background with overlay -->
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-martial/30 via-coding/30 to-gaming/30 z-20"></div>
    
    <!-- Animated background grid -->
    <div class="absolute inset-0 z-0">
      <div class="grid-animation"></div>
    </div>
    
    <!-- Content -->
    <div class="container mx-auto px-4 relative z-30">
      <div class="flex flex-col md:flex-row items-center justify-between gap-10">
        <div class="w-full md:w-1/2">
          <h1 class="text-4xl md:text-6xl font-cyber font-bold mb-4">
            <span class="text-martial">Muscle</span><span class="text-white">Hunter</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 font-cyber tracking-wide">
            <span class="text-coding">Developer</span> • 
            <span class="text-martial">Martial Artist</span> • 
            <span class="text-gaming">Gamer</span>
          </p>
          <p class="text-lg mb-8 text-gray-300">
            My dream is to be a legend in full dive MMORPG. I am a gamer at heart, but I am also an engineer, ABO, fighter, and musician. Recently very interested in AI.
          </p>
          <div class="flex gap-4">
            <a href="#about" class="btn btn-martial">Discover</a>
            <a href="#social" class="btn btn-gaming">Connect</a>
          </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80">
            <!-- Glowing circles behind the image -->
            <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-martial via-coding to-gaming opacity-75 blur-md animate-pulse"></div>
            <!-- Image -->
            <img src="/musclehunter.png" alt="MuscleHunter" class="w-full h-full object-cover rounded-full border-4 border-white/20 relative z-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-animation {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
  animation: grid-scroll 20s linear infinite;
  transform: perspective(500px) rotateX(60deg);
}

@keyframes grid-scroll {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 50px;
  }
}
</style>
