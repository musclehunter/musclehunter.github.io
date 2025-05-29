<template>
  <footer class="bg-black py-8 border-t border-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <div class="text-xl font-cyber font-bold tracking-wider text-white">
            <span class="text-martial">M</span><span class="text-coding">u</span><span class="text-gaming">s</span>cle<span class="text-martial">H</span><span class="text-coding">u</span><span class="text-gaming">n</span>ter
          </div>
          <p class="text-gray-400 mt-2">Martial Artist • Developer • Gamer</p>
        </div>
        
        <div class="flex space-x-4">
          <a href="https://x.com/massuruhantaa" target="_blank" rel="noopener noreferrer" 
             class="text-gray-400 hover:text-[#1DA1F2] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@MuscleHunterJP" target="_blank" rel="noopener noreferrer" 
             class="text-gray-400 hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} MuscleHunter. All rights reserved.</p>
        <p class="mt-2">
          <a href="#about" class="hover:text-white transition-colors">About</a> • 
          <a href="#skills" class="hover:text-white transition-colors">Skills</a> • 
          <a href="#social" class="hover:text-white transition-colors">Social</a> • 
          <a href="/aim_trainer" class="hover:text-white transition-colors">AIM Trainer</a>
        </p>
      </div>
    </div>
  </footer>
</template>
