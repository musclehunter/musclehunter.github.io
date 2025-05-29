<template>
  <section id="social" class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="section-title">
        Connect <span class="text-gaming">With Me</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- X (Twitter) Card -->
        <a href="https://x.com/massuruhantaa" target="_blank" rel="noopener noreferrer" 
           class="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-all hover:shadow-[0_0_15px_rgba(29,161,242,0.5)] group">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-cyber font-bold text-white group-hover:text-[#1DA1F2] transition-colors">X (Twitter)</h3>
              <p class="text-gray-400">@massuruhantaa</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            Follow me on X for updates on my latest projects, martial arts journey, and gaming adventures.
          </p>
          <div class="flex justify-end">
            <span class="inline-flex items-center text-sm font-medium text-[#1DA1F2] group-hover:underline">
              Visit Profile
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </a>
        
        <!-- YouTube Card -->
        <a href="https://www.youtube.com/@MuscleHunterJP" target="_blank" rel="noopener noreferrer" 
           class="bg-black p-6 rounded-lg border border-gray-800 hover:border-red-400 transition-all hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] group">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-cyber font-bold text-white group-hover:text-red-600 transition-colors">YouTube</h3>
              <p class="text-gray-400">@MuscleHunterJP</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            Subscribe to my YouTube channel for gameplay videos, martial arts demonstrations, coding tutorials and more.
          </p>
          <div class="flex justify-end">
            <span class="inline-flex items-center text-sm font-medium text-red-600 group-hover:underline">
              Visit Channel
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </a>
      </div>
      
      <!-- Contact Card -->
      <div class="mt-12">
        <div class="max-w-2xl mx-auto bg-black/50 p-6 rounded-lg border border-gray-800">
          <h3 class="text-xl font-cyber font-bold mb-4 text-gradient bg-gradient-to-r from-martial via-coding to-gaming bg-clip-text text-transparent">Get in Touch</h3>
          <p class="text-gray-300 mb-6">
            Interested in collaborating on a project? Want to discuss martial arts, programming, or gaming? 
            Feel free to reach out through my social media channels.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="https://x.com/massuruhantaa" target="_blank" rel="noopener noreferrer" 
               class="btn btn-martial">
              Connect on X
            </a>
            <a href="https://www.youtube.com/@MuscleHunterJP" target="_blank" rel="noopener noreferrer" 
               class="btn btn-gaming">
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
