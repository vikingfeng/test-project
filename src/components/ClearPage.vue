<template>
<div class="parents fix">
    <div class="a left red">a</div>
    <div class="a left red ">a</div>
    <div class="a left red">a</div>
    <div class="a left red">a</div>
    <div class="a left red">a</div>
    <div class="a left red">a</div>
    <div class="a left red">a</div>
    <div class="b left red ">b</div>
    <div class="c right yellow ">c</div>

    <p>1、当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，
      一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
      2、有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。
      如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。
    </p>
    <!-- <div style="clear:both;"></div> -->
</div>
</template>
<script>
export default {
  name: 'Float'

};
</script>
<style scoped>
.a, .b, .c{
  width: 100px;
  height: 100px;
  border: 1px solid greenyellow;
  margin: 5px;
}
.red{
  background: red;
}
.yellow{
  background: yellow;
}
.left{
  float: left;
}
.right{
  float: right;
}
.clear{
  clear: both;
}
.clear2{
  overflow:hidden;
  zoom:1;
}
.fix{zoom:1;}
.fix:after{
  display:block;
  content:'clear';/* clear可换成其他内容*/
  clear:both;
  line-height:0;
  visibility:hidden;}
.parents{
  border: 1px solid purple;
}
</style>
