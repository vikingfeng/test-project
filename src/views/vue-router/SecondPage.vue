<template>
    <div>
        编程式路由
    </div>
</template>
<script>
export default {
  name: 'FirstPage',
  data () {
    return {

    };
  },
  mounted () {
    this.submitForm();
  },
  methods: {
    submitForm () {
      this.$ajax.get('https://www.easy-mock.com/mock/5acadf9c6c11675e1529582e/example/address')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>
