(function(t){function a(a){for(var i,o,s=a[0],l=a[1],c=a[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,s=1;s<e.length;s++){var l=e[s];0!==n[l]&&(i=!1)}i&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},n={app:0},r=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"050b":function(t,a){},"09f9":function(t,a,e){},"0a69":function(t,a,e){"use strict";var i=e("56921"),n=e("a2b5"),r=e("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);a["default"]=o.exports},2122:function(t,a,e){"use strict";e("09f9")},2598:function(t,a,e){},"3d1e":function(t,a,e){"use strict";e("7973")},56921:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v(" NotFoundPage ")])},n=[]},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-content",[e("global-header",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}]}),e("router-view"),e("global-footer",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}]})],1)],1)},r=[],o=(e("2ca0"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-footer",{staticClass:"grey lighten-3"},[e("v-container",[e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Vuetify")])])],1),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"pink darken-1",attrs:{dark:"",absolute:"",top:"",left:"",fab:""},on:{click:function(a){t.showInquery=!0}}},"v-btn",n,!1),i),[e("v-icon",[t._v("mdi-email")])],1)]}}])},[e("span",[t._v("お問い合わせ")])])],1)],1)],1)],1)}),s=[],l={data:function(){}},c=l,d=e("2877"),u=e("6544"),v=e.n(u),m=e("8336"),p=e("62ad"),f=e("a523"),h=e("553a"),g=e("132d"),b=e("0fd9"),_=e("3a2f"),V=Object(d["a"])(c,o,s,!1,null,"238d9ab8",null),C=V.exports;v()(V,{VBtn:m["a"],VCol:p["a"],VContainer:f["a"],VFooter:h["a"],VIcon:g["a"],VRow:b["a"],VTooltip:_["a"]});var w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-app-bar",{attrs:{color:"white",id:"global-header"}},[e("router-link",{attrs:{to:"/"}},[e("v-toolbar-title",[t._v("DeadOrPorn")])],1),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(a){t.expandSearchBar=!t.expandSearchBar}}},[e("v-icon",[t._v("mdi-magnify")])],1),e("v-btn",{attrs:{icon:""}},[e("v-badge",{attrs:{content:"2",value:"2",color:"red darken-4",overlap:""}},[e("v-icon",[t._v("mdi-heart")])],1)],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-dots-vertical")])],1)],1),e("v-expand-transition",[e("search-bar",{directives:[{name:"show",rawName:"v-show",value:t.expandSearchBar,expression:"expandSearchBar"}]})],1)],1)},y=[],x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar",{attrs:{id:"search-bar",height:"auto"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"input-box"},[e("v-chip-group",t._l(t.searchTags,(function(a){return e("v-chip",{key:a,attrs:{close:""}},[t._v(" "+t._s(a)+" ")])})),1)],1),e("v-col",{attrs:{cols:"auto","align-self":"end"}},[e("v-btn",{attrs:{large:"",dark:""}},[t._v(" SEARCH ")])],1)],1),e("v-row",[e("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(a){return e("v-chip",{key:a},[t._v(t._s(a))])})),1)],1)],1)],1)},k=[],A=(e("cb29"),e("d81d"),{data:function(){return{tags:Array(100).fill().map((function(t,a){return"タグ"+a})),searchTags:[]}}}),j=A,O=(e("d68f"),e("cc20")),S=e("ef9a"),T=e("71d9"),I=Object(d["a"])(j,x,k,!1,null,"04432b9a",null),P=I.exports;v()(I,{VBtn:m["a"],VChip:O["a"],VChipGroup:S["a"],VCol:p["a"],VContainer:f["a"],VRow:b["a"],VToolbar:T["a"]});var D={components:{SearchBar:P},data:function(){return{expandSearchBar:!1}}},M=D,$=(e("c8c0"),e("40dc")),E=e("4ca6"),L=e("0789"),R=e("2fa4"),B=e("2a7f"),F=Object(d["a"])(M,w,y,!1,null,"72d4b09a",null),N=F.exports;v()(F,{VAppBar:$["a"],VBadge:E["a"],VBtn:m["a"],VExpandTransition:L["a"],VIcon:g["a"],VSpacer:R["a"],VToolbarTitle:B["a"]});var q={components:{GlobalFooter:C,GlobalHeader:N},data:function(){return{ADMIN_PREFIX:"/admin",isAdmin:!1}},created:function(){this.updateRoute()},watch:{$route:"updateRoute"},methods:{updateRoute:function(){this.isAdmin=this.$route.path.startsWith(this.ADMIN_PREFIX)}}},G=q,H=(e("5c0b"),e("7496")),Y=e("a75b"),J=Object(d["a"])(G,n,r,!1,null,null,null),X=J.exports;v()(J,{VApp:H["a"],VContent:Y["a"]});var U=e("f309");i["a"].use(U["a"]);var W=new U["a"]({}),z=e("8c4f"),K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"2"}},[e("v-navigation-drawer",{attrs:{permanent:""}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" Application ")]),e("v-list-item-subtitle",[t._v(" subtext ")])],1)],1),e("v-divider"),e("v-list",{attrs:{dense:"",nav:""}},t._l(t.menus,(function(a){return e("v-list-item",{key:a,attrs:{link:""}},[t._v(" "+t._s(a)+" ")])})),1)],1)],1),e("v-col",{attrs:{cols:"10"}},[e("list-screen")],1)],1)],1)},Q=[],Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",t._l(t.tmp,(function(a){return e("v-col",{key:a,staticClass:"p-0",attrs:{cols:"3"}},[e("router-link",{attrs:{to:"/movies/"+a}},[e("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[e("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}}),e("v-card-text",[t._v(" aaaa ")])],1)],1)],1)})),1)],1)},tt=[],at={data:function(){return{tmp:Array(12).fill().map((function(t,a){return a}))}}},et=at,it=e("b0af"),nt=e("99d9"),rt=e("adda"),ot=Object(d["a"])(et,Z,tt,!1,null,"0d4261f8",null),st=ot.exports;v()(ot,{VCard:it["a"],VCardText:nt["c"],VCol:p["a"],VContainer:f["a"],VImg:rt["a"],VRow:b["a"]});var lt={components:{ListScreen:st},data:function(){return{menus:Array(24).fill().map((function(t,a){return"メニュー"+a}))}}},ct=lt,dt=e("ce7e"),ut=e("8860"),vt=e("da13"),mt=e("5d23"),pt=e("f774"),ft=Object(d["a"])(ct,K,Q,!1,null,"e8e87ed2",null),ht=ft.exports;v()(ft,{VCol:p["a"],VContainer:f["a"],VDivider:dt["a"],VList:ut["a"],VListItem:vt["a"],VListItemContent:mt["a"],VListItemSubtitle:mt["b"],VListItemTitle:mt["c"],VNavigationDrawer:pt["a"],VRow:b["a"]});var gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"ps-3"},[e("v-col",{staticClass:"pa-0",attrs:{cols:"9"}},[e("v-card",{staticClass:"rounded-0",attrs:{outlined:""}},[e("div",{staticClass:"iframe-wrapper"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/AaYTtj2LFFw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-btn",{attrs:{color:"pink darken-1",dark:""}},[t._v("コレダレ")]),e("v-btn",{attrs:{color:"pink darken-1",dark:""}},[t._v("お気に入りに保存")]),e("v-btn",{attrs:{color:"gray lighten-1",dark:""}},[t._v("動画が見られません")])],1)],1),e("v-card-title",[t._v("Creepy Nuts / 板の上の魔物【MV】")]),e("v-card-subtitle",{attrs:{align:"start"}},[t._v(" サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。 ")]),e("v-card-text",[e("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(a){t.selection=a},expression:"selection"}},[e("v-chip",[t._v("5:30PM")]),e("v-chip",[t._v("7:30PM")]),e("v-chip",[t._v("8:00PM")]),e("v-chip",[t._v("9:00PM")])],1)],1),e("v-divider"),t._v(" aaa ")],1)],1),e("v-col",{staticClass:"pa-0",attrs:{cols:"3"}},[e("recommended-movies-side-bar")],1)],1)],1)},bt=[],_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list",{attrs:{width:"100%"}},[e("v-subheader",[t._v("関連動画")]),e("v-list-item-group",t._l(t.movies,(function(a){return e("v-list-item",{key:a},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[e("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),e("v-col",[e("h5",[t._v("関連動画テストタイトル")])])],1)],1)],1)})),1),e("v-subheader",[t._v("おすすめ動画")]),e("v-list-item-group",t._l(t.movies,(function(a){return e("v-list-item",{key:a},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[e("v-img",{attrs:{src:"https://picsum.photos/id/11/500/300"}})],1),e("v-col",[e("h5",[t._v("おすすめ動画テストタイトル")])])],1)],1)],1)})),1)],1)},Vt=[],Ct={data:function(){return{movies:Array(6).fill().map((function(t,a){return a}))}}},wt=Ct,yt=e("1baa"),xt=e("e0c7"),kt=Object(d["a"])(wt,_t,Vt,!1,null,"28cf4d8d",null),At=kt.exports;v()(kt,{VCol:p["a"],VContainer:f["a"],VImg:rt["a"],VList:ut["a"],VListItem:vt["a"],VListItemGroup:yt["a"],VRow:b["a"],VSubheader:xt["a"]});var jt={components:{RecommendedMoviesSideBar:At},data:function(){return{movieId:this.$route.params.id}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){}}},Ot=jt,St=(e("c9f4"),Object(d["a"])(Ot,gt,bt,!1,null,"c89ea5a8",null)),Tt=St.exports;v()(St,{VBtn:m["a"],VCard:it["a"],VCardSubtitle:nt["b"],VCardText:nt["c"],VCardTitle:nt["d"],VChip:O["a"],VChipGroup:S["a"],VCol:p["a"],VContainer:f["a"],VDivider:dt["a"],VRow:b["a"]});var It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("admin-page-layout",[e("template",{slot:"content"},[e("v-toolbar",{attrs:{elevation:"0"}},[e("v-toolbar-title",[t._v("動画一覧")]),e("v-spacer"),e("movie-addition-form")],1),e("admin-movie-list",{attrs:{displayMovies:this.displayMovies,totalCount:this.totalCount}}),e("v-container",[e("div",{staticClass:"text-center"},[e("v-pagination",{attrs:{length:this.totalPageCount,"total-visible":7},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)])],1)],2)},Pt=[],Dt=(e("a4d3"),e("e01a"),e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list",[t._v(" 0 - "+t._s(t.totalCount)+" 件表示 / "+t._s(t.totalCount)+" 件中 "),t._l(t.displayMovies,(function(t){return e("admin-movie-list-item",{key:t.title,attrs:{movie:t}})}))],2)}),Mt=[],$t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-divider"),e("v-list-item",[e("v-container",{staticClass:"pl-0 pr-0",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg",width:"100%"}})],1),e("v-col",{staticClass:"py-0 pb-0",attrs:{cols:"6"}},[e("h5",[t._v(t._s(t.movie.title))]),e("h6",{staticClass:"gray-subtitle"},[t._v(t._s(t.movie.description))]),e("v-chip-group",{attrs:{mandatory:""}},[e("v-chip",{attrs:{small:""}},[t._v("タグ1")]),e("v-chip",{attrs:{small:""}},[t._v("タグ1")]),e("v-chip",{attrs:{small:""}},[t._v("タグ1")]),e("v-chip",{attrs:{small:""}},[t._v("タグ1")])],1)],1),e("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"3","align-self":"center"}},[e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",[e("tr",[e("td",[t._v("views")]),e("td",[t._v("100")])]),e("tr",[e("td",[t._v("favs")]),e("td",[t._v("100")])]),e("tr",[e("td",[t._v("lists")]),e("td",[t._v("100")])]),e("tr",[e("td",[t._v("comm")]),e("td",[t._v("100")])])])]},proxy:!0}])})],1),e("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"1"}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"indigo"}},[e("v-icon",[t._v("mdi-pencil")])],1),e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"indigo"}},[e("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)},Et=[],Lt={props:["movie"]},Rt=Lt,Bt=(e("2122"),e("1f4f")),Ft=Object(d["a"])(Rt,$t,Et,!1,null,"78e6291b",null),Nt=Ft.exports;v()(Ft,{VBtn:m["a"],VChip:O["a"],VChipGroup:S["a"],VCol:p["a"],VContainer:f["a"],VDivider:dt["a"],VIcon:g["a"],VImg:rt["a"],VListItem:vt["a"],VRow:b["a"],VSimpleTable:Bt["a"]});var qt={components:{AdminMovieListItem:Nt},props:["displayMovies","totalCount"],data:function(){return{}}},Gt=qt,Ht=Object(d["a"])(Gt,Dt,Mt,!1,null,"088fd548",null),Yt=Ht.exports;v()(Ht,{VList:ut["a"]});var Jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"800",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"pink darken-1",fab:"",dark:"",small:""}},"v-btn",n,!1),i),[e("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)]}}]),model:{value:t.showDialog,callback:function(a){t.showDialog=a},expression:"showDialog"}},[e("v-card",[e("v-card-title",[t._v("動画追加フォーム")]),e("v-spacer"),e("v-card-subtitle",{staticClass:"text-align-left"},[t._v("追加したい動画に関する情報を入力してください。追加した動画は承認後に投稿されます。")]),e("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pt-0"},[e("v-text-field",{attrs:{label:"動画のオリジナルURL",filled:""}})],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"grey lighten-1",dark:""},on:{click:function(a){t.showDialog=!1}}},[t._v(" キャンセル ")]),e("v-btn",{attrs:{color:"pink darken-1",dark:""},on:{click:function(a){t.showDialog=!1}}},[t._v(" 動画を追加 ")])],1)],1)],1)},Xt=[],Ut={data:function(){return{showDialog:!1}}},Wt=Ut,zt=(e("3d1e"),e("169a")),Kt=e("8654"),Qt=Object(d["a"])(Wt,Jt,Xt,!1,null,"7e74351c",null),Zt=Qt.exports;v()(Qt,{VBtn:m["a"],VCard:it["a"],VCardActions:nt["a"],VCardSubtitle:nt["b"],VCardTitle:nt["d"],VCol:p["a"],VContainer:f["a"],VDialog:zt["a"],VIcon:g["a"],VRow:b["a"],VSpacer:R["a"],VTextField:Kt["a"]});var ta=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-header"),e("v-sheet",{staticClass:"overflow-y-auto",attrs:{height:t.windowHeight,id:"scrolling-techniques"}},[e("v-sheet",{attrs:{height:"112"}}),t._t("content"),e("admin-footer")],2)],1)},aa=[],ea=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{attrs:{padless:"",color:"grey darken-4",dark:""}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Vuetify")])])],1)},ia=[],na={},ra=na,oa=Object(d["a"])(ra,ea,ia,!1,null,"11bd11c8",null),sa=oa.exports;v()(oa,{VCol:p["a"],VFooter:h["a"]});var la=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app-bar",{attrs:{absolute:"","scroll-target":"#scrolling-techniques",color:"gray darken-4",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[e("v-tabs",{attrs:{"align-with-title":""}},[e("v-tab",{attrs:{to:"/admin/movies"}},[t._v("動画管理")]),e("v-tab",{attrs:{to:"/admin/tags"}},[t._v("タグ管理")]),e("v-tab",{attrs:{to:"/admin/report"}},[t._v("レポート")])],1)]},proxy:!0}])},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[t._v("DeadOrPornAdmin")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-magnify")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-heart")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-dots-vertical")])],1)],1)},ca=[],da={},ua=da,va=e("5bc1"),ma=e("71a3"),pa=e("fe57"),fa=Object(d["a"])(ua,la,ca,!1,null,"4f7a07e2",null),ha=fa.exports;v()(fa,{VAppBar:$["a"],VAppBarNavIcon:va["a"],VBtn:m["a"],VIcon:g["a"],VSpacer:R["a"],VTab:ma["a"],VTabs:pa["a"],VToolbarTitle:B["a"]});var ga={components:{AdminHeader:ha,AdminFooter:sa},data:function(){return{windowHeight:window.innerHeight}}},ba=ga,_a=e("8dd9"),Va=Object(d["a"])(ba,ta,aa,!1,null,"1f9ab16a",null),Ca=Va.exports;v()(Va,{VSheet:_a["a"]});var wa=e("bc3a"),ya=e.n(wa),xa=function(t,a,e){this.id=t||void 0,this.title=a||void 0,this.description=e||void 0},ka=xa,Aa={components:{AdminPageLayout:Ca,MovieAdditionForm:Zt,AdminMovieList:Yt},data:function(){return{page:1,limit:20,totalMovieCount:0,totalPageCount:0,displayMovies:[]}},beforeMount:function(){this.fetchMovies()},methods:{fetchMovies:function(){var t=this,a="/api/admin/movies?page=".concat(this.page,"&limit=").concat(this.limit);ya.a.get(a).then((function(a){t.totalCount=a.data.totalMovieCount,t.totalPageCount=a.data.totalPageCount,t.displayMovies=a.data.movieList.map((function(t){return new ka(t.articleId,t.title,t.description)}))}))}}},ja=Aa,Oa=(e("6ee7"),e("891e")),Sa=Object(d["a"])(ja,It,Pt,!1,null,"e96e8964",null),Ta=Sa.exports;v()(Sa,{VContainer:f["a"],VPagination:Oa["a"],VSpacer:R["a"],VToolbar:T["a"],VToolbarTitle:B["a"]});var Ia=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("admin-page-layout",[e("template",{slot:"content"},[e("v-toolbar",{attrs:{elevation:"0"}},[e("v-toolbar-title",[t._v("タグ一覧")]),e("v-spacer"),e("tag-addition-form")],1),e("admin-tag-list")],1)],2)},Pa=[],Da=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},[e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item"),e("admin-tag-list-item")],1)],1)},Ma=[],$a=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-col",{attrs:{cols:"2"}},[e("v-card",{attrs:{outlined:""}},[e("v-card-subtitle",{staticClass:"py-2"},[t._v("タグ1")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{icon:"","x-small":""}},[e("v-icon",[t._v("mdi-pencil")])],1),e("v-btn",{attrs:{icon:"","x-small":""}},[e("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)},Ea=[],La={},Ra=La,Ba=Object(d["a"])(Ra,$a,Ea,!1,null,"30a1fc60",null),Fa=Ba.exports;v()(Ba,{VBtn:m["a"],VCard:it["a"],VCardActions:nt["a"],VCardSubtitle:nt["b"],VCol:p["a"],VIcon:g["a"],VSpacer:R["a"]});var Na={components:{AdminTagListItem:Fa}},qa=Na,Ga=Object(d["a"])(qa,Da,Ma,!1,null,"03dce9a2",null),Ha=Ga.exports;v()(Ga,{VContainer:f["a"],VRow:b["a"]});var Ya=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"800",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"pink darken-1",fab:"",dark:"",small:""}},"v-btn",n,!1),i),[e("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)]}}]),model:{value:t.showDialog,callback:function(a){t.showDialog=a},expression:"showDialog"}},[e("v-card",[e("v-card-title",[t._v("タグ追加フォーム")]),e("v-spacer"),e("v-card-subtitle",{staticClass:"text-align-left"},[t._v("タグを追加します。")]),e("v-form",[e("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pt-0",attrs:{cols:"6"}},[e("v-text-field",{attrs:{label:"タグ名",filled:"",rules:[t.rules.required]}})],1),e("v-col",{staticClass:"pt-0",attrs:{cols:"6"}},[e("v-autocomplete",{staticClass:"mx-4",attrs:{loading:t.loading,items:t.items,"search-input":t.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:"親タグ",filled:"",rules:[t.rules.required,t.rules.inItems]},on:{"update:searchInput":function(a){t.search=a},"update:search-input":function(a){t.search=a}},model:{value:t.select,callback:function(a){t.select=a},expression:"select"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"grey lighten-1",dark:""},on:{click:function(a){t.showDialog=!1}}},[t._v(" キャンセル ")]),e("v-btn",{attrs:{color:"pink darken-1",dark:""},on:{click:function(a){t.showDialog=!1}}},[t._v(" 動画を追加 ")])],1)],1)],1)},Ja=[],Xa=(e("c975"),{data:function(){var t=this;return{showDialog:!1,select:!1,loading:!1,items:["タグ名1","タグ名2","タグ名3","タグ名4","タグ名5","タグ名6","タグ名7","タグ名8","タグ名9"],rules:{required:function(t){return!!t||"Required."},inItems:function(a){return-1!=t.items.indexOf(a)||"Parent tag only."}}}}}),Ua=Xa,Wa=(e("a95b"),e("c6a6")),za=e("4bd4"),Ka=Object(d["a"])(Ua,Ya,Ja,!1,null,"6e2602d4",null),Qa=Ka.exports;v()(Ka,{VAutocomplete:Wa["a"],VBtn:m["a"],VCard:it["a"],VCardActions:nt["a"],VCardSubtitle:nt["b"],VCardTitle:nt["d"],VCol:p["a"],VContainer:f["a"],VDialog:zt["a"],VForm:za["a"],VIcon:g["a"],VRow:b["a"],VSpacer:R["a"],VTextField:Kt["a"]});var Za={components:{AdminPageLayout:Ca,TagAdditionForm:Qa,AdminTagList:Ha}},te=Za,ae=Object(d["a"])(te,Ia,Pa,!1,null,"b447dd4c",null),ee=ae.exports;v()(ae,{VSpacer:R["a"],VToolbar:T["a"],VToolbarTitle:B["a"]});var ie=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("admin-page-layout",[e("template",{slot:"content"},[e("v-container",[e("div",[t._v("ReportPage")])])],1)],2)},ne=[],re={components:{AdminPageLayout:Ca}},oe=re,se=Object(d["a"])(oe,ie,ne,!1,null,"558394c7",null),le=se.exports;v()(se,{VContainer:f["a"]});var ce=e("0a69");i["a"].use(z["a"]);var de=[{path:"/",name:"Index",component:ht},{path:"/movies/:id",name:"MovieDetail",component:Tt},{path:"/admin/movies",name:"AdminMoviesPage",component:Ta},{path:"/admin/tags",name:"AdminTagsPage",component:ee},{path:"/admin/report",name:"AdminReportPage",component:le},{path:"/admin*",redirect:"/admin/movies"},{path:"*",name:"NotFoundPage",component:ce["default"]}],ue=new z["a"]({mode:"history",base:"/",routes:de}),ve=ue,me=e("2f62");i["a"].use(me["a"]);var pe=new me["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({vuetify:W,router:ve,store:pe,render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";e("9c0c")},"6ee7":function(t,a,e){"use strict";e("e735")},7973:function(t,a,e){},"7a29":function(t,a,e){},"8aeb":function(t,a,e){},"9c0c":function(t,a,e){},a2b5:function(t,a,e){"use strict";var i=e("050b"),n=e.n(i);a["default"]=n.a},a761:function(t,a,e){},a95b:function(t,a,e){"use strict";e("a761")},c8c0:function(t,a,e){"use strict";e("8aeb")},c9f4:function(t,a,e){"use strict";e("7a29")},d68f:function(t,a,e){"use strict";e("2598")},e735:function(t,a,e){}});
//# sourceMappingURL=app.8e6a780e.js.map