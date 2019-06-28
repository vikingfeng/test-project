<template>
  <div class="layout">
        <Layout style="">
            <Layout >
                <Breadcrumb :style="{margin: '16px 10px'}">
                    <BreadcrumbItem>Vue</BreadcrumbItem>
                    <BreadcrumbItem>{{components}}</BreadcrumbItem>
                    <BreadcrumbItem>{{layout}}</BreadcrumbItem>
                </Breadcrumb>
                <Content>
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu :active-name="layout" theme="light" width="auto" :open-names="['Vue Router']" accordion @on-open-change="setComponents" @on-select="setLayout" >
                                <Submenu name="Vue Router">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Vue Router
                                    </template>
                                    <MenuItem name="FirstPage" to="first-page">FirstPage</MenuItem>
                                    <MenuItem name="SecondPage" to='second-page'>SecondPage</MenuItem>
                                    <MenuItem name="命名视图" to="name-view">命名视图</MenuItem>
                                </Submenu>
                                <Submenu name="VueX">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        VueX
                                    </template>
                                    <MenuItem name="vuex测试" to="vuex-test">vuex测试</MenuItem>

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
                        <Content :style="{padding: '24px', height:'690px', overflow:'auto', background: '#fff'}">
                            <router-view></router-view>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <!-- <Footer class="layout-footer-center">2018-2019 &copy; feng</Footer> -->
        </Layout>
    </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      components: 'Vue Router',
      layout: 'FirstPage'
    };
  },
  methods: {
    setLayout (name) {
      this.layout = name;
    },
    setComponents (name) {
      if (name.length) {
        this.components = name[0];
      }
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
