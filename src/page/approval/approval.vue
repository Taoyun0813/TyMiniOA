<template>
    <div class="fd-nav-content">
                <section class="dingflow-design">
                    <div
                        class="box-scale"
                        id="box-scale"
                        v-if="nodeConfig.childNode"
                    >
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
                </section>
            </div>

</template>

<script>
import axios from "axios";
import nodeWrap from "@/components/approval";
export default {
    name: "approval",
    data() {
        return {
            isTried: false,
            processConfig: {},
            nodeConfig: {},
            workFlowDef: {},
            flowPermission: [],
            directorMaxLevel: 0,
            dialogVisible: true,
            tableId: ""
        };
    },
    created() {
        axios.get("/approval").then(res => {
            this.processConfig = res.data.data;
            this.nodeConfig = this.processConfig.nodeConfig;
            this.flowPermission = this.processConfig.flowPermission;
            this.directorMaxLevel = this.processConfig.directorMaxLevel;
            this.workFlowDef = this.processConfig.workFlowDef;
            this.tableId = this.processConfig.tableId;
            console.log(res.data);
        });
    },
    mounted() {},
    components: {
        nodeWrap
    }
};
</script>

<style scoped>
@import "../../css/workflow.css";
.error-modal-list {
    width: 455px;
}
</style>
 