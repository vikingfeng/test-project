<template>
    <div>
        vuex之status、mutations<br><br>
        Hello,I'm {{author}}~
        <Button @click="changeAuthor">change</Button>
        <Button @click="changeByAction">changeByAction</Button>
        <br><br>
        <ButtonGroup>
          <Button type="warning" ghost @click="changeLevel(1)">菜鸟</Button>
          <Button type="primary" ghost @click="changeLevel(2)">入门</Button>
          <Button type="warning" ghost @click="changeLevel(3)">初级</Button>
          <Button type="primary" ghost @click="changeLevel()">三种</Button>
        </ButtonGroup><br><br>
        My level is {{level}}~<br><br>
        <div style="background:#b77cec; color:#fff; width:500px; height:100px;" v-html="way"></div>

    </div>
</template>
<script>
import {mapMutations, mapState, mapActions} from 'vuex';
export default {
  name: 'VueTest',
  data () {
    return {

    };
  },
  computed: mapState([
    'author',
    'level',
    'way'
  ]),
  // author () {
  //   return this.$store.state.author;
  // }

  methods: {
    changeAuthor () {
      this.set('feng');
    },
    changeByAction () {
      // this.$store.dispatch('changeAction');
      this.changeAction();
    },
    changeLevel (a) {
      if (a === 1) {
        this.$store.commit('promotionLevel', '菜鸟');
        this.$store.commit('showWay', `this.$store.commit('showWay', 'xxx');`);
      } else if (a === 2) {
        this.promotionLevel('入门');
        this.showWay(`this.showWay('xxx');<br />...mapMutations(['showWay'])`);
      } else if (a === 3) {
        this.promotion('初级');
        this.show1(`this.show1('xxx');<br />...mapMutations({show1: 'showWay'})`);
      } else {
        this.promotion('大神');
        this.show1(`1、this.$store.commit('showWay', 'xxx');<br />
                    2、this.showWay('xxx');<br />...mapMutations(['showWay'])<br />
                    3、this.show1('xxx');<br />...mapMutations({show1: 'showWay'})`);
      }
    },

    ...mapMutations([
      'setAuthor',
      'promotionLevel',
      'showWay'
    ]),
    ...mapMutations({
      set: 'setAuthor',
      promotion: 'promotionLevel',
      show1: 'showWay'
    }),
    ...mapActions([
      'changeAction'
    ])
  }
};
</script>
