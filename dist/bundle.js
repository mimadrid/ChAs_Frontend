!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=Reactstrap},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(12);t.CHANGED_CHROMOSOME=n.CHANGED_CHROMOSOME,t.change_chromosome=n.change_chromosome;const r=o(13);t.CHANGED_FEATURE=r.CHANGED_FEATURE,t.change_feature=r.change_feature},function(e,t){e.exports=Redux},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(6),s=o(1),a=o(4),c=o(7),i=o(27),l=a.combineReducers({chromosome:i.chromosomes_reducer,feature:i.features_reducer}),u=a.createStore(l),d=document.getElementById("frontend_container");r.render(n.createElement(s.Provider,{store:u},n.createElement(c.Frontend,null)),d)},function(e,t){e.exports=ReactDOM},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(8),s=o(9);t.Frontend=class extends n.Component{render(){return n.createElement("div",null,n.createElement(r.Header,null),n.createElement(s.Viewer,null))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(2);t.Header=class extends n.Component{render(){return n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("h1",{className:"text-center"},"ChAs Frontend"))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"}),n.createElement("div",{className:"col"},n.createElement(r.Alert,{color:"primary",className:"text-center"},"Still in development!")),n.createElement("div",{className:"col"})))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(10),s=o(19);t.Viewer=class extends n.Component{render(){return n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"row flex-column-reverse flex-md-row"},n.createElement("div",{className:"col-md-10"},n.createElement(s.Cytoscape_container,null)),n.createElement("div",{className:"col-md-2"},n.createElement(r.ControlPanel,null))))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(11),s=o(15),a=o(17);t.ControlPanel=class extends n.Component{render(){return n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"col",style:{margin:"5px"}},n.createElement(s.ChromosomesPanelContainer,null),n.createElement(r.FeaturesPanelContainer,null),n.createElement(a.DownloadButtonContainer,null)))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1),r=o(3),s=o(14);t.mapStateToProps=(e=>({feature:e.feature})),t.mapDispatchToProps={onFeatureChange:r.change_feature},t.FeaturesPanelContainer=n.connect(t.mapStateToProps,t.mapDispatchToProps)(s.FeaturesPanel)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_CHROMOSOME="CHANGED_CHROMOSOME",t.change_chromosome=(e=>({type:t.CHANGED_CHROMOSOME,chromosome:e}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_FEATURE="CHANGED_FEATURE",t.change_feature=(e=>({type:t.CHANGED_FEATURE,feature:e}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(2);t.FeaturesPanel=class extends n.Component{constructor(e){super(e),this.onFeatureChange=this.onFeatureChange.bind(this)}onFeatureChange(e){this.props.onFeatureChange(e.target.value)}render(){const e=["BRG1","CBX3","CBX7","C_MYC","CoREST","E2F1","ESRRB","HCFC1","HDAC1","HDAC2","KAP1","KDM2A","KDM2B","KLF4","LAMINB","LSD1","MAFK","MAX","MBD1A","MBD1B","MBD2A","MBD2T","MBD3A","MBD4","MECP2","MED1","MED12","MI2B","MLL2","NANOG","NIPBL","N_MYC","OCT4","OGT","P300","PHF19","POLII","RAD21","REST","RING1B","RNAPII.8WG16","RNAPII.S2P","RNAPII.S5P","RNAPII.S7P","RYBP","SETDB1","SIN3A","SMAD1","SMC1","SMC3","SOX2","STAT3","SUZ12","TAF1","TCF3","TCFCP2I1","TET1","ZC3H11A","ZNF384","X5fC","X5hmC","X5mC","CTCF","H2AZ","H2Aub1","H3K27ac","H3K27me3","H3K36me2","H3K36me3","H3K4me1","H3K4me2","H3K4me3","H3K79me2","H3K9ac","H3K9me3","H4K20me3","EZH2","G9A"].sort();return n.createElement(r.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px"}},n.createElement(r.FormGroup,{className:"text-center"},n.createElement(r.Label,{for:"Select"},"Features"),n.createElement(r.Input,{type:"select",defaultValue:this.props.feature,className:"text-center",onChange:this.onFeatureChange,name:"select"},e.map(e=>n.createElement("option",{key:e,value:e},e)))))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1),r=o(3),s=o(16);t.mapStateToProps=(e=>({chromosome:e.chromosome})),t.mapDispatchToProps={onChromosomeChange:r.change_chromosome},t.ChromosomesPanelContainer=n.connect(t.mapStateToProps,t.mapDispatchToProps)(s.ChromosomesPanel)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(2);t.ChromosomesPanel=class extends n.Component{constructor(e){super(e),this.onChromosomeChange=this.onChromosomeChange.bind(this)}onChromosomeChange(e){this.props.onChromosomeChange(e.target.value)}render(){return n.createElement(r.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginBottom:"15px"},className:"text-center"},n.createElement(r.FormGroup,null,n.createElement(r.Label,{for:"Select"},"Chromosomes"),n.createElement(r.Input,{type:"select",defaultValue:this.props.chromosome,className:"text-center",onChange:this.onChromosomeChange,name:"select"},["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","X","Y"].map(e=>n.createElement("option",{key:e,value:e},e)))))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1),r=o(18);t.mapStateToProps=(e=>({chromosome:e.chromosome})),t.DownloadButtonContainer=n.connect(t.mapStateToProps,null)(r.DownloadButton)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(2);t.DownloadButton=class extends n.Component{constructor(e){super(e),this.onDownload=this.onDownload.bind(this)}onDownload(e){let t="http://localhost:8080/data/chromosomes/"+this.props.chromosome+"/stdout";fetch(t).then(e=>e.json()).then(e=>{let t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=document.createElement("a");document.body.appendChild(o),o.href=window.URL.createObjectURL(t),o.setAttribute("download","chr"+this.props.chromosome+".json"),o.style.display="none",o.click(),document.body.removeChild(o)})}render(){return n.createElement("div",{className:"text-center"},n.createElement(r.Button,{outline:!0,color:"secondary",onClick:this.onDownload,style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px"}},"Download"))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1),r=o(20);t.mapStateToProps=(e=>({chromosome:e.chromosome,feature:e.feature})),t.Cytoscape_container=n.connect(t.mapStateToProps,null)(r.Cytoscape)},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,s){function a(e){try{i(n.next(e))}catch(e){s(e)}}function c(e){try{i(n.throw(e))}catch(e){s(e)}}function i(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(a,c)}i((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=o(0),s=o(21),a=o(2);o(22);t.Cytoscape=class extends r.Component{constructor(e){super(e),this.chromosomes_cache=new Map,this.state={cytoscape_loading:!0}}componentDidUpdate(e){if(this.props.chromosome!=e.chromosome)if(this.setState({cytoscape_loading:!0}),this.chromosomes_cache.has(this.props.chromosome)){let e=this.chromosomes_cache.get(this.props.chromosome),t=this;new Promise(function(o,n){setTimeout(function(){t.cy=s({container:document.getElementById("cytoscape_container"),elements:e.elements().jsons(),style:[{selector:"node",style:{"background-color":"mapData("+t.props.feature+", 0, 1, black, green)",label:"data(name)",color:"white","font-size":4,"text-valign":"center","text-halign":"center",width:35,height:35}},{selector:'node[type = "bait"]',style:{shape:"rectangle"}},{selector:'node[type = "oe"]',style:{shape:"ellipse"}}],layout:{name:"preset",animate:!1,stop:()=>t.setState({cytoscape_loading:!1})}}),t.cy.style().selector("node").style({"background-color":"mapData("+t.props.feature+", 0, 1, black, green)"}).update(),o(t.cy)},500)})}else{let e=this;new Promise(function(t,o){setTimeout(function(){e.chromosomes_cache.set(e.props.chromosome,e.buildNetwork(e)),e.cy=e.chromosomes_cache.get(e.props.chromosome),t(e.cy)},500)})}else this.props.feature!=e.feature&&this.cy.style().selector("node").style({"background-color":"mapData("+this.props.feature+", 0, 1, black, green)"}).update()}componentDidMount(){let e=this;new Promise(function(t,o){setTimeout(function(){e.chromosomes_cache.set(e.props.chromosome,e.buildNetwork(e)),e.cy=e.chromosomes_cache.get(e.props.chromosome),t(e.cy)},500)})}buildNetwork(e){return s({container:document.getElementById("cytoscape_container"),elements:function(e){return n(this,void 0,void 0,function*(){let t="http://localhost:8080/data/chromosomes/"+e.props.chromosome+"/stdout";return fetch(t).then(e=>e.json())})}(this),style:[{selector:"node",style:{"background-color":"mapData("+e.props.feature+", 0, 1, black, green)",label:"data(name)",color:"white","font-size":4,"text-valign":"center","text-halign":"center",width:35,height:35}},{selector:'node[type = "bait"]',style:{shape:"rectangle"}},{selector:'node[type = "oe"]',style:{shape:"ellipse"}},{selector:"edge",style:{width:5,"line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"triangle"}}],layout:{name:"preset",animate:!1,stop:()=>this.setState({cytoscape_loading:!1})}})}render(){return r.createElement("div",{className:"container-fluid"},r.createElement(a.Modal,{isOpen:this.state.cytoscape_loading,centered:!0,className:"text-center"},r.createElement(a.ModalBody,null,"Be patient please",r.createElement("br",null),"Rendering chromosome ",this.props.chromosome,r.createElement("div",{className:"spinner"}))),r.createElement("div",{id:"cytoscape_container",style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px"}}))}}},function(e,t){e.exports=cytoscape},function(e,t,o){var n=o(23);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(25)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(24)(!1)).push([e.i,"#cytoscape_container {\n  min-height: calc(100vh - 150px);\n  width: 100%;\n}\n\n.spinner {\n  border: 16px solid #AAAAAA;\n  border-top: 16px solid #5C5C5C;\n  border-radius: 50%;\n  position: relative;\n  left: 40%;\n  width: 100px;\n  height: 100px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),s=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(s).concat([r]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t,o){var n={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),s=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,c=0,i=[],l=o(26);function u(e,t){for(var o=0;o<e.length;o++){var r=e[o],s=n[r.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](r.parts[a]);for(;a<r.parts.length;a++)s.parts.push(y(r.parts[a],t))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(y(r.parts[a],t));n[r.id]={id:r.id,refs:1,parts:c}}}}function d(e,t){for(var o=[],n={},r=0;r<e.length;r++){var s=e[r],a=t.base?s[0]+t.base:s[0],c={css:s[1],media:s[2],sourceMap:s[3]};n[a]?n[a].parts.push(c):o.push(n[a]={id:a,parts:[c]})}return o}function p(e,t){var o=s(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=i[i.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),i.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,o);o.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=i.indexOf(e);t>=0&&i.splice(t,1)}function f(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return h(t,e.attrs),p(e,t),t}function h(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function y(e,t){var o,n,r,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var i=c++;o=a||(a=f(t)),n=v.bind(null,o,i,!1),r=v.bind(null,o,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),p(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,s=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||s)&&(n=l(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,o,t),r=function(){m(o),o.href&&URL.revokeObjectURL(o.href)}):(o=f(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){m(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=d(e,t);return u(o,t),function(e){for(var r=[],s=0;s<o.length;s++){var a=o[s];(c=n[a.id]).refs--,r.push(c)}e&&u(d(e,t),t);for(s=0;s<r.length;s++){var c;if(0===(c=r[s]).refs){for(var i=0;i<c.parts.length;i++)c.parts[i]();delete n[c.id]}}}};var b=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}();function v(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?o+s:n+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(4),r=o(28);t.chromosomes_reducer=r.chromosomes_reducer,t.DEFAULT_CHROMOSOME=r.DEFAULT_CHROMOSOME;const s=o(29);t.features_reducer=s.features_reducer,t.DEFAULT_FEATURE=s.DEFAULT_FEATURE,t.root_reducers=n.combineReducers({chromosome:r.chromosomes_reducer,feature:s.features_reducer})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(3);t.DEFAULT_CHROMOSOME="1",t.chromosomes_reducer=((e=t.DEFAULT_CHROMOSOME,o)=>{switch(o.type){case n.CHANGED_CHROMOSOME:return o.chromosome;default:return e}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(3);t.DEFAULT_FEATURE="EZH2",t.features_reducer=((e=t.DEFAULT_FEATURE,o)=>{switch(o.type){case n.CHANGED_FEATURE:return o.feature;default:return e}})}]);