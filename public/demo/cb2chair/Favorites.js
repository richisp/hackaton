"use strict";function _extends(){return _extends=Object.assign||function(n){for(var i,r,t=1;t<arguments.length;t++){i=arguments[t];for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},_extends.apply(this,arguments)}function _instanceof(n,t){return t!=null&&typeof Symbol!="undefined"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}function _typeof(n){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof(n)}function _classCallCheck(n,t){if(!_instanceof(n,t))throw new TypeError("Cannot call a class as a function");}function _defineProperties(n,t){for(var i,r=0;r<t.length;r++)i=t[r],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}function _createClass(n,t,i){return t&&_defineProperties(n.prototype,t),i&&_defineProperties(n,i),n}function _possibleConstructorReturn(n,t){return t&&(_typeof(t)==="object"||typeof t=="function")?t:_assertThisInitialized(n)}function _assertThisInitialized(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _getPrototypeOf(n){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf(n)}function _inherits(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}});t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return _setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},_setPrototypeOf(n,t)}var AddToAdditionalListButton=function(n){function t(n){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n))}return _inherits(t,n),_createClass(t,[{key:"handleClick",value:function(n){var t=this,i={sku:this.props.sku,optionChoiceParameter:this.props.optionChoiceParameter};Crate.Services.HttpService.post("/favorites/addtolistpopupdata",i).then(function(n){var i=React.createElement(AddToFavoritesPopup,{popupData:n,qty:t.props.qty});Crate.React.Actions.PopupActions.updateContent({content:i,containerClasses:["favorite-popup"]})});n.preventDefault()}},{key:"render",value:function(){var n=this;return React.createElement("button",{className:"button-transparent add-list",onClick:function(t){return n.handleClick(t)}},React.createElement("i",{"aria-hidden":"true"}),"Add to Additional List")}}]),t}(React.Component),AddToFavoritesList=function(n){function t(n){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n))}return _inherits(t,n),_createClass(t,[{key:"handleSelectList",value:function(){var i=this,r=this.props.board.Id,u=this.props.board.BoardName,n=this.props.sku,t=this.props.optionChoiceParameter,f=this.props.qty,e={sku:n,quantity:f,recapId:r,optionChoiceParameter:t};Crate.Services.HttpService.post("/favorites/AddItemToFavorites",e).then(function(r){i.props.displayConfirmation(r.recapId,u,n,t);Crate.React.Actions.AnalyticsActions.fireFavoriteAddEvent(r)})}},{key:"svgSuccess",value:function(){return{__html:'<svg class="svg-icon-success added-active" aria-label="Success" focusable="false"><use xlink:href="#svg-icon-success"><\/use><\/svg>'}}},{key:"render",value:function(){var n=this,t=this.props.board.IsProductMember?"design-list added-span":"design-list added-span hidden",i=this.props.board.IsProductMember?"design-list hidden":"design-list";return React.createElement("div",null,React.createElement("span",{className:t},this.props.board.BoardName,React.createElement("span",{dangerouslySetInnerHTML:this.svgSuccess()})),React.createElement("a",{role:"button",className:i,onClick:function(t){return n.handleSelectList(t)},tabIndex:"0"},this.props.board.BoardName,React.createElement("span",{className:"add-list-button button button-primary button-md"},"Add")))}}]),t}(React.Component),AddToFavoritesPopup=function(n){function t(n){var i;return _classCallCheck(this,t),i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n)),i.state={hasBoardNameError:!1,showConfirmation:!1,addedToBoardName:""},i}return _inherits(t,n),_createClass(t,[{key:"handleFocus",value:function(){this.createBoard.style.display="block";this.boardName.placeholder=""}},{key:"handleBlur",value:function(){this.createBoard.style.display="block";this.boardName.placeholder="Create New"}},{key:"handleCreateNew",value:function(){var u=this,n=this.boardName.value,t=this.props.popupData.CurrentProductSku,i=this.props.popupData.OptionChoiceParameter,f=this.props.qty,e=this.verifyBoardName(n),r;e?(r={boardName:n,sku:t,quantity:f,optionChoiceParameter:i},Crate.Services.HttpService.post("/favorites/CreateBoard",r).then(function(r){r.recapId>0&&(u.displayConfirmation(r.recapId,n,t,i),Crate.React.Actions.AnalyticsActions.fireFavoriteAddEvent(r))})):this.setState({hasBoardNameError:!0})}},{key:"handleEnterKey",value:function(n){(n.keyCode==13||n.which==13)&&this.handleCreateNew(n)}},{key:"verifyBoardName",value:function(n){return n==""?!1:!0}},{key:"displayConfirmation",value:function(n,t,i,r){var u=document.getElementById("popup-container"),f;u&&(u.style.visibility="hidden",u.style.height="100%");f=document.getElementsByTagName("body")[0];f.classList.add("fav-layer-opened");setTimeout(function(){f.classList.remove("fav-layer-opened");u&&u.style.visibility==="hidden"&&(u.style.visibility="visible",u.style.height="",Crate.React.Actions.PopupActions.toggleOpen(!1))},3e3);typeof Crate.HeaderNav=="undefined"?Crate.Header.LoadBoardFavorites():Crate.HeaderNav.LoadBoardFavorites();typeof Crate.Services!="undefined"&&typeof Crate.Services.HeaderService!="undefined"&&Crate.Services.HeaderService.loadFavorites("js-favorites-navigation","jsBoardDetailCount");this.props.popupData.IsMobile||typeof Crate.DesignBoard=="undefined"||typeof Crate.DesignBoard.LoadFavorites=="undefined"||Crate.DesignBoard.LoadFavorites();this.setState({showConfirmation:!0,addedToBoardName:t});Crate.React.Actions.FavoriteActions.addFavoriteSku(i,r)}},{key:"renderBoards",value:function(){var n=this;return this.props.popupData.Boards.map(function(t,i){return React.createElement(AddToFavoritesList,{key:i,board:t,sku:n.props.popupData.CurrentProductSku,optionChoiceParameter:n.props.popupData.OptionChoiceParameter,qty:n.props.qty,displayConfirmation:n.displayConfirmation.bind(n)})})}},{key:"renderDesktop",value:function(){var n=this,t=this.renderBoards(),i=this.state.showConfirmation?"confirm-view jsConfirmView":"confirm-view jsConfirmView hidden",r=this.props.popupData.IsSignedIn?"hidden":"col-xs-12 not-signed-in";return React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-12"},React.createElement("div",{className:"item-added-wrap jsItemAddedWrap col-xs-12 col-sm-4"},React.createElement("div",{className:"col-xs-4 col-sm-12 product-img"},React.createElement("img",{className:"added-img",src:this.props.popupData.ProductImageUrl,alt:this.props.popupData.CurrentProductName})),React.createElement("div",{className:"col-xs-8 col-sm-12 product-info"},React.createElement("span",{className:"product-title"},this.props.popupData.CurrentProductName),React.createElement("span",{className:"product-price",dangerouslySetInnerHTML:{__html:this.props.popupData.CurrentProductFormattedPrice}}))),React.createElement("div",{className:"select-list-wrap jsSelectListWrap col-sm-8 col-xs-12"},React.createElement("div",{className:"current-list-scroll"},React.createElement("div",{className:"current-list-wrap"},React.createElement("span",{className:"title"},"Add this item to a list"),t)),React.createElement("div",{className:"new-list-input-wrap",onKeyPress:function(t){return n.handleEnterKey(t)}},React.createElement("input",{type:"text",placeholder:"Create New",onFocus:function(t){return n.handleFocus(t)},onBlur:function(t){return n.handleBlur(t)},className:"design-board-new-name",id:"jsDesignBoardName",ref:function(t){n.boardName=t}}),React.createElement("button",{className:"create-new-list-btn button button-primary button-md",id:"jsSubmitCreateNewDesignBoard",ref:function(t){n.createBoard=t},onClick:function(t){return n.handleCreateNew(t)}},"Add")),React.createElement("p",{className:r},"Already have a list? ",React.createElement("a",{rel:"nofollow,noindex",href:"/account"},"Sign in")))),React.createElement("a",{className:i,href:"/Favorites/"},React.createElement("div",{className:"added-confirmation-modal-container"},React.createElement("i",{className:"db-sprite green-check","aria-hidden":"true"}),React.createElement("span",{id:"jsConfirmBoard",className:"list-confirmation-message"},"Added To ",this.state.addedToBoardName),React.createElement("span",{className:"view-list-message"},"View Now ",React.createElement("i",{className:"db-sprite view-arrow","aria-hidden":"true"})))))}},{key:"render",value:function(){return this.renderDesktop()}}]),t}(React.Component),FavoriteHeart=function(n){function t(n){var i;return _classCallCheck(this,t),i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n)),i.state={isFavorited:!1},i.onChange=i.onChange.bind(_assertThisInitialized(i)),i}return _inherits(t,n),_createClass(t,[{key:"componentDidMount",value:function(){var t,i,n,r;Crate.React.Stores.FavoriteStore.listen(this.onChange);this.onChange(Crate.React.Stores.FavoriteStore.getState());t=document.cookie.match(/^(.*;)?\s*FavoriteTrackingCookie\s*=\s*[^;]+(.*)?$/);this.props.isShopButton&&!this.props.isFamilyLineListing&&t&&t.length>0&&(i=Crate.React.Stores.FavoriteStore.getState(),i.favoriteSkus&&i.favoriteSkus.length==0&&(n=[this.props.sku],this.props.colorBarSkus&&this.props.colorBarSkus.length&&(n=this.props.colorBarSkus),this.props.grouperSkus&&this.props.grouperSkus.length&&(n=this.props.grouperSkus),(n.length>1||n.length===1&&n[0]!==0)&&(r={skus:n},Crate.Services.HttpService.post("/favorites/GetSpecialOrderSkuMembership/",r).then(function(n){n&&n.forEach(function(n){Crate.React.Actions.FavoriteActions.addFavoriteSku(n.Item1,n.Item2)})}))))}},{key:"componentWillUnmount",value:function(){Crate.React.Stores.FavoriteStore.unlisten(this.onChange)}},{key:"componentWillReceiveProps",value:function(n){var t=n.isStockSku?"":n.optionChoiceParameter;this.isProductFavorited(n.sku,t)}},{key:"isProductFavorited",value:function(n,t){t||(t="");var r=Crate.React.Stores.FavoriteStore.getState(),i=!1;this.props.isShopButton?r.favoriteSkus.forEach(function(r){r.sku==n&&r.optionChoiceParameter==t&&(i=!0)}):r.favoriteSkus.forEach(function(t){t.sku==n&&(i=!0)});this.setState({isFavorited:i})}},{key:"onChange",value:function(){this.isProductFavorited(this.props.sku,this.props.optionChoiceParameter)&&this.setState({isFavorited:!0})}},{key:"handleClick",value:function(n){var i=this,r=Crate.React.Actions.GrouperActions.validate(),t;(this.props.isCarousel||r)&&(this.props.location!=="Product Header"||Crate.React.Actions.GrouperActions.validate())&&(t={sku:this.props.sku,optionChoiceParameter:this.props.isStockSku?"":this.props.optionChoiceParameter},Crate.Services.HttpService.post("/favorites/addtolistpopupdata",t).then(function(n){var t=React.createElement(AddToFavoritesPopup,{popupData:n,qty:i.props.qty});Crate.React.Actions.PopupActions.updateContent({content:t,containerClasses:["favorite-popup"]})}),n.preventDefault())}},{key:"render",value:function(){var n=this;return React.createElement("button",{type:"button",className:"button button-secondary button-add-to-favorites nsInt","aria-pressed":this.state.isFavorited?"true":"false",title:"Add to Favorites",onClick:function(t){return n.handleClick(t)},disabled:this.props.isDisabled||this.props.isLoading},React.createElement("svg",{"aria-hidden":"true",focusable:"false",className:"icon svg-icon-heart"+(this.state.isFavorited?"":"-outline")},React.createElement("use",{xlinkHref:"#svg-icon-heart"+(this.state.isFavorited?"":"-outline")})),React.createElement("span",{className:"favorites-text"},"Add to Favorites"))}}]),t}(React.Component),FavoritesListShopButtons=function(n){function t(n){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n))}return _inherits(t,n),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:this.props.isAddToRegistryVisible?"shop-bar-carting-area":"shop-bar-carting-area no-registry"},this.props.isAddToCartVisible?React.createElement(AddToCart,this.props):null,this.props.isAddToRegistryVisible?React.createElement(AddToRegistryContainer,_extends({showRegistryButton:this.props.isAddToRegistryVisible},this.props)):null)}}]),t}(React.Component)