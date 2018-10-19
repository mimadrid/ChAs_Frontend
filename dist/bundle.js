!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=Reactstrap},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(12);t.CHANGED_CHROMOSOME=r.CHANGED_CHROMOSOME,t.change_chromosome=r.change_chromosome;const o=n(13);t.CHANGED_FEATURE=o.CHANGED_FEATURE,t.change_feature=o.change_feature},function(e,t){e.exports=Redux},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(6),s=n(1),a=n(4),c=n(7),i=n(25),l=a.combineReducers({chromosome:i.chromosomes_reducer,feature:i.features_reducer}),u=a.createStore(l),p=document.getElementById("frontend_container");o.render(r.createElement(s.Provider,{store:u},r.createElement(c.Frontend,null)),p)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(8),s=n(9);t.Frontend=class extends r.Component{render(){return r.createElement("div",null,r.createElement(o.Header,null),r.createElement(s.Viewer,null))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(2);t.Header=class extends r.Component{render(){return r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("h1",{className:"text-center"},"ChAs Frontend"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"}),r.createElement("div",{className:"col"},r.createElement(o.Alert,{color:"primary",className:"text-center"},"Still in development!")),r.createElement("div",{className:"col"})))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(10),s=n(17);t.Viewer=class extends r.Component{render(){return r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-10"},r.createElement(s.Cytoscape_container,null)),r.createElement("div",{className:"col-2"},r.createElement(o.ControlPanel,null))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(11),s=n(15);t.ControlPanel=class extends r.Component{render(){return r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"col",style:{margin:"5px"}},r.createElement(s.ChromosomesPanelContainer,null),r.createElement(o.FeaturesPanelContainer,null)))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(3),s=n(14);t.mapStateToProps=(e=>({feature:e.feature})),t.mapDispatchToProps={onFeatureChange:o.change_feature},t.FeaturesPanelContainer=r.connect(t.mapStateToProps,t.mapDispatchToProps)(s.FeaturesPanel)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_CHROMOSOME="CHANGED_CHROMOSOME",t.change_chromosome=(e=>({type:t.CHANGED_CHROMOSOME,chromosome:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_FEATURE="CHANGED_FEATURE",t.change_feature=(e=>({type:t.CHANGED_FEATURE,feature:e}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(2);t.FeaturesPanel=class extends r.Component{constructor(e){super(e),this.onFeatureChange=this.onFeatureChange.bind(this)}onFeatureChange(e){this.props.onFeatureChange(e.target.value)}render(){const e=["BRG1","CBX3","CBX7","C_MYC","CoREST","E2F1","ESRRB","HCFC1","HDAC1","HDAC2","KAP1","KDM2A","KDM2B","KLF4","LAMINB","LSD1","MAFK","MAX","MBD1A","MBD1B","MBD2A","MBD2T","MBD3A","MBD4","MECP2","MED1","MED12","MI2B","MLL2","NANOG","NIPBL","N_MYC","OCT4","OGT","P300","PHF19","POLII","RAD21","REST","RING1B","RNAPII.8WG16","RNAPII.S2P","RNAPII.S5P","RNAPII.S7P","RYBP","SETDB1","SIN3A","SMAD1","SMC1","SMC3","SOX2","STAT3","SUZ12","TAF1","TCF3","TCFCP2I1","TET1","ZC3H11A","ZNF384","X5fC","X5hmC","X5mC","CTCF","H2AZ","H2Aub1","H3K27ac","H3K27me3","H3K36me2","H3K36me3","H3K4me1","H3K4me2","H3K4me3","H3K79me2","H3K9ac","H3K9me3","H4K20me3","EZH2","G9A"].sort();return r.createElement(o.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px"}},r.createElement(o.FormGroup,{className:"text-center"},r.createElement(o.Label,{for:"Select"},"Features"),r.createElement(o.Input,{type:"select",defaultValue:this.props.feature,className:"text-center",onChange:this.onFeatureChange,name:"select"},e.map(e=>r.createElement("option",{key:e,value:e},e)))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(3),s=n(16);t.mapStateToProps=(e=>({chromosome:e.chromosome})),t.mapDispatchToProps={onChromosomeChange:o.change_chromosome},t.ChromosomesPanelContainer=r.connect(t.mapStateToProps,t.mapDispatchToProps)(s.ChromosomesPanel)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(2);t.ChromosomesPanel=class extends r.Component{constructor(e){super(e),this.onChromosomeChange=this.onChromosomeChange.bind(this)}onChromosomeChange(e){this.props.onChromosomeChange(e.target.value)}render(){return r.createElement(o.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginBottom:"15px"},className:"text-center"},r.createElement(o.FormGroup,null,r.createElement(o.Label,{for:"Select"},"Chromosomes"),r.createElement(o.Input,{type:"select",defaultValue:this.props.chromosome,className:"text-center",onChange:this.onChromosomeChange,name:"select"},["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","X","Y"].map(e=>r.createElement("option",{key:e,value:e},e)))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(18);t.mapStateToProps=(e=>({chromosome:e.chromosome,feature:e.feature})),t.Cytoscape_container=r.connect(t.mapStateToProps,null)(o.Cytoscape)},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{i(r.next(e))}catch(e){s(e)}}function c(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}i((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),s=n(19),a=n(2);n(20);t.Cytoscape=class extends o.Component{constructor(e){super(e),this.chromosomes_cache=new Map,this.state={cytoscape_loading:!0}}componentDidUpdate(e){if(this.props.chromosome!=e.chromosome)if(this.setState({cytoscape_loading:!0}),this.chromosomes_cache.has(this.props.chromosome)){let e=this.chromosomes_cache.get(this.props.chromosome),t=this;new Promise(function(n,r){setTimeout(function(){t.cy=s({container:document.getElementById("cytoscape_container"),elements:e.elements().jsons(),style:[{selector:"node",style:{"background-color":"mapData(features."+t.props.feature+", 0, 1, black, green)",label:"data(name)",color:"white","font-size":4,"text-valign":"center","text-halign":"center",width:35,height:35}},{selector:'node[type = "bait"]',style:{shape:"rectangle"}},{selector:'node[type = "oe"]',style:{shape:"ellipse"}}],layout:{name:"preset",animate:!1,stop:()=>t.setState({cytoscape_loading:!1})}}),t.cy.style().selector("node").style({"background-color":"mapData(features."+t.props.feature+", 0, 1, black, green)"}).update(),n(t.cy)},500)})}else{let e=this;new Promise(function(t,n){setTimeout(function(){e.chromosomes_cache.set(e.props.chromosome,e.buildNetwork(e)),e.cy=e.chromosomes_cache.get(e.props.chromosome),t(e.cy)},500)})}else this.props.feature!=e.feature&&this.cy.style().selector("node").style({"background-color":"mapData(features."+this.props.feature+", 0, 1, black, green)"}).update()}componentDidMount(){let e=this;new Promise(function(t,n){setTimeout(function(){e.chromosomes_cache.set(e.props.chromosome,e.buildNetwork(e)),e.cy=e.chromosomes_cache.get(e.props.chromosome),t(e.cy)},500)})}buildNetwork(e){return s({container:document.getElementById("cytoscape_container"),elements:function(e){return r(this,void 0,void 0,function*(){let t="http://localhost:8080/data/chromosomes/"+e.props.chromosome+"/stdout";return fetch(t).then(e=>e.json())})}(this),style:[{selector:"node",style:{"background-color":"mapData(features."+e.props.feature+", 0, 1, black, green)",label:"data(name)",color:"white","font-size":4,"text-valign":"center","text-halign":"center",width:35,height:35}},{selector:'node[type = "bait"]',style:{shape:"rectangle"}},{selector:'node[type = "oe"]',style:{shape:"ellipse"}},{selector:"edge",style:{width:5,"line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"triangle"}}],layout:{name:"cose",animate:!1,idealEdgeLength:100,nodeOverlap:20,refresh:20,fit:!0,padding:30,randomize:!1,componentSpacing:100,nodeRepulsion:4e5,edgeElasticity:100,nestingFactor:5,gravity:80,numIter:1e3,initialTemp:200,coolingFactor:.95,minTemp:1,stop:()=>this.setState({cytoscape_loading:!1})}})}render(){return o.createElement("div",{className:"container-fluid"},o.createElement(a.Modal,{isOpen:this.state.cytoscape_loading,centered:!0,className:"text-center"},o.createElement(a.ModalBody,null,"Be patient please",o.createElement("br",null),"Rendering chromosome ",this.props.chromosome,o.createElement("div",{className:"spinner"}))),o.createElement("div",{id:"cytoscape_container",style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px"}}))}}},function(e,t){e.exports=cytoscape},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(22)(!1)).push([e.i,"#cytoscape_container {\n  min-height: calc(100vh - 150px);\n  width: 100%;\n}\n\n.spinner {\n  border: 16px solid #AAAAAA;\n  border-top: 16px solid #5C5C5C;\n  border-radius: 50%;\n  position: relative;\n  left: 40%;\n  width: 100px;\n  height: 100px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,c=0,i=[],l=n(24);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],s=r[o.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](o.parts[a]);for(;a<o.parts.length;a++)s.parts.push(y(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(y(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],a=t.base?s[0]+t.base:s[0],c={css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function d(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=i[i.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),i.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=i.indexOf(e);t>=0&&i.splice(t,1)}function f(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var i=c++;n=a||(a=f(t)),r=E.bind(null,n,i,!1),o=E.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=f(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return u(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s];(c=r[a.id]).refs--,o.push(c)}e&&u(p(e,t),t);for(s=0;s<o.length;s++){var c;if(0===(c=o[s]).refs){for(var i=0;i<c.parts.length;i++)c.parts[i]();delete r[c.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function E(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4),o=n(26);t.chromosomes_reducer=o.chromosomes_reducer,t.DEFAULT_CHROMOSOME=o.DEFAULT_CHROMOSOME;const s=n(27);t.features_reducer=s.features_reducer,t.DEFAULT_FEATURE=s.DEFAULT_FEATURE,t.root_reducers=r.combineReducers({chromosome:o.chromosomes_reducer,feature:s.features_reducer})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);t.DEFAULT_CHROMOSOME="Y",t.chromosomes_reducer=((e=t.DEFAULT_CHROMOSOME,n)=>{switch(n.type){case r.CHANGED_CHROMOSOME:return n.chromosome;default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);t.DEFAULT_FEATURE="EZH2",t.features_reducer=((e=t.DEFAULT_FEATURE,n)=>{switch(n.type){case r.CHANGED_FEATURE:return n.feature;default:return e}})}]);