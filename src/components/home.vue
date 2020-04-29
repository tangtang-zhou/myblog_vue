<template>
  <el-container class="home-container">
    <el-header>
      <span>博客后台管理系统</span>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409bff"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item :index="'/'+'user'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>博客管理</span>
            </template>
            <el-menu-item :index="'/'+'blog'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>博客列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-opportunity"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="4-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {
      logout () {
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      // 点击收缩导航栏
      toggleCollapse () {
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>

<style scoped>
  .home-container {
    height: 100%;
  }
  .el-header {
    background: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 20px;
  }
  .el-menu{
    border-right: 0;
  }
  .el-aside {
    background: #333744;
  }
  .el-main {
    background: #eaedf1;
  }
  .toggle-button{
    background: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: white;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }

</style>
