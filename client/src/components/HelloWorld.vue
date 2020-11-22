<template>
  <div class="hello">
    <p>
      Click the button to fetch content from the Express server<br />(or can use
      a Headless CMS server like
      <a href="https://strapi.io/" target="_blank">https://strapi.io/)</a>
    </p>
    <input
      class="btn"
      value="CLICK ME!"
      type="button"
      @click="testExpressServer()"
    />

    <div v-if="showFetchingContent">
      <h1>Fetching!</h1>
      <h2>Products:</h2>
      <strong>{{ productsMessage }}</strong>
      <h2>Orders:</h2>
      <strong>{{ ordersMessage }}</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import axios from "axios";
import config from ".././appconfig";

export default Vue.extend({
  data() {
    return {
      productsMessage: `Loading...`,
      ordersMessage: `Loading...`,
      showFetchingContent: false
    };
  },
  mounted() {
    console.log(`app is now mounted`);
  },
  methods: {
    async testExpressServer() {
      console.log(`testing request message from express server`);

      // Error messages
      const errorFetchingMessage = `Failed to fetch from express server! NOTE: Have you started the server?`;

      // Show fetching content
      this.showFetchingContent = true;

      // Get products
      try {
        const response = await axios.get(
          `${config.getAPIEndpointFullPath()}/products/123`
        );
        console.log(response);

        // Update message with data
        this.productsMessage = response.data.message;
      } catch (error) {
        console.error(error);

        // Update message with error
        this.productsMessage = errorFetchingMessage;
      }

      // Get orders
      try {
        const response = await axios.get(
          `${config.getAPIEndpointFullPath()}/orders/`
        );
        console.log(response);

        // Update message with data
        this.ordersMessage = response.data.message;
      } catch (error) {
        console.error(error);

        // Update message with error
        this.ordersMessage = errorFetchingMessage;
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
  border: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: blue;
  color: white;
}
</style>
