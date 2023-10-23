<template>
  <div class="flex items-center justify-center">
    <div>
      <h1 class="text-2xl font-bold mb-4">Home</h1>
      <ul>
        <li v-for="blog in blogs" :key="blog._id">
          <a class="text-blue-500 cursor-pointer" @click="navigateToDetailPage(blog._id)">{{ blog.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await fetch('http://localhost:8000/blog');
        if (response.ok) {
          const data = await response.json();
          this.blogs = data.blogs;
        } else {
          console.error('Error fetching blogs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    },
    navigateToDetailPage(blogId) {
      this.$router.push({ name: 'details', params: { id: blogId } });
    }
  }
};
</script>