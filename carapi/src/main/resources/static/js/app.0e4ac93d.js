(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"050b":function(t,e){},"09f9":function(t,e,a){},"0a69":function(t,e,a){"use strict";var n=a("56921"),i=a("a2b5"),r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"1b48":function(t,e,a){"use strict";a("2ab6")},2122:function(t,e,a){"use strict";a("09f9")},2598:function(t,e,a){},"2ab6":function(t,e,a){},"2fde":function(t,e,a){"use strict";a("5ec0")},3748:function(t,e,a){"use strict";a("b344")},56921:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" NotFoundPage ")])},i=[]},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("global-header",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}]}),a("router-view"),a("global-footer",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}]})],1)],1)},r=[],o=(a("2ca0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-footer",{staticClass:"grey lighten-3"},[a("v-container",[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Vuetify")])])],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"pink darken-1",attrs:{dark:"",absolute:"",top:"",left:"",fab:""},on:{click:function(e){t.showInquery=!0}}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-email")])],1)]}}])},[a("span",[t._v("お問い合わせ")])])],1)],1)],1)],1)}),s=[],l={data:function(){return{}}},c=l,d=a("2877"),u=a("6544"),v=a.n(u),p=a("8336"),f=a("62ad"),m=a("a523"),h=a("553a"),g=a("132d"),b=a("0fd9"),_=a("3a2f"),V=Object(d["a"])(c,o,s,!1,null,"1b0b1c0d",null),C=V.exports;v()(V,{VBtn:p["a"],VCol:f["a"],VContainer:m["a"],VFooter:h["a"],VIcon:g["a"],VRow:b["a"],VTooltip:_["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{color:"white",id:"global-header"}},[a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",[t._v("DeadOrPorn")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.expandSearchBar=!t.expandSearchBar}}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""}},[a("v-badge",{attrs:{content:"2",value:"2",color:"red darken-4",overlap:""}},[a("v-icon",[t._v("mdi-heart")])],1)],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-expand-transition",[a("search-bar",{directives:[{name:"show",rawName:"v-show",value:t.expandSearchBar,expression:"expandSearchBar"}]})],1)],1)},x=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{id:"search-bar",height:"auto"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"input-box"},[a("v-chip-group",t._l(t.searchTags,(function(e){return a("v-chip",{key:e,attrs:{close:""}},[t._v(" "+t._s(e)+" ")])})),1)],1),a("v-col",{attrs:{cols:"auto","align-self":"end"}},[a("v-btn",{attrs:{large:"",dark:""}},[t._v(" SEARCH ")])],1)],1),a("v-row",[a("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(e){return a("v-chip",{key:e},[t._v(t._s(e))])})),1)],1)],1)],1)},T=[],k=(a("cb29"),a("d81d"),{data:function(){return{tags:Array(100).fill().map((function(t,e){return"タグ"+e})),searchTags:[]}}}),A=k,P=(a("d68f"),a("cc20")),F=a("ef9a"),S=a("71d9"),j=Object(d["a"])(A,y,T,!1,null,"04432b9a",null),O=j.exports;v()(j,{VBtn:p["a"],VChip:P["a"],VChipGroup:F["a"],VCol:f["a"],VContainer:m["a"],VRow:b["a"],VToolbar:S["a"]});var M={components:{SearchBar:O},data:function(){return{expandSearchBar:!1}}},L=M,$=(a("c8c0"),a("40dc")),I=a("4ca6"),D=a("0789"),E=a("2fa4"),R=a("2a7f"),B=Object(d["a"])(L,w,x,!1,null,"72d4b09a",null),U=B.exports;v()(B,{VAppBar:$["a"],VBadge:I["a"],VBtn:p["a"],VExpandTransition:D["a"],VIcon:g["a"],VSpacer:E["a"],VToolbarTitle:R["a"]});var N={components:{GlobalFooter:C,GlobalHeader:U},data:function(){return{ADMIN_PREFIX:"/admin",isAdmin:!1}},created:function(){this.updateRoute()},watch:{$route:"updateRoute"},methods:{updateRoute:function(){this.isAdmin=this.$route.path.startsWith(this.ADMIN_PREFIX)}}},H=N,G=(a("5c0b"),a("7496")),q=a("a75b"),Y=Object(d["a"])(H,i,r,!1,null,null,null),z=Y.exports;v()(Y,{VApp:G["a"],VContent:q["a"]});var J=a("f309");n["a"].use(J["a"]);var X=new J["a"]({}),W=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-navigation-drawer",{attrs:{permanent:""}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" Application ")]),a("v-list-item-subtitle",[t._v(" subtext ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.menus,(function(e){return a("v-list-item",{key:e,attrs:{link:""}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1),a("v-col",{attrs:{cols:"10"}},[a("list-screen")],1)],1)],1)},Q=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.tmp,(function(e){return a("v-col",{key:e,staticClass:"p-0",attrs:{cols:"3"}},[a("router-link",{attrs:{to:"/movies/"+e}},[a("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[a("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}}),a("v-card-text",[t._v(" aaaa ")])],1)],1)],1)})),1)],1)},tt=[],et={data:function(){return{tmp:Array(12).fill().map((function(t,e){return e}))}}},at=et,nt=a("b0af"),it=a("99d9"),rt=a("adda"),ot=Object(d["a"])(at,Z,tt,!1,null,"0d4261f8",null),st=ot.exports;v()(ot,{VCard:nt["a"],VCardText:it["c"],VCol:f["a"],VContainer:m["a"],VImg:rt["a"],VRow:b["a"]});var lt={components:{ListScreen:st},data:function(){return{menus:Array(24).fill().map((function(t,e){return"メニュー"+e}))}}},ct=lt,dt=a("ce7e"),ut=a("8860"),vt=a("da13"),pt=a("5d23"),ft=a("f774"),mt=Object(d["a"])(ct,K,Q,!1,null,"e8e87ed2",null),ht=mt.exports;v()(mt,{VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VList:ut["a"],VListItem:vt["a"],VListItemContent:pt["a"],VListItemSubtitle:pt["b"],VListItemTitle:pt["c"],VNavigationDrawer:ft["a"],VRow:b["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"ps-3"},[a("v-col",{staticClass:"pa-0",attrs:{cols:"9"}},[a("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[a("div",{staticClass:"iframe-wrapper"},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/AaYTtj2LFFw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn",{attrs:{color:"pink darken-1",dark:""}},[t._v("コレダレ")]),a("v-btn",{attrs:{color:"pink darken-1",dark:""}},[t._v("お気に入りに保存")]),a("v-btn",{attrs:{color:"gray lighten-1",dark:""}},[t._v("動画が見られません")])],1)],1),a("v-card-title",[t._v("Creepy Nuts / 板の上の魔物【MV】")]),a("v-card-subtitle",{attrs:{align:"start"}},[t._v(" サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。 ")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[a("v-chip",[t._v("5:30PM")]),a("v-chip",[t._v("7:30PM")]),a("v-chip",[t._v("8:00PM")]),a("v-chip",[t._v("9:00PM")])],1)],1),a("v-divider"),t._v(" aaa ")],1)],1),a("v-col",{staticClass:"pa-0",attrs:{cols:"3"}},[a("recommended-movies-side-bar")],1)],1)],1)},bt=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{width:"100%"}},[a("v-subheader",[t._v("関連動画")]),a("v-list-item-group",t._l(t.movies,(function(e){return a("v-list-item",{key:e},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[a("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),a("v-col",[a("h5",[t._v("関連動画テストタイトル")])])],1)],1)],1)})),1),a("v-subheader",[t._v("おすすめ動画")]),a("v-list-item-group",t._l(t.movies,(function(e){return a("v-list-item",{key:e},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[a("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),a("v-col",[a("h5",[t._v("おすすめ動画テストタイトル")])])],1)],1)],1)})),1)],1)},Vt=[],Ct={data:function(){return{movies:Array(6).fill().map((function(t,e){return e}))}}},wt=Ct,xt=a("1baa"),yt=a("e0c7"),Tt=Object(d["a"])(wt,_t,Vt,!1,null,"28cf4d8d",null),kt=Tt.exports;v()(Tt,{VCol:f["a"],VContainer:m["a"],VImg:rt["a"],VList:ut["a"],VListItem:vt["a"],VListItemGroup:xt["a"],VRow:b["a"],VSubheader:yt["a"]});var At={components:{RecommendedMoviesSideBar:kt},data:function(){return{movieId:this.$route.params.id}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){}}},Pt=At,Ft=(a("c9f4"),Object(d["a"])(Pt,gt,bt,!1,null,"c89ea5a8",null)),St=Ft.exports;v()(Ft,{VBtn:p["a"],VCard:nt["a"],VCardSubtitle:it["b"],VCardText:it["c"],VCardTitle:it["d"],VChip:P["a"],VChipGroup:F["a"],VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VRow:b["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("admin-page-layout",[a("template",{slot:"content"},[a("v-toolbar",{attrs:{elevation:"0"}},[a("v-toolbar-title",[t._v("動画一覧")]),a("v-spacer"),a("movie-addition-form")],1),a("admin-movie-list",{attrs:{displayMovies:this.displayMovies,totalCount:this.totalCount}}),a("v-container",[a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:this.totalPageCount,"total-visible":7},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],1)],2)},Ot=[],Mt=(a("a4d3"),a("e01a"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",[t._v(" 0 - "+t._s(t.totalCount)+" 件表示 / "+t._s(t.totalCount)+" 件中 "),t._l(t.displayMovies,(function(t){return a("admin-movie-list-item",{key:t.title,attrs:{movie:t}})}))],2)}),Lt=[],$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-divider"),a("v-list-item",[a("v-container",{staticClass:"pl-0 pr-0",attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg",width:"100%"}})],1),a("v-col",{staticClass:"py-0 pb-0",attrs:{cols:"6"}},[a("h5",[t._v(t._s(t.movie.title))]),a("h6",{staticClass:"gray-subtitle"},[t._v(t._s(t.movie.description))]),a("v-chip-group",{attrs:{mandatory:""}},[a("v-chip",{attrs:{small:""}},[t._v("タグ1")]),a("v-chip",{attrs:{small:""}},[t._v("タグ1")]),a("v-chip",{attrs:{small:""}},[t._v("タグ1")]),a("v-chip",{attrs:{small:""}},[t._v("タグ1")])],1)],1),a("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"3","align-self":"center"}},[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",[t._v("views")]),a("td",[t._v("100")])]),a("tr",[a("td",[t._v("favs")]),a("td",[t._v("100")])]),a("tr",[a("td",[t._v("lists")]),a("td",[t._v("100")])]),a("tr",[a("td",[t._v("comm")]),a("td",[t._v("100")])])])]},proxy:!0}])})],1),a("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"1"}},[a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"indigo"}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"indigo"}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)},It=[],Dt={props:["movie"]},Et=Dt,Rt=(a("2122"),a("1f4f")),Bt=Object(d["a"])(Et,$t,It,!1,null,"78e6291b",null),Ut=Bt.exports;v()(Bt,{VBtn:p["a"],VChip:P["a"],VChipGroup:F["a"],VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VIcon:g["a"],VImg:rt["a"],VListItem:vt["a"],VRow:b["a"],VSimpleTable:Rt["a"]});var Nt={components:{AdminMovieListItem:Ut},props:["displayMovies","totalCount"],data:function(){return{}}},Ht=Nt,Gt=Object(d["a"])(Ht,Mt,Lt,!1,null,"088fd548",null),qt=Gt.exports;v()(Gt,{VList:ut["a"]});var Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"800",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"pink darken-1",fab:"",dark:"",small:""}},"v-btn",i,!1),n),[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)]}}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",[t._v("動画追加フォーム")]),a("v-spacer"),a("v-card-subtitle",{staticClass:"text-align-left"},[t._v(" 追加したい動画に関する情報を入力してください。追加した動画は承認後に投稿されます。 ")]),a("v-card-text",{staticClass:"text-align-left"},[a("v-chip-group",{attrs:{column:""}},[a("v-chip",{attrs:{color:"orange",label:"",outlined:""}},[t._v("PORNHUB")])],1)],1),a("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pt-0"},[a("v-text-field",{attrs:{label:"動画のオリジナルURL",filled:"",rules:t.urlRules},on:{change:function(e){return t.onInputTextField(e)}},model:{value:t.originalUrl,callback:function(e){t.originalUrl=e},expression:"originalUrl"}})],1)],1),t.didFetch?a("v-divider",{staticClass:"mx-4 mb-4"}):t._e(),t.isFetching?a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e(),t.didFetch?a("v-row",[a("v-col",{staticClass:"pt-0"},[a("v-text-field",{attrs:{label:"動画タイトル",filled:"",rules:[function(t){return!!t||"title is requred"}]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1):t._e(),t.didFetch?a("v-row",[a("v-col",{staticClass:"pt-0 mb-4"},[a("div",{staticClass:"iframe-responsive"},[a("iframe",{attrs:{src:t.embeddedUrl,frameborder:"0",scrolling:"no",allowfullscreen:""}})])])],1):t._e(),t.didFetch?a("v-row",[a("v-col",{staticClass:"pt-0"},[a("v-textarea",{attrs:{filled:"",label:"説明文"}})],1)],1):t._e(),t.didFetch?a("v-autocomplete",{attrs:{filled:"",chips:"","small-chips":"",label:"タグ",items:t.convertListTag(t.tags),"item-text":"name","item-value":"name",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",t._b({attrs:{close:"","input-value":e.selected},on:{click:e.select,"click:close":function(a){return t.removeSelectedTag(e.item)}}},"v-chip",e.attrs,!1),[t._v(" "+t._s(e.item.name)+" ")])]}},{key:"item",fn:function(e){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.item.name)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.item.parent)}})],1)]}}],null,!1,1281283359),model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}}):t._e()],1),a("v-card-actions",[t._v(" "+t._s(t.selectedTags)+" "),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{color:"grey lighten-1"},on:{click:t.cancel}},[t._v(" キャンセル ")]),t.didFetch?t._e():a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.valid,color:"pink lighten-3"},on:{click:t.fetchMore}},[t._v(" 情報取得 ")]),t.didFetch?a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.valid,color:"pink darken-1"},on:{click:t.submit}},[t._v(" 動画を追加 ")]):t._e()],1)],1)],1)],1)},zt=[],Jt=(a("5db7"),a("c975"),a("a434"),a("73d9"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("bc3a")),Xt=a.n(Jt),Wt={data:function(){var t=this;return{showDialog:!1,isFetching:!1,didFetch:!1,originalUrl:null,title:null,embeddedUrl:null,valid:!0,urlPattern:/https?:\/\/([\w-]+.)+[\w-]+(\/[\w- .?%&=]*)?/,urlRules:[function(t){return!!t||"original url is requred"},function(e){return t.validateUrl(e)||"invalid url format"}],selectedTags:[],tags:[]}},beforeMount:function(){this.fetchTag()},methods:{fetchMore:function(){this.$refs.form.validate()&&this.fetchMovie(this.originalUrl)},submit:function(){console.log("submit"),this.$refs.form.validate()&&console.log("validated")},cancel:function(){this.$refs.form.resetValidation(),this.resetMovie(),this.showDialog=!1},onInputTextField:function(t){console.log(t),console.log(this.$refs.form.validate()),this.didFetch=!1},validateUrl:function(t){return this.urlPattern.test(t)},fetchMovie:function(t){var e=this;this.isFetching=!0,this.title=null;var a=new URL(t),n=a.hostname;if("jp.pornhub.com"==n){console.log("エンドポイントを叩く");var i="/api/admin/fetch/movies";Xt.a.post(i,{urlString:t}).then((function(t){console.log(t.status),e.originalUrl=t.data.sourceUrl,e.title=t.data.title,e.embeddedUrl=t.data.embeddedUrl,e.isFetching=!1,e.didFetch=!0})).catch((function(){console.log("取得できませんでした."),e.didFetch=!1,e.isFetching=!1}))}},fetchTag:function(){var t=this,e="/api/admin/tags";Xt.a.get(e).then((function(e){console.log("fetched: "+e.data),console.log("converted: "+t.convertListTag(e.data)),t.tags=e.data}))},resetMovie:function(){this.originalUrl=null,this.title=null,this.embeddedUrl=null,this.didFetch=!1},convertListTag:function(t){return t.flatMap((function(t){return t.children.map((function(e){return{name:e.name,parent:t.name}}))}))},removeSelectedTag:function(t){var e=this.selectedTags.indexOf(t.name);e>=0&&this.selectedTags.splice(e,1)}}},Kt=Wt,Qt=(a("3748"),a("c6a6")),Zt=a("169a"),te=a("4bd4"),ee=a("490a"),ae=a("8654"),ne=a("a844"),ie=Object(d["a"])(Kt,Yt,zt,!1,null,"020002a3",null),re=ie.exports;v()(ie,{VAutocomplete:Qt["a"],VBtn:p["a"],VCard:nt["a"],VCardActions:it["a"],VCardSubtitle:it["b"],VCardText:it["c"],VCardTitle:it["d"],VChip:P["a"],VChipGroup:F["a"],VCol:f["a"],VContainer:m["a"],VDialog:Zt["a"],VDivider:dt["a"],VForm:te["a"],VIcon:g["a"],VListItemContent:pt["a"],VListItemSubtitle:pt["b"],VListItemTitle:pt["c"],VProgressCircular:ee["a"],VRow:b["a"],VSpacer:E["a"],VTextField:ae["a"],VTextarea:ne["a"]});var oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("admin-header"),a("v-sheet",{staticClass:"overflow-y-auto",attrs:{height:t.windowHeight,id:"scrolling-techniques"}},[a("v-sheet",{attrs:{height:"112"}}),t._t("content"),a("admin-footer")],2)],1)},se=[],le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:"",color:"grey darken-4",dark:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Vuetify")])])],1)},ce=[],de={},ue=de,ve=Object(d["a"])(ue,le,ce,!1,null,"11bd11c8",null),pe=ve.exports;v()(ve,{VCol:f["a"],VFooter:h["a"]});var fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{absolute:"","scroll-target":"#scrolling-techniques",color:"gray darken-4",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{"align-with-title":""}},[a("v-tab",{attrs:{to:"/admin/movies"}},[t._v("動画管理")]),a("v-tab",{attrs:{to:"/admin/tags"}},[t._v("タグ管理")]),a("v-tab",{attrs:{to:"/admin/report"}},[t._v("レポート")])],1)]},proxy:!0}])},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("DeadOrPornAdmin")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1)},me=[],he={},ge=he,be=a("5bc1"),_e=a("71a3"),Ve=a("fe57"),Ce=Object(d["a"])(ge,fe,me,!1,null,"4f7a07e2",null),we=Ce.exports;v()(Ce,{VAppBar:$["a"],VAppBarNavIcon:be["a"],VBtn:p["a"],VIcon:g["a"],VSpacer:E["a"],VTab:_e["a"],VTabs:Ve["a"],VToolbarTitle:R["a"]});var xe={components:{AdminHeader:we,AdminFooter:pe},data:function(){return{windowHeight:window.innerHeight}}},ye=xe,Te=a("8dd9"),ke=Object(d["a"])(ye,oe,se,!1,null,"1f9ab16a",null),Ae=ke.exports;v()(ke,{VSheet:Te["a"]});var Pe=function(t,e,a){this.id=t||void 0,this.title=e||void 0,this.description=a||void 0},Fe=Pe,Se={components:{AdminPageLayout:Ae,MovieAdditionForm:re,AdminMovieList:qt},data:function(){return{page:1,limit:20,totalCount:0,totalPageCount:0,displayMovies:[]}},beforeMount:function(){this.fetchMovies()},methods:{fetchMovies:function(){var t=this,e="/api/admin/movies?page=".concat(this.page,"&limit=").concat(this.limit);Xt.a.get(e).then((function(e){t.totalCount=e.data.totalCount,t.totalPageCount=e.data.totalPageCount,t.displayMovies=e.data.movieList.map((function(t){return new Fe(t.articleId,t.title,t.description)}))}))}}},je=Se,Oe=(a("2fde"),a("891e")),Me=Object(d["a"])(je,jt,Ot,!1,null,"1f235106",null),Le=Me.exports;v()(Me,{VContainer:m["a"],VPagination:Oe["a"],VSpacer:E["a"],VToolbar:S["a"],VToolbarTitle:R["a"]});var $e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("admin-page-layout",[a("template",{slot:"content"},[a("v-toolbar",{attrs:{elevation:"0"}},[a("v-toolbar-title",[t._v("タグ一覧")]),a("v-spacer"),a("tag-addition-form",{attrs:{type:"AddParent"},on:{reset:t.resetTagList}})],1),a("v-divider"),a("admin-tag-list",{attrs:{"tags-prop":t.tags},on:{reset:t.resetTagList}})],1)],2)},Ie=[],De=a("2909"),Ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"pa-0",attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"4"}},[a("v-treeview",{attrs:{items:t.tags,rounded:"",activatable:"",hoverable:"",active:t.active,color:"pink lighten-2",dense:""},on:{"update:active":function(e){t.active=e}},scopedSlots:t._u([{key:"prepend",fn:function(e){var n=e.item;return[n.children?t._e():a("v-icon",[t._v(" mdi-tag ")])]}}])})],1),a("v-divider",{attrs:{vertical:""}}),a("v-col",{staticClass:"text-left"},[a("admin-tag-detail",{attrs:{tag:t.activeTag},on:{reset:t.resetTagList}})],1)],1)],1)},Re=[],Be=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[t.tag?a("div",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("h2",[t._v(t._s(t.tag.name))]),a("v-spacer"),a("tag-addition-form",{attrs:{type:"AddChild",parentTag:t.tag},on:{reset:t.resetTagList}})],1)],1)],1):a("div",{staticClass:"false-container"},[a("v-icon",[t._v("mdi-tag")]),t._v(" 親タグを選択してください ")],1)])}),Ue=[],Ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"800",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"pink darken-1",dark:""}},"v-btn",i,!1),n),[t._v(" "+t._s(t.buttonText)+" ")])]}}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-card-title",[t._v(t._s(t.titleText))]),a("v-spacer"),a("v-card-subtitle",{staticClass:"text-align-left"},[t._v(t._s(t.descriptionText))]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"pt-0"},[a("v-text-field",{attrs:{label:"追加タグ名",filled:"",rules:[function(t){return!!t||"名前を入力してください。"}]},model:{value:t.tagName,callback:function(e){t.tagName=e},expression:"tagName"}})],1),"AddChild"==t.type?a("v-col",{staticClass:"pt-0"},[a("v-text-field",{attrs:{label:"親タグ名",filled:"",value:t.parentTag.name,readonly:""}})],1):t._e()],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey lighten-1",dark:""},on:{click:t.cancel}},[t._v(" キャンセル ")]),a("v-btn",{attrs:{color:"pink darken-1",dark:""},on:{click:t.submit}},[t._v(" タグを追加 ")])],1)],1)],1)},He=[],Ge={props:["type","parentTag"],data:function(){return{showDialog:!1,valid:!0,tagName:null}},computed:{buttonText:function(){return"AddChild"==this.type?"小タグを追加":"AddParent"==this.type?"親タグを追加":"謎のボタン"},titleText:function(){return"AddChild"==this.type?"タグ追加フォーム":"AddParent"==this.type?"親タグ追加フォーム":"謎のフォーム"},descriptionText:function(){return"AddChild"==this.type?"タグを追加します。親タグは指定する必要があります。":"AddParent"==this.type?"最も階層が上の親タグを追加します。(現状親子関係は階層1つまでに制限)":"謎のフォーム"},parentTagId:function(){return null!=this.parentTag?this.parentTag.id:null}},methods:{resetForm:function(){this.$refs.form.resetValidation(),this.tagName=null},cancel:function(){this.$refs.form.resetValidation(),this.resetForm(),this.showDialog=!1},submit:function(){this.$refs.form.validate(),this.addParentTag(),this.resetForm(),this.showDialog=!1},addParentTag:function(){var t=this,e="/api/admin/tags";Xt.a.post(e,{name:this.tagName,parentTagId:this.parentTagId}).then((function(){t.$emit("reset")}))}}},qe=Ge,Ye=(a("c8a7"),Object(d["a"])(qe,Ne,He,!1,null,"f0f4ea86",null)),ze=Ye.exports;v()(Ye,{VBtn:p["a"],VCard:nt["a"],VCardActions:it["a"],VCardSubtitle:it["b"],VCardTitle:it["d"],VCol:f["a"],VContainer:m["a"],VDialog:Zt["a"],VForm:te["a"],VRow:b["a"],VSpacer:E["a"],VTextField:ae["a"]});var Je={props:["tag"],components:{TagAdditionForm:ze},methods:{resetTagList:function(){this.$emit("reset")}}},Xe=Je,We=(a("1b48"),Object(d["a"])(Xe,Be,Ue,!1,null,null,null)),Ke=We.exports;v()(We,{VContainer:m["a"],VIcon:g["a"],VRow:b["a"],VSpacer:E["a"]});var Qe={components:{AdminTagDetail:Ke},props:["tagsProp"],data:function(){return{active:[],tags:[]}},computed:{activeTag:function(){var t=this;return this.tags.filter((function(e){return null!=e&&e.id==t.active[0]})).shift()}},watch:{tagsProp:function(t){var e;this.tags.splice(0,this.tags.length),(e=this.tags).push.apply(e,Object(De["a"])(t))}},methods:{resetTagList:function(){this.$emit("reset")}}},Ze=Qe,ta=a("eb2a"),ea=Object(d["a"])(Ze,Ee,Re,!1,null,"5bae0a03",null),aa=ea.exports;v()(ea,{VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VIcon:g["a"],VRow:b["a"],VTreeview:ta["a"]});var na={components:{AdminPageLayout:Ae,TagAdditionForm:ze,AdminTagList:aa},data:function(){return{tags:[]}},beforeMount:function(){this.fetchTags()},methods:{updateTag:function(t){var e;this.tags.splice(0,this.tags.length),(e=this.tags).push.apply(e,Object(De["a"])(t))},fetchTags:function(){var t=this,e="/api/admin/tags";Xt.a.get(e).then((function(e){t.updateTag(e.data)}))},resetTagList:function(){this.fetchTags()}}},ia=na,ra=Object(d["a"])(ia,$e,Ie,!1,null,"666cba7e",null),oa=ra.exports;v()(ra,{VDivider:dt["a"],VSpacer:E["a"],VToolbar:S["a"],VToolbarTitle:R["a"]});var sa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("admin-page-layout",[a("template",{slot:"content"},[a("v-container",[a("div",[t._v("ReportPage")])])],1)],2)},la=[],ca={components:{AdminPageLayout:Ae}},da=ca,ua=Object(d["a"])(da,sa,la,!1,null,"558394c7",null),va=ua.exports;v()(ua,{VContainer:m["a"]});var pa=a("0a69");n["a"].use(W["a"]);var fa=[{path:"/",name:"Index",component:ht},{path:"/movies/:id",name:"MovieDetail",component:St},{path:"/admin/movies",name:"AdminMoviesPage",component:Le},{path:"/admin/tags",name:"AdminTagsPage",component:oa},{path:"/admin/report",name:"AdminReportPage",component:va},{path:"/admin*",redirect:"/admin/movies"},{path:"*",name:"NotFoundPage",component:pa["default"]}],ma=new W["a"]({mode:"history",base:"/",routes:fa}),ha=ma,ga=a("2f62");n["a"].use(ga["a"]);var ba=new ga["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({vuetify:X,router:ha,store:ba,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5ec0":function(t,e,a){},"6a30":function(t,e,a){},"7a29":function(t,e,a){},"8aeb":function(t,e,a){},"9c0c":function(t,e,a){},a2b5:function(t,e,a){"use strict";var n=a("050b"),i=a.n(n);e["default"]=i.a},b344:function(t,e,a){},c8a7:function(t,e,a){"use strict";a("6a30")},c8c0:function(t,e,a){"use strict";a("8aeb")},c9f4:function(t,e,a){"use strict";a("7a29")},d68f:function(t,e,a){"use strict";a("2598")}});
//# sourceMappingURL=app.0e4ac93d.js.map