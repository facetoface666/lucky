<template>
    <div class="nav">
        <a href="javascript:void(0)" class="england">英国<i></i></a>
        <strong>GoArt留学</strong>
        <a href="javascript:void(0)" class="sou-logo"></a>
    </div>

</template>

<script>

</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
    }
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


</style>