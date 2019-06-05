<template>
<Collapse v-model="value" class="basic-concept">
        <Panel name="1">
            移动端安卓与iOS踩坑
            <div slot="content">
              <ul>
              <li>position:fixed;</li>
              <li>
                <ol style="padding-left:25px">
                  <li></li>
                </ol>
              </li>
              </ul>
            </div>
        </Panel>
        <Panel name="2">
            数据类型(6种)
            <p slot="content">
              <ul>
              <li>ECMAScript 中有 5 种简单数据类型（也称为基本数据类型）： <span class="red">Undefined 、 Null 、 Boolean 、 Number和 String</span> 。<br>
                  还有 1种复杂数据类型—— <span class="red">Object</span> ， Object 本质上是由一组无序的名值对组成的
              </li>
              <li>typeof 操作符可能返回下列某个字符串：
                <ol style="padding-left:25px">
                  <li>"undefined" ——如果这个值未定义（只声明了变量，但未对其进行初始化）；</li>
                  <li>"boolean" ——如果这个值是布尔值；</li>
                  <li>"string" ——如果这个值是字符串</li>
                  <li>"number" ——如果这个值是数值；</li>
                  <li>"object" ——如果这个值是<span class="red">对象或 null</span> ；</li>
                  <li>"function" ——如果这个值是函数。</li>
                </ol>
              </li>
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
