<template>
  <div class="layout">
        <Layout style="">
            <Layout >
                <Breadcrumb :style="{margin: '16px 10px'}">
                    <BreadcrumbItem>Css</BreadcrumbItem>
                    <BreadcrumbItem>{{components}}</BreadcrumbItem>
                    <BreadcrumbItem>{{layout}}</BreadcrumbItem>
                </Breadcrumb>
                <Content>
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu :active-name="layout" theme="light" width="auto" :open-names="['1']" @on-select="setLayout">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Float
                                    </template>
                                    <MenuItem name="float示例" to="float-page">float示例</MenuItem>
                                    <MenuItem name="清除浮动" to="clear-page">清除浮动</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Tips
                                    </template>
                                    <MenuItem name="布局小技巧" to="css-some-tips">布局小技巧</MenuItem>
                                </Submenu>
                                <!-- <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu> -->
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <router-view></router-view>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      home: 'Css',
      components: 'Float',
      layout: 'float示例'
    };
  },
  methods: {
    setComponents (name) {
      this.components = name;
    },
    setLayout (name) {
      this.layout = name;
    }
  }
};
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
