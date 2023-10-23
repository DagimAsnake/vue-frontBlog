<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Add</h1>
    <form class="w-full max-w-sm" @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input v-model="title" id="title" type="text" placeholder="Enter title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="topic" class="block text-gray-700 text-sm font-bold mb-2">Topic:</label>
        <input v-model="topic" id="topic" type="text" placeholder="Enter topic" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content:</label>
        <textarea v-model="content" id="content" rows="3" placeholder="Enter content" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      topic: '',
      content: ''
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch('http://localhost:8000/blog/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.title,
          topic: this.topic,
          content: this.content
        })
      });

      if (response.ok) {
        this.title = '';
        this.topic = '';
        this.content = '';

        this.$router.push('/');
      } else {
        console.error('Error sending blog:', response.statusText);
      }
    }
  }
};
</script>
