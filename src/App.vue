<template>
  <div class="container">
    <div v-if="profile.user">
      <p>
          Full name: {{ fullName }}
      </p>
      <p>
          Email: {{ email }}
      </p>
    </div>
    <div v-if="profile.error">
      Oops an error occured
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ProfileState } from './store/profile/types';

const namespace = 'profile';


@Component
  export default class App extends Vue {
    @State('profile') profile: ProfileState;
    @Action('fetchProfile', { namespace }) fetchProfile: () => void;
    @Getter('fullName', { namespace }) fullName: string;

    mounted() {
      // fetching data as soon as the component's been mounted
      console.log("mouted");
      this.fetchProfile();
    }

    // computed variable based on user's email
    get email() {
      const user = this.profile && this.profile.user;
      return (user && user.email) || '';
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
