(function(t){function a(a){for(var n,o,s=a[0],l=a[1],c=a[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,s=1;s<e.length;s++){var l=e[s];0!==i[l]&&(n=!1)}n&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},i={app:0},r=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"050b":function(t,a){},"09f9":function(t,a,e){},"0a69":function(t,a,e){"use strict";var n=e("56921"),i=e("a2b5"),r=e("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=o.exports},"1b48":function(t,a,e){"use strict";e("2ab6")},2122:function(t,a,e){"use strict";e("09f9")},2598:function(t,a,e){},"2ab6":function(t,a,e){},"2f63":function(t,a,e){},"2fde":function(t,a,e){"use strict";e("5ec0")},"3aa9":function(t,a,e){"use strict";e("f837")},56921:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v(" NotFoundPage ")])},i=[]},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-content",[e("global-header",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}]}),e("router-view"),e("global-footer",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}]})],1)],1)},r=[],o=(e("2ca0"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-footer",{staticClass:"grey lighten-3"},[e("v-container",[e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Vuetify")])])],1),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"pink darken-1",attrs:{dark:"",absolute:"",top:"",left:"",fab:""},on:{click:function(a){t.showInquery=!0}}},"v-btn",i,!1),n),[e("v-icon",[t._v("mdi-email")])],1)]}}])},[e("span",[t._v("お問い合わせ")])])],1)],1)],1)],1)}),s=[],l={data:function(){return{}}},c=l,d=e("2877"),u=e("6544"),v=e.n(u),p=e("8336"),f=e("62ad"),m=e("a523"),h=e("553a"),g=e("132d"),b=e("0fd9"),_=e("3a2f"),V=Object(d["a"])(c,o,s,!1,null,"1b0b1c0d",null),C=V.exports;v()(V,{VBtn:p["a"],VCol:f["a"],VContainer:m["a"],VFooter:h["a"],VIcon:g["a"],VRow:b["a"],VTooltip:_["a"]});var w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-app-bar",{attrs:{color:"white",id:"global-header"}},[e("router-link",{attrs:{to:"/"}},[e("v-toolbar-title",[t._v("DeadOrPorn")])],1),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(a){t.expandSearchBar=!t.expandSearchBar}}},[e("v-icon",[t._v("mdi-magnify")])],1),e("v-btn",{attrs:{icon:""}},[e("v-badge",{attrs:{content:"2",value:"2",color:"red darken-4",overlap:""}},[e("v-icon",[t._v("mdi-heart")])],1)],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-dots-vertical")])],1)],1),e("v-expand-transition",[e("search-bar",{directives:[{name:"show",rawName:"v-show",value:t.expandSearchBar,expression:"expandSearchBar"}]})],1)],1)},x=[],y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar",{attrs:{id:"search-bar",height:"auto"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"input-box"},[e("v-chip-group",t._l(t.searchTags,(function(a){return e("v-chip",{key:a,attrs:{close:""}},[t._v(" "+t._s(a)+" ")])})),1)],1),e("v-col",{attrs:{cols:"auto","align-self":"end"}},[e("v-btn",{attrs:{large:"",dark:""}},[t._v(" SEARCH ")])],1)],1),e("v-row",[e("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(a){return e("v-chip",{key:a},[t._v(t._s(a))])})),1)],1)],1)],1)},k=[],T=(e("cb29"),e("d81d"),{data:function(){return{tags:Array(100).fill().map((function(t,a){return"タグ"+a})),searchTags:[]}}}),A=T,P=(e("d68f"),e("cc20")),j=e("ef9a"),F=e("71d9"),O=Object(d["a"])(A,y,k,!1,null,"04432b9a",null),S=O.exports;v()(O,{VBtn:p["a"],VChip:P["a"],VChipGroup:j["a"],VCol:f["a"],VContainer:m["a"],VRow:b["a"],VToolbar:F["a"]});var M={components:{SearchBar:S},data:function(){return{expandSearchBar:!1}}},$=M,I=(e("c8c0"),e("40dc")),D=e("4ca6"),E=e("0789"),R=e("2fa4"),L=e("2a7f"),B=Object(d["a"])($,w,x,!1,null,"72d4b09a",null),U=B.exports;v()(B,{VAppBar:I["a"],VBadge:D["a"],VBtn:p["a"],VExpandTransition:E["a"],VIcon:g["a"],VSpacer:R["a"],VToolbarTitle:L["a"]});var N={components:{GlobalFooter:C,GlobalHeader:U},data:function(){return{ADMIN_PREFIX:"/admin",isAdmin:!1}},created:function(){this.updateRoute()},watch:{$route:"updateRoute"},methods:{updateRoute:function(){this.isAdmin=this.$route.path.startsWith(this.ADMIN_PREFIX)}}},G=N,H=(e("5c0b"),e("7496")),q=e("a75b"),Y=Object(d["a"])(G,i,r,!1,null,null,null),z=Y.exports;v()(Y,{VApp:H["a"],VContent:q["a"]});var J=e("f309");n["a"].use(J["a"]);var X=new J["a"]({}),W=e("8c4f"),K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"2"}},[e("v-navigation-drawer",{attrs:{permanent:""}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" Application ")]),e("v-list-item-subtitle",[t._v(" subtext ")])],1)],1),e("v-divider"),e("v-list",{attrs:{dense:"",nav:""}},t._l(t.menus,(function(a){return e("v-list-item",{key:a,attrs:{link:""}},[t._v(" "+t._s(a)+" ")])})),1)],1)],1),e("v-col",{attrs:{cols:"10"}},[e("list-screen")],1)],1)],1)},Q=[],Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",t._l(t.tmp,(function(a){return e("v-col",{key:a,staticClass:"p-0",attrs:{cols:"3"}},[e("router-link",{attrs:{to:"/movies/"+a}},[e("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[e("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}}),e("v-card-text",[t._v(" aaaa ")])],1)],1)],1)})),1)],1)},tt=[],at={data:function(){return{tmp:Array(12).fill().map((function(t,a){return a}))}}},et=at,nt=e("b0af"),it=e("99d9"),rt=e("adda"),ot=Object(d["a"])(et,Z,tt,!1,null,"0d4261f8",null),st=ot.exports;v()(ot,{VCard:nt["a"],VCardText:it["c"],VCol:f["a"],VContainer:m["a"],VImg:rt["a"],VRow:b["a"]});var lt={components:{ListScreen:st},data:function(){return{menus:Array(24).fill().map((function(t,a){return"メニュー"+a}))}}},ct=lt,dt=e("ce7e"),ut=e("8860"),vt=e("da13"),pt=e("5d23"),ft=e("f774"),mt=Object(d["a"])(ct,K,Q,!1,null,"e8e87ed2",null),ht=mt.exports;v()(mt,{VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VList:ut["a"],VListItem:vt["a"],VListItemContent:pt["a"],VListItemSubtitle:pt["b"],VListItemTitle:pt["c"],VNavigationDrawer:ft["a"],VRow:b["a"]});var gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"ps-3"},[e("v-col",{staticClass:"pa-0",attrs:{cols:"9"}},[e("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[e("div",{staticClass:"iframe-wrapper"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/AaYTtj2LFFw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-btn",{attrs:{color:"pink darken-1",dark:""}},[t._v("コレダレ")]),e("v-btn",{attrs:{color:"pink darken-1",dark:""}},[t._v("お気に入りに保存")]),e("v-btn",{attrs:{color:"gray lighten-1",dark:""}},[t._v("動画が見られません")])],1)],1),e("v-card-title",[t._v("Creepy Nuts / 板の上の魔物【MV】")]),e("v-card-subtitle",{attrs:{align:"start"}},[t._v(" サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。 ")]),e("v-card-text",[e("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(a){t.selection=a},expression:"selection"}},[e("v-chip",[t._v("5:30PM")]),e("v-chip",[t._v("7:30PM")]),e("v-chip",[t._v("8:00PM")]),e("v-chip",[t._v("9:00PM")])],1)],1),e("v-divider"),t._v(" aaa ")],1)],1),e("v-col",{staticClass:"pa-0",attrs:{cols:"3"}},[e("recommended-movies-side-bar")],1)],1)],1)},bt=[],_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list",{attrs:{width:"100%"}},[e("v-subheader",[t._v("関連動画")]),e("v-list-item-group",t._l(t.movies,(function(a){return e("v-list-item",{key:a},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[e("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),e("v-col",[e("h5",[t._v("関連動画テストタイトル")])])],1)],1)],1)})),1),e("v-subheader",[t._v("おすすめ動画")]),e("v-list-item-group",t._l(t.movies,(function(a){return e("v-list-item",{key:a},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[e("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),e("v-col",[e("h5",[t._v("おすすめ動画テストタイトル")])])],1)],1)],1)})),1)],1)},Vt=[],Ct={data:function(){return{movies:Array(6).fill().map((function(t,a){return a}))}}},wt=Ct,xt=e("1baa"),yt=e("e0c7"),kt=Object(d["a"])(wt,_t,Vt,!1,null,"28cf4d8d",null),Tt=kt.exports;v()(kt,{VCol:f["a"],VContainer:m["a"],VImg:rt["a"],VList:ut["a"],VListItem:vt["a"],VListItemGroup:xt["a"],VRow:b["a"],VSubheader:yt["a"]});var At={components:{RecommendedMoviesSideBar:Tt},data:function(){return{movieId:this.$route.params.id}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){}}},Pt=At,jt=(e("c9f4"),Object(d["a"])(Pt,gt,bt,!1,null,"c89ea5a8",null)),Ft=jt.exports;v()(jt,{VBtn:p["a"],VCard:nt["a"],VCardSubtitle:it["b"],VCardText:it["c"],VCardTitle:it["d"],VChip:P["a"],VChipGroup:j["a"],VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VRow:b["a"]});var Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("admin-page-layout",[e("template",{slot:"content"},[e("v-toolbar",{attrs:{elevation:"0"}},[e("v-toolbar-title",[t._v("動画一覧")]),e("v-spacer"),e("movie-addition-form")],1),e("admin-movie-list",{attrs:{displayMovies:this.displayMovies,totalCount:this.totalCount}}),e("v-container",[e("div",{staticClass:"text-center"},[e("v-pagination",{attrs:{length:this.totalPageCount,"total-visible":7},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)])],1)],2)},St=[],Mt=(e("a4d3"),e("e01a"),e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list",[t._v(" 0 - "+t._s(t.totalCount)+" 件表示 / "+t._s(t.totalCount)+" 件中 "),t._l(t.displayMovies,(function(t){return e("admin-movie-list-item",{key:t.title,attrs:{movie:t}})}))],2)}),$t=[],It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-divider"),e("v-list-item",[e("v-container",{staticClass:"pl-0 pr-0",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg",width:"100%"}})],1),e("v-col",{staticClass:"py-0 pb-0",attrs:{cols:"6"}},[e("h5",[t._v(t._s(t.movie.title))]),e("h6",{staticClass:"gray-subtitle"},[t._v(t._s(t.movie.description))]),e("v-chip-group",{attrs:{mandatory:""}},[e("v-chip",{attrs:{small:""}},[t._v("タグ1")]),e("v-chip",{attrs:{small:""}},[t._v("タグ1")]),e("v-chip",{attrs:{small:""}},[t._v("タグ1")]),e("v-chip",{attrs:{small:""}},[t._v("タグ1")])],1)],1),e("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"3","align-self":"center"}},[e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",[e("tr",[e("td",[t._v("views")]),e("td",[t._v("100")])]),e("tr",[e("td",[t._v("favs")]),e("td",[t._v("100")])]),e("tr",[e("td",[t._v("lists")]),e("td",[t._v("100")])]),e("tr",[e("td",[t._v("comm")]),e("td",[t._v("100")])])])]},proxy:!0}])})],1),e("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"1"}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"indigo"}},[e("v-icon",[t._v("mdi-pencil")])],1),e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"indigo"}},[e("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)},Dt=[],Et={props:["movie"]},Rt=Et,Lt=(e("2122"),e("1f4f")),Bt=Object(d["a"])(Rt,It,Dt,!1,null,"78e6291b",null),Ut=Bt.exports;v()(Bt,{VBtn:p["a"],VChip:P["a"],VChipGroup:j["a"],VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VIcon:g["a"],VImg:rt["a"],VListItem:vt["a"],VRow:b["a"],VSimpleTable:Lt["a"]});var Nt={components:{AdminMovieListItem:Ut},props:["displayMovies","totalCount"],data:function(){return{}}},Gt=Nt,Ht=Object(d["a"])(Gt,Mt,$t,!1,null,"088fd548",null),qt=Ht.exports;v()(Ht,{VList:ut["a"]});var Yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"800",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"pink darken-1",fab:"",dark:"",small:""}},"v-btn",i,!1),n),[e("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)]}}]),model:{value:t.showDialog,callback:function(a){t.showDialog=a},expression:"showDialog"}},[e("v-card",[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-card-title",[t._v("動画追加フォーム")]),e("v-spacer"),e("v-card-subtitle",{staticClass:"text-align-left"},[t._v(" 追加したい動画に関する情報を入力してください。追加した動画は承認後に投稿されます。 ")]),e("v-card-text",{staticClass:"text-align-left"},[e("v-chip-group",{attrs:{column:""}},[e("v-chip",{attrs:{color:"orange",label:"",outlined:""}},[t._v("PORNHUB")])],1)],1),e("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pt-0"},[e("v-text-field",{attrs:{label:"動画のオリジナルURL",filled:"",rules:t.urlRules},on:{change:function(a){return t.onInputTextField(a)}},model:{value:t.originalUrl,callback:function(a){t.originalUrl=a},expression:"originalUrl"}})],1)],1),t.didFetch?e("v-divider",{staticClass:"mx-4 mb-4"}):t._e(),t.isFetching?e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e(),t.didFetch?e("v-row",[e("v-col",{staticClass:"pt-0"},[e("v-text-field",{attrs:{label:"動画タイトル",filled:"",rules:[function(t){return!!t||"title is requred"}]},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}})],1)],1):t._e(),t.didFetch?e("v-row",[e("v-col",{staticClass:"pt-0 mb-4"},[e("div",{staticClass:"iframe-responsive"},[e("iframe",{attrs:{src:t.embeddedUrl,frameborder:"0",scrolling:"no",allowfullscreen:""}})])])],1):t._e(),t.didFetch?e("v-row",[e("v-col",{staticClass:"pt-0"},[e("v-textarea",{attrs:{filled:"",label:"説明文"}})],1)],1):t._e()],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"white--text",attrs:{color:"grey lighten-1"},on:{click:t.cancel}},[t._v(" キャンセル ")]),t.didFetch?t._e():e("v-btn",{staticClass:"white--text",attrs:{disabled:!t.valid,color:"pink lighten-3"},on:{click:t.fetchMore}},[t._v(" 情報取得 ")]),t.didFetch?e("v-btn",{staticClass:"white--text",attrs:{disabled:!t.valid,color:"pink darken-1"},on:{click:t.submit}},[t._v(" 動画を追加 ")]):t._e()],1)],1)],1)],1)},zt=[],Jt=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("bc3a")),Xt=e.n(Jt),Wt={data:function(){var t=this;return{showDialog:!1,isFetching:!1,didFetch:!1,originalUrl:null,title:null,embeddedUrl:null,valid:!0,urlPattern:/https?:\/\/([\w-]+.)+[\w-]+(\/[\w- .?%&=]*)?/,urlRules:[function(t){return!!t||"original url is requred"},function(a){return t.validateUrl(a)||"invalid url format"}]}},methods:{fetchMore:function(){this.$refs.form.validate()&&this.fetchMovie(this.originalUrl)},submit:function(){console.log("submit"),this.$refs.form.validate()&&console.log("validated")},cancel:function(){this.$refs.form.resetValidation(),this.resetMovie(),this.showDialog=!1},onInputTextField:function(t){console.log(t),console.log(this.$refs.form.validate()),this.didFetch=!1},validateUrl:function(t){return this.urlPattern.test(t)},fetchMovie:function(t){var a=this;this.isFetching=!0,this.title=null;var e=new URL(t),n=e.hostname;if("jp.pornhub.com"==n){console.log("エンドポイントを叩く");var i="/api/admin/fetch/movies";Xt.a.post(i,{urlString:t}).then((function(t){console.log(t.status),a.originalUrl=t.data.sourceUrl,a.title=t.data.title,a.embeddedUrl=t.data.embeddedUrl,a.isFetching=!1,a.didFetch=!0})).catch((function(){console.log("取得できませんでした."),a.didFetch=!1,a.isFetching=!1}))}},resetMovie:function(){this.originalUrl=null,this.title=null,this.embeddedUrl=null,this.didFetch=!1}}},Kt=Wt,Qt=(e("3aa9"),e("169a")),Zt=e("4bd4"),ta=e("490a"),aa=e("8654"),ea=e("a844"),na=Object(d["a"])(Kt,Yt,zt,!1,null,"11246bf0",null),ia=na.exports;v()(na,{VBtn:p["a"],VCard:nt["a"],VCardActions:it["a"],VCardSubtitle:it["b"],VCardText:it["c"],VCardTitle:it["d"],VChip:P["a"],VChipGroup:j["a"],VCol:f["a"],VContainer:m["a"],VDialog:Qt["a"],VDivider:dt["a"],VForm:Zt["a"],VIcon:g["a"],VProgressCircular:ta["a"],VRow:b["a"],VSpacer:R["a"],VTextField:aa["a"],VTextarea:ea["a"]});var ra=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-header"),e("v-sheet",{staticClass:"overflow-y-auto",attrs:{height:t.windowHeight,id:"scrolling-techniques"}},[e("v-sheet",{attrs:{height:"112"}}),t._t("content"),e("admin-footer")],2)],1)},oa=[],sa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{attrs:{padless:"",color:"grey darken-4",dark:""}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Vuetify")])])],1)},la=[],ca={},da=ca,ua=Object(d["a"])(da,sa,la,!1,null,"11bd11c8",null),va=ua.exports;v()(ua,{VCol:f["a"],VFooter:h["a"]});var pa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app-bar",{attrs:{absolute:"","scroll-target":"#scrolling-techniques",color:"gray darken-4",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[e("v-tabs",{attrs:{"align-with-title":""}},[e("v-tab",{attrs:{to:"/admin/movies"}},[t._v("動画管理")]),e("v-tab",{attrs:{to:"/admin/tags"}},[t._v("タグ管理")]),e("v-tab",{attrs:{to:"/admin/report"}},[t._v("レポート")])],1)]},proxy:!0}])},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[t._v("DeadOrPornAdmin")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-magnify")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-heart")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-dots-vertical")])],1)],1)},fa=[],ma={},ha=ma,ga=e("5bc1"),ba=e("71a3"),_a=e("fe57"),Va=Object(d["a"])(ha,pa,fa,!1,null,"4f7a07e2",null),Ca=Va.exports;v()(Va,{VAppBar:I["a"],VAppBarNavIcon:ga["a"],VBtn:p["a"],VIcon:g["a"],VSpacer:R["a"],VTab:ba["a"],VTabs:_a["a"],VToolbarTitle:L["a"]});var wa={components:{AdminHeader:Ca,AdminFooter:va},data:function(){return{windowHeight:window.innerHeight}}},xa=wa,ya=e("8dd9"),ka=Object(d["a"])(xa,ra,oa,!1,null,"1f9ab16a",null),Ta=ka.exports;v()(ka,{VSheet:ya["a"]});var Aa=function(t,a,e){this.id=t||void 0,this.title=a||void 0,this.description=e||void 0},Pa=Aa,ja={components:{AdminPageLayout:Ta,MovieAdditionForm:ia,AdminMovieList:qt},data:function(){return{page:1,limit:20,totalCount:0,totalPageCount:0,displayMovies:[]}},beforeMount:function(){this.fetchMovies()},methods:{fetchMovies:function(){var t=this,a="/api/admin/movies?page=".concat(this.page,"&limit=").concat(this.limit);Xt.a.get(a).then((function(a){t.totalCount=a.data.totalCount,t.totalPageCount=a.data.totalPageCount,t.displayMovies=a.data.movieList.map((function(t){return new Pa(t.articleId,t.title,t.description)}))}))}}},Fa=ja,Oa=(e("2fde"),e("891e")),Sa=Object(d["a"])(Fa,Ot,St,!1,null,"1f235106",null),Ma=Sa.exports;v()(Sa,{VContainer:m["a"],VPagination:Oa["a"],VSpacer:R["a"],VToolbar:F["a"],VToolbarTitle:L["a"]});var $a=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("admin-page-layout",[e("template",{slot:"content"},[e("v-toolbar",{attrs:{elevation:"0"}},[e("v-toolbar-title",[t._v("タグ一覧")]),e("v-spacer"),e("tag-addition-form",{attrs:{type:"AddParent"},on:{reset:t.resetTagList}})],1),e("v-divider"),e("admin-tag-list",{attrs:{"tags-prop":t.tags}})],1)],2)},Ia=[],Da=(e("a434"),e("2909")),Ea=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[t._v(" "+t._s(t.active)+" "),e("v-row",{staticClass:"pa-0",attrs:{justify:"space-between"}},[e("v-col",{attrs:{cols:"4"}},[e("v-treeview",{attrs:{items:t.tags,active:t.active,activatable:"",color:"pink lighten-2"},on:{"update:active":function(a){t.active=a}},scopedSlots:t._u([{key:"prepend",fn:function(a){var n=a.item;return[n.children?t._e():e("v-icon",[t._v(" mdi-tag ")])]}}])})],1),e("v-divider",{attrs:{vertical:""}}),e("v-col",{staticClass:"text-left"},[e("admin-tag-detail",{attrs:{tag:t.activeTag}})],1)],1)],1)},Ra=[],La=(e("4de4"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[t.tag?e("div",[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("h2",[t._v(t._s(t.tag.name))]),e("v-spacer"),e("tag-addition-form",{attrs:{type:"AddChild",parentTag:t.tag}})],1)],1)],1):e("div",{staticClass:"false-container"},[e("v-icon",[t._v("mdi-tag")]),t._v(" タグを選択してください ")],1)])}),Ba=[],Ua=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"800",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"pink darken-1",dark:""}},"v-btn",i,!1),n),[t._v(" "+t._s(t.buttonText)+" ")])]}}]),model:{value:t.showDialog,callback:function(a){t.showDialog=a},expression:"showDialog"}},[e("v-card",[e("v-card-title",[t._v(t._s(t.titleText))]),e("v-spacer"),e("v-card-subtitle",{staticClass:"text-align-left"},[t._v(t._s(t.descriptionText))]),e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pt-0"},[e("v-text-field",{attrs:{label:"追加タグ名",filled:"",rules:[function(t){return!!t||"名前を入力してください。"}]},model:{value:t.tagName,callback:function(a){t.tagName=a},expression:"tagName"}})],1),"AddChild"==t.type?e("v-col",{staticClass:"pt-0"},[e("v-text-field",{attrs:{label:"親タグ名",filled:"",value:t.parentTag.name,readonly:""}})],1):t._e()],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"grey lighten-1",dark:""},on:{click:t.cancel}},[t._v(" キャンセル ")]),e("v-btn",{attrs:{color:"pink darken-1",dark:""},on:{click:t.submit}},[t._v(" タグを追加 ")])],1)],1)],1)},Na=[],Ga={props:["type","parentTag"],data:function(){return{showDialog:!1,valid:!0,tagName:null}},computed:{buttonText:function(){return"AddChild"==this.type?"小タグを追加":"AddParent"==this.type?"親タグを追加":"謎のボタン"},titleText:function(){return"AddChild"==this.type?"タグ追加フォーム":"AddParent"==this.type?"親タグ追加フォーム":"謎のフォーム"},descriptionText:function(){return"AddChild"==this.type?"タグを追加します。親タグは指定する必要があります。":"AddParent"==this.type?"最も階層が上の親タグを追加します。(現状親子関係は階層1つまでに制限)":"謎のフォーム"},parentTagId:function(){return null!=this.parentTag?this.parentTag.id:null}},methods:{cancel:function(){this.$refs.form.resetValidation(),this.showDialog=!1},submit:function(){this.$refs.form.validate(),this.addParentTag(),this.showDialog=!1},addParentTag:function(){var t=this,a="/api/admin/tags/parent";Xt.a.post(a,{name:this.tagName,parentTagId:this.parentTagId}).then((function(){t.$emit("reset")}))}}},Ha=Ga,qa=(e("914b"),Object(d["a"])(Ha,Ua,Na,!1,null,"2d7d53f4",null)),Ya=qa.exports;v()(qa,{VBtn:p["a"],VCard:nt["a"],VCardActions:it["a"],VCardSubtitle:it["b"],VCardTitle:it["d"],VCol:f["a"],VContainer:m["a"],VDialog:Qt["a"],VForm:Zt["a"],VRow:b["a"],VSpacer:R["a"],VTextField:aa["a"]});var za={props:["tag"],components:{TagAdditionForm:Ya}},Ja=za,Xa=(e("1b48"),Object(d["a"])(Ja,La,Ba,!1,null,null,null)),Wa=Xa.exports;v()(Xa,{VContainer:m["a"],VIcon:g["a"],VRow:b["a"],VSpacer:R["a"]});var Ka={components:{AdminTagDetail:Wa},props:["tagsProp"],data:function(){return{active:[],tags:[]}},computed:{activeTag:function(){var t=this;return this.tags.filter((function(a){return null!=a&&a.id==t.active[0]})).shift()}},watch:{tagsProp:function(t){var a;this.tags.splice(0,this.tags.length),(a=this.tags).push.apply(a,Object(Da["a"])(t))}}},Qa=Ka,Za=e("eb2a"),te=Object(d["a"])(Qa,Ea,Ra,!1,null,"4580dd30",null),ae=te.exports;v()(te,{VCol:f["a"],VContainer:m["a"],VDivider:dt["a"],VIcon:g["a"],VRow:b["a"],VTreeview:Za["a"]});var ee={components:{AdminPageLayout:Ta,TagAdditionForm:Ya,AdminTagList:ae},data:function(){return{tags:[]}},beforeMount:function(){this.fetchTags()},methods:{updateTag:function(t){var a;this.tags.splice(0,this.tags.length),(a=this.tags).push.apply(a,Object(Da["a"])(t))},fetchTags:function(){var t=this,a="/api/admin/tags/parent";Xt.a.get(a).then((function(a){t.updateTag(a.data)}))},resetTagList:function(){this.fetchTags()}}},ne=ee,ie=Object(d["a"])(ne,$a,Ia,!1,null,"5458105b",null),re=ie.exports;v()(ie,{VDivider:dt["a"],VSpacer:R["a"],VToolbar:F["a"],VToolbarTitle:L["a"]});var oe=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("admin-page-layout",[e("template",{slot:"content"},[e("v-container",[e("div",[t._v("ReportPage")])])],1)],2)},se=[],le={components:{AdminPageLayout:Ta}},ce=le,de=Object(d["a"])(ce,oe,se,!1,null,"558394c7",null),ue=de.exports;v()(de,{VContainer:m["a"]});var ve=e("0a69");n["a"].use(W["a"]);var pe=[{path:"/",name:"Index",component:ht},{path:"/movies/:id",name:"MovieDetail",component:Ft},{path:"/admin/movies",name:"AdminMoviesPage",component:Ma},{path:"/admin/tags",name:"AdminTagsPage",component:re},{path:"/admin/report",name:"AdminReportPage",component:ue},{path:"/admin*",redirect:"/admin/movies"},{path:"*",name:"NotFoundPage",component:ve["default"]}],fe=new W["a"]({mode:"history",base:"/",routes:pe}),me=fe,he=e("2f62");n["a"].use(he["a"]);var ge=new he["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({vuetify:X,router:me,store:ge,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";e("9c0c")},"5ec0":function(t,a,e){},"7a29":function(t,a,e){},"8aeb":function(t,a,e){},"914b":function(t,a,e){"use strict";e("2f63")},"9c0c":function(t,a,e){},a2b5:function(t,a,e){"use strict";var n=e("050b"),i=e.n(n);a["default"]=i.a},c8c0:function(t,a,e){"use strict";e("8aeb")},c9f4:function(t,a,e){"use strict";e("7a29")},d68f:function(t,a,e){"use strict";e("2598")},f837:function(t,a,e){}});
//# sourceMappingURL=app.8f4ff94c.js.map