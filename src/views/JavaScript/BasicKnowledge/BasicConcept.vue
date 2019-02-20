<template>
<Collapse v-model="value" class="basic-concept">
        <Panel name="1">
            语法
            <div slot="content">
              <ul>
              <li>ECMAScript 中的一切（变量、函数名和操作符）都区分大小写</li>
              <li>标识符，就是指变量、函数、属性的名字，或者函数的参数<br>
              规则：
                <ol style="padding-left:25px">
                  <li>第一个字符必须是一个字母、下划线（ _ ）或一个美元符号（ $ ）；</li>
                  <li> 其他字符可以是字母、下划线、美元符号或数字</li>
                  <li>尽量使用采用驼峰大小写格式，也就是第一个字母小写，剩下的每个单词的首字母大写</li>
                </ol>
              </li>
              <li>关键字和保留字</li>
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
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">

            </p>
        </Panel>
    </Collapse>
</template>
<script>
export default {
  name: 'BasicConcept',
  data () {
    return {
      value: 1
    };
  }

};
</script>
<style scoped lang="less">
.basic-concept{
  .red{
    color: red;
  }
}
</style>
