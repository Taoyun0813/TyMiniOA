<template>
  <div>
    <!-- <div style="margin-bottom:15px;">{{$t('permission.figure')}}： {{figure}}</div>
    {{$t('permission.switchRoles')}}： -->
    <div class="ownPer">我的权限：{{ figure }}</div>
    <div class="rflex">
      <p>切换权限：</p>
      <el-radio-group v-model="switchRoles">
        <el-radio-button label="editor"></el-radio-button>
        <el-radio-button label="admin">管理员</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    figure() {
      console.log(this.$store)
      return this.$store.getters.figure
    },
    switchRoles: {
      get() {
        return this.figure[0]
      },
      set(val) {
        this.$store.dispatch('ChangeRoles', val).then(() => {
          this.$emit('change')
        })
      },
    },
  },
}

/**
 * 如何获取到我的权限:
 *  1、用户登录成功之后，根据token调取接口getInfo()获取到用户roles并存入vuex;
 *
 *
 */
</script>

<style lang="less" scoped>
.ownPer {
  margin-bottom: 20px;
}
.rflex {
  align-items: center;
  margin-bottom: 20px;
}
</style>
