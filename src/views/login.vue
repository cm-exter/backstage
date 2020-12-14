<template>
  <div>
    <el-form :model="form" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <h1>UNI-ADMIN</h1>
      <hr />
      <el-input type="text" v-model="form.user" autocomplete="off" placeholder="请输入用户名"></el-input>
      <el-input type="password" v-model="form.pass" autocomplete="off" placeholder="请输入密码">
      </el-input>
      <el-form-item>
        <el-button type="primary" class="btn" @click="login">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          user: "",
          pass: "",
        },
      };
    },
    methods: {
      login() {
        this.$axios
          .post("http://ceshi5.dishait.cn/admin/login", {
            username: this.form.user,
            password: this.form.pass,
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.data.token);

            let dueTime = new Date("2020-12-20 12:00") //设置过期时间

            console.log(dueTime.getTime());

            localStorage.setItem("dueTime", dueTime.getTime());
            this.$router.push('/index');


            // console.log(res);
            this.$notify({
              title: '成功',
              message: '登录成功！',
              type: 'success'
            });
          })
          .catch((err) => {
            console.log(err);
            this.$notify.error({
              title: '错误',
              message: '账号或密码错误！登录失败！'
            });
            this.form.pass = ''
            this.form.user = ''
          });
      },
    },
  };
</script>
<style lang="scss">
  .demo-ruleForm {
    text-align: center;
    width: 500px;
    line-height: 80px;
    border: 1px solid gray;
    margin: 100px auto;
    padding: 0 20px;

    .btn {
      width: 300px;
    }

    .el-form-item__content {
      margin: 0 !important;
    }
  }
</style>