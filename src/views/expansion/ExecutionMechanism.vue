<template>
<Collapse v-model="value" class="basic-concept">
        <Panel name="1">
            JS执行机制
            <div slot="content">
            <ul>
              <li><span class="red">javascript是一门单线程语言</span></li>
              <li><span class="red">Event Loop是javascript的执行机制</span></li>
              <li>macro-task(宏任务)：包括整体代码script，setTimeout，setInterval</li>
              <li>micro-task(微任务)：Promise，process.nextTick</li>
              <li>不同类型的任务会进入对应的Event Queue，比如setTimeout和setInterval会进入相同的Event Queue。</li>
              <li><span class="red">事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。
                然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。</span></li>
                <li><btn type="primary" @click.native="show=true" >示例</btn></li>
                <li>答案：1，7，6，8，2，4，3，5，9，11，10，12。</li>
            </ul>
            </div>
        </Panel>
        <Modal
        v-model="show"
        title="执行机制例题"
        :footer-hide="true"
        @on-cancel="show=false"
        >
        <div><img src="./images/zxjz.png" alt="" height="510" width="490"></div>

        </Modal>
    </Collapse>
</template>
<script>
import btn from '@/components/component/btn.vue';
export default {
  name: 'BasicConcept',
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
