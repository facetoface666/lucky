<template>
    <div class="lucky-warp">
        <header>
            <div class="nav">
                <a href="javascript:void(0)" class="england">英国<i></i></a>
                <strong>GoArt留学</strong>
                <a href="javascript:void(0)" class="sou-logo"></a>
            </div>
        </header>
        <section>
            <div class="banner-warp">
                <div class="banner">
                    <div class="cornell">Cornell University</div>
                    <div class="cornell-text">康奈尔大学</div>
                    <div class="shuliang">
                        <div class="shipin">
                            <div>22</div>
                            <div>视频</div>
                        </div>
                        <div class="picher">
                            <div>186</div>
                            <div>图片</div>
                        </div>
                    </div>

                    <div class="play"></div>
                </div>
            </div>

            <div class="choise">
                <div v-for="item in oneN" class="choise-one">
                    <div :style="{backgroundImage:'url(' + item.src + ')'}"       class="choise-tu1"></div>
                    <div class="choise-zi1">{{item.text}}</div>
                </div>
            </div>

            <div class="public">
                <strong>近期公开课</strong>
                <a href="javascript:void(0)">查看更多 ></a>
            </div>

            <div class="online"  v-for="item in twoN" :style="{backgroundImage:'url('+                  item.href +')'}">

                <div class="online-2">
                    <div class="onlinetext1">
                        <div>线上答疑 | 交互设计出国留学之100问</div>
                        <div>￥ 免费</div>
                    </div>
                    <div class="onlinetext2">
                        <div>开讲时间：2019-10-10  20：00</div>
                        <div>已有56人报名</div>
                    </div>
                </div>
            </div>

            <div class="public">
                <strong>热门资讯</strong>
                <a href="javascript:void(0)">刷新</a>
            </div>

            <div class="online"  v-for="item in twoN" :style="{backgroundImage:'url('+                  item.href +')'}">

                <div class="online-2">
                    <div class="onlinetext1">
                        <div>刷新 | 2020年QS全球最适合留学城市排名发布！</div>
                        <div></div>
                    </div>
                    <div class="onlinetext2">
                        <div>Go Art留学中心 2019-08-08  10：00发布</div>
                        <div>2019-08-08  10：00发布</div>
                    </div>
                </div>
            </div>

            <div class="free"></div>
        </section>

        <footer>
            <div class="footwarp">
                <a href="javascript:void (0)" v-for="item in threeN" class="home-one">
                    <div :style="{backgroundImage:'url('+ item.homesrc +')'}"                                 class="home-tu"></div>

                    <div class="home-zi">{{item.text}}</div>
                </a>
            </div>

        </footer>




    </div>
</template>


<script>
    import src1 from "../assets/conglingkaishi logo@2x.png"
    import src2 from "../assets/xuexiao logo@2x.png"
    import src3 from "../assets/zuopinji logo@2x.png"
    import src4 from "../assets/shenqing offerlogo@2x.png"
    import banner2 from "../assets/xuanzeyuanxiaopic@2x.png"
    import homesrc1 from "../assets/shouye logo@2x.png"
    import homesrc2 from "../assets/shenqing logo@2x.png"
    import homesrc3 from "../assets/zixun logo@2x.png"
    import homesrc4 from "../assets/wode logo@2x.png"

export default{
    name: 'home',
    data(){
        return{
            oneN:[{
                src:src1,
                text:'从零开始'
            },{
                src:src2,
                text:'学校'
            },{
                src:src3,
                text:'作品集'
            },{
                src:src4,
                text:'申请offer'
            }],


            twoN:[{href:banner2},],

            threeN:[{
                homesrc:homesrc1,
                text:'首页'
            },{
                homesrc:homesrc2,
                text:'申请'
            },{
                homesrc:homesrc3,
                text:'咨询'
            },{
                homesrc:homesrc4,
                text:'我的'
            }]


        }
    }
}

</script>


<style lang="scss">

    .nav {
        height: .57rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .16rem;
        color: #666;

        .england{
            font-size: .15rem;
            color: #666;
            position: relative;

            i {
                width: .15rem;
                height: .06rem;
                background:url("../assets/money icon@2x.png")no-repeat 0 0;
                display: block;
                position: absolute;
                top: 7px;
                right: -24px;
            }

         }

        strong {
            font-size: .18rem;
            color: #333;
        }

        .sou-logo{
           width: 14px;
            height: 14px;
            background:url("../assets/search logo@2x.png") no-repeat center /cover;
        }
    }

    section{
        overflow-y: auto;

    .banner-warp {
        height: 2rem;
        width: 100%;

        .banner{
            width: 100%;
            height: 2rem;
            background: url("../assets/bannerkang.jpg")no-repeat center /cover;
            position: relative;
        }
        .cornell {
            font-size: .12rem;
            color: #fff;
            padding: .1rem 0 0 .16rem;
        }

        .cornell-text {
            font-size: .3rem;
            color: #fff;
            padding-left: .16rem;
        }
        .shuliang {
            width: .54rem;
            height: .52rem;
            font-size: .12rem;
            color: #fff;
            padding: .94rem 0 0 .24rem;
            line-height: .18rem;
            display: flex;
            justify-content: space-between;

        }
        .play {
            width: .3rem;
            height: .3rem;
            background: url("../assets/bofang icon@2x.png")no-repeat center/cover;
            position: absolute;
            right: .24rem;
            bottom: .14rem;
        }
    }

    .choise {
        width: 3.35rem;
        height: .97rem;
        margin: 0 auto;
        /*background: blueviolet;*/

        .choise-one {
            float: left;
            margin: .24rem .2rem 0 .2rem;

            .choise-tu1{
                width: .3rem;
                height: .3rem;
                background: no-repeat center /cover;
                margin: 0 auto;
                margin-bottom: .08rem;
            }
            .choise-zi1 {
                font-size: .13rem;
                color: #666;
            }
        }
    }

    .public{
        height: .46rem;
        width: 3.35rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        storng {
            font-size: .17rem;
            color: #333;
        }

        a{
            font-size: .1rem;
            color: #666;
            margin-top: .07rem;
        }
    }

    .online {
        height:1rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;

        .online-2 {
            width: 3.35rem;
            height: 1rem;
            margin: 0 auto;

        .onlinetext1{
             display: flex;
             justify-content: space-between;
             font-size: .13rem;
             color: #fff;
            padding-top: .58rem;
            margin-bottom: .04rem;
        }
        .onlinetext2{
            display: flex;
            justify-content: space-between;
            font-size: .1rem;
            color: #fff;
        }

        }
    }
}


    .free {
        height: 1rem;
    }
    footer{
        height: .5rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 10px 2px rgba(0, 0, 0, 0.16);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        .footwarp {
            width: 3.35rem;
            height: .5rem;
            margin: 0 auto;
        }

        .home-one {
            float: left;
            margin-top: .06rem;
            margin-right: .38rem;
            margin-left: .2rem;

            &:last-child{
                float: right;
            }

            .home-tu {
                width: .25rem;
                height: .22rem;
                background: no-repeat center/cover;
                margin-bottom: .02rem;
            }
            .home-zi{
                font-size: .12rem;
                color: #999;
            }


        }
    }


</style>