Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      alert: "",
      state: false,
    };
  },

  methods: {
    reset() {
      (this.perspective = 100),
        (this.rotateX = 0),
        (this.rotateY = 0),
        (this.rotateZ = 0);
    },
    async copy() {
      let cssDetails = `transform:${this.box.transform}`;
      await navigator.clipboard.writeText(cssDetails);
      //   change state to true
      this.state = true;
      this.alert = "CSS Copied to Clipboard";

      //   remove it back
      setTimeout(() => {
        this.state = false;
        this.alert = "";
      }, 3000);
    },
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)
            `,
      };
    },
  },
}).mount("#app");
