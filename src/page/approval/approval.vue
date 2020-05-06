<template>
  <div class="fd-nav-content">
    <section class="dingflow-design">
      <div class="box-scale" id="box-scale">
        <nodeWrap
          :nodeConfig.sync="nodeConfig"
          :flowPermission.sync="flowPermission"
          :isTried.sync="isTried"
          :directorMaxLevel="directorMaxLevel"
          :tableId="tableId"
        ></nodeWrap>
        <div class="end-node">
          <div class="end-node-circle"></div>
          <div class="end-node-text">流程结束</div>
        </div>
      </div>
      <div class="but">
        <but :clickFunc="reset" />
        <but :clickFunc="tips" title="完成" color="#2cd340" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import nodeWrap from '@/components/approval'

import { mapActions } from 'vuex'

import but from '@/components/but'
export default {
  name: 'approval',
  data() {
    return {
      isTried: false,
      processConfig: {},
      nodeConfig: {},
      workFlowDef: {},
      flowPermission: [],
      directorMaxLevel: 0,
      dialogVisible: true,
      tableId: '',
    }
  },
  created() {
    axios.get('/approval').then((res) => {
      this.processConfig = res.data.data
      this.nodeConfig = this.processConfig.nodeConfig
      this.flowPermission = this.processConfig.flowPermission
      this.directorMaxLevel = this.processConfig.directorMaxLevel
      this.workFlowDef = this.processConfig.workFlowDef
      this.tableId = this.processConfig.tableId
    })
  },
  mounted() {
    console.log(this.$refs.msg)
  },
  methods: {
    reset() {
      this.nodeConfig.childNode = null
    },
    tips() {
      this.showPrompt('提交完成')
      this.hidePrompt(true)
      // setTimeout(() => {
      //     this.hidePrompt(false)
      // }, 2000)
    },
    ...mapActions(['showPrompt', 'hidePrompt']),
  },
  components: {
    nodeWrap,
    but,
  },
}
</script>

<style scoped lang="less">
@import '../../css/workflow.css';
.error-modal-list {
  width: 455px;
}
.fd-nav-content,
.box-scale {
  min-height: 650px;
}
.fd-nav-content {
  position: relative;
}
.but {
  position: fixed;
  z-index: 999;
  bottom: 100px;
  left: 200px;
  display: flex;
  letter-spacing: 10px;
}
</style>
