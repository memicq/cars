(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],v=0,d=[];v<c.length;v++)i=c[v],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1c0c":function(t,e,a){},2598:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("global-header"),a("router-view"),a("global-footer")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"grey lighten-2"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Vuetify")])])],1)},c=[],s={},l=s,u=a("2877"),v=a("6544"),d=a.n(v),p=a("62ad"),f=a("553a"),m=Object(u["a"])(l,i,c,!1,null,"6477be78",null),h=m.exports;d()(m,{VCol:p["a"],VFooter:f["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{color:"white",id:"global-header"}},[a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",[t._v("DeadOrPorn")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.expandSearchBar=!t.expandSearchBar}}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""}},[a("v-badge",{attrs:{content:"2",value:"2",color:"red darken-4",overlap:""}},[a("v-icon",[t._v("mdi-heart")])],1)],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-expand-transition",[a("search-bar",{directives:[{name:"show",rawName:"v-show",value:t.expandSearchBar,expression:"expandSearchBar"}]})],1)],1)},_=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{id:"search-bar",height:"auto"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"input-box"},[a("v-chip-group",t._l(t.searchTags,(function(e){return a("v-chip",{key:e,attrs:{close:""}},[t._v(" "+t._s(e)+" ")])})),1)],1),a("v-col",{attrs:{cols:"auto","align-self":"end"}},[a("v-btn",{attrs:{large:"",dark:""}},[t._v(" SEARCH ")])],1)],1),a("v-row",[a("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(e){return a("v-chip",{key:e},[t._v(t._s(e))])})),1)],1)],1)],1)},w=[],g=(a("cb29"),a("d81d"),{data:function(){return{tags:Array(100).fill().map((function(t,e){return"タグ"+e})),searchTags:[]}}}),y=g,C=(a("d68f"),a("8336")),x=a("cc20"),O=a("ef9a"),j=a("a523"),S=a("0fd9"),k=a("71d9"),T=Object(u["a"])(y,V,w,!1,null,"04432b9a",null),B=T.exports;d()(T,{VBtn:C["a"],VChip:x["a"],VChipGroup:O["a"],VCol:p["a"],VContainer:j["a"],VRow:S["a"],VToolbar:k["a"]});var $={components:{SearchBar:B},data:function(){return{expandSearchBar:!1}}},A=$,E=(a("c8c0"),a("40dc")),I=a("4ca6"),L=a("0789"),D=a("132d"),P=a("2fa4"),R=a("2a7f"),M=Object(u["a"])(A,b,_,!1,null,"72d4b09a",null),F=M.exports;d()(M,{VAppBar:E["a"],VBadge:I["a"],VBtn:C["a"],VExpandTransition:L["a"],VIcon:D["a"],VSpacer:P["a"],VToolbarTitle:R["a"]});var G={components:{GlobalFooter:h,GlobalHeader:F}},H=G,J=(a("5c0b"),a("7496")),N=a("a75b"),Y=Object(u["a"])(H,n,o,!1,null,null,null),q=Y.exports;d()(Y,{VApp:J["a"],VContent:N["a"]});var z=a("f309");r["a"].use(z["a"]);var K=new z["a"]({}),Q=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-navigation-drawer",{attrs:{permanent:""}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" Application ")]),a("v-list-item-subtitle",[t._v(" subtext ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.menus,(function(e){return a("v-list-item",{key:e,attrs:{link:""}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1),a("v-col",{attrs:{cols:"10"}},[a("list-screen")],1)],1)],1)},W=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.tmp,(function(e){return a("v-col",{key:e,staticClass:"p-0",attrs:{cols:"3"}},[a("router-link",{attrs:{to:"/movies/"+e}},[a("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[a("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}}),a("v-card-text",[t._v(" aaaa ")])],1)],1)],1)})),1)],1)},Z=[],tt={data:function(){return{tmp:Array(12).fill().map((function(t,e){return e}))}}},et=tt,at=a("b0af"),rt=a("99d9"),nt=a("adda"),ot=Object(u["a"])(et,X,Z,!1,null,"0d4261f8",null),it=ot.exports;d()(ot,{VCard:at["a"],VCardText:rt["a"],VCol:p["a"],VContainer:j["a"],VImg:nt["a"],VRow:S["a"]});var ct={components:{ListScreen:it},data:function(){return{menus:Array(24).fill().map((function(t,e){return"メニュー"+e}))}}},st=ct,lt=a("ce7e"),ut=a("8860"),vt=a("da13"),dt=a("5d23"),pt=a("f774"),ft=Object(u["a"])(st,U,W,!1,null,"e8e87ed2",null),mt=ft.exports;d()(ft,{VCol:p["a"],VContainer:j["a"],VDivider:lt["a"],VList:ut["a"],VListItem:vt["a"],VListItemContent:dt["a"],VListItemSubtitle:dt["b"],VListItemTitle:dt["c"],VNavigationDrawer:pt["a"],VRow:S["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-app-bar")],1)},bt=[],_t={},Vt=_t,wt=Object(u["a"])(Vt,ht,bt,!1,null,"46d4646d",null),gt=wt.exports;d()(wt,{VAppBar:E["a"],VContainer:j["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ps-3"},[a("v-col",{staticClass:"pa-0",attrs:{cols:"9"}},[a("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[a("div",{staticClass:"iframe-wrapper"},[a("iframe",{attrs:{src:"https://www.youtube.com/embed/AaYTtj2LFFw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("v-card-title",[t._v("Cafe Badilico")]),a("v-card-text")],1)],1),a("v-col",{staticClass:"pa-0",attrs:{cols:"3"}},[a("recommended-movies-side-bar")],1)],1)],1)},Ct=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{width:"100%"}},[a("v-subheader",[t._v("関連動画")]),a("v-list-item-group",t._l(t.movies,(function(e){return a("v-list-item",{key:e},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[a("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),a("v-col",[a("h5",[t._v("関連動画テストタイトル")])])],1)],1)],1)})),1),a("v-subheader",[t._v("おすすめ動画")]),a("v-list-item-group",t._l(t.movies,(function(e){return a("v-list-item",{key:e},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[a("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),a("v-col",[a("h5",[t._v("おすすめ動画テストタイトル")])])],1)],1)],1)})),1)],1)},Ot=[],jt={data:function(){return{movies:Array(6).fill().map((function(t,e){return e}))}}},St=jt,kt=a("1baa"),Tt=a("e0c7"),Bt=Object(u["a"])(St,xt,Ot,!1,null,"28cf4d8d",null),$t=Bt.exports;d()(Bt,{VCol:p["a"],VContainer:j["a"],VImg:nt["a"],VList:ut["a"],VListItem:vt["a"],VListItemGroup:kt["a"],VRow:S["a"],VSubheader:Tt["a"]});var At={components:{RecommendedMoviesSideBar:$t},data:function(){return{movieId:this.$route.params.id}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){}}},Et=At,It=(a("a6fd"),Object(u["a"])(Et,yt,Ct,!1,null,"50ebde6c",null)),Lt=It.exports;d()(It,{VCard:at["a"],VCardText:rt["a"],VCardTitle:rt["b"],VCol:p["a"],VContainer:j["a"],VRow:S["a"]}),r["a"].use(Q["a"]);var Dt=[{path:"/",name:"Index",component:mt},{path:"/movies/:id",name:"MovieDetail",component:Lt},{path:"/admin",name:"Admin",component:gt}],Pt=new Q["a"]({mode:"history",base:"/",routes:Dt}),Rt=Pt,Mt=a("2f62");r["a"].use(Mt["a"]);var Ft=new Mt["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({vuetify:K,router:Rt,store:Ft,render:function(t){return t(q)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"8aeb":function(t,e,a){},"9c0c":function(t,e,a){},a6fd:function(t,e,a){"use strict";a("1c0c")},c8c0:function(t,e,a){"use strict";a("8aeb")},d68f:function(t,e,a){"use strict";a("2598")}});
//# sourceMappingURL=app.1e04ee52.js.map