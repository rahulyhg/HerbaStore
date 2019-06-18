<div class="action">
	<h1>Default structure</h1>
		<div>loginForm.username = ""</div>
		<div>loginForm.password = ""</div>
		<div>menuShown = 0</div>
		<div>section = "storage"</div>
		<div>selectedProduct = null</div>
		<div>store.productSearch = ""</div>
		<div>modifyProductDialog = null</div>
		<div>newProduct = null</div>
		<div>receivedProducts = {}</div>
		<div>soldProducts = {}</div>
		<div>loanPaid = 0</div>
</div>

	<div class="action">
		<h1>postLogin</h1>
		<p>Ajax: postLogin</p>

			<p>authToken = res.authToken</p>
			<p>user = res.user</p>
			<p>products = res.products</p>
			<p>transactions = res.transactions</p>
	</div>
	<div class="action">
		<h1>showMenu</h1>
		<p></p>

			<p>menuShown = state.menuShown ? 0 : 1</p>
	</div>
	<div class="action">
		<h1>selectSection</h1>
		<p></p>

			<p>section = value</p>
			<p>menuShown = 0</p>
	</div>
	<div class="action">
		<h1>openModifyProductDialog</h1>
		<p></p>

			<p>modifyProductDialog = value ? Object.assign({}, value) : value</p>
	</div>
	<div class="action">
		<h1>postProductTakeOne</h1>
		<p>Ajax: postProductTakeOne</p>

			<p>products[value].count--</p>
			<p>products[value] = Object.assign({}, state.products[value])</p>
			<p>transactions = Object.assign(state.transactions, res)</p>
			<p>user.account = state.user.account -= Object.values(res)[0].cost</p>
	</div>
	<div class="action">
		<h1>postProductGiveOne</h1>
		<p>Ajax: postProductGiveOne</p>

			<p>products[value].count++</p>
			<p>products[value] = Object.assign({}, state.products[value])</p>
			<p>transactions = Object.assign(state.transactions, res)</p>
			<p>user.account = state.user.account += Object.values(res)[0].cost</p>
	</div>
	<div class="action">
		<h1>putProduct</h1>
		<p>Ajax: putProduct</p>

			<p>products[state.modifyProductDialog.id] = Object.assign({}, state.modifyProductDialog)</p>
			<p>modifyProductDialog = null</p>
	</div>
	<div class="action">
		<h1>addReceivedProduct</h1>
		<p></p>

			<p>receivedProducts[value] = {'product': state.products[value],'count':1}</p>
			<p>store.productSearch = ''</p>
	</div>
	<div class="action">
		<h1>openNewProductDialog</h1>
		<p></p>

			<p>newProduct = value</p>
	</div>
	<div class="action">
		<h1>postProduct</h1>
		<p>Ajax: postProduct</p>

			<p>products[res] = Object.assign({'id':res}, state.newProduct)</p>
			<p>receivedProducts[res] = {'product':state.products[res],'count':0}</p>
			<p>newProduct = null</p>
	</div>
	<div class="action">
		<h1>postProductReceiveBox</h1>
		<p>Ajax: postProductReceiveBox</p>

			<p>receivedProducts = {}</p>
			<p>transactions = Object.assign(state.transactions, res)</p>
			<p>section = 'storage'</p>
			<p>user.account = state.user.account += Object.values(res).reduce((a, b) =&gt; (a + b.cost*b.count), 0)</p>
			<p>dummy; for (const item of Object.values(res)) state.products[item.product_id].count += item.count</p>
	</div>
	<div class="action">
		<h1>addSoldProduct</h1>
		<p></p>

			<p>soldProducts[value] = {'product': state.products[value],'count':1}</p>
			<p>store.productSearch = ''</p>
	</div>
	<div class="action">
		<h1>postProductSellBox</h1>
		<p>Ajax: postProductSellBox</p>

			<p>soldProducts = {}</p>
			<p>transactions = Object.assign(state.transactions, res)</p>
			<p>section = 'storage'</p>
			<p>user.account = state.user.account += Object.values(res).reduce((a, b) =&gt; (a + b.cost*b.count), 0)</p>
	</div>
