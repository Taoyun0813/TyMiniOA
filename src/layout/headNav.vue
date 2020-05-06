<template xmlns:v-popover="http://www.w3.org/1999/xhtml">
    <header
        class="head-nav rflex"
        :style="{ width: headNavWidth + 'px' }"
        id="header_container"
    >
        <div class="right-nav" ref="rightNav">
            <top-menu></top-menu>
            <div class="userinfo-right rflex" style="background-color:#1b2a47;">
                <div class="notify-row">
                    <ul class="top-menu">
                        <li
                            class="li-badge notify"
                            @mouseover="openOver"
                            @mouseleave="openLeave"
                        >
                            <!-- <img :src="notifyImg" alt="通知" /> -->
                            <svg
                                width="20.00px"
                                height="20.00px"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#fff"
                                    d="M192 736 192 416C192 261.184 301.952 132.064 448 102.4L448 64C448 28.64 476.64 0 512 0 547.36 0 576 28.64 576 64L576 102.4C722.048 132.064 832 261.184 832 416L832 736 864.096 736C899.392 736 928 764.416 928 800 928 835.36 899.36 864 864.096 864L159.904 864C124.608 864 96 835.584 96 800 96 764.64 124.64 736 159.904 736L192 736ZM608 928C608 981.024 565.024 1024 512 1024 458.976 1024 416 981.024 416 928L608 928Z"
                                />
                            </svg>
                            <span class="notify-row-info">通知</span>
                            <div class="red" v-if="len">{{ len }}</div>
                            <div
                                class="con"
                                v-show="isFlag"
                                v-if="notifiesContents.length"
                            >
                                <div class="triangle_border_up">
                                    <span></span>
                                </div>

                                <div class="container-box scrollbar">
                                    <div class="box">
                                        <div
                                            class="notify-mode"
                                            v-for="(item,
                                            index) in notifiesContents"
                                            :key="item.id + item.content"
                                        >
                                            <h3>通知{{ index + 1 }}</h3>
                                            <div>
                                                <div class="time">
                                                    <p>{{ item.time }}</p>
                                                    <div>
                                                        <span class="button1">
                                                            <svg
                                                                class="icon iconc"
                                                                aria-hidden="true"
                                                            >
                                                                <use
                                                                    xlink:href="#icon-noread"
                                                                ></use>
                                                            </svg>

                                                            未读取
                                                        </span>
                                                        <span
                                                            @click="
                                                                del(item.id)
                                                            "
                                                            class="button1"
                                                        >
                                                            <svg
                                                                class="icon iconc"
                                                                aria-hidden="true"
                                                            >
                                                                <use
                                                                    xlink:href="#icon-shanchu"
                                                                ></use>
                                                            </svg>
                                                            删除
                                                        </span>
                                                    </div>
                                                </div>
                                                <p>{{ item.content }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="send-notice" @click="sendMessage">
                            <!-- <svg class="icon sendMessage" aria-hidden="true">
                                <use xlink:href="#icon-fasongtongzhi"></use>
                            </svg> -->
                            <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#fff"
                                    d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936L0 0l1024 512z"
                                />
                            </svg>
                            <span class="notify-row-info">发送通知</span>
                        </li>

                        <li class="li-badge">
                            <a :href="github" target="_blank" v-popover:qcode>
                                <!-- <icon-svg icon-class="iconwechat" /> -->

                                <svg
                                    width="20px"
                                    height="20.00px"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#fff"
                                        d="M688.015318 350.807784c11.279904 0 22.440082 0.811482 33.504068 2.078335C691.413717 212.663494 541.536198 108.534925 370.453728 108.534925 179.189613 108.534925 22.516318 238.892879 22.516318 404.442332c0 95.553263 52.125171 174.024475 139.228995 234.908124l-34.801621 104.669898 121.637338-61.004399c43.521213 8.601912 78.440513 17.444301 121.871675 17.444301 10.9197 0 21.74935-0.537236 32.486902-1.38044-6.800893-23.24747-10.737552-47.610344-10.737552-72.906473C392.203078 474.15916 522.738064 350.807784 688.015318 350.807784zM500.931409 256.45793c26.199709 0 43.552935 17.262152 43.552935 43.431162 0 26.076912-17.353227 43.551912-43.552935 43.551912-26.077935 0-52.245921-17.475-52.245921-43.551912C448.686511 273.721105 474.854497 256.45793 500.931409 256.45793zM257.422396 343.441003c-26.077935 0-52.394301-17.475-52.394301-43.551912 0-26.169009 26.316366-43.431162 52.394301-43.431162s43.431162 17.262152 43.431162 43.431162C300.853557 325.966003 283.500331 343.441003 257.422396 343.441003zM1005.576907 622.019743c0-139.138944-139.198296-252.526387-295.54311-252.526387-165.549453 0-295.937083 113.388467-295.937083 252.526387 0 139.319046 130.386606 252.472152 295.937083 252.472152 34.646078 0 69.599148-8.720615 104.397698-17.445324l95.438653 52.277644-26.167986-86.984097C953.538717 769.941724 1005.576907 700.459233 1005.576907 622.019743zM614.083491 578.465784c-17.323551 0-34.796504-17.235546-34.796504-34.828226 0-17.321504 17.472953-34.770921 34.796504-34.770921 26.317389 0 43.552935 17.449417 43.552935 34.770921C657.635403 561.230238 640.399857 578.465784 614.083491 578.465784zM805.467333 578.465784c-17.204847 0-34.558074-17.235546-34.558074-34.828226 0-17.321504 17.35425-34.770921 34.558074-34.770921 26.077935 0 43.553958 17.449417 43.553958 34.770921C849.021292 561.230238 831.545268 578.465784 805.467333 578.465784z"
                                    />
                                </svg>
                                <span class="notify-row-info">微信分享</span>
                                <el-popover
                                    ref="qcode"
                                    popper-class="qcodepopper"
                                    placement="bottom"
                                    trigger="hover"
                                >
                                    <div class="wechat-area cflex">
                                        <p class="titles">微信</p>
                                        <img
                                            :src="wechat.wechatImg"
                                            alt="微信"
                                        />
                                    </div>
                                </el-popover>
                            </a>
                        </li>
                        <li class="li-badge">
                            <a :href="github" target="_blank" v-popover:qqcode>
                                <!-- <icon-svg icon-class="iconqq" /> -->
                                <svg
                                    width="20px"
                                    height="20.00px"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#fff"
                                        d="M116.435 593.714c-33.54 78.964-38.985 154.297-12.059 168.37 18.572 9.696 47.686-12.382 74.936-52.909 10.791 44.157 37.493 84.137 75.633 116.21-40.004 14.768-66.135 38.886-66.135 66.232 0 44.954 70.709 81.302 157.978 81.302 78.716 0 143.907-29.538 155.94-68.371 3.232-0.049 15.663-0.049 18.796 0 12.083 38.784 77.324 68.371 155.989 68.371 87.267 0 157.978-36.398 157.978-81.302 0-27.297-26.105-51.464-66.135-66.232 38.089-32.123 64.889-72.053 75.631-116.21 27.251 40.527 56.29 62.605 74.887 52.909 26.95-14.073 21.631-89.456-12.032-168.37-26.355-62.058-62.11-107.754-89.457-117.848 0.398-3.929 0.596-7.958 0.596-11.935 0-23.968-6.661-46.146-18.049-64.196 0.199-1.393 0.199-2.834 0.199-4.227 0-11.038-2.636-21.381-7.114-30.332-6.909-161.309-111.93-289.402-281.866-289.402-170.036 0-275.106 128.093-281.943 289.402-4.525 9.001-7.135 19.343-7.135 30.332 0 1.393 0.099 2.835 0.15 4.227-11.288 18.05-17.951 40.178-17.951 64.196 0 3.978 0.15 7.955 0.498 11.935-27.151 10.094-63.028 55.841-89.333 117.848z"
                                    />
                                </svg>
                                <span class="notify-row-info">QQ群</span>
                                <el-popover
                                    ref="qqcode"
                                    popper-class="qcodepopper"
                                    placement="bottom"
                                    trigger="hover"
                                >
                                    <div class="wechat-area cflex">
                                        <p class="titles">qq群</p>
                                        <img :src="qq.qqImg" alt="qq群" />
                                    </div>
                                </el-popover>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="userinfo" style="">
                    <el-menu
                        class="el-menu-demo"
                        mode="horizontal"
                        background-color="#1b2a47"
                        active-text-color="#f1f1f1"
                        text-color="#fff"
                    >
                        <el-submenu index="1" popper-class="langItem">
                            <template slot="title">
                                <span>
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M886.2 604.8H137.8c-22.1 0-40 17.9-40 40 0 8.4 2.6 16.2 7 22.6 1.9 4.5 4.8 8.7 8.4 12.4L289.5 856c7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7c15.6-15.6 15.6-40.9 0-56.6L231.3 684.8h654.8c22.1 0 40-17.9 40-40s-17.8-40-39.9-40zM137.8 419.2h748.4c22.1 0 40-17.9 40-40 0-8.4-2.6-16.2-7-22.6-1.4-3.3-3.4-6.5-5.8-9.5L769.2 170.9c-14-17.1-39.2-19.6-56.3-5.6-17.1 14-19.6 39.2-5.6 56.3l96.3 117.6H137.8c-22.1 0-40 17.9-40 40s17.9 40 40 40z"
                                        />
                                    </svg>
                                    <i
                                        style="font-weight: 600;font-size: 20px;color: #fff;margin-left:5px;"
                                        >CN</i
                                    >
                                </span>
                            </template>
                            <el-menu-item
                                index="1-1"
                                @click="changeLocale('zh')"
                            >
                                <!-- <img
                                    :src="chinaImg"
                                    class="langAvatar"
                                    alt=""
                                /> -->
                                <span class="intro">中文</span>
                            </el-menu-item>
                            <!--<el-menu-item index="1-2" @click="changeLocale('en')">
                                <img :src="americaImg" class="langAvatar" alt="" />
                                <span class="intro">EngList</span>
                            </el-menu-item>-->
                        </el-submenu>

                        <el-submenu index="2" popper-class="infoItem">
                            <template slot="title">
                                <div class="welcome">
                                    <span class="name"
                                        >{{ $t('commons.hi') }},</span
                                    >
                                    <span class="name avatarname">
                                        {{ $t(`commons.${name}`) }}</span
                                    >
                                </div>
                                <img :src="tyImg" class="avatar" alt="" />
                            </template>
                            <el-menu-item
                                index="2-1"
                                @click="setDialogInfo('info')"
                                >{{ $t('commons.infoShow') }}</el-menu-item
                            >
                            <el-menu-item
                                index="2-2"
                                @click="setDialogInfo('pass')"
                                >{{ $t('commons.infoModify') }}</el-menu-item
                            >
                            <el-menu-item
                                index="2-3"
                                @click="setDialogInfo('logout')"
                                >{{ $t('commons.quit') }}</el-menu-item
                            >
                        </el-submenu>
                    </el-menu>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as mUtils from '@/utils/mUtils'
import { setToken, getToken } from '@/utils/auth'
import store from '@/store'
import topMenu from './topMenu'
import wechatImg from '@/assets/img/wechat.jpg'
import qqImg from '@/assets/img/qq.png'
import tyImg from '@/assets/img/ty.png'
import logoImg from '@/assets/img/logo.png'
import chinaImg from '@/assets/img/china.svg'
import americaImg from '@/assets/img/america.svg'
import notifyImg from '@/assets/img/notify.jpg'
import axios from 'axios'

export default {
    name: 'head-nav',
    data() {
        return {
            logo: logoImg,
            notifyImg: notifyImg,
            langLogo: getToken('langLogo') || chinaImg,
            chinaImg: chinaImg,
            americaImg: americaImg,
            wechat: {
                wechatImg: wechatImg,
                isWechat: false,
            },
            qq: {
                qqImg: qqImg,
                isQq: false,
            },
            tyImg: tyImg,
            github: 'https://github.com',
            menu: {
                userBgcolor: '#f0f2f5',
            },
            //   notifies: [],
            len: Number,
            isFlag: false,
        }
    },

    computed: {
        ...mapGetters(['name', 'avatar', 'sidebar', 'notifiesContents']),
        headNavWidth() {
            // return document.body.clientWidth - this.sidebar.width
            return 1566
        },
    },
    mounted() {
        axios.get('/notifies').then((item) => {
            if (item.data.res === '200') {
                const notifies = item.data.notifies
                this.len = item.data.notifies.length
                this.notifiesContent(notifies)
            } else {
                console.log('321')
            }
        })
    },
    methods: {
        del(id) {
            //   this.notifies = this.notifies.filter((item) => item.id !== id)
            this.delNotifies(id)
            this.showPrompt('通知已删除')
            this.hidePrompt(true)
        },
        sendMessage() {
            this.noticeCloseHide()
        },
        ...mapActions([
            'showPrompt',
            'hidePrompt',
            'noticeCloseHide',
            'notifiesContent',
            'delNotifies',
        ]),
        showWechat() {
            this.wechat.isWechat = true
        },
        hideWechat() {
            this.wechat.isWechat = false
        },
        showQq() {
            this.qq.isQq = true
        },
        logout() {
            this.$store.dispatch('LogOut').then(() => {
                location.reload()
            })
        },
        openOver() {
            if (!this.isFlag) this.isFlag = true
        },
        openLeave() {
            if (this.isFlag) this.isFlag = false
            this.len = 0
        },
        /**
         * 弹出框-修改密码或者系统设置
         * @param {string} cmditem 弹框类型
         */
        setDialogInfo(cmditem) {
            switch (cmditem) {
                case 'info':
                    this.$router.push('/infoManage/infoShow/infoShow1')
                    break
                case 'pass':
                    this.$router.push('/infoManage/infoModify/infoModify1')
                    break
                case 'logout':
                    this.logout()
                    break
            }
        },
        // 切换语言
        changeLocale(type) {
            setToken('lang', type)
            this.$i18n.locale = type
            if (type === 'en') {
                this.langLogo = this.americaImg
            } else {
                this.langLogo = this.chinaImg
            }
            setToken('langLogo', this.langLogo)
        },
    },
    components: {
        topMenu,
    },
}
</script>

<style scoped lang="less">
.time {
    display: flex;
    align-items: center;
    width: 100%;
    height: 15px;
    justify-content: space-between;
    color: rgba(160, 160, 160, 0.842);

    span {
        font-size: 13px;

        cursor: pointer;
    }
    span:not(first-child) {
        margin-left: 5px;
    }
    span:hover {
        color: rgb(138, 137, 137);
    }
    .iconc {
        font-size: 12px;
    }
}

.notify-mode {
    margin: 5px 10px;
    box-sizing: border-box;
    padding: 5px;
}
.notify-mode:hover {
    background: rgba(218, 218, 218, 0.466);
    border-radius: 5px;
    cursor: pointer;
}
.notify-mode:hover div p:last-child {
    color: rgb(236, 152, 41);
}
.notify-mode h3 {
    font-size: 15px;
}
.notify-mode div {
    line-height: 23px;
}
.notify-mode div p:first-child {
    font-size: 13.5px;
    color: rgba(90, 90, 90, 0.979);
}
.notify-mode div p:last-child {
    font-size: 14px;
}
.right-nav {
    display: flex;
    flex: 1;

    width: calc(100% - 180px);
    // padding-right: 15px;
    justify-content: space-between;
    // box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
}
.head-nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 29;
    transition: width 0.2s;
    justify-content: space-between;
    height: 60px;
    box-sizing: border-box;
    background: #fff;
    .logout {
        vertical-align: middle;
        cursor: pointer;
    }
}
.middle {
    align-items: center;
    border: 1px solid;
}
.userinfo-right {
    min-width: 250px;
    padding: 0 10px;
    justify-content: space-between;
    .sendMessage {
        font-size: 20px;
    }
    .send-notice {
        color: #009f3b;
        cursor: pointer;
        .message {
            position: absolute;
            width: 100px;
            text-align: center;
            top: 30px;
            z-index: 99;
            color: #949697;
            left: -40px;
            top: 33px;
            font-size: 13px;
            display: none;
        }
    }
    .send-notice:hover .message {
        display: block;
    }
}
.userinfo {
    line-height: 60px;
    text-align: right;
}
.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
}
.langAvatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
}
.welcome {
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    .name {
        line-height: 20px;
        text-align: center;
        font-size: 12px;
    }
    .avatarname {
        color: #a9d86e;
        font-weight: bolder;
        font-size: 13px;
    }
}

.username {
    cursor: pointer;
    margin-right: 5px;
}
.border {
    border: 1px solid;
}
.notify-row {
    // line-height: 60px;
    flex: 1;
    ul {
        display: flex;
        justify-content: space-around;
    }
    .triangle_border_up span {
        position: absolute;
        top: 1px;
        right: 20px;
        color: white;
        font-size: 30px;
        line-height: 20px;
        cursor: pointer;
    }
    .container {
        overflow: scroll;
        height: 300px;
        width: 200px;
    }
}
.notify-row .notify img {
    width: 23px;
    height: 23px;
    display: block;
    // position: relative;
    cursor: pointer;
}
.notify-row .notify .red {
    background: red;
    width: 10px;
    height: 10px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    position: absolute;
    top: 15px;
    left: 12px;
    text-align: center;
    color: #fff;
    line-height: 10px;
    font-size: 3px;
}
.notify-row .notify .notify-mode {
    line-height: 25px;
}
ul.top-menu > li {
    position: relative;
    margin: 0 2px;
    display: flex;
    align-items: center;
    height: 60.99px;
    .notify-row-info {
        color: #fff;
        font-size: 15px;
        padding: 0 8px;
    }
}

.notify {
    position: relative;
    display: flex;
    align-items: center;
}

.con {
    width: 300px;
    height: 300px;
    border: 1px solid rgb(235, 235, 235);
    position: absolute;
    top: 56.99px;
    left: calc((300px / -2) + 8px);
    z-index: 999;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    background: rgb(255, 255, 255);
}

.triangle_border_up {
    width: 0;
    height: 0;
    border-width: 0 8px 8px;
    border-style: solid;
    border-color: transparent transparent rgb(235, 235, 235); /*透明 透明  灰*/
    position: absolute;
    top: -8px;
    z-index: 1000;
}
.triangle_border_up span {
    display: block;
    width: 0;
    height: 0;
    border-width: 0 8px 8px;
    border-style: solid;
    border-color: transparent transparent #ffffff; /*透明 透明  黄*/
    position: absolute;
    top: 1px;
    left: -8px;
}
.container-box {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.container-box .box {
    width: 100%;
    height: 300px;
    h1 {
        text-align: center;
    }
}
.scrollbar::-webkit-scrollbar {
    /*滚动条整体样式*/

    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/

    height: 1px;
}
.scrollbar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/

    border-radius: 10px;

    -webkit-box-shadow: inset 0 0 5px rgba(129, 127, 127, 0.746);

    background: rgba(129, 127, 127, 0.746);
}

.scrollbar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/

    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.301);

    border-radius: 10px;

    background: #ededed;
    // background: #ededed;
}
</style>
