<template>
<Collapse v-model="value" class="basic-concept">
        <Panel name="1">
          数据绑定
            <div slot="content">
            <ul>
              <li><span class="red">数据流向是单向的，即视图变化不会影响对象状态</span></li>
              <li><span class="red">视图上的数据都必须用过事件传递给对象，只有用户操作视图，才能获取到数据，并更新对象状态。调用this.setData（）方法实现视图的部分渲染</span></li>
              <li>eg: this.setData({isDisabled: false});</li>

              <li><span class="red">页面多个输入框可以使用公用的setData来赋值，通过 类似“data-datakey='address'”来传赋值的key</span></li>
                <li><btn type="primary" @click.native="show=true" >拓展示例</btn></li>
            </ul>
            </div>
        </Panel>
        <Panel name="2">
          组件
            <div slot="content">
            <ul>
              <li><span class="red">子组件triggerEvent触发事件会在父组件的onShow事件前触发</span></li>
              <li><span class="red">微信API:选图片wx.chooseImage、预览图片wx.previewImage都会触发页面的onShow()、onHide()事件</span></li>
            </ul>
            </div>
        </Panel>
        <Modal
        v-model="show"
        title="拓展示例"
        :footer-hide="true"
        >
        <div>
          wxml文件：输入框</br>
          <img src="./images/input.png" alt="" height="300" width="490">
          js文件：输入框赋值（共用）</br>
          <img src="./images/setinput.png" alt="" height="120" width="490">
        </div>

        </Modal>
    </Collapse>
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
.basic-concept{
  .red{
    color: red;
  }
  .green{
    color: green;
  }
}
</style>
