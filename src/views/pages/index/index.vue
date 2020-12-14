<template>

  <el-container>
    <el-aside width="200px">

      <el-menu default-active="/backstage" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" router>

        <el-menu-item index="/backstage">
          <i class="el-icon-menu"></i>
          <span slot="title">后台首页</span>
        </el-menu-item>
        <el-menu-item index="/Album">
          <i class="el-icon-menu"></i>
          <span slot="title">相册管理</span>
        </el-menu-item>
        <el-menu-item index="/shoplist">
          <i class="el-icon-menu"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>

      </el-menu>
    </el-aside>

    <el-main><router-view></router-view></el-main>
  </el-container>

</template>


<style lang="scss">


.el-menu-vertical-demo{
  height: 840px;
}
  
</style>