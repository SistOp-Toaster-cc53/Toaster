<script>
  import PostService from '../services/posts.service.js';
  import axios from 'axios';
  import { ref } from 'vue';
  import {useAuthenticationStore} from "../../iam/services/authentication.store.js";
  import CommentsService from "../services/comments,service.js";
  import {useToast} from "primevue/usetoast";

  export default {
    setup() {
      const userStore = ref(useAuthenticationStore());

      return {
        userStore,
      };},
  name: "home.component",
  data() {
  return {
  newPostContent: '',
  selectedFile: null,
    toast: useToast(),
  posts: [],
  comments: [],
  newComment: '',
  icons: ['pi-inbox', 'pi-sign-out'],
  iconsBar: [
{ icon: 'pi-home', route: '/home' },
{ icon: 'pi-search', route: '/' },
{ icon: 'pi-user', route: '/profile' },
{ icon: 'pi-ellipsis-v', route: '/' }
  ],
}
},
  methods: {
    fetchPosts() {
      PostService.getAll().then(response => {
        this.posts = response.data;
        this.posts.forEach((post, index) => {
          this.fetchComments(post.id, index);
        });
      }).catch(error => {
        console.error("There was an error fetching the posts:", error);
      });
    },
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        let formData = new FormData();
        formData.append('image', file);

        // Send a POST request to the ImgBB API
        axios.post('https://api.imgbb.com/1/upload', formData, {
          params: {
            key: 'ae6e0b3b9be3e7f4aea315fdd3233ff1'  // Your ImgBB API key
          },
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.selectedFile = response.data.data.url;
        }).catch(error => {
          console.error("Failed to upload image:", error);
        });
      }
    },
    fetchComments(postId, index) {
      CommentsService.getByPostId(postId).then(response => {
        this.giveValue(response.data, index);
        console.log(`Fetched comments for post ${postId}:`, this.posts[index].comments);
      }).catch(error => {
        console.error("There was an error fetching the comments:", error);
      });
    },
    giveValue(value, index) {
      this.posts[index].comments = value;
    },

    createPost() {
      if (!this.newPostContent.trim() || !this.selectedFile) {
        alert('Please fill in all fields and select an image.');
        return;
      }

      let user = useAuthenticationStore().username;
      if (user === null || user === undefined || user === '') {
        user = localStorage.getItem('username');
      }

      const postData = {
        user: {
          id: '123456789123456789123457',
          toaster: '',
          username: user,
          image: 'path/to/user_image.jpg',
          verified: false
        },
        comments: ['Really insightful post!'],
        toasts: ['User3'],
        likes: ['User4'],
        likeCount: 3,
        content: this.newPostContent,
        image: this.selectedFile,
        dateCreated: new Date().toISOString()
      };

      PostService.create(postData)
          .then(() => {
            this.newPostContent = '';
            this.selectedFile = null;
            this.fetchPosts();
            alert('Post created successfully!');
          })
          .catch(error => {
            console.error("Failed to create post:", error);
            alert('Failed to create post. Please try again.');
          });
    },
    handleLike(postId) {
      const userStore = useAuthenticationStore();
      const post = this.posts.find(post => post.id === postId);

      console.log('Post found:', post.content);

      let user = userStore.username;
      if (user === null || user === undefined || user === '') {
        user = localStorage.getItem('username');
      }

      console.log('User found:', user);

      const index = post.likes.indexOf(user);
      if (index !== -1) {
        post.likes.splice(index, 1);
        post.likeCount--;
      } else {
        post.likes.push(user);
        post.likeCount++;
      }

      console.log('Post updated:', post)

      PostService.update(postId, post)
          .then(() => {
            console.log(`Post ${postId} ${index !== -1 ? 'unliked' : 'liked'} successfully.`);
          })
          .catch(error => {
            console.error(`Failed to ${index !== -1 ? 'unlike' : 'like'} post ${postId}:`, error);
            alert(`Failed to ${index !== -1 ? 'unlike' : 'like'} post. Please try again.`);
          });
    },
    createComment(postId) {
      if (!this.newComment.trim()) {
        alert('Please enter a comment.');
        return;
      }

      let user = useAuthenticationStore().username;
      if (user === null || user === undefined || user === '') {
        user = localStorage.getItem('username');
      }

      const userStore = useAuthenticationStore();
      const commentData = {
        postId: postId,
        username: user,
        userPhoto: '',
        user: {
          id: '123456789123456789123457',
          toaster: '',
          username: userStore.username,
          image: '',
          verified: false
        },
        comments: [this.newComment],
        posts: [postId],
        toasts: ['string'],
        likes: ['string'],
        likeCount: 0,
        content: this.newComment,
        image: 'string',
        dateCreated: new Date().toISOString(),
      };

      CommentsService.create(commentData)
          .then(response => {
            const newComment = response.data;
            newComment.postId = postId;
            this.fetchComments(postId, this.posts.findIndex(post => post.id === postId));
          })
          .catch(error => {
            console.error("Failed to create comment:", error.response ? error.response.data : error);
            alert('Failed to create comment. Please try again.');
          });
    },
  },
    mounted() {
      this.fetchPosts();
      this.posts.forEach(post => {
        this.fetchComments(post.id);
      });
    }
}
</script>
<template>
  <pv-toast/>
  <!-- Main content area -->
  <div class="flex flex-column" style="width:95%; margin-left:5%;">
    <!-- Post creation section -->
    <div class="flex flex-column items-center justify-center h-screen" style="width: 95%">
      <div class="shadow-md rounded-lg p-4" style="background-color:#FFFFFF;">
        <h1 class="text-4xl font-bold mb-2" style="color:#131920">For you</h1>
        <input type="text" v-model="newPostContent" placeholder="What are you thinking?" class="post-input"/>
        <div class="flex justify-content-between align-items-center">
          <div class="flex justify-content-center">
            <!-- Hide the file input element -->
            <input type="file" @change="handleFileUpload" class="mr-3" style="display: none" ref="fileInput" />
            <!-- Add an icon for file upload -->
            <i class="pi pi-image mr-3" style="font-size: 2.2rem; cursor: pointer;" @click="triggerFileUpload"></i>
            <i class="pi pi-video mr-3" style="font-size: 2.2rem; cursor: pointer;"></i>
            <i class="pi pi-calendar mr-3" style="font-size: 2.2rem; cursor: pointer;"></i>
          </div>
          <button @click="createPost" class="px-4 py-2 text-white font-semibold border-round-xl" style="background-color:#131920; width:20%; height:45px; border: none; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); cursor: pointer;">
            Post
          </button>
        </div>
      </div>
      <!-- Display posts dynamically -->
      <div class="flex justify-center p-4" style="width:100%">
        <div class="row">
          <div v-for="post in posts" :key="post.id" class="col-8 inline-block border border-gray-300 rounded-lg mb-4 bg-white" style="width:100%;">
            <pv-card>
              <template #title>
                <div style="display: flex;">
                  <!-- Left side: Post information -->
                  <div style="flex: 1; padding-right: 20px;">
                    <router-link :to="'profile/' + post.user.username" style="text-decoration: none">
                      <i class="pi pi-user"></i>
                      <h5>{{ post.user.username }}</h5>
                    </router-link>
                    <p class="font-light" style="font-size:15px;">{{ post.content }}</p>
                    <img :src="post.image" alt="Post image" style="width: 300px; height: 325px;" />
                    <div style="display:flex; gap:10px;">
                      <pv-button @click="handleLike(post.id)" style="display:flex;justify-content: center; align-items: center; position:static;background-color:#131920;">
                        <i class="pi pi-thumbs-up" :class="{ 'liked': post.likes.includes(userStore.username) } + ' mr-2'"></i>
                        {{ post.likeCount }}
                      </pv-button>
                      <form @submit.prevent="createComment(post.id)" style="display:flex;">
                        <pv-input-text type="text" v-model="newComment" placeholder="Add a comment..." class="comment-input"/>
                        <pv-button type="submit" class="comment-submit-btn" style="position:static;background-color:#131920; margin-left:10px;">Post Comment</pv-button>
                      </form>
                    </div>
                  </div>

                  <!-- Right side: Comments and interactions -->
                  <div style="flex: 1; border-left: 1px solid #ddd; padding-left: 20px;">
                    <div v-for="(comment, index) in post.comments" :class="index !== 0 ? 'pt-2' : ''">
                      <pv-card>
                        <template #title>
                          <router-link class="flex" :to="'profile/' + comment.username" style="text-decoration: none">
                            <h5>{{ comment.username }}</h5>
                          </router-link>
                        </template>
                        <template #subtitle>
                          <!-- show a trash icon if username is same as user -->
                        </template>
                        <template #content>
                          {{comment.content}}
                        </template>
                      </pv-card>
                    </div>
                  </div>
                </div>
              </template>
            </pv-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.post-input {
  width: 100%;
  padding: 15px 30px;
  margin-bottom: 20px;
  margin-top: 15px;
  border: 1px solid #2196f3;
  border-radius: 30px;
  height: 70px;
  font-size: 20px;
  color: #040404;
  background-color: rgba(33, 150, 243, 0.2);
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.post-input:focus {
  border-color: #2196f3;
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
}

.post-input:focus {
  border-color: #2196f3;
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
}

.liked {
  color: #2196f3;
}

</style>