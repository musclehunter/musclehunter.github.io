<template>
  <section id="projects" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <h2 class="section-title">
        My <span class="text-gaming">Projects</span>
      </h2>

      <!-- AIM Trainer Featured Project -->
      <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-gaming/50 shadow-lg shadow-gaming/20 mb-12">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <h3 class="text-2xl font-cyber font-bold text-gaming mb-4">AIM Trainer</h3>
            <p class="text-gray-300 mb-6">
              Test and improve your aim with this interactive training application. Designed for gamers who want to enhance their precision, reaction time, and targeting skills in FPS games.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div class="bg-black/50 p-3 rounded-md text-center">
                <div class="text-xl mb-1">🎯</div>
                <div class="text-sm text-gray-400">Precision</div>
              </div>
              <div class="bg-black/50 p-3 rounded-md text-center">
                <div class="text-xl mb-1">⚡</div>
                <div class="text-sm text-gray-400">Speed</div>
              </div>
              <div class="bg-black/50 p-3 rounded-md text-center">
                <div class="text-xl mb-1">📊</div>
                <div class="text-sm text-gray-400">Analytics</div>
              </div>
            </div>
            <div class="flex justify-center md:justify-start">
              <a href="/aim_trainer" class="btn btn-gaming flex items-center gap-2">
                <span>Try AIM Trainer</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="relative rounded-lg overflow-hidden border-2 border-gaming/30 shadow-xl">
              <!-- 装飾的な背景エフェクト -->
              <div class="absolute inset-0 bg-gaming/10 z-0"></div>
              <!-- プレースホルダー画像 - AIM Trainerのスクリーンショットがあれば置き換えてください -->
              <div class="aspect-video bg-black flex items-center justify-center relative z-10">
                <div class="text-center p-8">
                  <div class="text-4xl mb-4">🎮 🎯</div>
                  <h4 class="text-xl font-cyber font-bold text-gaming mb-2">AIM Trainer</h4>
                  <p class="text-gray-400">Improve your targeting skills</p>
                </div>
                <!-- サイバー/ゲーム風の装飾 -->
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gaming/0 via-gaming to-gaming/0"></div>
                <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gaming/0 via-gaming to-gaming/0"></div>
                <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-gaming/0 via-gaming to-gaming/0"></div>
                <div class="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-gaming/0 via-gaming to-gaming/0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Multi-Audio Track Video Player Project -->
      <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-coding/50 shadow-lg shadow-coding/20 mb-12">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <h3 class="text-2xl font-cyber font-bold text-coding mb-4">Multi-Audio Track Video Player</h3>
            <p class="text-gray-300 mb-6">
              A video player that allows playback of multiple audio tracks. Ideal for multilingual content or videos with commentary tracks.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div class="bg-black/50 p-3 rounded-md text-center">
                <div class="text-xl mb-1">🎧</div>
                <div class="text-sm text-gray-400">Multi-Track</div>
              </div>
              <div class="bg-black/50 p-3 rounded-md text-center">
                <div class="text-xl mb-1">🎨</div>
                <div class="text-sm text-gray-400">Custom UI</div>
              </div>
              <div class="bg-black/50 p-3 rounded-md text-center">
                <div class="text-xl mb-1">🧩</div>
                <div class="text-sm text-gray-400">Integration</div>
              </div>
            </div>
            <div class="flex justify-center md:justify-start">
              <a href="https://github.com/musclehunter/multi-audio-track-video-player" target="_blank" rel="noopener noreferrer" class="btn btn-coding flex items-center gap-2">
                <span>View on GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="relative rounded-lg overflow-hidden border-2 border-coding/30 shadow-xl">
              <!-- 装飾的な背景エフェクト -->
              <div class="absolute inset-0 bg-coding/10 z-0"></div>
              <!-- プレースホルダー画像 -->
              <div class="aspect-video bg-black flex items-center justify-center relative z-10">
                <div class="text-center p-8">
                  <div class="text-4xl mb-4">🎬🎶</div>
                  <h4 class="text-xl font-cyber font-bold text-coding mb-2">Multi-Audio Player</h4>
                  <p class="text-gray-400">Enhanced video experience</p>
                </div>
                <!-- サイバー/コーディング風の装飾 -->
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coding/0 via-coding to-coding/0"></div>
                <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coding/0 via-coding to-coding/0"></div>
                <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-coding/0 via-coding to-coding/0"></div>
                <div class="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-coding/0 via-coding to-coding/0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 将来的な他のプロジェクト用のスペース -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div class="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
          <h3 class="text-xl font-cyber font-bold mb-3">More Projects Coming Soon</h3>
          <p class="text-gray-400">Stay tuned for more exciting projects combining programming, gaming, and martial arts.</p>
        </div>
      </div>
    </div>
  </section>
</template>
