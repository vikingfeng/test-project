<template>
    <div>
        vuex之status<br>
        Hello,I'm {{author}}~<br>
        My level is {{level}}~
        <Button @click="changeAuthor">change</Button>
        <Button @click="changeLevel(1)">菜鸟</Button>
        <Button @click="changeLevel(2)">入门</Button>
        <Button @click="changeLevel(3)">初级</Button>

    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex';
export default {
  name: 'VueTest',
  data () {
    return {

    };
  },
  computed: mapState([
    'author',
    'level'
  ]),
  // author () {
  //   return this.$store.state.author;
  // }

  methods: {
    changeAuthor () {
      this.set('feng');
    },
    changeLevel (a) {
      if (a === 1) {
        this.$store.commit('promotionLevel', '菜鸟');
      } else if (a === 2) {
        this.promotionLevel('入门');
      } else {
        this.promotion('初级');
      }
    },

    ...mapMutations([
      'setAuthor',
      'promotionLevel'
    ]),
    ...mapMutations(
      {
        set: 'setAuthor',
        promotion: 'promotionLevel'
      }
    )
  }
};
</script>
