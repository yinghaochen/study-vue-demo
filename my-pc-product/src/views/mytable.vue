<template>
  <div class="table-all">
    <ui-container>
      <ui-header>
        <ui-dropdown>
          <i class="ui-icon-setting" style="margin-right: 15px"></i>
          <ui-dropdown-menu slot="dropdown">
            <ui-dropdown-item>查看</ui-dropdown-item>
            <ui-dropdown-item>新增</ui-dropdown-item>
            <ui-dropdown-item>删除</ui-dropdown-item>
          </ui-dropdown-menu>
        </ui-dropdown>
        <span>王小虎</span>
      </ui-header>
      <ui-main>
        <ui-table :data="tableData">
          <ui-table-column prop="date" label="日期" width="140">
          </ui-table-column>
          <ui-table-column prop="name" label="姓名" width="120">
          </ui-table-column>
          <ui-table-column prop="address" label="地址">
          </ui-table-column>
        </ui-table>
      </ui-main>
    </ui-container>
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
  name: "mytable",
  components: {},
  
};
</script>
<style>
  .table-all {
    width: 100%;
  }
</style>
