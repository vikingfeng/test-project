<template>
<Collapse v-model="value" class="basic-concept">
        <Panel name="1">
            不确定文字行数
            <div slot="content">
              <ul>

              <li><img src="../images/bdhwz.png" alt="" height="180" width="490"></li>
              <li><img src="../images/wxml1.png" alt="" height="150" width="490"></li>
              <li><img src="../images/css1.png" alt="" height="150" width="490"></li>
              </ul>
            </div>
        </Panel>
        <Panel name="2">
            数据类型(6种)
            <p slot="content">
              <ul>

              </ul>
            </p>
        </Panel>
    </Collapse>
</template>
<script>
export default {
  name: 'BasicConcept',
  data () {
    return {
      value: '1'
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
