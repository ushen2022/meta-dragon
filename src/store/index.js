import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		theme: 'transparent',//transparent dark
		currentRoutePath:'',
		isPc: true,
		ethAddress:'',
		web3Provider:null
	},
	mutations: {
		SET_THEME:(state,theme)=>{
			state.theme = theme
		},
		SET_CURRENT_ROUTE_PATH:(state,path)=>{
			state.currentRoutePath = path
		},
		SET_IS_PC:(state,isPc)=>{
			state.isPc = isPc
		},
		SET_ETH_ADDRESS:(state,ethAddress)=>{
			state.ethAddress = ethAddress
		},
		SET_WEB3_PROVIDER:(state,web3Provider)=>{
			state.web3Provider = web3Provider
		},
	},
	actions: {
		setTheme({commit},params) {
			commit('SET_THEME', params);
		},
		setCurrentRoutePath({commit},params) {
			commit('SET_CURRENT_ROUTE_PATH', params);
		},
		setIsPc({commit},params) {
			commit('SET_IS_PC', params);
		},
		setEthAddress({commit},params) {
			commit('SET_ETH_ADDRESS', params);
		},
		setWeb3Provider({commit},params) {
			commit('SET_WEB3_PROVIDER', params);
		},
	},
	getters:{
		theme:state=>state.theme,
		currentRoutePath:state=>state.currentRoutePath,
		isPc:state=>state.isPc,
		ethAddress:state=>state.ethAddress,
		web3Provider:state=>state.web3Provider,
	},
	modules: {}
})
