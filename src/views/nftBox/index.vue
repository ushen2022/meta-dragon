<template>
	<div class="nft-market-view banner">
		<img class="title" src="@/assets/text-shadow/go-live.png" alt="" />
	<!-- 	<div class="timer-model">
			<p class="timer">
				{{timeDown}}
			</p>
		</div> -->
		<!-- <div class="egg-frame"><img class="egg" src="@/assets/nft-market/egg.png" alt="" /></div> -->
		<div class="egg-frame"><img class="egg" :src="eggImage" alt="" /></div>
		<!-- v-show="loading" -->
		<el-alert class="alert" v-show="currentStatic>=0"  show-icon :closable="false" :title="staticType.title" :type="staticType.type" effect="dark" />
		<button v-if="haveAuth == false" class="send-button" @click="getLbAuth"  :disabled="loading">
			<i class="el-icon-loading" v-show="loading"></i>
			获取授权
		</button>
		<div v-else >
			<button  class="send-button" @click="ethLbSend(1)" :disabled="loading">
				<i class="el-icon-loading" v-show="loading"></i>
				1 {{$t('nftMarket.sommon')}} {{usdtValue}}LB
			</button>
			<button  class="send-button" @click="ethLbSend(10)" :disabled="loading">
				<i class="el-icon-loading" v-show="loading"></i>
				10 {{$t('nftMarket.sommon')}} {{usdtValue*10}}LB
			</button>
			<button  class="send-button" @click="ethLbSend(50)" :disabled="loading">
				<i class="el-icon-loading" v-show="loading"></i>
				50 {{$t('nftMarket.sommon')}} {{usdtValue*50}}LB
			</button>
		</div>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
@import '@/styles/theme';
.nft-market-view {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url('~@/assets/nft-market/bg.png');
	min-height: 100vh;
	padding-bottom: 100px;
	.title {
		margin-bottom: 75px;
		margin-top: 8px;
	}
	.timer-model {
		width: 458px;
		height: 72px;
		background-image: url('~@/assets/nft-market/shadow-border.png');
		background-repeat: no-repeat;
		font-size: 40px;
		text-align: center;
		line-height: 72px;
		color: #ffffff;
	}
	.egg-frame {
		height: 390px;
		width: 340px;
		background-image: url('~@/assets/nft-market/egg-frame.png');
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
		.egg {
			width: 250px;
		}
		.move {
			animation: identifier 2s;
			@keyframes identifier {
				0% {
					transform: rotateZ(0);
				}
				10% {
					transform: rotateZ(10deg);
				}
				30% {
					transform: rotateZ(-10deg);
				}
				100% {
					transform: rotateZ(0);
				}
			}
		}
	}
	.alert {
		width: 214px;
	}
	.send-button {
		@include GradualBGColor;
		@include GradualBoxShadow;
		height: 65px;
		min-width: 214px;
		margin-top: 20px;
		padding: 0 20px;
		border-radius: 12px;
		color: #ffffff;
		display: block;
		&[disabled] {
			opacity: 0.4;
		}
	}
	// .send-buttons {
		
	// }
}
</style>
