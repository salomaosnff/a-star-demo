(function(e){function t(t){for(var a,s,l=t[0],o=t[1],c=t[2],p=0,d=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4af2":function(e,t,n){},"54d9":function(e,t,n){"use strict";n("4af2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"panel"},[n("h3",[e._v("MAPA")]),n("div",[n("div",{staticClass:"d-flex",staticStyle:{"align-items":"center"}},[n("span",[e._v("Tamanho: ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.state.width,expression:"state.width",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:"9"},domProps:{value:e.state.width},on:{input:[function(t){t.target.composing||e.$set(e.state,"width",e._n(t.target.value))},e.initMap],blur:function(t){return e.$forceUpdate()}}}),n("span",[e._v("x")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.state.height,expression:"state.height",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:"9"},domProps:{value:e.state.height},on:{input:[function(t){t.target.composing||e.$set(e.state,"height",e._n(t.target.value))},e.initMap],blur:function(t){return e.$forceUpdate()}}}),n("div",{staticClass:"d-flex",staticStyle:{"align-items":"center"}},[n("span",[e._v("Delay(ms)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.state.time,expression:"state.time",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"1000"},domProps:{value:e.state.time},on:{input:function(t){t.target.composing||e.$set(e.state,"time",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),n("label",[n("span",[e._v("Tipo de bloco: ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mode=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"inicio"}},[e._v("Início")]),n("option",{attrs:{value:"fim"}},[e._v("Fim")]),n("option",{attrs:{value:"parede"}},[e._v("Parede")]),n("option",{attrs:{value:"agua"}},[e._v("Água")])])]),n("button",{on:{click:e.reset}},[e._v("Limpar")]),n("button",{on:{click:e.start}},[e._v("Iniciar")]),n("button",{attrs:{disabled:!e.state.resolve||!e.debug},on:{click:e.proximo}},[e._v(" Próximo ")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.recalcule,expression:"recalcule"}],staticStyle:{flex:"0",width:"auto"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.recalcule)?e._i(e.recalcule,null)>-1:e.recalcule},on:{change:function(t){var n=e.recalcule,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&(e.recalcule=n.concat([i])):s>-1&&(e.recalcule=n.slice(0,s).concat(n.slice(s+1)))}else e.recalcule=r}}}),n("span",[e._v("Calcular em tempo real")])]),e.recalcule?e._e():n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.debug,expression:"debug"}],staticStyle:{flex:"0",width:"auto"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.debug)?e._i(e.debug,null)>-1:e.debug},on:{change:function(t){var n=e.debug,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&(e.debug=n.concat([i])):s>-1&&(e.debug=n.slice(0,s).concat(n.slice(s+1)))}else e.debug=r}}}),n("span",[e._v("Passo a passo")])])]),n("a-map",{attrs:{tiles:e.state.tiles,width:e.state.width,height:e.state.height,start:e.state.start,current:e.state.current,end:e.state.end,path:e.currentPath},on:{select:e.click}})],1),e.recalcule?e._e():n("div",{staticClass:"flex-fill"},[n("div",{staticClass:"panel"},[n("h3",[e._v("Melhor candidato")]),e.state.open.length?n("a-tile",{key:e.state.open[0].nome,attrs:{tile:e.state.open[0]}}):e._e()],1),n("div",{staticClass:"panel"},[n("h3",[e._v("Lista aberta")]),n("transition-group",{staticClass:"d-flex",attrs:{name:"tile"}},e._l(e.state.open,(function(e){return n("a-tile",{key:e.nome,attrs:{tile:e}})})),1)],1),n("div",{staticClass:"panel"},[n("h3",[e._v("Lista fechada")]),n("transition-group",{staticClass:"d-flex",attrs:{name:"tile"}},e._l(e.state.closed,(function(e){return n("a-tile",{key:e.nome,attrs:{tile:e}})})),1)],1),n("div",{staticClass:"panel"},[n("h3",[e._v("Caminho")]),n("transition-group",{staticClass:"d-flex",attrs:{name:"tile"}},e._l(e.state.path,(function(e){return n("a-tile",{key:e.nome,attrs:{tile:e}})})),1)],1)])])])},i=[],s=n("1da1");n("96cf"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("a630"),n("159b"),n("99af");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{nome:"".concat(String.fromCharCode(65+e)).concat(t+1),tipo:n,pai:null,x:e,y:t,g:0,h:0,peso:1,get f(){return this.g+this.peso*this.h},get direction(){if(!this.pai)return null;var e=this.x-this.pai.x,t=this.y-this.pai.y;return e<0?"left":e>0?"right":t<0?"top":t>0?"bottom":null}}}var o=n("b85c");n("4de4"),n("4e82"),n("caad"),n("2532");function c(e,t){var n=Math.abs(e.x-t.x),a=Math.abs(e.y-t.y);return n+a}var u=c;function p(e,t){return d.apply(this,arguments)}function d(){return d=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=[];case 1:if(!t){e.next=9;break}return a.unshift(t),t=t.pai,n.path=new Set(a),e.next=7,n.wait();case 7:e.next=1;break;case 9:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e,t){var n,a,r,i,s=t.x,l=t.y,o=l-1,c=s-1,u=l+1,p=s+1;return[null===(n=e[o])||void 0===n?void 0:n[s],null===(a=e[l])||void 0===a?void 0:a[p],null===(r=e[u])||void 0===r?void 0:r[s],null===(i=e[l])||void 0===i?void 0:i[c]].filter((function(e){return e&&"parede"!==e.tipo}))}function h(e){return m.apply(this,arguments)}function m(){return m=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,i,s,l,c,d,h,m,v,b,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.tiles,a=t.start,r=t.end,i=t.closed,s=t.wait,l=n[a.y][a.x],c=n[r.y][r.x],t.open=[l],t.closed=new Set;case 5:if(!t.open.length){e.next=46;break}return e.next=8,s();case 8:if(d=t.open.shift(),t.current=d,!i.has(d)){e.next=12;break}return e.abrupt("continue",5);case 12:if(t.closed=new Set(i.add(d)),d.x!==r.x||d.y!==r.y){e.next=19;break}return t.resolve=null,t.reject=null,e.next=18,p(d,t);case 18:return e.abrupt("return");case 19:h=f(n,d,t),m=d.g+1,v=Object(o["a"])(h),e.prev=22,v.s();case 24:if((b=v.n()).done){e.next=33;break}if(g=b.value,!i.has(g)){e.next=28;break}return e.abrupt("continue",31);case 28:return e.next=30,s();case 30:t.open.includes(g)||(g.pai=d,g.g=m,g.h=u(c,g),t.open.push(g));case 31:e.next=24;break;case 33:e.next=38;break;case 35:e.prev=35,e.t0=e["catch"](22),v.e(e.t0);case 38:return e.prev=38,v.f(),e.finish(38);case 41:return e.next=43,s();case 43:t.open.sort((function(e,t){return e.f-t.f})),e.next=5;break;case 46:return t.current=null,t.resolve=null,t.reject=null,e.abrupt("return",null);case 50:case"end":return e.stop()}}),e,null,[[22,35,38,41]])}))),m.apply(this,arguments)}var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map",style:{"--width":e.width,"--height":e.height}},[e._l(e.tiles,(function(t,a){return e._l(t,(function(t,r){return n("a-tile",{key:a+"_"+r,attrs:{tile:t,active:e.current===t,path:e.path.has(t),start:e.start,end:e.end,direction:t.direction},nativeOn:{mousedown:function(n){return e.select(t)}}})}))}))],2)},b=[],g=(n("a9e3"),function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return t.tile?a("div",{class:["map__tile","map__tile--"+t.tile.tipo,(e={},e["map__tile--"+t.direction]=!!t.direction,e["map__tile--visited"]=0!==t.tile.f,e["map__tile--active"]=t.active,e["map__tile--start"]=t.tile.x===t.start.x&&t.tile.y===t.start.y,e["map__tile--end"]=t.tile.x===t.end.x&&t.tile.y===t.end.y,e["map__tile--path"]=t.path,e)]},[a("span",{staticClass:"label"},[t._v(t._s(t.tile.nome))]),0!==t.tile.f?[a("span",{staticClass:"f"},[t._v(t._s(t.tile.f.toFixed(0)))]),a("span",{staticClass:"g"},[t._v(t._s(t.tile.g.toFixed(0)))]),a("span",{staticClass:"h"},[t._v(t._s(t.tile.h.toFixed(0)))])]:t._e()],2):t._e()}),x=[],y={props:{tile:Object,active:Boolean,path:Boolean,direction:String,start:{type:Object,default:function(){return{x:-1,y:-1}}},end:{type:Object,default:function(){return{x:-1,y:-1}}}}},_=y,w=(n("a93c"),n("2877")),k=Object(w["a"])(_,g,x,!1,null,null,null),j=k.exports,O={components:{ATile:j},props:{tiles:Array,width:Number,height:Number,start:Object,current:Object,end:Object,path:Set,tileSize:{type:Number,default:64}},data:function(){return{mousedown:!0}},methods:{select:function(e){this.$emit("select",e)}}},C=O,S=(n("54d9"),Object(w["a"])(C,v,b,!1,null,null,null)),P=S.exports,A={name:"App",components:{AMap:P,ATile:j},data:function(){return{mode:"parede",debug:!1,recalcule:!1,state:{path:new Set,current:null,tiles:[],open:[],closed:new Set,width:5,height:5,start:{x:0,y:3},end:{x:4,y:2},resolve:null,reject:null,promise:null,time:16,wait:function(){return null}}}},methods:{initMap:function(){var e=this;this.state.tiles=Array.from({length:this.state.height},(function(t,n){return Array.from({length:e.state.width},(function(e,t){return l(t,n)}))})),this.reset()},wait:function(){var e=this;return new Promise((function(t,n){e.state.resolve=t,e.state.reject=n,e.recalcule?t():e.debug||setTimeout(t,e.state.time)}))},click:function(e){"inicio"===this.mode?this.state.start={x:e.x,y:e.y}:"fim"===this.mode?this.state.end={x:e.x,y:e.y}:e.tipo===this.mode?(e.tipo=null,e.peso=1):"agua"===this.mode?(e.tipo="agua",e.peso=1.5):(e.tipo=this.mode,e.peso=1),this.recalcule&&this.start()},proximo:function(){this.state.resolve()},start:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.reset(),e.state.wait=e.wait,e.state.path=new Set,t.next=5,h(e.state);case 5:case"end":return t.stop()}}),t)})))()},reset:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.state.tiles.forEach((function(e){e.forEach((function(e){e.pai=null,e.g=0,e.h=0}))})),null===(n=(a=e.state).reject)||void 0===n||n.call(a,"cancelled"),e.state.resolve=null,e.state.reject=null,e.state.current=null,e.state.path=new Set,e.state.open=[],e.state.closed=new Set;case 8:case"end":return t.stop()}}),t)})))()}},created:function(){this.initMap()},computed:{currentPath:function(){return this.state.path}}},M=A,$=(n("5c0b"),Object(w["a"])(M,r,i,!1,null,null,null)),N=$.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("d8dc")},"638c":function(e,t,n){},a93c:function(e,t,n){"use strict";n("638c")},d8dc:function(e,t,n){}});
//# sourceMappingURL=app.bb415bf2.js.map