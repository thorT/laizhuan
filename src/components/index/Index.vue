<template>
  <div id="index">
    <p>这是首页</p>
    <el-row>
      <el-button type="danger" round @click="btn">确定</el-button>
    </el-row>
  </div>

</template>

<script type="text/ecmascript-6">
  import req from 'common/js/wayaxios';

    export  default {
        methods:{
            btn(){
                console.log(123);

            }
        },
        mounted(){
          let res=  req.get('http://www.dijiadijia.com/api.php')
            console.log(res);
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import "~common/stylus/variable"
  #index
     color: $color-theme
</style>