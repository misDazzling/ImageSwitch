<template>
  <div class="container">
    
    <button :style="{ backgroundImage: 'url(https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/comment_bg.png)' }" @click="showPopup" class="my-btn">不开心就点一下 </button>
    
        <div v-if="popupVisible" class="box">
            <div class="box1">
            <div class="box2">
            <img :src="imgurl" alt="图片">
            
            </div>
            </div>
            
            <div class="box3">"{{msg}}"</div>
        </div>
    
    </div>
</template>
<style>
.container{
    top:0%;

    width: 400px;
    height: 600px;
}
.box2 img {
  
 
  width: 100%;
  height: 100%;
  
}
.box1{
   
    
    display: flex;
     justify-content: center;
    align-items: center;
    
    
}
.box2{
  width: 120;
  height: 200px;
  
  overflow: hidden;
  position: relative;
  
 
  display: flex;
  justify-content: center;
  align-items: center;

}
*{
  /* 常规初始化 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  /* 常规居中显示 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  min-height: 100vh;
  background-color: #000;
}

.box {
  /* 超出部分要隐藏 */
  overflow: hidden;

  /* 撑开父盒子大小 */
  padding: 15vmin 10vmin;
  /* 小圆角 */
  border-radius: 5vmin;
  /* 文字颜色、大小 */
  color: #66ddf7;
  font-size: 8vmin;

  /* 简单定位 */
  position: relative;
  /* 显示层级最上面 */
  z-index: 0;
}
.box::before {
  content: "";

  /* 宽高要超过父级默认的大小 */
  width: 200%;
  height: 200%;
  /* 基础背景颜色 */
  background-color: #22292f;
  /* conic-gradient 围绕中心点旋转的渐变 */
  background-image: conic-gradient(transparent, #66ddf7, transparent 30%);

  /* 定位到中间 */
  position: absolute;
  left: -50%;
  top: -50%;
  /* 显示层级最底层 */
  z-index: -2;

  /* 旋转整个灯光渐变这一层 */
  animation: rotate 5s linear infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
.box::after {
  content: "";

  /* 往内撑开盒子宽高，正好小一圈当做边框 */
  inset: 1vmin;
  background: #000;
  border-radius: 4vmin;

  position: absolute;
  /* 显示层级中间，盖住最后一层的灯光 */
  z-index: -1;
}

.box3{
  font-size: 15px;
  height: 30px;
}
.my-btn {
  width: 200px;
  height: 90px;
  border-radius: 10px;
  color: coral;
  font-size: 20px;
  opacity: 0.8;
}

</style>
<script>

export default {

  data() {
    return {
        ImageSrc: [
          require('../assets/1.jpg'),
          require('../assets/2.jpg'),
          require('../assets/3.jpg'),
          require('../assets/4.jpg'),
          require('../assets/5.jpg')
        ],
        popupVisible: false,
        chat:['我在在辣，我让让辣。','下雨天怎么不跑起来，走着，淋雨啊笨蛋。','我不是胆小鬼起码在你面前我的勇气可以拿第一。','嘿，觉得荣幸吗?今天我好像只做了两件事，都与你有关。','山的那一边是海，深夜的尽头是光。'],
        i: 0,
        
			}
  },
  methods: {
    showPopup() {
      this.popupVisible = true;
      this.i ==4 ? this.i=0: this.i++
    }
  },
  computed:{
    msg:function(){
      return this.chat[this.i]
    },
    imgurl:function(){
      return this.ImageSrc[this.i]
      
    }
  }
};
</script>
