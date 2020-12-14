<template>

  <el-container>
    <el-aside width="200px">

      <el-menu default-active="/shoplists" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" router>

        <el-menu-item index="/shoplists">
          <i class="el-icon-menu"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="/classify">
          <i class="el-icon-menu"></i>
          <span slot="title">发票管理</span>
        </el-menu-item>
        <el-menu-item index="/shopsize">
          <i class="el-icon-menu"></i>
          <span slot="title">商品规格</span>
        </el-menu-item>

      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>