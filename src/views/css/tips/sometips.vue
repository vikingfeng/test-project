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
            <div slot="content">
              <row>
                <col span="12"><img src="../images/两端对齐css.png" alt="" height="300" width="490"></col>
                <col span="12">
                <pre>
                  tips:
                  1、text-align: justify;对最后一行不起作用（so单行不起作用）；
                  2、注意每个单词之间都有空格
                  3、多行内容也可以使用同样的方法，只是最后一行如果不去加空格，还是不会处理，只是默认的往左对齐
                </pre>

                </col>
              </row>
            </div>
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
