<template>
	<div>
		
	<button id="btn-popup" @click="showChat">不开心就点我</button>

	<div id="popup">
	<img src="image.jpg" alt="Image">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>
	</div>
</template>
<style >
#popup{
	display: none;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 20px;
	text-align: center;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
}
#popup img {
	width: 200px;
	height: auto;
	margin-bottom: 10px;
}
#popup p {
	font-size: 16px;
	margin-bottom: 0;
}
#btn-popup {
	cursor: pointer;
}
</style>
<script>
	//引入一个hunhe
	// import {hunhe,hunhe2} from '../mixin'
    
	export default {
		name:'ChatDemo',
		data() {
			return {
				chat:['我在在辣，我让让辣。','下雨天怎么不跑起来，走着，淋雨啊笨蛋。','我不是胆小鬼起码在你面前我的勇气可以拿第一。','嘿，觉得荣幸吗?今天我好像只做了两件事，都与你有关。','山的那一边是海，深夜的尽头是光。'],
                i: 0
			}
		},
		methods:{
            showChat(){
                if(this.i<this.chat.length){
                    alert(this.chat[this.i])
                    this.i ==4 ? this.i=0: this.i++
                    
                }
            }
        }
	}
</script>