<template>
  <div class="max-w-xl mx-auto mt-8 p-4">
    <h1 class="text-2xl font-bold mb-4">{{ blog.title }}</h1>
    <p class="text-gray-500 text-sm mb-4">{{ blog.topic }}</p>
    <p class="mb-4">{{ blog.content }}</p>
    <div class="flex">
      <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 mr-2" @click="editBlog(blog._id)">Edit</button>
      <button class="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600" @click="deleteBlog">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {}
    };
  },
  async mounted() {
    this.fetchBlogDetails();
  },
  methods: {
    async fetchBlogDetails() {
      try {
        const response = await fetch(`http://localhost:8000/blog/${this.$route.params.id}`);
        if (response.ok) {
          const data = await response.json();
          this.blog = data.msg;
        } else {
          console.error('Error fetching blog details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    },
    editBlog(blogId) {
      this.$router.push({ name: 'edit', params: { id: blogId } });
    },
    async deleteBlog() {
      try {
        const response = await fetch(`http://localhost:8000/blog/delete/${this.$route.params.id}`, {
          method: 'DELETE'
        });
        if (response.ok) {

          this.$router.push('/');
        } else {
          console.error('Error deleting blog:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  }
};
</script>

<style>
button:hover {
  cursor: pointer;
}
</style>