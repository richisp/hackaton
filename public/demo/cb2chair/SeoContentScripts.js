"use strict";function _instanceof(n,t){return t!=null&&typeof Symbol!="undefined"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}function _typeof(n){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof(n)}function _classCallCheck(n,t){if(!_instanceof(n,t))throw new TypeError("Cannot call a class as a function");}function _defineProperties(n,t){for(var i,r=0;r<t.length;r++)i=t[r],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}function _createClass(n,t,i){return t&&_defineProperties(n.prototype,t),i&&_defineProperties(n,i),n}function _possibleConstructorReturn(n,t){return t&&(_typeof(t)==="object"||typeof t=="function")?t:_assertThisInitialized(n)}function _getPrototypeOf(n){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf(n)}function _assertThisInitialized(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _inherits(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}});t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return _setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},_setPrototypeOf(n,t)}var MerchMenu=function(n){function t(n){var i;return _classCallCheck(this,t),i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n)),i.state={content:i.props.content},i.clickHandler=i.clickHandler.bind(_assertThisInitialized(i)),i}return _inherits(t,n),_createClass(t,[{key:"componentDidMount",value:function(){this.setState({content:this.state.content.replace(/view more/g,"Show more")})}},{key:"clickHandler",value:function(n){var t,r,i,u;(n.target.innerHTML==="Show more"||n.target.innerHTML==="Show less")&&(i=0,this.props.isMobile&&(t=n.target.closest("[data-col-count]").dataset.colCount,r=document.querySelectorAll("[data-col-count]"),i=r[t]),n.target.innerHTML==="Show more"?(n.target.innerHTML="Show less",n.target.previousElementSibling.classList.add("active"),t%2>=1&&this.props.isMobile&&(u=r[t-1].offsetHeight,i.style="min-height:"+u+"px")):(n.target.innerHTML="Show more",n.target.previousElementSibling.classList.remove("active"),t%2>=1&&this.props.isMobile&&(i.style="height: auto;")))}},{key:"render",value:function(){return React.createElement("div",{onClick:this.clickHandler,dangerouslySetInnerHTML:{__html:this.state.content}})}}]),t}(React.Component),RelatedCategories=function(n){function t(n){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n))}return _inherits(t,n),_createClass(t,[{key:"render",value:function(){var n=this.props.categories.map(function(n,t){return React.createElement("li",{className:"related-button",key:t},React.createElement("a",{className:"seo-related-link",href:n.url},n.title))});return React.createElement("div",{className:"section-seo"},React.createElement("div",{className:"section-seo-container"},React.createElement("h2",{className:"section-header"},"Related Categories"),React.createElement("ul",{className:"seo-related-links"},n)))}}]),t}(React.Component),SpillSeoText=function(n){function t(n){var i;return _classCallCheck(this,t),i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n)),i.clickHandler=i.clickHandler.bind(_assertThisInitialized(i)),i.state={showHideClasses:["","","","hidden"],hideTextBool:!0},i}return _inherits(t,n),_createClass(t,[{key:"clickHandler",value:function(){var n=!this.state.hideTextBool;this.setState({hideTextBool:!this.state.hideTextBool,showHideClasses:n?["","","","hidden"]:["revealed-content","bg-tranparent","hidden",""]})}},{key:"render",value:function(){var n=React.createElement("div",{className:"section-seo-container"},React.createElement("div",{id:"mobile-container",className:"reveal-seo-container"},React.createElement("div",{className:"reveal-container"},React.createElement("div",{className:"reveal-content "+this.state.showHideClasses[0],dangerouslySetInnerHTML:{__html:this.props.seoContent}}),React.createElement("a",{className:"js-reveal-toggle "+this.state.showHideClasses[1],onClick:this.clickHandler},React.createElement("span",{className:this.state.showHideClasses[2]},"Show More"),React.createElement("span",{className:this.state.showHideClasses[3]},"Show Less"),React.createElement("svg",{className:"svg-icon-chevron-down","aria-hidden":"true",focusable:"false"},React.createElement("use",{xlinkHref:"#svg-icon-chevron-down"})))))),t=React.createElement("div",{className:"section-seo-container"},React.createElement("div",{className:"col-xs-12 reveal-more-less"},React.createElement("div",{className:"reveal-container reveal-category-content spill-index-content"},React.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.seoContent}})))),i=this.props.isMobile?n:t;return React.createElement("div",{className:"section-seo"},i)}}]),t}(React.Component);(function(){document.addEventListener("DOMContentLoaded",function(){var n=document.querySelector("[data-module='merchMenuComponent']"),t;n!==null&&n!==undefined&&typeof MerchMenu!="undefined"&&MerchMenu!==null&&(t=n.innerHTML,ReactDOM.render(React.createElement(MerchMenu,{content:t,isMobile:document.getElementById("jsIsMobile").value==="1"},null),n))})})(),function(){document.addEventListener("DOMContentLoaded",function(){var n=document.querySelector("[data-module='relatedCategories']"),t;n!==null&&n!==undefined&&typeof RelatedCategories!="undefined"&&RelatedCategories!==null&&(t=document.querySelector("[data-categories]").dataset,ReactDOM.render(React.createElement(RelatedCategories,{categories:JSON.parse(t.categories),isMobile:document.getElementById("jsIsMobile").value==="1"},null),n))})}(),function(){document.addEventListener("DOMContentLoaded",function(){var n=document.querySelector("[data-module='spillSeoText']"),t;n!==null&&n!==undefined&&typeof SpillSeoText!="undefined"&&SpillSeoText!==null&&(t=document.querySelector("[data-seo-content]").dataset,ReactDOM.render(React.createElement(SpillSeoText,{seoContent:t.seoContent,isMobile:t.isMobile==="true"},null),n))})}()