"use strict";function _instanceof(n,t){return t!=null&&typeof Symbol!="undefined"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}function _typeof(n){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof(n)}function _classCallCheck(n,t){if(!_instanceof(n,t))throw new TypeError("Cannot call a class as a function");}function _defineProperties(n,t){for(var i,r=0;r<t.length;r++)i=t[r],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}function _createClass(n,t,i){return t&&_defineProperties(n.prototype,t),i&&_defineProperties(n,i),n}function _possibleConstructorReturn(n,t){return t&&(_typeof(t)==="object"||typeof t=="function")?t:_assertThisInitialized(n)}function _assertThisInitialized(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _getPrototypeOf(n){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf(n)}function _inherits(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}});t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return _setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},_setPrototypeOf(n,t)}var A11yAccordion=function(n){function t(n){var i;return _classCallCheck(this,t),i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n)),i.state={slideDown:!1},i}return _inherits(t,n),_createClass(t,[{key:"handleClick",value:function(){var n=this;this.setState({slideDown:!this.state.slideDown},function(){var t=n.panel;n.state.slideDown?n.slideDown(t):n.slideUp(t)});this.props.onEngaged&&this.props.onEngaged()}},{key:"slideUp",value:function(n){function i(){n.getBoundingClientRect().height<=0&&(n.style.display="none",clearInterval(t))}this.props.afterClose&&this.props.afterClose();n.style.maxHeight="0px";n.style.webkitTransition="all 0.6s ease-in-out";n.style.transition="all 0.6s ease-in-out";n.style.perspective="1000";n.style.backfaceVisibility="hidden";n.style.willChange="max-height";var t=setInterval(i,1)}},{key:"slideDown",value:function(n){this.props.afterOpen&&this.props.afterOpen();n.style.display="block";n.style.maxHeight=0;n.style.webkitTransition="all 0.6s ease-in-out";n.style.transition="all 0.6s ease-in-out";n.style.perspective="1000";n.style.backfaceVisibility="hidden";n.style.willChange="max-height";setTimeout(function(){n.style.maxHeight="10000px"},100)}},{key:"render",value:function(){var n=this;return this.props.desktop==!1||this.props.disableIt==!0?React.createElement("div",{className:"disabled-accordion"},React.createElement("h2",null,this.props.children[0]),this.props.children[1]):React.createElement("div",{className:""},React.createElement("h2",{className:"a11y-drawer-toggle"},React.createElement("button",{"aria-expanded":this.state.slideDown,"aria-controls":this.props.iD,onClick:function(t){return n.handleClick(t)}},this.props.children[0],React.createElement("svg",{className:"svg-icon-plus","aria-hidden":"true",focusable:"false"},React.createElement("use",{xlinkHref:"#svg-icon-plus"})),React.createElement("span",{className:"sr-only"},"Toggle")),this.props.children[2]),React.createElement("div",{ref:function(t){return n.panel=t},id:this.props.iD,"aria-hidden":!this.state.slideDown,className:"a11y-drawer-wrap"}," ",React.createElement("div",{className:"a11y-drawer-panel"+(this.state.slideDown?" slide-down":"")},this.props.children[1])))}}]),t}(React.Component);typeof module!="undefined"&&typeof module.exports!="undefined"&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.A11yAccordion=typeof window!="undefined"&&typeof window.A11yAccordion!="undefined"?window.A11yAccordion:A11yAccordion)