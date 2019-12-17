<template>
  <div>
    <section v-if="error">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      <p>{{error}}</p>
    </section>

    <section v-else>
      <div v-show="loading">Loading...</div>
      <div v-show="!loading" class="list">
        <h2>Most Liked Photos</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th>Name</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="item.id">
              <td>
                <div
                  v-if="item.category !== (list[index-1] ? list[index-1].category : '')"
                >{{item.category}}</div>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.likes}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      error: "",
      list: null
    };
  },
  mounted() {
    axios
      .get("/query")
      .then(response => {
        this.list = response.data;
      })
      .catch(error => {
        this.error = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style scoped>
table {
  table-layout: fixed;
  border-collapse: collapse;
}
th,
td {
  text-align: left;
  font-weight: normal;
  padding: 15px;
}
thead tr:nth-child(1) {
  background-color: var(--header-color);
  color: var(--header-text-color);
}
tr:nth-child(odd) {
  background-color: #f2f2f2;
}
thead th:nth-child(1) {
  width: 30%;
}
thead th:nth-child(2) {
  width: 60%;
}
thead th:nth-child(3) {
  width: 10%;
}
td:nth-child(3) {
  text-align: left;
}
</style>