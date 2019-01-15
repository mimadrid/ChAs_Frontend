!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10);t.change_chromosome=o.change_chromosome,t.CHANGED_CHROMOSOME=o.CHANGED_CHROMOSOME;const r=n(11);t.change_download=r.change_download,t.CHANGED_DOWNLOAD=r.CHANGED_DOWNLOAD;const s=n(12);t.change_feature=s.change_feature,t.CHANGED_FEATURE=s.CHANGED_FEATURE;const a=n(13);t.change_gene=a.change_gene,t.CHANGED_GENE=a.CHANGED_GENE;const c=n(14);t.change_range=c.change_range,t.CHANGED_RANGE=c.CHANGED_RANGE;const i=n(15);t.change_search=i.change_search,t.CHANGED_SEARCH=i.CHANGED_SEARCH;const l=n(16);t.change_text=l.change_text,t.CHANGED_TEXT=l.CHANGED_TEXT},function(e,t){e.exports=React},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=Reactstrap},function(e,t){e.exports=Redux},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(6),s=n(2),a=n(4),c=n(7),i=n(38),l=a.createStore(i.root_reducers),h=document.getElementById("frontend_container");r.render(o.createElement(s.Provider,{store:l},o.createElement(c.Frontend,null)),h)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(8),s=n(18);t.Frontend=class extends o.Component{render(){return o.createElement("div",null,o.createElement(r.Header,null),o.createElement(s.Viewer,null))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(3),s=n(9);t.Header=class extends o.Component{render(){return o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col"},o.createElement("h1",{className:"text-center"},o.createElement("a",{href:"https://github.com/VeraPancaldiLab/GARNET"},"GARNET")))),o.createElement("div",{className:"row"},o.createElement("div",{className:"col"}),o.createElement("div",{className:"col"},o.createElement(r.Alert,{color:"primary",className:"text-center"},"Still in development!")),o.createElement("div",{className:"col"})),o.createElement("div",{className:"row"},o.createElement("div",{className:"col"}),o.createElement("div",{className:"col"},o.createElement(s.SearchPanelContainer,null)),o.createElement("div",{className:"col"})))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(0),s=n(17);t.mapStateToProps=(e=>({search:e.search,text:e.text})),t.mapDispatchToProps={onSearchChange:r.change_search,onTextChange:r.change_text,onGeneChange:r.change_gene,onChromosomeChange:r.change_chromosome,onRangeChange:r.change_range},t.SearchPanelContainer=o.connect(t.mapStateToProps,t.mapDispatchToProps)(s.SearchPanel)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_CHROMOSOME="CHANGED_CHROMOSOME",t.change_chromosome=(e=>({type:t.CHANGED_CHROMOSOME,chromosome:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_DOWNLOAD="CHANGED_DOWNLOAD",t.change_download=(e=>({type:t.CHANGED_DOWNLOAD,download:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_FEATURE="CHANGED_FEATURE",t.change_feature=(e=>({type:t.CHANGED_FEATURE,feature:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_GENE="CHANGED_GENE",t.change_gene=(e=>({type:t.CHANGED_GENE,gene:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_RANGE="CHANGED_RANGE",t.change_range=(e=>({type:t.CHANGED_RANGE,range:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_SEARCH="CHANGED_SEARCH",t.change_search=(e=>({type:t.CHANGED_SEARCH,search:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_TEXT="CHANGED_TEXT",t.change_text=(e=>({type:t.CHANGED_TEXT,text:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(3);t.SearchPanel=class extends o.Component{constructor(e){super(e),this.onInputChange=(e=>{this.props.onTextChange(e.target.value)}),this.onSubmit=(()=>{this.props.onSearchChange(this.props.text),this.props.onChromosomeChange("Choose"),this.props.onGeneChange("Choose"),this.props.onRangeChange("Choose")}),this.handleEnterKey=(e=>{"Enter"===e.key&&(e.preventDefault(),this.onSubmit())})}render(){return o.createElement(r.Form,{className:"text-center"},o.createElement(r.FormGroup,null,o.createElement(r.Label,{for:"searcher"},"Search"),o.createElement(r.Input,{className:"text-center",type:"text",name:"Search",placeholder:"Hoxa1 6:52155590 6:52155590-52158317",onChange:this.onInputChange,onKeyPress:this.handleEnterKey})),o.createElement(r.Button,{disabled:""==this.props.text,style:{marginBottom:"15px"},onClick:this.onSubmit},"Submit"))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(19),s=n(27);t.Viewer=class extends o.Component{render(){return o.createElement("div",{className:"container-fluid"},o.createElement("div",{className:"row flex-column-reverse flex-md-row"},o.createElement("div",{className:"col-md-10"},o.createElement(r.Cytoscape_container,null)),o.createElement("div",{className:"col-md-2"},o.createElement(s.ControlPanel,null))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(0),s=n(20);t.mapStateToProps=(e=>({chromosome:e.chromosome,feature:e.feature,download:e.download,gene:e.gene,range:e.range,search:e.search})),t.mapDispatchToProps={onDownloadChange:r.change_download},t.Cytoscape_container=o.connect(t.mapStateToProps,t.mapDispatchToProps)(s.Cytoscape)},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function a(e){try{i(o.next(e))}catch(e){s(e)}}function c(e){try{i(o.throw(e))}catch(e){s(e)}}function i(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,c)}i((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=n(21),s=n(1),a=n(3);n(22);t.Cytoscape=class extends s.Component{constructor(e){super(e),this.cache=new Map,this.BASE_URL="https://pancaldi.bsc.es/garnet/data/",this.URL={chromosome:this.BASE_URL+"chromosomes/chr",gene:this.BASE_URL+"genes/",range:this.BASE_URL+"ranges/",search:"https://pancaldi.bsc.es/garnet-rest?features=true&search="},this.onDownloadChange=(e=>{this.props.onDownloadChange(e)}),this.state={cytoscape_loading:!0,loading_message:""}}componentDidUpdate(e){if(this.props.chromosome!==e.chromosome&&"Choose"!==this.props.chromosome){this.setState({cytoscape_loading:!0});const e=this.chromosomePath(this.props.chromosome);this.onDownloadChange(e);const t="Chromosome "+this.props.chromosome;if(this.setState({loading_message:t}),this.cache.has(this.props.chromosome)){const e=this.cache.get(this.props.chromosome);setTimeout(()=>{this.cy=this.buildNetwork(e.elements().jsons())},500)}else"Choose"!==this.props.chromosome&&setTimeout(()=>{const t=this.fetchAsyncJson(e);this.cache.set(this.props.chromosome,this.buildNetwork(t)),this.cy=this.cache.get(this.props.chromosome)},500)}else if(this.props.gene!==e.gene&&"Choose"!==this.props.gene){this.setState({cytoscape_loading:!0});const e=this.genePath(this.props.gene);this.onDownloadChange(e);const t="Gene "+this.props.gene;if(this.setState({loading_message:t}),this.cache.has(this.props.gene)){const e=this.cache.get(this.props.gene);setTimeout(()=>{this.cy=this.buildNetwork(e.elements().jsons())},500)}else"Choose"!==this.props.gene&&setTimeout(()=>{const t=this.fetchAsyncJson(e);this.cache.set(this.props.gene,this.buildNetwork(t)),this.cy=this.cache.get(this.props.gene)},500)}else if(this.props.range!==e.range&&"Choose"!==this.props.range){this.setState({cytoscape_loading:!0});const e=this.rangePath(this.props.range);this.onDownloadChange(e);const t="Range "+this.props.range;if(this.setState({loading_message:t}),this.cache.has(this.props.range)){const e=this.cache.get(this.props.range);setTimeout(()=>{this.cy=this.buildNetwork(e.elements().jsons())},500)}else"Choose"!==this.props.range&&setTimeout(()=>{const t=this.fetchAsyncJson(e);this.cache.set(this.props.range,this.buildNetwork(t)),this.cy=this.cache.get(this.props.range)},500)}else if(this.props.search!==e.search&&""!==this.props.search){this.setState({cytoscape_loading:!0});const e=this.searchPath(this.props.search),t="Search "+this.props.search;if(this.setState({loading_message:t}),this.onDownloadChange(e),this.cache.has(this.props.search)){const e=this.cache.get(this.props.search);setTimeout(()=>{this.cy=this.buildNetwork(e.elements().jsons())},500)}else"Choose"!==this.props.search&&setTimeout(()=>{const t=this.fetchAsyncJson(e);this.cache.set(this.props.search,this.buildNetwork(t)),this.cy=this.cache.get(this.props.search)},500)}else this.props.feature!==e.feature&&this.cy.style().selector("node").style({"background-color":"mapData("+this.props.feature+", 0, 1, black, green)"}).update()}componentDidMount(){setTimeout(()=>{const e=this.chromosomePath(this.props.chromosome);this.onDownloadChange(e);const t="Chromosome "+this.props.chromosome;this.setState({loading_message:t});const n=this.fetchAsyncJson(e);this.cache.set(this.props.chromosome,this.buildNetwork(n)),this.cy=this.cache.get(this.props.chromosome)},500)}genePath(e){return this.URL.gene+e+".json"}chromosomePath(e){return this.URL.chromosome+e+".json"}rangePath(e){return this.URL.range+e+".json"}searchPath(e){return this.URL.search+e}fetchAsyncJson(e){return o(this,void 0,void 0,function*(){return fetch(e).then(e=>e.json()).catch(e=>alert('There are not any node which matches with the search petition: "'+this.props.search+'"'))})}buildNetwork(e){return r({container:document.getElementById("cytoscape_container"),elements:e,style:[{selector:"node",style:{"background-color":"mapData("+this.props.feature+", 0, 1, black, green)",label:"data(curated_gene_name)",color:"gold","font-size":9.5,"text-valign":"center","text-halign":"center",width:35,height:35}},{selector:'node[type = "bait"]',style:{shape:"rectangle"}},{selector:'node[type = "oe"]',style:{shape:"ellipse"}},{selector:"edge",style:{width:5,"line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"triangle"}}],layout:{name:"preset",animate:!1,stop:()=>this.setState({cytoscape_loading:!1})}})}render(){return s.createElement("div",{className:"container-fluid"},s.createElement(a.Modal,{isOpen:this.state.cytoscape_loading,centered:!0,className:"text-center"},s.createElement(a.ModalBody,null,"Be patient please",s.createElement("br",null),"Rendering ",this.state.loading_message,s.createElement("div",{className:"spinner"}))),s.createElement("div",{id:"cytoscape_container",style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px"}}))}}},function(e,t){e.exports=cytoscape},function(e,t,n){var o=n(23);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(25)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(24)(!1)).push([e.i,"#cytoscape_container {\n  min-height: calc(86vh - 150px);\n  width: 100%;\n}\n\n.spinner {\n  border: 16px solid #AAAAAA;\n  border-top: 16px solid #5C5C5C;\n  border-radius: 50%;\n  position: relative;\n  left: 40%;\n  width: 100px;\n  height: 100px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(s).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var o,r,s={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),i=null,l=0,h=[],p=n(26);function d(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=s[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(_(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(_(o.parts[a],t));s[o.id]={id:o.id,refs:1,parts:c}}}}function u(e,t){for(var n=[],o={},r=0;r<e.length;r++){var s=e[r],a=t.base?s[0]+t.base:s[0],c={css:s[1],media:s[2],sourceMap:s[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=h[h.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertAt.before,n);n.insertBefore(t,r)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function f(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return E(t,e.attrs),m(e,t),t}function E(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function _(e,t){var n,o,r,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var a=l++;n=i||(i=f(t)),o=v.bind(null,n,a,!1),r=v.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",E(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||s)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),r=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=f(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){g(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=u(e,t);return d(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(c=s[a.id]).refs--,o.push(c)}e&&d(u(e,t),t);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var i=0;i<c.parts.length;i++)c.parts[i]();delete s[c.id]}}}};var C,y=(C=[],function(e,t){return C[e]=t,C.filter(Boolean).join("\n")});function v(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:o+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(28),s=n(30),a=n(32),c=n(34),i=n(36);t.ControlPanel=class extends o.Component{render(){return o.createElement("div",{className:"container-fluid"},o.createElement("div",{className:"col",style:{margin:"5px"}},o.createElement(r.ChromosomesPanelContainer,null),o.createElement(c.GenesPanelContainer,null),o.createElement(i.RangesPanelContainer,null),o.createElement(a.FeaturesPanelContainer,null),o.createElement(s.DownloadButtonContainer,null)))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(0),s=n(29);t.mapStateToProps=(e=>({chromosome:e.chromosome})),t.mapDispatchToProps={onChromosomeChange:r.change_chromosome,onGeneChange:r.change_gene,onRangeChange:r.change_range,onTextChange:r.change_text},t.ChromosomesPanelContainer=o.connect(t.mapStateToProps,t.mapDispatchToProps)(s.ChromosomesPanel)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(3);t.ChromosomesPanel=class extends o.Component{constructor(e){super(e),this.onChromosomeChange=(e=>{const t=e.target;this.props.onChromosomeChange(t.value),this.props.onGeneChange("Choose"),this.props.onRangeChange("Choose"),this.props.onTextChange("")}),this.toggle=(()=>{this.setState({dropdownOpen:!this.state.dropdownOpen})}),this.state={dropdownOpen:!1}}render(){const e=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","X","Y"];return o.createElement(r.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginBottom:"15px"}},o.createElement(r.FormGroup,{className:"text-center"},o.createElement(r.Label,{for:"Select"},"Chromosomes"),o.createElement("br",null),o.createElement(r.ButtonDropdown,{style:{display:"grid"},isOpen:this.state.dropdownOpen,toggle:this.toggle},o.createElement(r.DropdownToggle,{caret:!0},this.props.chromosome),o.createElement(r.DropdownMenu,{className:"text-center container-fluid",style:{height:"auto",maxHeight:"200px",overflowX:"hidden"}},e.slice(0,-1).map(e=>o.createElement("div",{key:e},o.createElement(r.DropdownItem,{value:e,onClick:this.onChromosomeChange},e),o.createElement(r.DropdownItem,{style:{margin:0},divider:!0}))),e.slice(-1).map(e=>o.createElement(r.DropdownItem,{style:{marginTop:"5px"},key:e,value:e,onClick:this.onChromosomeChange},e))))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(31);t.mapStateToProps=(e=>({download:e.download})),t.DownloadButtonContainer=o.connect(t.mapStateToProps,null)(r.DownloadButton)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(3);t.DownloadButton=class extends o.Component{constructor(){super(...arguments),this.onDownload=(()=>{fetch(this.props.download).then(e=>e.json()).then(e=>{const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=document.createElement("a");document.body.appendChild(n),n.href=window.URL.createObjectURL(t),n.setAttribute("download",this.props.download.split("/").pop()),n.style.display="none",n.click(),document.body.removeChild(n)})})}render(){return o.createElement("div",{className:"text-center"},o.createElement(r.Button,{outline:!0,color:"secondary",onClick:this.onDownload,style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px"}},"Download"))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(0),s=n(33);t.mapStateToProps=(e=>({feature:e.feature})),t.mapDispatchToProps={onFeatureChange:r.change_feature},t.FeaturesPanelContainer=o.connect(t.mapStateToProps,t.mapDispatchToProps)(s.FeaturesPanel)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(3);t.FeaturesPanel=class extends o.Component{constructor(e){super(e),this.onFeatureChange=(e=>{this.props.onFeatureChange(e.target.value)}),this.toggle=(()=>{this.setState({dropdownOpen:!this.state.dropdownOpen})}),this.state={dropdownOpen:!1}}render(){const e=["BRG1","CBX3","CBX7","C_MYC","CoREST","E2F1","ESRRB","HCFC1","HDAC1","HDAC2","KAP1","KDM2A","KDM2B","KLF4","LAMINB","LSD1","MAFK","MAX","MBD1A","MBD1B","MBD2A","MBD2T","MBD3A","MBD4","MECP2","MED1","MED12","MI2B","MLL2","NANOG","NIPBL","N_MYC","OCT4","OGT","P300","PHF19","POLII","RAD21","REST","RING1B","RNAPII.8WG16","RNAPII.S2P","RNAPII.S5P","RNAPII.S7P","RYBP","SETDB1","SIN3A","SMAD1","SMC1","SMC3","SOX2","STAT3","SUZ12","TAF1","TCF3","TCFCP2I1","TET1","ZC3H11A","ZNF384","X5fC","X5hmC","X5mC","CTCF","H2AZ","H2Aub1","H3K27ac","H3K27me3","H3K36me2","H3K36me3","H3K4me1","H3K4me2","H3K4me3","H3K79me2","H3K9ac","H3K9me3","H4K20me3","EZH2","G9A"].sort();return o.createElement(r.Form,{className:"text-center",style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px"}},o.createElement(r.FormGroup,{className:"text-center"},o.createElement(r.Label,{for:"Select"},"Features"),o.createElement("br",null),o.createElement(r.ButtonDropdown,{style:{display:"grid"},isOpen:this.state.dropdownOpen,toggle:this.toggle},o.createElement(r.DropdownToggle,{style:{color:"black",backgroundColor:"white"},caret:!0},this.props.feature),o.createElement(r.DropdownMenu,{className:"text-center container-fluid",style:{height:"auto",maxHeight:"200px",overflowX:"hidden"}},e.slice(0,-1).map(e=>o.createElement("div",{key:e},o.createElement(r.DropdownItem,{value:e,onClick:this.onFeatureChange},e),o.createElement(r.DropdownItem,{style:{margin:0},divider:!0}))),e.slice(-1).map(e=>o.createElement("div",{key:e},o.createElement(r.DropdownItem,{style:{marginTop:"5px"},value:e,onClick:this.onFeatureChange},e)))))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(0),s=n(35);t.mapStateToProps=(e=>({gene:e.gene})),t.mapDispatchToProps={onGeneChange:r.change_gene,onChromosomeChange:r.change_chromosome,onRangeChange:r.change_range,onTextChange:r.change_text},t.GenesPanelContainer=o.connect(t.mapStateToProps,t.mapDispatchToProps)(s.GenesPanel)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(3);t.GenesPanel=class extends o.Component{constructor(e){super(e),this.onGeneChange=(e=>{const t=e.target;this.props.onGeneChange(t.value),this.props.onChromosomeChange("Choose"),this.props.onRangeChange("Choose"),this.props.onTextChange("")}),this.toggle=(()=>{this.setState({dropdownOpen:!this.state.dropdownOpen})}),this.state={dropdownOpen:!1}}render(){const e=["hoxa1"];return o.createElement(r.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px",marginBottom:"15px"}},o.createElement(r.FormGroup,{className:"text-center"},o.createElement(r.Label,{for:"Select"},"Genes"),o.createElement("br",null),o.createElement(r.ButtonDropdown,{style:{display:"grid"},isOpen:this.state.dropdownOpen,toggle:this.toggle},o.createElement(r.DropdownToggle,{caret:!0},this.props.gene),o.createElement(r.DropdownMenu,{className:"text-center container-fluid",style:{height:"auto",maxHeight:"200px",overflowX:"hidden"}},e.slice(0,-1).map(e=>o.createElement("div",{key:e},o.createElement(r.DropdownItem,{value:e,onClick:this.onGeneChange},e),o.createElement(r.DropdownItem,{style:{margin:0},divider:!0}))),e.slice(-1).map(e=>o.createElement(r.DropdownItem,{style:{marginTop:"5px"},key:e,value:e,onClick:this.onGeneChange},e))))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(0),s=n(37);t.mapStateToProps=(e=>({range:e.range})),t.mapDispatchToProps={onGeneChange:r.change_gene,onChromosomeChange:r.change_chromosome,onRangeChange:r.change_range,onTextChange:r.change_text},t.RangesPanelContainer=o.connect(t.mapStateToProps,t.mapDispatchToProps)(s.RangesPanel)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(3);t.RangesPanel=class extends o.Component{constructor(e){super(e),this.onRangeChange=(e=>{const t=e.target;this.props.onRangeChange(t.value),this.props.onGeneChange("Choose"),this.props.onChromosomeChange("Choose"),this.props.onTextChange("")}),this.toggle=(()=>{this.setState({dropdownOpen:!this.state.dropdownOpen})}),this.state={dropdownOpen:!1}}render(){const e=["6:52155590-52158317","6:52155590-52158317_20K_extended","6:52155590-52158317_nearest"];return o.createElement(r.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px",marginBottom:"15px"}},o.createElement(r.FormGroup,{className:"text-center"},o.createElement(r.Label,{for:"Select"},"Ranges"),o.createElement("br",null),o.createElement(r.ButtonDropdown,{style:{display:"grid"},isOpen:this.state.dropdownOpen,toggle:this.toggle},o.createElement(r.DropdownToggle,{style:{fontSize:"x-small"},caret:!0},this.props.range),o.createElement(r.DropdownMenu,{className:"text-center container-fluid",style:{fontSize:"x-small",height:"auto",maxHeight:"200px",overflowX:"hidden"}},e.slice(0,-1).map(e=>o.createElement("div",{key:e},o.createElement(r.DropdownItem,{value:e,onClick:this.onRangeChange},e),o.createElement(r.DropdownItem,{style:{margin:0},divider:!0}))),e.slice(-1).map(e=>o.createElement("div",{key:e},o.createElement(r.DropdownItem,{style:{marginTop:"5px"},value:e,onClick:this.onRangeChange},e)))))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),r=n(39);t.chromosomes_reducer=r.chromosomes_reducer,t.DEFAULT_CHROMOSOME=r.DEFAULT_CHROMOSOME;const s=n(40);t.DEFAULT_DOWNLOAD=s.DEFAULT_DOWNLOAD,t.download_reducer=s.download_reducer;const a=n(41);t.DEFAULT_FEATURE=a.DEFAULT_FEATURE,t.features_reducer=a.features_reducer;const c=n(42);t.DEFAULT_GENE=c.DEFAULT_GENE,t.genes_reducer=c.genes_reducer;const i=n(43);t.DEFAULT_RANGE=i.DEFAULT_RANGE,t.ranges_reducer=i.ranges_reducer;const l=n(44);t.DEFAULT_SEARCH=l.DEFAULT_SEARCH,t.search_reducer=l.search_reducer;const h=n(45);t.DEFAULT_TEXT=h.DEFAULT_TEXT,t.text_reducer=h.text_reducer;const p=o.combineReducers({chromosome:r.chromosomes_reducer,feature:a.features_reducer,download:s.download_reducer,gene:c.genes_reducer,range:i.ranges_reducer,search:l.search_reducer,text:h.text_reducer});t.root_reducers=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.DEFAULT_CHROMOSOME="1",t.chromosomes_reducer=((e=t.DEFAULT_CHROMOSOME,n)=>{switch(n.type){case o.CHANGED_CHROMOSOME:return n.chromosome;default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.DEFAULT_DOWNLOAD="",t.download_reducer=((e=t.DEFAULT_DOWNLOAD,n)=>{switch(n.type){case o.CHANGED_DOWNLOAD:return n.download;default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.DEFAULT_FEATURE="EZH2",t.features_reducer=((e=t.DEFAULT_FEATURE,n)=>{switch(n.type){case o.CHANGED_FEATURE:return n.feature;default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.DEFAULT_GENE="Choose",t.genes_reducer=((e=t.DEFAULT_GENE,n)=>{switch(n.type){case o.CHANGED_GENE:return n.gene;default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.DEFAULT_RANGE="Choose",t.ranges_reducer=((e=t.DEFAULT_RANGE,n)=>{switch(n.type){case o.CHANGED_RANGE:return n.range;default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.DEFAULT_SEARCH="",t.search_reducer=((e=t.DEFAULT_SEARCH,n)=>{switch(n.type){case o.CHANGED_SEARCH:return n.search;default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.DEFAULT_TEXT="",t.text_reducer=((e=t.DEFAULT_TEXT,n)=>{switch(n.type){case o.CHANGED_TEXT:return n.text;default:return e}})}]);