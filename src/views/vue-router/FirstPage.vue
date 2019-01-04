<template>
    <div>
        声明式路由
        <Button @click="go('PageSecond')">嵌套路由</Button>
        <Button @click="go('SecondPage')">非嵌套路由</Button>
        <div style="padding:'24px'; minHeight:'280px'; width:80% background: '#888';">
          <router-view></router-view>
        </div>

    </div>
</template>
<script>
export default {
  name: 'FirstPage',
  data () {
    return {

    };
  },
  methods: {
    go (name) {
      this.$router.push({name: name});
    }
  }
};
</script>
