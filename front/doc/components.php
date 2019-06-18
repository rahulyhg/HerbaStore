<div class="component">
	<h1>LoginFormUsernameInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".loginForm.username"</td></tr>
		<tr><td>test</td><td>"loginUsername"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormUsernameInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.loginForm.username"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormUsernameInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>LoginFormUsernameInputLabel</li>
		<li>LoginFormUsernameInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormPasswordInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"password"</td></tr>
		<tr><td>ref</td><td>".loginForm.password"</td></tr>
		<tr><td>test</td><td>"loginPassword"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormPasswordInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.loginForm.password"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormPasswordInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>LoginFormPasswordInputLabel</li>
		<li>LoginFormPasswordInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowSendLoginButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>content</td><td>[".l.loginForm.login"]</td></tr>
		<tr><td>test</td><td>"loginSend"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowSend (div/div)</h1>

	<table>
		<tr><td>class</td><td>"col-xs-6"</td></tr>
	</table>

	<ul>
		<li>LoginFormLoginRowSendLoginButton</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRow (div/div)</h1>

	<table>
		<tr><td>class</td><td>"row"</td></tr>
	</table>

	<ul>
		<li>LoginFormLoginRowSend</li>
	</ul>

</div>
<div class="component">
	<h1>LoginForm (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>LoginFormUsernameInput</li>
		<li>LoginFormPasswordInput</li>
		<li>LoginFormLoginRow</li>
	</ul>

</div>
<div class="component">
	<h1>Login (div/div)</h1>

	<table>
		<tr><td>ifnot</td><td>[".user"]</td></tr>
		<tr><td>class</td><td>"container"</td></tr>
	</table>

	<ul>
		<li>LoginForm</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerHamburgerButtonSrOnly (span/div)</h1>

	<table>
		<tr><td>class</td><td>"sr-only"</td></tr>
		<tr><td>tag</td><td>"span"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerHamburgerButtonIconBar1 (span/div)</h1>

	<table>
		<tr><td>class</td><td>"icon-bar"</td></tr>
		<tr><td>tag</td><td>"span"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerHamburgerButtonIconBar2 (span/div)</h1>

	<table>
		<tr><td>class</td><td>"icon-bar"</td></tr>
		<tr><td>tag</td><td>"span"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerHamburgerButtonIconBar3 (span/div)</h1>

	<table>
		<tr><td>class</td><td>"icon-bar"</td></tr>
		<tr><td>tag</td><td>"span"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerHamburgerButton (button/div)</h1>

	<table>
		<tr><td>tag</td><td>"button"</td></tr>
		<tr><td>type</td><td>"button"</td></tr>
		<tr><td>class</td><td>"navbar-toggle collapsed"</td></tr>
		<tr><td>data-toggle</td><td>"collapse"</td></tr>
		<tr><td>data-target</td><td>"#main-menu-container"</td></tr>
		<tr><td>aria-expanded</td><td>"false"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerHamburgerButtonSrOnly</li>
		<li>AdminMenuContainerHamburgerButtonIconBar1</li>
		<li>AdminMenuContainerHamburgerButtonIconBar2</li>
		<li>AdminMenuContainerHamburgerButtonIconBar3</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerHamburger (div/div)</h1>

	<table>
		<tr><td>class</td><td>"navbar-header"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerHamburgerButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListStorageLink (a/div)</h1>

	<table>
		<tr><td>link</td><td>null</td></tr>
		<tr><td>test</td><td>"menuStorage"</td></tr>
		<tr><td>content</td><td>[".l.storage"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListStorage (li/div)</h1>

	<table>
		<tr><td>tag</td><td>"li"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerNavbarListStorageLink</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListReceiveLink (a/div)</h1>

	<table>
		<tr><td>link</td><td>null</td></tr>
		<tr><td>test</td><td>"menuReceive"</td></tr>
		<tr><td>content</td><td>[".l.receive"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListReceive (li/div)</h1>

	<table>
		<tr><td>tag</td><td>"li"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerNavbarListReceiveLink</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListSellLink (a/div)</h1>

	<table>
		<tr><td>link</td><td>null</td></tr>
		<tr><td>test</td><td>"menuSell"</td></tr>
		<tr><td>content</td><td>[".l.sell"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListSell (li/div)</h1>

	<table>
		<tr><td>tag</td><td>"li"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerNavbarListSellLink</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListLoanLink (a/div)</h1>

	<table>
		<tr><td>link</td><td>null</td></tr>
		<tr><td>test</td><td>"menuLoan"</td></tr>
		<tr><td>content</td><td>[".l.loan"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarListLoan (li/div)</h1>

	<table>
		<tr><td>tag</td><td>"li"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerNavbarListLoanLink</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbarList (ul/div)</h1>

	<table>
		<tr><td>tag</td><td>"ul"</td></tr>
		<tr><td>class</td><td>"nav navbar-nav"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerNavbarListStorage</li>
		<li>AdminMenuContainerNavbarListReceive</li>
		<li>AdminMenuContainerNavbarListSell</li>
		<li>AdminMenuContainerNavbarListLoan</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainerNavbar (div/div)</h1>

	<table>
		<tr><td>:class</td><td>"\"collapse navbar-collapse\" + (.menuShown === 1 ? \" in\" : \"\")"</td></tr>
		<tr><td>id</td><td>"main-menu-container"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerNavbarList</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenuContainer (div/div)</h1>

	<table>
		<tr><td>class</td><td>"container-fluid"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainerHamburger</li>
		<li>AdminMenuContainerNavbar</li>
	</ul>

</div>
<div class="component">
	<h1>AdminMenu (nav/div)</h1>

	<table>
		<tr><td>tag</td><td>"nav"</td></tr>
		<tr><td>class</td><td>"navbar navbar-default"</td></tr>
		<tr><td>role</td><td>"navigation"</td></tr>
	</table>

	<ul>
		<li>AdminMenuContainer</li>
	</ul>

</div>
<div class="component">
	<h1>AdminProfileName (div/div)</h1>

	<table>
		<tr><td>content</td><td>[".user.email"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminProfileLoan (div/div)</h1>

	<table>
		<tr><td>content</td><td>[".user.account","\",-\""]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminProfile (div/div)</h1>

	<table>
		<tr><td>class</td><td>"container"</td></tr>
	</table>

	<ul>
		<li>AdminProfileName</li>
		<li>AdminProfileLoan</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageHeader (h2/div)</h1>

	<table>
		<tr><td>header</td><td>"2"</td></tr>
		<tr><td>content</td><td>[".l.storageHeader"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListSearchContainerSearchInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".store.productSearch"</td></tr>
		<tr><td>test</td><td>"productSearch"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListSearchContainerSearchInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.store.productSearch"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListSearchContainerSearchInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageListSearchContainerSearchInputLabel</li>
		<li>AdminContentStorageListSearchContainerSearchInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListSearchContainer (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminContentStorageListSearchContainerSearchInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableHeaderDetail (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>["\"\""]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableHeaderNumber (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.number"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableHeaderName (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.name"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableHeaderPrice (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.price"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableHeaderCount (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.count"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableHeaderButtons (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>["\"\""]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableHeader (tr/div)</h1>

	<table>
		<tr><td>tag</td><td>"tr"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageListProductTableHeaderDetail</li>
		<li>AdminContentStorageListProductTableHeaderNumber</li>
		<li>AdminContentStorageListProductTableHeaderName</li>
		<li>AdminContentStorageListProductTableHeaderPrice</li>
		<li>AdminContentStorageListProductTableHeaderCount</li>
		<li>AdminContentStorageListProductTableHeaderButtons</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListDetailDetailButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>test</td><td>"productItem"</td></tr>
		<tr><td>content</td><td>[".l.detail"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListDetail (button/div)</h1>

	<table>
		<tr><td>tag</td><td>"button"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageListProductTableListDetailDetailButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListNumber (td/div)</h1>

	<table>
		<tr><td>content</td><td>["item.number"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListName (td/div)</h1>

	<table>
		<tr><td>content</td><td>["item.name"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListPrice (td/div)</h1>

	<table>
		<tr><td>content</td><td>["item.price"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListCount (td/div)</h1>

	<table>
		<tr><td>content</td><td>["item.count"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListButtonsTakeOneButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>test</td><td>"productTakeOne"</td></tr>
		<tr><td>content</td><td>[".l.productTakeOne"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListButtonsGiveOneButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>test</td><td>"productGiveOne"</td></tr>
		<tr><td>content</td><td>[".l.productGiveOne"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableListButtons (td/div)</h1>

	<table>
		<tr><td>nest</td><td>"item"</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
		<tr><td>class</td><td>"text-right"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageListProductTableListButtonsTakeOneButton</li>
		<li>AdminContentStorageListProductTableListButtonsGiveOneButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTableList (tbody/tr)</h1>

	<table>
		<tr><td>list</td><td>".products"</td></tr>
		<tr><td>table</td><td>null</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageListProductTableListDetail</li>
		<li>AdminContentStorageListProductTableListNumber</li>
		<li>AdminContentStorageListProductTableListName</li>
		<li>AdminContentStorageListProductTableListPrice</li>
		<li>AdminContentStorageListProductTableListCount</li>
		<li>AdminContentStorageListProductTableListButtons</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageListProductTable (table/div)</h1>

	<table>
		<tr><td>tag</td><td>"table"</td></tr>
		<tr><td>class</td><td>"table"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageListProductTableHeader</li>
		<li>AdminContentStorageListProductTableList</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageList (div/div)</h1>

	<table>
		<tr><td>ifnot</td><td>[".selectedProduct"]</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageListSearchContainer</li>
		<li>AdminContentStorageListProductTable</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentHeaderModifyProduct (div/div)</h1>

	<table>
		<tr><td>content</td><td>[".l.newProduct.modify"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentHeader (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-header"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentHeaderModifyProduct</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".modifyProductDialog.number"</td></tr>
		<tr><td>test</td><td>"productNumber"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.newProduct.number"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputLabel</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".modifyProductDialog.name"</td></tr>
		<tr><td>test</td><td>"productName"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.newProduct.name"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputLabel</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"number"</td></tr>
		<tr><td>ref</td><td>".modifyProductDialog.price"</td></tr>
		<tr><td>test</td><td>"productPrice"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.newProduct.price"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputLabel</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProduct (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNumberInput</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductNameInput</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProductPriceInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentBody (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-body"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBodyProduct</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterCancelButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.newProduct.cancel"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterSaveButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>test</td><td>"productSave"</td></tr>
		<tr><td>content</td><td>[".l.newProduct.save"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContentFooter (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-footer"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterCancelButton</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentFooterSaveButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialogContent (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-content"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentHeader</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentBody</li>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContentFooter</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModalDialog (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-dialog"</td></tr>
		<tr><td>role</td><td>"document"</td></tr>
		<tr><td>tabindex</td><td>"-1"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialogContent</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainerModifyModal (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal show"</td></tr>
		<tr><td>role</td><td>"dialog"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModalDialog</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorageModifyDialogContainer (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".modifyProductDialog"]</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageModifyDialogContainerModifyModal</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentStorage (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".section === \"storage\""]</td></tr>
	</table>

	<ul>
		<li>AdminContentStorageHeader</li>
		<li>AdminContentStorageList</li>
		<li>AdminContentStorageModifyDialogContainer</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveHeader (h1/div)</h1>

	<table>
		<tr><td>header</td><td>"1"</td></tr>
		<tr><td>content</td><td>[".l.receiveHeader"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveListSearchContainerSearchInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".store.productSearch"</td></tr>
		<tr><td>test</td><td>"receiveSearch"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveListSearchContainerSearchInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.store.productSearch"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveListSearchContainerSearchInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveListSearchContainerSearchInputLabel</li>
		<li>AdminContentReceiveListSearchContainerSearchInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveListSearchContainer (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminContentReceiveListSearchContainerSearchInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveListProductListItem (div/div)</h1>

	<table>
		<tr><td>class</td><td>"list-group-item"</td></tr>
		<tr><td>content</td><td>["item.name"]</td></tr>
		<tr><td>test</td><td>"productItem"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveListProductList (div/div)</h1>

	<table>
		<tr><td>list</td><td>".products"</td></tr>
		<tr><td>class</td><td>"list-group"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveListProductListItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveList (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminContentReceiveListSearchContainer</li>
		<li>AdminContentReceiveListProductList</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveProductNotFoundContainerProductNotFoundButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>test</td><td>"productNotFound"</td></tr>
		<tr><td>content</td><td>[".l.productNotFound"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveProductNotFoundContainer (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".store.productSearch.length &gt; 0"]</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveProductNotFoundContainerProductNotFoundButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentHeader (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-header"</td></tr>
		<tr><td>content</td><td>[".l.newProductHeader"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".newProduct.number"</td></tr>
		<tr><td>test</td><td>"productNumber"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.newProduct.number"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputLabel</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".newProduct.name"</td></tr>
		<tr><td>test</td><td>"productName"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.newProduct.name"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputLabel</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"number"</td></tr>
		<tr><td>ref</td><td>".newProduct.price"</td></tr>
		<tr><td>test</td><td>"productPrice"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.newProduct.price"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputLabel</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProduct (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNumberInput</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductNameInput</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProductPriceInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentBody (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-body"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBodyProduct</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCancelButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.newProduct.cancel"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCreateButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"primary"</td></tr>
		<tr><td>test</td><td>"productCreate"</td></tr>
		<tr><td>content</td><td>[".l.newProduct.create"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContentFooter (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-footer"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCancelButton</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentFooterCreateButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialogContent (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-content"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentHeader</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentBody</li>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContentFooter</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModalDialog (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-dialog"</td></tr>
		<tr><td>role</td><td>"document"</td></tr>
		<tr><td>tabindex</td><td>"-1"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialogContent</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainerNewProductModal (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal show"</td></tr>
		<tr><td>role</td><td>"dialog"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModalDialog</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveNewProductContainer (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".newProduct"]</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveNewProductContainerNewProductModal</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveBreakline (hr/div)</h1>

	<table>
		<tr><td>tag</td><td>"hr"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveReceivedProductsItemTitle (div/div)</h1>

	<table>
		<tr><td>content</td><td>["item.product.name"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveReceivedProductsItemCountInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"number"</td></tr>
		<tr><td>ref</td><td>".receivedProducts[item.product.id].count"</td></tr>
		<tr><td>test</td><td>"receiveListCount"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveReceivedProductsItemCountInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>["\"\""]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveReceivedProductsItemCountInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveReceivedProductsItemCountInputLabel</li>
		<li>AdminContentReceiveReceivedProductsItemCountInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveReceivedProductsItem (div/div)</h1>

	<table>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveReceivedProductsItemTitle</li>
		<li>AdminContentReceiveReceivedProductsItemCountInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveReceivedProducts (div/div)</h1>

	<table>
		<tr><td>list</td><td>".receivedProducts"</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveReceivedProductsItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceiveReceiveButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.receiveButton"]</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>test</td><td>"receiveButton"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentReceive (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".section === \"receive\""]</td></tr>
	</table>

	<ul>
		<li>AdminContentReceiveHeader</li>
		<li>AdminContentReceiveList</li>
		<li>AdminContentReceiveProductNotFoundContainer</li>
		<li>AdminContentReceiveNewProductContainer</li>
		<li>AdminContentReceiveBreakline</li>
		<li>AdminContentReceiveReceivedProducts</li>
		<li>AdminContentReceiveReceiveButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellHeader (h1/div)</h1>

	<table>
		<tr><td>header</td><td>"1"</td></tr>
		<tr><td>content</td><td>[".l.sellHeader"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellListSearchContainerSearchInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".store.productSearch"</td></tr>
		<tr><td>test</td><td>"sellSearch"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellListSearchContainerSearchInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.store.productSearch"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellListSearchContainerSearchInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentSellListSearchContainerSearchInputLabel</li>
		<li>AdminContentSellListSearchContainerSearchInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellListSearchContainer (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminContentSellListSearchContainerSearchInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellListProductListItem (div/div)</h1>

	<table>
		<tr><td>class</td><td>"list-group-item"</td></tr>
		<tr><td>content</td><td>["item.name"]</td></tr>
		<tr><td>test</td><td>"productItem"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellListProductList (div/div)</h1>

	<table>
		<tr><td>list</td><td>".products"</td></tr>
		<tr><td>class</td><td>"list-group"</td></tr>
	</table>

	<ul>
		<li>AdminContentSellListProductListItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellList (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminContentSellListSearchContainer</li>
		<li>AdminContentSellListProductList</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellSoldProductsItemTitle (div/div)</h1>

	<table>
		<tr><td>content</td><td>["item.product.name"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellSoldProductsItemCountInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"number"</td></tr>
		<tr><td>ref</td><td>".soldProducts[item.product.id].count"</td></tr>
		<tr><td>test</td><td>"sellListCount"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellSoldProductsItemCountInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>["\"\""]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellSoldProductsItemCountInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentSellSoldProductsItemCountInputLabel</li>
		<li>AdminContentSellSoldProductsItemCountInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellSoldProductsItem (div/div)</h1>

	<table>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentSellSoldProductsItemTitle</li>
		<li>AdminContentSellSoldProductsItemCountInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellSoldProducts (div/div)</h1>

	<table>
		<tr><td>list</td><td>".soldProducts"</td></tr>
	</table>

	<ul>
		<li>AdminContentSellSoldProductsItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSellSellButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.sellButton"]</td></tr>
		<tr><td>test</td><td>"sellButton"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentSell (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".section === \"sell\""]</td></tr>
	</table>

	<ul>
		<li>AdminContentSellHeader</li>
		<li>AdminContentSellList</li>
		<li>AdminContentSellSoldProducts</li>
		<li>AdminContentSellSellButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanHeader (h1/div)</h1>

	<table>
		<tr><td>header</td><td>"1"</td></tr>
		<tr><td>content</td><td>[".l.loanHeader"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanPaidHeader (h2/div)</h1>

	<table>
		<tr><td>header</td><td>"2"</td></tr>
		<tr><td>content</td><td>[".l.paidHeader"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanPaidInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"number"</td></tr>
		<tr><td>ref</td><td>".loanPaid"</td></tr>
		<tr><td>test</td><td>"loanPaid"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanPaidInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.loanPaid"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanPaidInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminContentLoanPaidInputLabel</li>
		<li>AdminContentLoanPaidInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanLoanButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>content</td><td>[".l.loanPaidButton"]</td></tr>
		<tr><td>test</td><td>"loanButton"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsHeader (h2/div)</h1>

	<table>
		<tr><td>header</td><td>"2"</td></tr>
		<tr><td>content</td><td>[".l.transactionsHistory"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableHeaderProduct (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.product"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableHeaderCount (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.count"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableHeaderPrice (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.price"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableHeaderTotal (th/div)</h1>

	<table>
		<tr><td>tag</td><td>"th"</td></tr>
		<tr><td>content</td><td>[".l.total"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableHeader (tr/div)</h1>

	<table>
		<tr><td>tag</td><td>"tr"</td></tr>
	</table>

	<ul>
		<li>AdminContentLoanTransactionsTableHeaderProduct</li>
		<li>AdminContentLoanTransactionsTableHeaderCount</li>
		<li>AdminContentLoanTransactionsTableHeaderPrice</li>
		<li>AdminContentLoanTransactionsTableHeaderTotal</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableRowProduct (td/div)</h1>

	<table>
		<tr><td>content</td><td>[".products[item.product_id].name"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableRowCount (td/div)</h1>

	<table>
		<tr><td>content</td><td>["item.count"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableRowPrice (td/div)</h1>

	<table>
		<tr><td>content</td><td>["item.cost"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableRowTotal (td/div)</h1>

	<table>
		<tr><td>content</td><td>["item.cost * item.count"]</td></tr>
		<tr><td>tag</td><td>"td"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTableRow (tbody/tr)</h1>

	<table>
		<tr><td>table</td><td>null</td></tr>
		<tr><td>list</td><td>".transactions"</td></tr>
	</table>

	<ul>
		<li>AdminContentLoanTransactionsTableRowProduct</li>
		<li>AdminContentLoanTransactionsTableRowCount</li>
		<li>AdminContentLoanTransactionsTableRowPrice</li>
		<li>AdminContentLoanTransactionsTableRowTotal</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoanTransactionsTable (table/div)</h1>

	<table>
		<tr><td>tag</td><td>"table"</td></tr>
		<tr><td>class</td><td>"table"</td></tr>
	</table>

	<ul>
		<li>AdminContentLoanTransactionsTableHeader</li>
		<li>AdminContentLoanTransactionsTableRow</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContentLoan (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".section === \"loan\""]</td></tr>
	</table>

	<ul>
		<li>AdminContentLoanHeader</li>
		<li>AdminContentLoanPaidHeader</li>
		<li>AdminContentLoanPaidInput</li>
		<li>AdminContentLoanLoanButton</li>
		<li>AdminContentLoanTransactionsHeader</li>
		<li>AdminContentLoanTransactionsTable</li>
	</ul>

</div>
<div class="component">
	<h1>AdminContent (div/div)</h1>

	<table>
		<tr><td>class</td><td>"container"</td></tr>
	</table>

	<ul>
		<li>AdminContentStorage</li>
		<li>AdminContentReceive</li>
		<li>AdminContentSell</li>
		<li>AdminContentLoan</li>
	</ul>

</div>
<div class="component">
	<h1>Admin (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".user"]</td></tr>
	</table>

	<ul>
		<li>AdminMenu</li>
		<li>AdminProfile</li>
		<li>AdminContent</li>
	</ul>

</div>
<div class="component">
	<h1>app (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>Login</li>
		<li>Admin</li>
	</ul>

</div>
