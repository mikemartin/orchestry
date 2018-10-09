import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

new Vue({
  el: '#app',
  data: { 
    isOpen: false,
    videoId: 'h2eKImKZviw',
    playerVars: {
      autoplay: 0,
      controls: 0,
      enablejsapi: 1
    }
  },
  methods:{
    openVideo: function(){
      this.isOpen = true
      this.player.playVideo()
    },
    closeVideo: function() {
      this.isOpen = false
      this.player.pauseVideo()
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  }
})

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});