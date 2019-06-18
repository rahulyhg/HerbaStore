function ajax_postLogin(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/login`, data: state.loginForm, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postProductTakeOne(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/products/take-one`, data: {'id':value}, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postProductGiveOne(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/products/give-one`, data: {'id':value}, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_putProduct(state, value) {
	return $.ajax({ method: 'put', url: `${apiUrl}/products`, data: state.modifyProductDialog, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postProduct(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/products`, data: state.newProduct, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postProductReceiveBox(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/products/receive-box`, data: {'products':Object.entries(state.receivedProducts).map(([id, item])=>({'id':item.product.id,'count':item.count}))}, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postProductSellBox(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/products/sell-box`, data: {'products':Object.entries(state.soldProducts).map(([id, item])=>({'id':item.product.id,'count':item.count}))}, headers: {
		Authorization: state.authToken || ''
	}})
}

const state = {
	updateHack: false,
	preloader: 0,
	l: null,
	lang: { en: {} }
}

DotObject.str('lang.en.loginForm.username', "Username", state);
DotObject.str('lang.cs.loginForm.username', "Přihlašovací jméno", state);
DotObject.str('lang.en.loginForm.password', "Password", state);
DotObject.str('lang.cs.loginForm.password', "Heslo", state);
DotObject.str('lang.en.loginForm.login', "Log in", state);
DotObject.str('lang.cs.loginForm.login', "Přihlásit se", state);
DotObject.str('lang.en.loginForm.login', "Log in", state);
DotObject.str('lang.cs.loginForm.login', "Přihlásit se", state);
DotObject.str('lang.en.storage', "Storage", state);
DotObject.str('lang.cs.storage', "Sklad", state);
DotObject.str('lang.en.receive', "Receive box", state);
DotObject.str('lang.cs.receive', "Přijmout zásilku", state);
DotObject.str('lang.en.sell', "Sell more", state);
DotObject.str('lang.cs.sell', "Vyřídit objednávku", state);
DotObject.str('lang.en.loan', "Transactions", state);
DotObject.str('lang.cs.loan', "Transakce", state);
DotObject.str('lang.en.storageHeader', "Storage", state);
DotObject.str('lang.cs.storageHeader', "Sklad", state);
DotObject.str('lang.en.store.productSearch', "Search product", state);
DotObject.str('lang.cs.store.productSearch', "Vyhledat produkt", state);
DotObject.str('lang.en.number', "Product number", state);
DotObject.str('lang.cs.number', "Číslo produktu", state);
DotObject.str('lang.en.name', "Product name", state);
DotObject.str('lang.cs.name', "Název produktu", state);
DotObject.str('lang.en.detail', "Detail", state);
DotObject.str('lang.cs.detail', "Detail", state);
DotObject.str('lang.en.productTakeOne', "Take one", state);
DotObject.str('lang.cs.productTakeOne', "Vzít jeden", state);
DotObject.str('lang.en.productGiveOne', "Give one", state);
DotObject.str('lang.cs.productGiveOne', "Dát jeden", state);
DotObject.str('lang.en.newProduct.modify', "Modify product", state);
DotObject.str('lang.cs.newProduct.modify', "Upravit produkt", state);
DotObject.str('lang.en.newProduct.save', "Save product", state);
DotObject.str('lang.cs.newProduct.save', "Uložit produkt", state);
DotObject.str('lang.en.receiveHeader', "Receive box", state);
DotObject.str('lang.cs.receiveHeader', "Přijmout zásilku", state);
DotObject.str('lang.en.productNotFound', "Product not found", state);
DotObject.str('lang.cs.productNotFound', "Nenašli jste produkt?", state);
DotObject.str('lang.en.newProductHeader', "New product", state);
DotObject.str('lang.cs.newProductHeader', "Nový produkt", state);
DotObject.str('lang.en.newProduct.number', "Product number", state);
DotObject.str('lang.cs.newProduct.number', "Číslo produktu", state);
DotObject.str('lang.en.newProduct.name', "Product name", state);
DotObject.str('lang.cs.newProduct.name', "Název produktu", state);
DotObject.str('lang.en.newProduct.price', "Product price", state);
DotObject.str('lang.cs.newProduct.price', "Nákupní cena", state);
DotObject.str('lang.en.newProduct.cancel', "Close", state);
DotObject.str('lang.cs.newProduct.cancel', "Zavřít", state);
DotObject.str('lang.en.newProduct.create', "Create product", state);
DotObject.str('lang.cs.newProduct.create', "Vytvořit produkt", state);
DotObject.str('lang.en.receiveButton', "Receive box", state);
DotObject.str('lang.cs.receiveButton', "Přijmout zásilku", state);
DotObject.str('lang.en.sellHeader', "Sell", state);
DotObject.str('lang.cs.sellHeader', "Vyřídit objednávku", state);
DotObject.str('lang.en.sellButton', "Sell", state);
DotObject.str('lang.cs.sellButton', "Prodej", state);
DotObject.str('lang.en.loanHeader', "Transactions", state);
DotObject.str('lang.cs.loanHeader', "Transakce", state);
DotObject.str('lang.en.paidHeader', "Cost paid", state);
DotObject.str('lang.cs.paidHeader', "Uhrazení částky", state);
DotObject.str('lang.en.loanPaid', "Paid", state);
DotObject.str('lang.cs.loanPaid', "Uhrazená částka", state);
DotObject.str('lang.en.loanPaidButton', "Loan paid", state);
DotObject.str('lang.cs.loanPaidButton', "Uhrazen dluh", state);
DotObject.str('lang.en.transactionsHistory', "Transactions history", state);
DotObject.str('lang.cs.transactionsHistory', "Historie transakcí", state);
DotObject.str('lang.en.product', "Product", state);
DotObject.str('lang.cs.product', "Produkt", state);
DotObject.str('lang.en.count', "Count", state);
DotObject.str('lang.cs.count', "Počet", state);
DotObject.str('lang.en.price', "Price", state);
DotObject.str('lang.cs.price', "Cena (1ks)", state);
DotObject.str('lang.en.total', "Total", state);
DotObject.str('lang.cs.total', "Celkem", state);
DotObject.str('loginForm.username', "", state);
DotObject.str('loginForm.password', "", state);
DotObject.str('menuShown', 0, state);
DotObject.str('section', "storage", state);
DotObject.str('selectedProduct', null, state);
DotObject.str('store.productSearch', "", state);
DotObject.str('modifyProductDialog', null, state);
DotObject.str('newProduct', null, state);
DotObject.str('receivedProducts', {}, state);
DotObject.str('soldProducts', {}, state);
DotObject.str('loanPaid', 0, state);

state.l = state.lang.cs
state.focus = null

const store = new Vuex.Store({
	state,
	mutations: {
		'initFromGet': function(state, payload) {
			var queryDict = {};
			var setFromUrl = function(item) {
				[key, value] = item.split("=")
				DotObject.str(key, value, state);
			}
			document.cookie.split("; ").forEach(setFromUrl)
			location.search.substr(1).split("&").forEach(setFromUrl)
		},
		'function': function(state, payload) {
		},
		'input': function(state, payload) {
			eval(payload.path + " = \'" + payload.value + "\'");
			state.updateHack = !state.updateHack
		},
		'preloaderAdd': function(state) {
			state.preloader ++
		},
		'preloaderSub': function(state) {
			state.preloader --
		},
		'postLogin': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.authToken = res.authToken
			state.user = res.user
			state.products = res.products
			state.transactions = res.transactions
			state.updateHack = !state.updateHack
		},
		'showMenu': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.menuShown = state.menuShown ? 0 : 1
			state.updateHack = !state.updateHack
		},
		'selectSection': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.section = value
			state.menuShown = 0
			state.updateHack = !state.updateHack
		},
		'openModifyProductDialog': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.modifyProductDialog = value ? Object.assign({}, value) : value
			state.updateHack = !state.updateHack
		},
		'postProductTakeOne': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.products[value].count--
			state.products[value] = Object.assign({}, state.products[value])
			state.transactions = Object.assign(state.transactions, res)
			state.user.account = state.user.account -= Object.values(res)[0].cost
			state.updateHack = !state.updateHack
		},
		'postProductGiveOne': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.products[value].count++
			state.products[value] = Object.assign({}, state.products[value])
			state.transactions = Object.assign(state.transactions, res)
			state.user.account = state.user.account += Object.values(res)[0].cost
			state.updateHack = !state.updateHack
		},
		'putProduct': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.products[state.modifyProductDialog.id] = Object.assign({}, state.modifyProductDialog)
			state.modifyProductDialog = null
			state.updateHack = !state.updateHack
		},
		'addReceivedProduct': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.receivedProducts[value] = {'product': state.products[value],'count':1}
			state.store.productSearch = ''
			state.updateHack = !state.updateHack
		},
		'openNewProductDialog': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.newProduct = value
			state.updateHack = !state.updateHack
		},
		'postProduct': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.products[res] = Object.assign({'id':res}, state.newProduct)
			state.receivedProducts[res] = {'product':state.products[res],'count':0}
			state.newProduct = null
			state.updateHack = !state.updateHack
		},
		'postProductReceiveBox': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.receivedProducts = {}
			state.transactions = Object.assign(state.transactions, res)
			state.section = 'storage'
			state.user.account = state.user.account += Object.values(res).reduce((a, b) => (a + b.cost*b.count), 0)
			state.dummy; for (const item of Object.values(res)) state.products[item.product_id].count += item.count
			state.updateHack = !state.updateHack
		},
		'addSoldProduct': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.soldProducts[value] = {'product': state.products[value],'count':1}
			state.store.productSearch = ''
			state.updateHack = !state.updateHack
		},
		'postProductSellBox': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.soldProducts = {}
			state.transactions = Object.assign(state.transactions, res)
			state.section = 'storage'
			state.user.account = state.user.account += Object.values(res).reduce((a, b) => (a + b.cost*b.count), 0)
			state.updateHack = !state.updateHack
		},
	},
	actions: {
		'initFromGet': function({commit, dispatch, state}, value) {
			var queryDict = {};
			var data = document.cookie.split("; ").concat(location.search.substr(1).split("&"))
			data.forEach(function(item) {
				[key, value] = item.split("=")
				queryDict[key] = value
				if (key === 'authToken') {
					dispatch('postLogin')
				}
			})
			commit('initFromGet', queryDict)
		},
		'postLogin': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postLogin(state, value).done(res => {
				commit('postLogin', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postProductTakeOne': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postProductTakeOne(state, value).done(res => {
				commit('postProductTakeOne', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postProductGiveOne': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postProductGiveOne(state, value).done(res => {
				commit('postProductGiveOne', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'putProduct': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_putProduct(state, value).done(res => {
				commit('putProduct', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postProduct': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postProduct(state, value).done(res => {
				commit('postProduct', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postProductReceiveBox': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postProductReceiveBox(state, value).done(res => {
				commit('postProductReceiveBox', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postProductSellBox': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postProductSellBox(state, value).done(res => {
				commit('postProductSellBox', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},

	}
})

Vue.component(`LoginFormUsernameInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="LoginFormUsernameInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.loginForm.username', value: $event.target.value })" :value="state.loginForm.username" data-test="loginUsername"/>`
})

Vue.component(`LoginFormUsernameInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormUsernameInputLabel" v-text="state.l.loginForm.username"/>`
})

Vue.component(`LoginFormUsernameInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormUsernameInput form-group">
		<LoginFormUsernameInputLabel :item="item" />
		<LoginFormUsernameInputControl :item="item" />

	</div>`
})

Vue.component(`LoginFormPasswordInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="LoginFormPasswordInputControl form-control" type="password" @input="$store.commit('input', { path: 'state.loginForm.password', value: $event.target.value })" :value="state.loginForm.password" data-test="loginPassword"/>`
})

Vue.component(`LoginFormPasswordInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormPasswordInputLabel" v-text="state.l.loginForm.password"/>`
})

Vue.component(`LoginFormPasswordInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormPasswordInput form-group">
		<LoginFormPasswordInputLabel :item="item" />
		<LoginFormPasswordInputControl :item="item" />

	</div>`
})

Vue.component(`LoginFormLoginRowSendLoginButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="LoginFormLoginRowSendLoginButton btn btn-default btn btn-success" v-text="state.l.loginForm.login" data-test="loginSend" @click="$store.dispatch('postLogin', null)"/>`
})

Vue.component(`LoginFormLoginRowSend`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormLoginRowSend col-xs-6">
		<LoginFormLoginRowSendLoginButton />

	</div>`
})

Vue.component(`LoginFormLoginRow`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormLoginRow row">
		<LoginFormLoginRowSend />

	</div>`
})

Vue.component(`LoginForm`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginForm">
		<LoginFormUsernameInput />
		<LoginFormPasswordInput />
		<LoginFormLoginRow />

	</div>`
})

Vue.component(`Login`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="Login container" v-if="!(state.user)">
		<LoginForm />

	</div>`
})

Vue.component(`AdminMenuContainerHamburgerButtonSrOnly`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<span class="AdminMenuContainerHamburgerButtonSrOnly sr-only"/>`
})

Vue.component(`AdminMenuContainerHamburgerButtonIconBar1`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<span class="AdminMenuContainerHamburgerButtonIconBar1 icon-bar"/>`
})

Vue.component(`AdminMenuContainerHamburgerButtonIconBar2`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<span class="AdminMenuContainerHamburgerButtonIconBar2 icon-bar"/>`
})

Vue.component(`AdminMenuContainerHamburgerButtonIconBar3`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<span class="AdminMenuContainerHamburgerButtonIconBar3 icon-bar"/>`
})

Vue.component(`AdminMenuContainerHamburgerButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminMenuContainerHamburgerButton navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#main-menu-container" aria-expanded="false" @click="$store.commit('showMenu', { value: null, res: null })">
		<AdminMenuContainerHamburgerButtonSrOnly />
		<AdminMenuContainerHamburgerButtonIconBar1 />
		<AdminMenuContainerHamburgerButtonIconBar2 />
		<AdminMenuContainerHamburgerButtonIconBar3 />

	</button>`
})

Vue.component(`AdminMenuContainerHamburger`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminMenuContainerHamburger navbar-header">
		<AdminMenuContainerHamburgerButton />

	</div>`
})

Vue.component(`AdminMenuContainerNavbarListStorageLink`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<a class="AdminMenuContainerNavbarListStorageLink" href="#" data-test="menuStorage" v-text="state.l.storage" @click.prevent="$store.commit('selectSection', { value: 'storage', res: null })"/>`
})

Vue.component(`AdminMenuContainerNavbarListStorage`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<li class="AdminMenuContainerNavbarListStorage">
		<AdminMenuContainerNavbarListStorageLink />

	</li>`
})

Vue.component(`AdminMenuContainerNavbarListReceiveLink`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<a class="AdminMenuContainerNavbarListReceiveLink" href="#" data-test="menuReceive" v-text="state.l.receive" @click.prevent="$store.commit('selectSection', { value: 'receive', res: null })"/>`
})

Vue.component(`AdminMenuContainerNavbarListReceive`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<li class="AdminMenuContainerNavbarListReceive">
		<AdminMenuContainerNavbarListReceiveLink />

	</li>`
})

Vue.component(`AdminMenuContainerNavbarListSellLink`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<a class="AdminMenuContainerNavbarListSellLink" href="#" data-test="menuSell" v-text="state.l.sell" @click.prevent="$store.commit('selectSection', { value: 'sell', res: null })"/>`
})

Vue.component(`AdminMenuContainerNavbarListSell`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<li class="AdminMenuContainerNavbarListSell">
		<AdminMenuContainerNavbarListSellLink />

	</li>`
})

Vue.component(`AdminMenuContainerNavbarListLoanLink`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<a class="AdminMenuContainerNavbarListLoanLink" href="#" data-test="menuLoan" v-text="state.l.loan" @click.prevent="$store.commit('selectSection', { value: 'loan', res: null })"/>`
})

Vue.component(`AdminMenuContainerNavbarListLoan`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<li class="AdminMenuContainerNavbarListLoan">
		<AdminMenuContainerNavbarListLoanLink />

	</li>`
})

Vue.component(`AdminMenuContainerNavbarList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<ul class="AdminMenuContainerNavbarList nav navbar-nav">
		<AdminMenuContainerNavbarListStorage />
		<AdminMenuContainerNavbarListReceive />
		<AdminMenuContainerNavbarListSell />
		<AdminMenuContainerNavbarListLoan />

	</ul>`
})

Vue.component(`AdminMenuContainerNavbar`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminMenuContainerNavbar" :class="'collapse navbar-collapse' + (state.menuShown === 1 ? ' in' : '')" id="main-menu-container">
		<AdminMenuContainerNavbarList />

	</div>`
})

Vue.component(`AdminMenuContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminMenuContainer container-fluid">
		<AdminMenuContainerHamburger />
		<AdminMenuContainerNavbar />

	</div>`
})

Vue.component(`AdminMenu`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<nav class="AdminMenu navbar navbar-default" role="navigation">
		<AdminMenuContainer />

	</nav>`
})

Vue.component(`AdminProfileName`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminProfileName" v-text="state.user.email"/>`
})

Vue.component(`AdminProfileLoan`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminProfileLoan" v-text="state.user.account + ',-'" @click="$store.commit('selectSection', { value: 'loan', res: null })"/>`
})

Vue.component(`AdminProfile`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminProfile container">
		<AdminProfileName />
		<AdminProfileLoan />

	</div>`
})

Vue.component(`AdminContentStorageHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h2 class="AdminContentStorageHeader" v-text="state.l.storageHeader"/>`
})

Vue.component(`AdminContentStorageListSearchContainerSearchInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentStorageListSearchContainerSearchInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.store.productSearch', value: $event.target.value })" :value="state.store.productSearch" data-test="productSearch"/>`
})

Vue.component(`AdminContentStorageListSearchContainerSearchInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageListSearchContainerSearchInputLabel" v-text="state.l.store.productSearch"/>`
})

Vue.component(`AdminContentStorageListSearchContainerSearchInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageListSearchContainerSearchInput form-group">
		<AdminContentStorageListSearchContainerSearchInputLabel :item="item" />
		<AdminContentStorageListSearchContainerSearchInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentStorageListSearchContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageListSearchContainer">
		<AdminContentStorageListSearchContainerSearchInput />

	</div>`
})

Vue.component(`AdminContentStorageListProductTableHeaderDetail`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentStorageListProductTableHeaderDetail" v-text="''"/>`
})

Vue.component(`AdminContentStorageListProductTableHeaderNumber`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentStorageListProductTableHeaderNumber" v-text="state.l.number"/>`
})

Vue.component(`AdminContentStorageListProductTableHeaderName`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentStorageListProductTableHeaderName" v-text="state.l.name"/>`
})

Vue.component(`AdminContentStorageListProductTableHeaderPrice`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentStorageListProductTableHeaderPrice" v-text="state.l.price"/>`
})

Vue.component(`AdminContentStorageListProductTableHeaderCount`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentStorageListProductTableHeaderCount" v-text="state.l.count"/>`
})

Vue.component(`AdminContentStorageListProductTableHeaderButtons`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentStorageListProductTableHeaderButtons" v-text="''"/>`
})

Vue.component(`AdminContentStorageListProductTableHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<tr class="AdminContentStorageListProductTableHeader">
		<AdminContentStorageListProductTableHeaderDetail />
		<AdminContentStorageListProductTableHeaderNumber />
		<AdminContentStorageListProductTableHeaderName />
		<AdminContentStorageListProductTableHeaderPrice />
		<AdminContentStorageListProductTableHeaderCount />
		<AdminContentStorageListProductTableHeaderButtons />

	</tr>`
})

Vue.component(`AdminContentStorageListProductTableListDetailDetailButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentStorageListProductTableListDetailDetailButton btn btn-default" data-test="productItem" v-text="state.l.detail" @click="$store.commit('openModifyProductDialog', { value: state.products[item.id], res: null })"/>`
})

Vue.component(`AdminContentStorageListProductTableListDetail`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentStorageListProductTableListDetail">
		<AdminContentStorageListProductTableListDetailDetailButton :item="item" />

	</button>`
})

Vue.component(`AdminContentStorageListProductTableListNumber`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentStorageListProductTableListNumber" v-text="item.number"/>`
})

Vue.component(`AdminContentStorageListProductTableListName`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentStorageListProductTableListName" v-text="item.name"/>`
})

Vue.component(`AdminContentStorageListProductTableListPrice`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentStorageListProductTableListPrice" v-text="item.price"/>`
})

Vue.component(`AdminContentStorageListProductTableListCount`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentStorageListProductTableListCount" v-text="item.count"/>`
})

Vue.component(`AdminContentStorageListProductTableListButtonsTakeOneButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentStorageListProductTableListButtonsTakeOneButton btn btn-default btn btn-success" data-test="productTakeOne" v-text="state.l.productTakeOne" @click="$store.dispatch('postProductTakeOne', item.id)"/>`
})

Vue.component(`AdminContentStorageListProductTableListButtonsGiveOneButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentStorageListProductTableListButtonsGiveOneButton btn btn-default btn btn-success" data-test="productGiveOne" v-text="state.l.productGiveOne" @click="$store.dispatch('postProductGiveOne', item.id)"/>`
})

Vue.component(`AdminContentStorageListProductTableListButtons`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentStorageListProductTableListButtons text-right">
		<AdminContentStorageListProductTableListButtonsTakeOneButton :item="item" />
		<AdminContentStorageListProductTableListButtonsGiveOneButton :item="item" />

	</td>`
})

Vue.component(`AdminContentStorageListProductTableList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<tbody class="AdminContentStorageListProductTableList"><tr v-for="(item, id) of state.products" :key="item.id" v-if="(item.name.indexOf(state.store.productSearch) > -1)">
		<AdminContentStorageListProductTableListDetail :index="id" :item="item" />
		<AdminContentStorageListProductTableListNumber :index="id" :item="item" />
		<AdminContentStorageListProductTableListName :index="id" :item="item" />
		<AdminContentStorageListProductTableListPrice :index="id" :item="item" />
		<AdminContentStorageListProductTableListCount :index="id" :item="item" />
		<AdminContentStorageListProductTableListButtons :index="id" :item="item" />
</tr>
	</tbody>`
})

Vue.component(`AdminContentStorageListProductTable`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<table class="AdminContentStorageListProductTable table">
		<AdminContentStorageListProductTableHeader />
		<AdminContentStorageListProductTableList />

	</table>`
})

Vue.component(`AdminContentStorageList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageList" v-if="!(state.selectedProduct)">
		<AdminContentStorageListSearchContainer />
		<AdminContentStorageListProductTable />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentHeaderModifyProduct`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentHeaderModifyProduct" v-text="state.l.newProduct.modify"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentHeader modal-header">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentHeaderModifyProduct />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.modifyProductDialog.number', value: $event.target.value })" :value="state.modifyProductDialog.number" data-test="productNumber"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputLabel" v-text="state.l.newProduct.number"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInput form-group">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputLabel :item="item" />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.modifyProductDialog.name', value: $event.target.value })" :value="state.modifyProductDialog.name" data-test="productName"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputLabel" v-text="state.l.newProduct.name"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInput form-group">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputLabel :item="item" />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputControl form-control" type="number" @input="$store.commit('input', { path: 'state.modifyProductDialog.price', value: $event.target.value })" :value="state.modifyProductDialog.price" data-test="productPrice"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputLabel" v-text="state.l.newProduct.price"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInput form-group">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputLabel :item="item" />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProduct`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProduct">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInput />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInput />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInput />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentBody`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentBody modal-body">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProduct />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterCancelButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterCancelButton btn btn-default" v-text="state.l.newProduct.cancel" @click="$store.commit('openModifyProductDialog', { value: null, res: null })"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterSaveButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterSaveButton btn btn-default btn btn-success" data-test="productSave" v-text="state.l.newProduct.save" @click="$store.dispatch('putProduct', null)"/>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContentFooter`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContentFooter modal-footer">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterCancelButton />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterSaveButton />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialogContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialogContent modal-content">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentHeader />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentBody />
		<AdminContentStorageModifyDialogContainerModifyModalDialogContentFooter />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModalDialog`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModalDialog modal-dialog" role="document" tabindex="-1">
		<AdminContentStorageModifyDialogContainerModifyModalDialogContent />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainerModifyModal`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainerModifyModal modal show" role="dialog">
		<AdminContentStorageModifyDialogContainerModifyModalDialog />

	</div>`
})

Vue.component(`AdminContentStorageModifyDialogContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorageModifyDialogContainer" v-if="(state.modifyProductDialog)">
		<AdminContentStorageModifyDialogContainerModifyModal />

	</div>`
})

Vue.component(`AdminContentStorage`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentStorage" v-if="(state.section === 'storage')">
		<AdminContentStorageHeader />
		<AdminContentStorageList />
		<AdminContentStorageModifyDialogContainer />

	</div>`
})

Vue.component(`AdminContentReceiveHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h1 class="AdminContentReceiveHeader" v-text="state.l.receiveHeader"/>`
})

Vue.component(`AdminContentReceiveListSearchContainerSearchInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentReceiveListSearchContainerSearchInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.store.productSearch', value: $event.target.value })" :value="state.store.productSearch" data-test="receiveSearch"/>`
})

Vue.component(`AdminContentReceiveListSearchContainerSearchInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveListSearchContainerSearchInputLabel" v-text="state.l.store.productSearch"/>`
})

Vue.component(`AdminContentReceiveListSearchContainerSearchInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveListSearchContainerSearchInput form-group">
		<AdminContentReceiveListSearchContainerSearchInputLabel :item="item" />
		<AdminContentReceiveListSearchContainerSearchInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentReceiveListSearchContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveListSearchContainer">
		<AdminContentReceiveListSearchContainerSearchInput />

	</div>`
})

Vue.component(`AdminContentReceiveListProductListItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveListProductListItem list-group-item" v-text="item.name" data-test="productItem" @click="$store.commit('addReceivedProduct', { value: item.id, res: null })"/>`
})

Vue.component(`AdminContentReceiveListProductList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveListProductList list-group"><div v-for="(item, id) of state.products" :key="item.id" v-if="(state.store.productSearch.length > 0) && (item.name.indexOf(state.store.productSearch) > -1)">
		<AdminContentReceiveListProductListItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminContentReceiveList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveList">
		<AdminContentReceiveListSearchContainer />
		<AdminContentReceiveListProductList />

	</div>`
})

Vue.component(`AdminContentReceiveProductNotFoundContainerProductNotFoundButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentReceiveProductNotFoundContainerProductNotFoundButton btn btn-default" data-test="productNotFound" v-text="state.l.productNotFound" @click="$store.commit('openNewProductDialog', { value: {'number':'','name':'','price':0,'count':0}, res: null })"/>`
})

Vue.component(`AdminContentReceiveProductNotFoundContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveProductNotFoundContainer" v-if="(state.store.productSearch.length > 0)">
		<AdminContentReceiveProductNotFoundContainerProductNotFoundButton />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentHeader modal-header" v-text="state.l.newProductHeader"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.newProduct.number', value: $event.target.value })" :value="state.newProduct.number" data-test="productNumber"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputLabel" v-text="state.l.newProduct.number"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInput form-group">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputLabel :item="item" />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.newProduct.name', value: $event.target.value })" :value="state.newProduct.name" data-test="productName"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputLabel" v-text="state.l.newProduct.name"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInput form-group">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputLabel :item="item" />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputControl form-control" type="number" @input="$store.commit('input', { path: 'state.newProduct.price', value: $event.target.value })" :value="state.newProduct.price" data-test="productPrice"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputLabel" v-text="state.l.newProduct.price"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInput form-group">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputLabel :item="item" />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProduct`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProduct">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInput />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInput />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInput />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentBody`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentBody modal-body">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProduct />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCancelButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCancelButton btn btn-default" v-text="state.l.newProduct.cancel" @click="$store.commit('openNewProductDialog', { value: null, res: null })"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCreateButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCreateButton btn btn-default btn btn-primary" data-test="productCreate" v-text="state.l.newProduct.create" @click="$store.dispatch('postProduct', null)"/>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContentFooter`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContentFooter modal-footer">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCancelButton />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCreateButton />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialogContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialogContent modal-content">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentHeader />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentBody />
		<AdminContentReceiveNewProductContainerNewProductModalDialogContentFooter />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModalDialog`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModalDialog modal-dialog" role="document" tabindex="-1">
		<AdminContentReceiveNewProductContainerNewProductModalDialogContent />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainerNewProductModal`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainerNewProductModal modal show" role="dialog">
		<AdminContentReceiveNewProductContainerNewProductModalDialog />

	</div>`
})

Vue.component(`AdminContentReceiveNewProductContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveNewProductContainer" v-if="(state.newProduct)">
		<AdminContentReceiveNewProductContainerNewProductModal />

	</div>`
})

Vue.component(`AdminContentReceiveBreakline`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<hr class="AdminContentReceiveBreakline"/>`
})

Vue.component(`AdminContentReceiveReceivedProductsItemTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveReceivedProductsItemTitle" v-text="item.product.name"/>`
})

Vue.component(`AdminContentReceiveReceivedProductsItemCountInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentReceiveReceivedProductsItemCountInputControl form-control" type="number" @input="$store.commit('input', { path: 'state.receivedProducts[' + item.product.id + '].count', value: $event.target.value })" :value="state.receivedProducts[item.product.id].count" data-test="receiveListCount"/>`
})

Vue.component(`AdminContentReceiveReceivedProductsItemCountInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveReceivedProductsItemCountInputLabel" v-text="''"/>`
})

Vue.component(`AdminContentReceiveReceivedProductsItemCountInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveReceivedProductsItemCountInput form-group">
		<AdminContentReceiveReceivedProductsItemCountInputLabel :item="item" />
		<AdminContentReceiveReceivedProductsItemCountInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentReceiveReceivedProductsItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveReceivedProductsItem">
		<AdminContentReceiveReceivedProductsItemTitle :item="item" />
		<AdminContentReceiveReceivedProductsItemCountInput :item="item" />

	</div>`
})

Vue.component(`AdminContentReceiveReceivedProducts`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceiveReceivedProducts"><div v-for="(item, id) of state.receivedProducts" :key="item.id" >
		<AdminContentReceiveReceivedProductsItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminContentReceiveReceiveButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentReceiveReceiveButton btn btn-default btn btn-success" v-text="state.l.receiveButton" data-test="receiveButton" @click="$store.dispatch('postProductReceiveBox', null)"/>`
})

Vue.component(`AdminContentReceive`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentReceive" v-if="(state.section === 'receive')">
		<AdminContentReceiveHeader />
		<AdminContentReceiveList />
		<AdminContentReceiveProductNotFoundContainer />
		<AdminContentReceiveNewProductContainer />
		<AdminContentReceiveBreakline />
		<AdminContentReceiveReceivedProducts />
		<AdminContentReceiveReceiveButton />

	</div>`
})

Vue.component(`AdminContentSellHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h1 class="AdminContentSellHeader" v-text="state.l.sellHeader"/>`
})

Vue.component(`AdminContentSellListSearchContainerSearchInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentSellListSearchContainerSearchInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.store.productSearch', value: $event.target.value })" :value="state.store.productSearch" data-test="sellSearch"/>`
})

Vue.component(`AdminContentSellListSearchContainerSearchInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellListSearchContainerSearchInputLabel" v-text="state.l.store.productSearch"/>`
})

Vue.component(`AdminContentSellListSearchContainerSearchInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellListSearchContainerSearchInput form-group">
		<AdminContentSellListSearchContainerSearchInputLabel :item="item" />
		<AdminContentSellListSearchContainerSearchInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentSellListSearchContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellListSearchContainer">
		<AdminContentSellListSearchContainerSearchInput />

	</div>`
})

Vue.component(`AdminContentSellListProductListItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellListProductListItem list-group-item" v-text="item.name" data-test="productItem" @click="$store.commit('addSoldProduct', { value: item.id, res: null })"/>`
})

Vue.component(`AdminContentSellListProductList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellListProductList list-group"><div v-for="(item, id) of state.products" :key="item.id" v-if="(state.store.productSearch.length > 0) && (item.name.indexOf(state.store.productSearch) > -1)">
		<AdminContentSellListProductListItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminContentSellList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellList">
		<AdminContentSellListSearchContainer />
		<AdminContentSellListProductList />

	</div>`
})

Vue.component(`AdminContentSellSoldProductsItemTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellSoldProductsItemTitle" v-text="item.product.name"/>`
})

Vue.component(`AdminContentSellSoldProductsItemCountInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentSellSoldProductsItemCountInputControl form-control" type="number" @input="$store.commit('input', { path: 'state.soldProducts[' + item.product.id + '].count', value: $event.target.value })" :value="state.soldProducts[item.product.id].count" data-test="sellListCount"/>`
})

Vue.component(`AdminContentSellSoldProductsItemCountInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellSoldProductsItemCountInputLabel" v-text="''"/>`
})

Vue.component(`AdminContentSellSoldProductsItemCountInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellSoldProductsItemCountInput form-group">
		<AdminContentSellSoldProductsItemCountInputLabel :item="item" />
		<AdminContentSellSoldProductsItemCountInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentSellSoldProductsItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellSoldProductsItem">
		<AdminContentSellSoldProductsItemTitle :item="item" />
		<AdminContentSellSoldProductsItemCountInput :item="item" />

	</div>`
})

Vue.component(`AdminContentSellSoldProducts`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSellSoldProducts"><div v-for="(item, id) of state.soldProducts" :key="item.id" >
		<AdminContentSellSoldProductsItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminContentSellSellButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentSellSellButton btn btn-default btn btn-success" v-text="state.l.sellButton" data-test="sellButton" @click="$store.dispatch('postProductSellBox', null)"/>`
})

Vue.component(`AdminContentSell`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentSell" v-if="(state.section === 'sell')">
		<AdminContentSellHeader />
		<AdminContentSellList />
		<AdminContentSellSoldProducts />
		<AdminContentSellSellButton />

	</div>`
})

Vue.component(`AdminContentLoanHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h1 class="AdminContentLoanHeader" v-text="state.l.loanHeader"/>`
})

Vue.component(`AdminContentLoanPaidHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h2 class="AdminContentLoanPaidHeader" v-text="state.l.paidHeader"/>`
})

Vue.component(`AdminContentLoanPaidInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminContentLoanPaidInputControl form-control" type="number" @input="$store.commit('input', { path: 'state.loanPaid', value: $event.target.value })" :value="state.loanPaid" data-test="loanPaid"/>`
})

Vue.component(`AdminContentLoanPaidInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentLoanPaidInputLabel" v-text="state.l.loanPaid"/>`
})

Vue.component(`AdminContentLoanPaidInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentLoanPaidInput form-group">
		<AdminContentLoanPaidInputLabel :item="item" />
		<AdminContentLoanPaidInputControl :item="item" />

	</div>`
})

Vue.component(`AdminContentLoanLoanButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminContentLoanLoanButton btn btn-default btn btn-success" v-text="state.l.loanPaidButton" data-test="loanButton"/>`
})

Vue.component(`AdminContentLoanTransactionsHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h2 class="AdminContentLoanTransactionsHeader" v-text="state.l.transactionsHistory"/>`
})

Vue.component(`AdminContentLoanTransactionsTableHeaderProduct`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentLoanTransactionsTableHeaderProduct" v-text="state.l.product"/>`
})

Vue.component(`AdminContentLoanTransactionsTableHeaderCount`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentLoanTransactionsTableHeaderCount" v-text="state.l.count"/>`
})

Vue.component(`AdminContentLoanTransactionsTableHeaderPrice`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentLoanTransactionsTableHeaderPrice" v-text="state.l.price"/>`
})

Vue.component(`AdminContentLoanTransactionsTableHeaderTotal`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<th class="AdminContentLoanTransactionsTableHeaderTotal" v-text="state.l.total"/>`
})

Vue.component(`AdminContentLoanTransactionsTableHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<tr class="AdminContentLoanTransactionsTableHeader">
		<AdminContentLoanTransactionsTableHeaderProduct />
		<AdminContentLoanTransactionsTableHeaderCount />
		<AdminContentLoanTransactionsTableHeaderPrice />
		<AdminContentLoanTransactionsTableHeaderTotal />

	</tr>`
})

Vue.component(`AdminContentLoanTransactionsTableRowProduct`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentLoanTransactionsTableRowProduct" v-text="state.products[item.product_id].name"/>`
})

Vue.component(`AdminContentLoanTransactionsTableRowCount`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentLoanTransactionsTableRowCount" v-text="item.count"/>`
})

Vue.component(`AdminContentLoanTransactionsTableRowPrice`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentLoanTransactionsTableRowPrice" v-text="item.cost"/>`
})

Vue.component(`AdminContentLoanTransactionsTableRowTotal`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<td class="AdminContentLoanTransactionsTableRowTotal" v-text="item.cost * item.count"/>`
})

Vue.component(`AdminContentLoanTransactionsTableRow`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<tbody class="AdminContentLoanTransactionsTableRow"><tr v-for="(item, id) of state.transactions" :key="item.id" >
		<AdminContentLoanTransactionsTableRowProduct :index="id" :item="item" />
		<AdminContentLoanTransactionsTableRowCount :index="id" :item="item" />
		<AdminContentLoanTransactionsTableRowPrice :index="id" :item="item" />
		<AdminContentLoanTransactionsTableRowTotal :index="id" :item="item" />
</tr>
	</tbody>`
})

Vue.component(`AdminContentLoanTransactionsTable`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<table class="AdminContentLoanTransactionsTable table">
		<AdminContentLoanTransactionsTableHeader />
		<AdminContentLoanTransactionsTableRow />

	</table>`
})

Vue.component(`AdminContentLoan`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContentLoan" v-if="(state.section === 'loan')">
		<AdminContentLoanHeader />
		<AdminContentLoanPaidHeader />
		<AdminContentLoanPaidInput />
		<AdminContentLoanLoanButton />
		<AdminContentLoanTransactionsHeader />
		<AdminContentLoanTransactionsTable />

	</div>`
})

Vue.component(`AdminContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminContent container">
		<AdminContentStorage />
		<AdminContentReceive />
		<AdminContentSell />
		<AdminContentLoan />

	</div>`
})

Vue.component(`Admin`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="Admin" v-if="(state.user)">
		<AdminMenu />
		<AdminProfile />
		<AdminContent />

	</div>`
})

Vue.component(`app`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="app">
		<Login />
		<Admin />

	</div>`
})


const VueApp = new Vue({ el: "#app", store,
	mounted: function() {
		this.$store.dispatch('initFromGet')
	},

});