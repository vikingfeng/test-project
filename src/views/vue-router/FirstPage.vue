<template>
    <div>
        声明式路由
        <Button @click="go('PageSecond')">嵌套路由</Button>
        <Button @click="go('SecondPage')">非嵌套路由</Button>
        <Button @click="getFlowers()">水仙花数</Button>
        <div style="padding:'24px'; minHeight:'280px'; width:80% background: '#888';">
          <router-view></router-view>
        </div>
        水仙花数有：{{b}}

    </div>
</template>
<script>
export default {
  name: 'FirstPage',
  data () {
    return {
      a: [],
      b: '',
      c: null,
      d: null

    };
  },
  mounted () {
  },
  methods: {
    go (name) {
      this.$router.push({name: name});
    },
    getFlowers () {
      for (let i = 100; i < 1000; i++) {
        if (this.isFlowers(i)) {
          this.a.push(i);
        }
        this.b = this.a.join();
      }
    },

    isFlowers (num) {
      let b = num.toString().split('');
      let sum = 0;
      for (let i of b) {
        sum += Math.pow(parseInt(i), 3);
      }
      return sum === num;
    }
  }
};
</script>
