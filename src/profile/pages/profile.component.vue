<script>
import { useAuthenticationStore } from '/src/iam/services/authentication.store.js';
import {ProfilesApiService} from "../services/profiles-api.service.js";
import PostService from "../../social/services/posts.service.js";
export default {
  name: "profile.component",
  props: ['routeUsername'],
  data() {
    return {
      followers: 12,
      follows: 12,
      posts: null,
      iconsBar: [
        'pi-home',
        'pi-search',
        'pi-user',
        'pi-ellipsis-v'
      ],
      // data injected from back-end
      resourceUser: null,
      // services
      profilesApiService: null,
    }
  },
  computed: {
    name() {
      const authenticationStore = useAuthenticationStore();
      return authenticationStore.currentUsername;
    }
  },
  created() {
    this.profilesApiService = new ProfilesApiService();
    this.injectUser();
  },
  methods: {
    fetchPosts() {
      PostService.getAll().then(response => {
        this.posts = response.data;
        this.posts.forEach(post => {
          this.fetchComments(post.id);
        });
      }).catch(error => {
        console.error("There was an error fetching the posts:", error);
      });
    },
    injectUser() {
      if (this.routeUsername === undefined) {
        this.profilesApiService.getByUsername()
            .then(response => {
              this.resourceUser = response.data;
              console.log(response.data);
            });
      } else {
        this.profilesApiService.getByUsername(this.routeUsername)
            .then(response => {
              this.resourceUser = response.data;
              console.log(response.data);
            });
      }
    }
  },
}
</script>
<template>
  <div class="flex flex-column" style="width:95%; margin-left:5%;">
    <div class="flex flex-column align-items-center justify-content-center" style="background-color:#1e2e3a;width:100%;height:100vh">
      <div class="border-2 border-white border-round-2xl p-4 flex flex-column align-items-center justify-content-center" style="background-color:white;width: 95%">
        <i class="pi pi-user m-2" style="color:#131920; font-size:8em;"></i>
        <p class="text-black-alpha-90" style="font-size:2em;">{{ resourceUser.username }}</p>
        <hr class="border-black-alpha-90">
        <div class="flex" style="">
          <div class="pi pi-users m-4 text-black-alpha-90" style="font-size: 20px;"> Seguidores {{ followers }}</div>
          <div class="pi pi-users m-4 text-black-alpha-90" style="font-size:20px;"> Seguidos {{ follows }}</div>
        </div>
        <div class="text-justify w-full" style="font-size: 20px;">
          {{ resourceUser.description }}
        </div>
      </div>
    </div>
    <div class="flex justify-center p-4" style="width:100%">
      <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-8 inline-block border border-gray-300 rounded-lg mb-4 bg-white" style="width:100%;">
          <pv-card>
            <template #title>
              <div>
                <router-link :to="'profile/' + post.user.username" style="text-decoration: none">
                  <i class="pi pi-user"/>
                  <h5>{{ post.user.username }}</h5>
                </router-link>
                <p class="font-light" style="font-size:15px;">{{ post.content }}</p>
                <!-- Add this line to display the image -->
                <img :src="post.image" alt="Post image" style="width: 300px; height: 325px;" />
              </div>
              <div class="comments-section">
                <h2>Comments</h2>
                <div v-for="comment in comments.filter(comment => comment.postId === post.id)" :key="comment.id">
                  <p class="comment-content">{{ comment.content }}</p>
                </div>
                <form @submit.prevent="createComment(post.id)">
                  <input type="text" v-model="newComment" placeholder="Add a comment..." class="comment-input"/>
                  <button type="submit" class="comment-submit-btn">Post Comment</button>
                </form>
              </div>
              <button @click="handleLike(post.id)">
                <i class="pi pi-thumbs-up" :class="{ 'liked': post.likes.includes(userStore.username) }"></i>
                {{ post.likeCount }}
              </button>
            </template>
          </pv-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>