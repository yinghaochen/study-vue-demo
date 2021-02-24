<template>
  <div class="home">
    <ui-dropdown>
      <i class="ui-icon-setting" style="margin-right: 15px"></i>
      <ui-dropdown-menu slot="dropdown">
        <ui-dropdown-item>查看</ui-dropdown-item>
        <ui-dropdown-item>新增</ui-dropdown-item>
        <ui-dropdown-item>删除</ui-dropdown-item>
      </ui-dropdown-menu>
    </ui-dropdown>
    <span>王小虎</span>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  name: "table",
  components: {},
  
};
</script>
