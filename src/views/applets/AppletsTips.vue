<template>
<div class="container">
  <div class="card-item">
    <Card shadow dis-hover>
      <p slot="title">1、自定义顶部标题栏时计算高度</p>
      <pre>解决：
  wx.getSystemInfo({
    success: e => {
      this.globalData.statusBar = e.statusBarHeight; //状态栏高度
      let custom = wx.getMenuButtonBoundingClientRect(); //菜单按钮(右上角)
      this.globalData.custom = custom;
      this.globalData.customBar =
        custom.bottom + custom.top - e.statusBarHeight;
      //计算得到定义的状态栏高度
    }
  });</pre>
    </Card>
  </div>
  <div class="card-item">
    <Card shadow dis-hover>
      <p slot="title">2、在页面外刷新当前页</p>
      <pre>解决：
  if (getCurrentPages().length !== 0) {
    //刷新当前页面的数据
    getCurrentPages()[getCurrentPages().length - 1].onLoad();
  }</pre>
    </Card>
  </div>
</div>
</template>
<script>
import btn from '@/components/component/btn.vue';
export default {
  name: 'appletsTips',
  components: {btn},
  data () {
    return {
      value: '1',
      show: false
    };
  }

};
</script>
<style scoped lang="less">
.container{
  background: #f0f2f5;
  .card-item{
    width:50%;
    min-width: 600px;
    padding: 20px;
  }
  .red{
    color: red;
  }
  .green{
    color: green;
  }
}
</style>
