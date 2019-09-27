<template>
    <div class="login-warp">
        <header>
            <strong class="goart">GoArt留学</strong>
        </header>
        <section>
            <div class="denglu-warp">
                <div class="denglu">登录</div>
                <div class="zhuce">注册</div>
            </div>

            <div v-for="item in use" class="form">
                <span :style="{backgroundImage:'url(' + item.user + ')'}" class="user-tu"></span>
                <input type="text" :placeholder=item.text>
            </div>

            <div class="forget">
                <a href="javascript:void(0)">忘记密码？</a>
            </div>

            <div class="landding">
                <a href="javascript:void(0)" @click="reg()">登录</a>
            </div>

        </section>
    </div>
</template>

<script>

    import src1 from "../assets/usernameicon@2x.png"
    import src2 from "../assets/passwordicon@2x.png"

    export default {
        name: "login",
        data(){
            return{
                use:[{
                    user:src1,
                    text:'用户名'
                },{
                    user:src2,
                    text:'密码'
                }]
            }
        },
        methods:{
            reg (){
               this.$router.push('/home')
            }
        }

    }
</script>

<style lang="scss">
    header{
        height: 2rem;
        background-image: linear-gradient( 135deg, #FFD26F 10%, #3677FF 100%);

        .goart{
            font-size: .36rem;
            color: #fff;
            padding-top:.8rem;
            padding-left: 1rem;
            display: block;
        }
    }

    section{
        .denglu-warp{
            height: .72rem;
            background: lavender;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .denglu{
                font-size: .18rem;
                color: #82B6ED;
            }
            .zhuce{
                font-size: .18rem;
                color: #999;
            }
        }

        .form {
            width: 3.35rem;
            height: .72rem;
            margin: 0 auto;
            display: flex;
            justify-content:space-around;
            align-items:flex-end;

            .user-tu {
                width: .18rem;
                height: .18rem;
                background: no-repeat center/cover;
                margin-left: .2rem;
            }

            input{
                width: 2.35rem;
                height: .3rem;
                border: none;
                border-bottom: .01rem solid #bebebe;
                margin-right: .3rem;
                font-size: .13rem;
                color: #999;
            }
        }
    }

    .forget {
        width: 3.35rem;
        height: .72rem;
        margin: 0 auto;

        a {
            font-size: .13rem;
            color: #82B6ED;
            float: right;
            margin-top: .1rem;
            padding-right: .28rem;
        }
    }

    .landding {
        width: 2.72rem;
        height: .53rem;
        margin: 0 auto;
        background:#5AA7F9;

        a {
           font-size: .18rem;
            color: #fff;
            text-align: center;
            line-height: .53rem;
            display: block;
        }
    }



</style>