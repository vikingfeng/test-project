<template>
<div class="algorithm">
  <Input style="width: 300px" v-model="value"></Input>
  <!-- <InputNumber  v-model="value1"></InputNumber> -->
  <Button @click="getMost" type="primary">字符串出现次数最多的字母</Button>
  <!-- <Button @click="getTimes" type="primary">爬楼梯</Button> -->
  <p style="font-size:28px;">字符：{{result}} 出现次数：{{cur[0].time}}</p>
  <Modal
    v-model="show"
    title="执行机制例题"
    :footer-hide="true"
    @on-cancel="show=false"
    >
    <div><img src="./images/zxjz.png" alt="" height="510" width="490"></div>

  </Modal>
</div>

</template>
<script>
import btn from '@/components/component/btn.vue';
export default {
  name: 'BasicConcept',
  components: {btn},
  data () {
    return {
      value: '',
      value1: null,
      show: false,
      result: '', // 最多
      cur: [{
        time: 0,
        name: ''
      }]
    };
  },
  methods: {
    // 返回一串字符中出现次数最多字符（一个或多个）
    getMost () {
      this.cur = [{
        time: 0,
        name: ''
      }];
      let val = this.value.split('');
      val.forEach((x, index, items) => {
        let a = 0;
        items.forEach(y => {
          if (x === y) {
            a += 1;
          }
          console.log('a', a);
        });
        console.log('a1', a);
        if (a > this.cur[0].time) {
          this.cur = [{
            time: a,
            name: x
          }];
        } else if (this.cur.every(b => { return x !== b.name && a === b.time; }
        )) {
          this.cur.push({
            time: a,
            name: x
          });
        }
      });
      this.result = this.cur.map(x => x.name).join(',');
    }
  }

};
</script>
<style scoped lang="less">
.algorithm{
  .red{
    color: red;
  }
  .green{
    color: green;
  }
}
</style>
