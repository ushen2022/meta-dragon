<template>
	<div class="dragon-card-component" @click="choice()">
		<div class="dragon-pay-type" :class="cardTypeClass" v-if="showPayModule">
			<p class="font-hide font-center">{{toDecimal2(nft)}}</p>
			<span class="font-center">/</span>
			<p class="font-hide font-center">{{toDecimal2(doller)}}</p>
		</div>
		<div class="dragon-card" :class="[cardTypeClass]" v-if="dragonId">
			<div class="check-box" v-show="typeCheck">
				<!--  @click.stop="changeChecked"   -->
				<img class="checked-image" src="@/assets/dragonCard/checked.png" alt="err" v-show="isChecked" />
			</div>
			<p class="RGB-text left">
				<span>#{{ dragonId }}</span>
				<span class="hatch">{{ $t('myAssets_assetsList.mbc') }}:{{ dragonHatch }}</span>
			</p>
			<p class="left">{{ dragonName }}</p>
			<!-- <img class="dragon-image" src="@/assets/myAssets/dragon.png" alt="" /> -->
			<img class="dragon-image" :src="dragonImage" alt />
			<Rate :stars="stars"></Rate>
			<ul class="skill-list">
				<li v-for="(item, index) in skills" :key="index">
					<img :src="item" alt="image error" />
				</li>
			</ul>
			<slot></slot>
		</div>
		<img v-else class="choice-image" src="@/assets/dragonCard/choice-bg.png" alt />
	</div>
</template>
<script>
/*
	{
		"description": "Obsidian heart10202000520093",
		"external_url": "https://storageapi.fleek.co/f5158214-e839-49b4-a90e-fe6166fa3536-bucket/image_20/blue/Dragon_yuansu_005/10202000520093.jpg",
		"image": "https://storageapi.fleek.co/f5158214-e839-49b4-a90e-fe6166fa3536-bucket/image_20/blue/Dragon_yuansu_005/10202000520093.jpg",
		"name": "Obsidian heart",
		"properties": {
			"id": 10012,
			"name": "Obsidian heart",
			"quality": 1,
			"camp": 2,
			"GrowUp": 1.4,
			"energy": 20,
			"hp": 180,
			"attack": 60,
			"defense": 20,
			"skill": "5031,5013,5011,5018",
			"speed": 23,
			"critRate": 1000,
			"critDamage": 1.5
		}
	}
*/
import rate from './rate.vue';
export default {
	components: {
		Rate: rate
	},
	props: {
		typeCheck: {
			type: Boolean,
			default: false,
		},
		isChecked: {
			type: Boolean,
			default: false,
		},
		dragonImage: {
			default: require('@/assets/myAssets/dragon.png')
		},
		dragonId: {
			type: String,
			default: ''
		},
		dragonName: {
			type: String,
			default: ''
		},
		cardType: {
			type: [Number, String]
		},
		skills: {
			type: Array,
			default: () => [],
			validator(skills) {
				let lengthNum = skills.length;
				return lengthNum === 4 || lengthNum === 0;
			}
		},
		stars: {
			type: Number,
			default: 0
		},
		dragonHatch: {
			type: [String, Number],
			default: '0'
		},
		nft: {
			type: Number,
		},
		doller: {
			type: Number,
		}
	},
	computed: {
		cardTypeClass() {
			const types = {
				1: 'cli-1',
				2: 'cli-2',
				3: 'cli-3',
				4: 'cli-4'
			}
			return types[this.cardType];
		},
		showPayModule() {
			return this.nft && this.doller;
		},
	},
	methods: {
		choice() {
			this.$emit('choice')
		},
		toDecimal2(x) {
			var f = parseFloat(x);
			if (isNaN(f)) {
				return false;
			}
			var f = Math.round(x * 100) / 100;
			var s = f.toString();
			var rs = s.indexOf('.');
			if (rs < 0) {
				rs = s.length;
				s += '.';
			}
			while (s.length <= rs + 2) {
				s += '0';
			}
			return s;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.choice-image {
	width: 140px;
	height: 140px;
}
.dragon-pay-type {
	height: 44px;
	// display: flex;
	// justify-content: center;
	// align-items: center;
	display: grid;
	grid-template-columns: 1fr 1rem 1fr;
	align-content: center;

	font-size: 12px;
	padding: 4px 10px;

	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
	color: #feffff;
	.font-center {
		text-align: center;
	}
	&.cli-1 {
		background-image: url("~@/assets/dragonCard/lv-pay-1.png");
	}
	&.cli-2 {
		background-image: url("~@/assets/dragonCard/lv-pay-2.png");
	}
	&.cli-3 {
		background-image: url("~@/assets/dragonCard/lv-pay-3.png");
	}
	&.cli-4 {
		background-image: url("~@/assets/dragonCard/lv-pay-4.png");
	}
}
.dragon-card {
	background-repeat: no-repeat;
	background-position: top left;
	background-size: 100% 100%;
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 6px;
	position: relative;
	.check-box {
		$boxSize: 36px;
		position: absolute;
		top: -17px;
		right: -17px;
		background-image: url(~@/assets/dragonCard/checked-box.png);
		background-position: center;
		display: grid;
		place-items: center;
		width: $boxSize;
		height: $boxSize;
		.checked-image {
			max-width: 100%;
		}
		@media screen and (max-width: 750px) {
			$boxSize: 24px;
			width: $boxSize;
			height: $boxSize;
			background-size: 100%;
			top: -12px;
			right: -12px;
		}
	}
	.left {
		margin-right: auto;
		font-size: 12px;
		margin-left: 8px;
		color: #ffffff;
	}
	.RGB-text.left {
		display: flex;
		justify-content: space-between;
		width: 90%;
	}
	& > img {
		width: 75px;
		height: 80px;
	}
	&.cli-1 {
		background-image: url("~@/assets/myAssets/cli-1.png");
		.RGB-text {
			color: #e7f5ff;
		}
	}
	&.cli-2 {
		background-image: url("~@/assets/myAssets/cli-2.png");
		.RGB-text {
			color: #d9a2ff;
		}
	}
	&.cli-3 {
		background-image: url("~@/assets/myAssets/cli-3.png");
		.RGB-text {
			color: #ffe87b;
		}
	}
	&.cli-4 {
		background-image: url("~@/assets/myAssets/cli-4.png");
		.RGB-text {
			color: #ff7878;
		}
	}
	.skill-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		li {
			background-image: url("~@/assets/myAssets/skill-bg.png");
			background-size: 100%;
			padding: 4px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
