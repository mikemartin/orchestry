import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

new Vue({
  el: '#app',
  data: { 
    isOpen: false,
    videoId: 'xD33shUF13g',
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

const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;


  // Create Noise
  const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
              buffer32[i] = 0xff000000;
          }
      }

      noiseData.push(idata);
  };


  // Play Noise
  const paintNoise = () => {
      if (frame === 9) {
          frame = 0;
      } else {
          frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
  };


  // Loop
  const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
      }, (1000 / 25));
  };


  // Setup
  const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
          createNoise();
      }

      loop();
  };


  // Reset
  let resizeThrottle;
  const reset = () => {
      window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              setup();
          }, 200);
      }, false);
  };


  // Init
  const init = (() => {
      canvas = document.getElementById('noise');
      ctx = canvas.getContext('2d');

      setup();
  })();
};

noise();


window.addEventListener('load', function() {
  var videos = document.getElementsByClassName("mirror_img");

  function checkLoad() {
    console.log("check");
      if (videos[0].readyState === 4) {
        for(var i = 0; i < videos.length; i++){
          videos[i].play();
        }
      } else {
        console.log("check again");
          setTimeout(checkLoad, 100);
      }
  }

  checkLoad();
}, false);