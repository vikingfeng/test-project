<template>
    <Button
        :disabled="disabled"
        :size="size"
        :type="type"
        ><slot></slot></Button>
</template>
<script>
export default {
  name: 'btn',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'primary'
    }

  },
  data () {
    return {
    };
  }
};
</script>
<style lang="less">

</style>
