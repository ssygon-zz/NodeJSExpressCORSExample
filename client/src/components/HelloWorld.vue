<template>
  <div class="hello">
    <p>
      <strong>Click the button</strong> to fetch content from the Express
      server<br />
      (or from a Headless CMS server like
      <a href="https://strapi.io/" target="_blank">https://strapi.io/</a>)
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
      <p>{{ productsMessage }}</p>
      <h2>Orders:</h2>
      <p>{{ ordersMessage }}</p>
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
      productsMessage: `Loading Products...`,
      ordersMessage: `Loading Orders...`,
      showFetchingContent: false
    };
  },
  mounted() {
    console.log(`app is now mounted`);
  },
  methods: {
    // Get Products
    async getProducts() {
      // Error messages
      const errorFetchingMessage = `Failed to fetch Products from the Express server! Have you started the server?`;

      try {
        this.productsMessage = "Loading Products...";

        // Get Product 123
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
    },
    // Get Orders
    async getOrders() {
      // Error messages
      const errorFetchingMessage = `Failed to fetch Orders from the Express server! Have you started the server?`;

      try {
        this.ordersMessage = "Loading Orders...";

        // Get Orders
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
    },
    testExpressServer() {
      console.log(`testing request message from express server`);

      // Show fetching content
      this.showFetchingContent = true;

      // Fetch data content
      this.getProducts();
      this.getOrders();
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/components/hello.scss";
</style>
