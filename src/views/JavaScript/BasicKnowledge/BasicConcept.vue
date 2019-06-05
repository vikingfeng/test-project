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
            String类型
            <p slot="content">
              <ul>
              <li>数值、布尔值、对象和字符串值（没错，每个字符串也都有一个 <span class="red">toString()</span> 方法，该方法返回字
                  符串的一个副本）都有 toString() 方法。但 null 和 undefined 值没有这个方法。
              </li>
              <li>可以使用<span class="red">转型函数 String()</span> ，
               String() 函数遵循下列转换规则：
                <ol style="padding-left:25px">
                  <li>如果值有 toString() 方法，则调用该方法（没有参数）并返回相应的结果</li>
                  <li>如果值是 null ，则返回 "null" ；</li>
                  <li> 如果值是 undefined ，则返回 "undefined"</li>
                </ol>
              </li>
              </ul>
            </p>
        </Panel>
        <Panel name="4">
            操作符
            <p slot="content">
              <ul>
              <li> 一元加和减操作符
                放在数值前面，对数值不会产生任何影响，不过，在对非数值应用一元加操作符时，
                该操作符会像 Number() 转型函数一样对这个值执行转换
                <ol style="padding-left:25px">
                  <li>var s1 = "01"; <span class="red">=></span> s1 = +s1; <span class="green">// 值变成数值 1</span></li>
                  <li>var s2 = "1.1"; <span class="red">=></span> s2 = +s2; <span class="green">// 值变成数值 1.1</span></li>
                  <li>var s3 = "z"; <span class="red">=></span> s3 = +s3; <span class="green">// 值变成 NaN</span></li>
                  <li>var b = false; <span class="red">=></span> b = +b; <span class="green">// 值变成数值 0</span></li>
                  <li>var f = 1.1; <span class="red">=></span> f = +f; <span class="green">// 值未变，仍然是 1.1</span></li>
                  <li>var o = {valueOf: function() { return -1;} <span class="red">=></span>o = +o;<span class="green">// 值变成数值-1</span></li>
                </ol>
              </li>
              <li>逻辑非操作符也可以用于将一个值转换为与其对应的布尔值。而同时使用两个逻辑非操作符<span class="red">(eg: !!'red'=>true)</span>，
              实际上就会模拟 Boolean() 转型函数的行为。</li>
              <li>逻辑与(&&)、逻辑或(||)操作属于 <span class="red">短路操作</span>，即如果第一个操作数能够决定结果，那么就不会再对第二个操作数求值。</span> ，
               String() 函数遵循下列转换规则：
                <ol style="padding-left:25px">
                  <li>对于逻辑与操作(&&)而言，如果第一个操作数是 false ，则无论第二个操作数是什么值，结果都不再可能是true 了。</li>
                  <li>对于逻辑或操作(||)而言，如果第一个操作数的求值结果为true ，就不会对第二个操作数求值了。</li>
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
