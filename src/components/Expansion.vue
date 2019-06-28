<template>
  <div class="layout">
        <Layout style="">
            <Layout >
                <Breadcrumb :style="{margin: '16px 10px'}">
                    <BreadcrumbItem>Expansion</BreadcrumbItem>
                    <BreadcrumbItem>{{components}}</BreadcrumbItem>
                    <BreadcrumbItem>{{layout}}</BreadcrumbItem>
                </Breadcrumb>
                <Content>
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu :active-name="layout" theme="light" width="auto" accordion :open-names="['扩展']" @on-open-change="setComponents" @on-select="setLayout">
                                <Submenu name="扩展">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        扩展
                                    </template>
                                    <MenuItem name="JS执行机制" to="execution-mechanism">JS执行机制</MenuItem>
                                    <MenuItem name="地图" to="execution-mechanism">地图</MenuItem>
                                    <MenuItem name="清除浮动" to="execution-mechanism">图表</MenuItem>
                                </Submenu>
                                <!-- <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Float
                                    </template>
                                    <MenuItem name="float示例" to="float-page">float示例</MenuItem>
                                    <MenuItem name="清除浮动" to="clear-page">清除浮动</MenuItem>
                                </Submenu> -->
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
        </Layout>
    </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    //   home: 'Expansion',
      components: '扩展',
      layout: 'JS执行机制'
    };
  },
  methods: {
    setComponents (name) {
      if (name.length) {
        this.components = name[0];
      }
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
