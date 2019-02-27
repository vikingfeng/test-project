<template>
<Collapse v-model="value" class="basic-concept">
        第 4章 变量、作用域和内存问题
        <Panel name="1">
            复制变量值
            <div slot="content">
              <ul>
              <li>除了保存的方式不同之外，在从一个变量向另一个变量复制基本类型值和引用类型值时，也存在不
                  同。如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制
                  到为新变量分配的位置上。来看一个例子：
                  var num1 = 5;
                  var num2 = num1;
                  在此， num1 中保存的值是 5。当使用 num1 的值来初始化 num2 时， num2 中也保存了值 5。但 num2
                  中的 5 与 num1 中的 5 是完全独立的，该值只是 num1 中 5 的一个副本。此后，这两个变量可以参与任
                  何操作而不会相互影响。图 4-1 形象地展示了复制基本类型值的过程。
              </li>
              <li>当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到
                  为新变量分配的空间中。不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一
                  个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另
                  一个变量，如下面的例子所示：
                      var obj1 = new Object();
                      var obj2 = obj1;
                      obj1.name = "Nicholas";
                      alert(obj2.name); //"Nicholas"
                  首先，变量 obj1 保存了一个对象的新实例。然后，这个值被复制到了 obj2 中；换句话说， obj1
                  和 obj2 都指向同一个对象。这样，当为 obj1 添加 name 属性后，可以通过 obj2 来访问这个属性，
                  因为这两个变量引用的都是同一个对象。图 4-2 展示了保存在变量对象中的变量和保存在堆中的对象之
                  间的这种关系。
              </li>
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
