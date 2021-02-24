<template>
  <div id="app">
    <ui-container class="all-hea">
      <ui-header>
        <img src="./assets/kelan.png" width="130" alt="" />
      </ui-header>
    </ui-container>
    <ui-container style="height: 700px; border: 1px solid #eee">
      <ui-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <ui-menu :default-openeds="[]" background-color="#ecf5ff">
          <ui-submenu index="1">
            <template slot="title"
              ><i class="ui-icon-message"></i>组件</template
            >
            <ui-menu-item-group>
              <template slot="title">表格</template>
              <ui-menu-item index="1-1" @click="addtags('table')"
                >基础表格</ui-menu-item
              >
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
          <ui-submenu index="2">
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
          <ui-submenu index="3">
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
        <ui-container style="height: 700px; border: 1px solid #eee">
          <!-- <ui-dropdown>
            <i class="ui-icon-setting" style="margin-right: 15px"></i>
            <ui-dropdown-menu slot="dropdown">
              <ui-dropdown-item>查看</ui-dropdown-item>
              <ui-dropdown-item>新增</ui-dropdown-item>
              <ui-dropdown-item>删除</ui-dropdown-item>
            </ui-dropdown-menu>
          </ui-dropdown>
          <span>王小虎</span> -->
          <ui-tabs
            v-model="editableTabsValue"
            type="card"
            closable
            @tab-remove="removeTab"
          >
            <ui-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              <router-view :name="item.name" />
            </ui-tab-pane>
          </ui-tabs>
          <ui-main>
            <!-- <ui-table :data="tableData">
            <ui-table-column prop="date" label="日期" width="140">
            </ui-table-column>
            <ui-table-column prop="name" label="姓名" width="120">
            </ui-table-column>
            <ui-table-column prop="address" label="地址">
            </ui-table-column>
          </ui-table> -->
          </ui-main>
        </ui-container>
      </ui-main>
    </ui-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      editableTabs: [],
      editableTabsValue: '1'
    }
  },
  methods: {
    addtags (names) {
      this.editableTabs.push({
        title: names,
        name: names,
        content: names
      });
    },
    removeTab (targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
    }
  }
}
</script>

<style>
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
