import HelloWorld from "./components/HelloWorld.vue";

const HelloWorldSimple = {
  install(Vue) {
   // Let's register our component globally
   // https://vuejs.org/v2/guide/components-registration.html
   Vue.component("hello-world", HelloWorld);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(HelloWorldSimple)
}

export default HelloWorldSimple;