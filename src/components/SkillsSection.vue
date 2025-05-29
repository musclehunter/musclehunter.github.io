<template>
  <section id="skills" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <h2 class="section-title">
        My <span class="text-coding">Skills</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Martial Arts Skills -->
        <div class="bg-gray-900/80 p-6 rounded-lg border border-gray-800 hover:border-martial transition-colors">
          <h3 class="text-xl font-cyber font-bold mb-6 text-martial flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12" />
            </svg>
            Martial Arts
          </h3>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Technique</span>
                <span class="text-martial">90%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-martial h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Discipline</span>
                <span class="text-martial">95%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-martial h-2 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Strategy</span>
                <span class="text-martial">85%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-martial h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Programming Skills -->
        <div class="bg-gray-900/80 p-6 rounded-lg border border-gray-800 hover:border-coding transition-colors">
          <h3 class="text-xl font-cyber font-bold mb-6 text-coding flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Programming
          </h3>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Front-end</span>
                <span class="text-coding">85%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-coding h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Back-end</span>
                <span class="text-coding">95%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-coding h-2 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">AI/ML</span>
                <span class="text-coding">75%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-coding h-2 rounded-full" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Gaming Skills -->
        <div class="bg-gray-900/80 p-6 rounded-lg border border-gray-800 hover:border-gaming transition-colors">
          <h3 class="text-xl font-cyber font-bold mb-6 text-gaming flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            Gaming
          </h3>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Strategy</span>
                <span class="text-gaming">94%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gaming h-2 rounded-full" style="width: 94%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Reflexes</span>
                <span class="text-gaming">90%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gaming h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-white">Teamwork</span>
                <span class="text-gaming">85%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gaming h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tech Stack -->
      <div class="mt-16">
        <h3 class="text-2xl font-cyber font-bold mb-6 text-coding">Tech Stack</h3>
        <div class="flex flex-wrap justify-center gap-6">
          <!-- Tech icons -->
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🔥</div>
            <div class="text-sm">JavaScript</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🧩</div>
            <div class="text-sm">Vue.js</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">⚡</div>
            <div class="text-sm">Node.js</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🐍</div>
            <div class="text-sm">Python</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🧠</div>
            <div class="text-sm">AI/ML</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🎮</div>
            <div class="text-sm">Game Dev</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🐘</div>
            <div class="text-sm">PHP</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🐬</div>
            <div class="text-sm">MySQL</div>
          </div>
          <div class="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-coding transition-colors text-center w-24">
            <div class="text-2xl mb-2">🚀</div>
            <div class="text-sm">Laravel</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
