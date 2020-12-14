<template>
  <div id="app">
    <el-container>


      <el-header v-if="$route.path == '/login'" style="background-color:#fff"></el-header>
      <el-header v-else>
        <h1>UNI-ADMIN</h1>
        <div class="header_user">
          <el-menu default-active="/index" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" router>
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/shop">商品</el-menu-item>
            <el-menu-item index="/order">订单</el-menu-item>
            <el-menu-item index="/member">会员</el-menu-item>
          </el-menu>

          <el-avatar> user </el-avatar>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">修改</el-dropdown-item>
              <el-dropdown-item command="b">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <router-view />


    </el-container>

  </div>
</template>


<script>
  export default {
    data() {
      return {

      }
    },

    methods: {
      handleCommand(val) { //退出登录
        if (val == "b") {

          this.$http("http://ceshi5.dishait.cn/admin/logout","post").then((result) => {
            console.log(result);
          }).catch((err) => {
            localStorage.removeItem("token")
            this.$router.push('/')
          });

        }
      }
    },
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;

  }

  .el-header {
    width: 100%;
    background-color: #545c64;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #fff;
    }

    .header_user {
      display: flex;
      align-items: center;
    }

    .el-dropdown-link {
      color: #fff;
    }
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>