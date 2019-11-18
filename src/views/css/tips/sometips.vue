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
            两端对齐 <span class="red">text-align: justify;</span>
            <div slot="content">
              <row>
                <col span="11"><img src="../images/两端对齐css.png" alt="" height="300" width="490"></col>
                <col span="11">
                <div class="bruce flex-ct-x">
                  <ul class="justify-text">
                    <li>账号</li>
                    <li>密码</li>
                    <li>电子邮件</li>
                    <li>通讯地址</li>
                  </ul>
                </div>
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
        <Panel name="3">
             <span class="red">object-fit 与 object-position</span>
            <div slot="content">
              <row>
                <col span="11">
                  <span class="red" style="font-size:40px;">object-fit:</span><img src="../images/object-fit.png" alt=""
                    height="300" width="666"
                    style=" background:yellowgreen; object-fit:none; object-position:100% 100%;" />
                  <br/><span class="red" style="font-size:40px;">object-position:</span><img src="../images/object-position.jpg" alt=""
                    height="430" width="750"
                    style="background:yellowgreen; object-fit:none; object-position:10% 10%;" />
                </col>
              </row>
            </div>
        </Panel>
        <Panel name="4">
            文字纵向<span class="red">writing-mode</span>
            <div slot="content">
              <row>
                <col span="12">
                  <li>horizontal-tb：水平方向自上而下的书写方式。</li>
                  <li>vertical-rl：垂直方向自右而左的书写方式。</li>
                  <li>vertical-lr：垂直方向自左而右的书写方式。</li>
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
  .justify-text {
    li{
      display: block;
      margin-top: 5px;
      padding: 0 20px;
      width: 100px;
      height: 40px;
      background-color: red;
      line-height: 40px;
      // text-align: justify;
      text-align-last: justify;
      color: #fff;
      &:first-child {
        margin-top: 0;
      }
    }
    // li:after{
    //   content:'';
    //   display:inline-block;
    //   width:100%;
    // }
  }
}
</style>
