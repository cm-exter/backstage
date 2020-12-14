<template>

  <el-container>
    <el-aside width="200px">

      <el-menu default-active="/memberlist" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" router>

        <el-menu-item index="/memberlist">
          <i class="el-icon-menu"></i>
          <span slot="title">会员列表</span>
        </el-menu-item>
        <el-menu-item index="/membergrade">
          <i class="el-icon-menu"></i>
          <span slot="title">会员等级</span>
        </el-menu-item>

      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>