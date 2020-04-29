<template>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="box-card">
        <div style="margin-top: 15px;">
          <el-row :gutter="20">
            <el-col :span="7">
              <el-input placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="primary">添加用户</el-button>
            </el-col>
          </el-row>
          <el-table :data="tableData" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="姓名" prop="username"></el-table-column>
            <el-table-column label="地址" prop="id"></el-table-column>
            <el-table-column label="角色" prop="password"></el-table-column>
            <!--<el-table-column label="电话" prop="date"></el-table-column>
            <el-table-column label="状态">
              <template v-slot="scope">
                <el-switch
                  v-model="scope.row.status">
                </el-switch>
              </template>
            </el-table-column>-->
            <el-table-column label="操作">
              <template v-slot>
                <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
                <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                  <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pageNum"
            :page-sizes="[2, 5, 10]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </el-card>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        queryInfo: {
          // 当前的页数
          pageNum: 1,
          // 每页显示多少数据
          pageSize: 2
        },
        total: 0,
        tableData: []
      }
    },
    created () {
      this.getUserList()
    },
    methods: {
      async getUserList () {
        const { data: contents } = await this.$http.post('/api/user', this.queryInfo)
        this.tableData = contents.content
        this.total = contents.totalSize
        console.log(contents)
      },
      // 每页显示多少
      handleSizeChange (newSize) {
        console.log('newSize' + newSize)
        this.queryInfo.pageSize = newSize
        this.getUserList()
      },
      // 页码值
      handleCurrentChange (newPage) {
        console.log(newPage)
        this.queryInfo.pageNum = newPage
        this.getUserList()
      }
    }
  }
</script>

<style scoped>

</style>
