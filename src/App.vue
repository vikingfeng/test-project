<template>
  <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="首页" @on-select="setHome">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="首页" to="vue-page">
                            <Icon type="ios-navigate"></Icon>
                            Vue
                        </MenuItem>
                        <MenuItem name="导航2" to="css-page">
                            <Icon type="ios-keypad"></Icon>
                            Css
                        </MenuItem>
                        <MenuItem name="导航3" to="js-page">
                            <Icon type="ios-analytics"></Icon>
                            JS
                        </MenuItem>
                        <MenuItem name="导航4" to="applets-page">
                            <Icon type="ios-paper"></Icon>
                            Applets
                        </MenuItem>
                        <MenuItem name="导航5" to="expansion-page">
                            <Icon type="ios-paper"></Icon>
                            Expansion
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <!-- <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>{{home}}</BreadcrumbItem>
                    <BreadcrumbItem>{{components}}</BreadcrumbItem>
                    <BreadcrumbItem>{{layout}}</BreadcrumbItem>
                </Breadcrumb> -->
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">

                    <!-- <Layout> -->
                        <!--<Sider hide-trigger :style="{background: '#fff'}">
                            <Menu :active-name="layout" theme="light" width="auto" :open-names="['2']" @on-select="setLayout">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Item 1
                                    </template>
                                    <MenuItem name="FirstPage" to="first-page">FirstPage</MenuItem>
                                    <MenuItem name="SecondPage" to='second-page'>SecondPage</MenuItem>
                                    <MenuItem name="1-3" to="second-page">声明式路由</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Float
                                    </template>
                                    <MenuItem name="float示例" to="float-page">float示例</MenuItem>
                                    <MenuItem name="清除浮动" to="clear-page">清除浮动</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider> -->
                        <!-- <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}"> -->
                            <router-view></router-view>
                        <!-- </Content> -->
                    <!-- </Layout> -->
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2018-2019 &copy; feng</Footer>
        </Layout>
    </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      home: '首页',
      components: 'item1',
      layout: '声明式路由'
    };
  },
  methods: {
    setLayout (name) {
      this.layout = name;
    },
    setComponents (name) {
      this.components = name;
    },
    setHome (name) {
      this.home = name;
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
.layout-logo{
    width:234px;
    height: 30px;
    /* background: #5b6270; */
    background: url(assets/fengzi.png) no-repeat;
    background-size: 100% 100%;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 17px;
    /* left: 20px; */
}
.layout-nav{
    width: 500px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
