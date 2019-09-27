<template>
    <footer>
        <div class="footwarp">
            <a :href="item.href" v-for="item in threeN" class="home-one">
                <div :style="{backgroundImage:'url('+ item.homesrc +')'}"                                 class="home-tu"></div>
                <div class="home-zi">{{item.text}}</div>
            </a>
        </div>
    </footer>
    
</template>

<script>
    import homesrc1 from "../assets/shouye logo@2x.png"
    import homesrc2 from "../assets/shenqing logo@2x.png"
    import homesrc3 from "../assets/zixun logo@2x.png"
    import homesrc4 from "../assets/wode logo@2x.png"
    export default {
        name: "footer",
        data(){
            return{
                threeN:[{
                    homesrc:homesrc1,
                    text:'首页',
                    href:'/home'
                },{
                    homesrc:homesrc2,
                    text:'申请',
                    href:'/info'
                },{
                    homesrc:homesrc3,
                    text:'咨询',
                    href:'/about'
                },{
                    homesrc:homesrc4,
                    text:'我的',
                    href:'/user'
                }]
            }
        }

    }
</script>

<style lang="scss" scoped>

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