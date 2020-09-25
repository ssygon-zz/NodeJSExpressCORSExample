<template>
  <div class="hello">
    <p>Fetching content from express server...</p>
    <strong>{{ msg }}</strong>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      msg: "Loading..."
    };
  },
  mounted() {
    console.log("mounted");
    this.testExpressServer();
  },
  methods: {
    getAPIEndPoint() {
      const endPointDomain = "http://localhost:4000";
      return endPointDomain;
    },
    async testExpressServer() {
      console.log("testing request message from express server");

      try {
        const response = await axios.get(
          `${this.getAPIEndPoint()}/products/123`
        );
        console.log(response);

        // Update message variable
        this.msg = response.data.msg;
      } catch (error) {
        console.error(error);
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
</style>
