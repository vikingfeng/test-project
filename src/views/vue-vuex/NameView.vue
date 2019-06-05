<template>
    <div>
        声明式路由
        <Button @click="go('NamePageSecond')">命名视图</Button>
        <!-- <Button @click="go('SecondPage')">非嵌套路由</Button> -->
        <div class="view" style="padding:'24px'; minHeight:'280px'; width:80% background: '#888';">
          <router-view class="view1"></router-view>
          <router-view name="view2" class="view2"></router-view>
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
<style lang="less" scoped>
.view{
  .view1{
    margin: 10px 0;
    height: 200px;
    border: 1px solid yellowgreen;
  }
  .view2{
    height: 200px;
    border: 1px solid pink;
  }
}
</style>
