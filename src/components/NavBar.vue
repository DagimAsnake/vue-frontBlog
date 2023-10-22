<template>
  <nav class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" :src="require('@/assets/user.png')" alt="Logo">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Add</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button class="bg-white rounded-full text-purple-500 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2h-2v2l-2-2H8l-2 2v-2H4a2 2 0 01-2-2V9a2 2 0 012-2h11m1-3V2h4v2m-4-2v4h-2V2m2 10V7h4v5l2 1v4h-4v-3"></path>
              </svg>
            </button>
            <div class="ml-3 relative">
              <div>
                <button class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="require('@/assets/user.png')" alt="User avatar">
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span class="sr-only">Open main menu</span>
            <svg :class="{'hidden': open, 'block': !open }" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg :class="{'hidden': !open, 'block': open }" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{'block': open, 'hidden': !open}" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#" class="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Add</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="require('@/assets/user.png')" alt="User avatar">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">John Doe</div>
            <div class="text-sm font-medium leading-none text-gray-400">johndoe@example.com</div>
          </div>
          <button class="ml-auto bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2h-2v2l-2-2H8l-2 2v-2H4a2 2 0 01-2-2V9a2 2 0 012-2h11m1-3V2h4v2m-4-2v4h-2V2m2 10V7h4v5l2 1v4h-4v-3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>