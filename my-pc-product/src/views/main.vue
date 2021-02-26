<template>
  <div class="main">
    <ui-container class="all-hea">
      <ui-header>
        <img src="../assets/kelan.png" width="130" alt="" />
      </ui-header>
    </ui-container>
    <ui-container style="height: 700px; border: 1px solid #eee">
      <ui-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <ui-menu :default-openeds="[]" background-color="#ecf5ff" :router="true">
          <ui-menu-item index="1" :route="{name:'Home'}">
            <i class="ui-icon-menu"></i>
            <span slot="title">首页</span>
          </ui-menu-item>
          <ui-submenu index="2">
            <template slot="title"><i class="ui-icon-message"></i>组件</template>
            <ui-menu-item-group>
              <template slot="title">表格</template>
              <ui-menu-item index="/MyTable" :route="{name:'MyTable'}">基础表格</ui-menu-item>
              <ui-menu-item index="1-2">带斑马纹表格</ui-menu-item>
            </ui-menu-item-group>
            <ui-menu-item-group title="分组2">
              <ui-menu-item index="1-3">选项3</ui-menu-item>
            </ui-menu-item-group>
            <ui-submenu index="1-4">
              <template slot="title">选项4</template>
              <ui-menu-item index="1-4-1">选项4-1</ui-menu-item>
            </ui-submenu>
          </ui-submenu>
          <ui-submenu index="3">
            <template slot="title"><i class="ui-icon-menu"></i>导航二</template>
            <ui-menu-item-group>
              <template slot="title">分组一</template>
              <ui-menu-item index="2-1">选项1</ui-menu-item>
              <ui-menu-item index="2-2">选项2</ui-menu-item>
            </ui-menu-item-group>
            <ui-menu-item-group title="分组2">
              <ui-menu-item index="2-3">选项3</ui-menu-item>
            </ui-menu-item-group>
            <ui-submenu index="2-4">
              <template slot="title">选项4</template>
              <ui-menu-item index="2-4-1">选项4-1</ui-menu-item>
            </ui-submenu>
          </ui-submenu>
          <ui-submenu index="4">
            <template slot="title"
              ><i class="ui-icon-setting"></i>导航三</template
            >
            <ui-menu-item-group>
              <template slot="title">分组一</template>
              <ui-menu-item index="3-1">选项1</ui-menu-item>
              <ui-menu-item index="3-2">选项2</ui-menu-item>
            </ui-menu-item-group>
            <ui-menu-item-group title="分组2">
              <ui-menu-item index="3-3">选项3</ui-menu-item>
            </ui-menu-item-group>
            <ui-submenu index="3-4">
              <template slot="title">选项4</template>
              <ui-menu-item index="3-4-1">选项4-1</ui-menu-item>
            </ui-submenu>
          </ui-submenu>
        </ui-menu>
      </ui-aside>
      <ui-main class="main-con">
        <router-view></router-view>
      </ui-main>
    </ui-container>
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {},
  methods: {
    handlejump (rouname) {
      this.$router.push(rouname)
    }
  }
}
</script>
<style scoped>
.all-hea .ui-header {
  background-color: #ecf5ff;
  color: #333;
  line-height: 60px;
}
.main-con .ui-header {
  background-color: #ecf5ff;
}
.ui-aside {
  color: #333;
}
.ui-main {
  padding: 0;
}
</style>