<!-- <template>
  <Student
    @response="(whatever) => (selectedStudent = whatever)"
    studentName="Andy"
  />

  <br />
  <Student
    @response="(whatever) => (selectedStudent = whatever)"
    studentName="Budi"
  />

  <br />
  <Student
    @response="(whatever) => (selectedStudent = whatever)"
    studentName="Ani"
  />

  <br />
  <Student @response="showData" studentName="John" />

  <p>Student yang dipilih adalah {{ selectedStudent }}</p>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  components: {
    Student,
  },
  data() {
    return {
      selectedStudent: "",
    };
  },
  methods: {
    showData(whatever) {
      this.selectedStudent = whatever;
    },
  },
};
</script> -->

<template>
  <div class="menu">
    <Navbar />
  </div>

  <div class="main">
    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style scoped>
.menu {
  background-color: #eeee;
  line-height: 2;
  padding: 10px;
}

.main {
  padding: 10px;
}
</style>
