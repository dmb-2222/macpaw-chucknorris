(this["webpackJsonpmacpaw-chucknorris"]=this["webpackJsonpmacpaw-chucknorris"]||[]).push([[0],{1:function(e,t,a){e.exports={findJoke:"FormFindJoke_findJoke__4ZZ47",findJoke__textMain:"FormFindJoke_findJoke__textMain__xMDBJ",findJoke__textTryFind:"FormFindJoke_findJoke__textTryFind__2cNIX",findJoke__radio:"FormFindJoke_findJoke__radio__1Erpk",findJoke__label:"FormFindJoke_findJoke__label__3G09V",findJoke__hidden:"FormFindJoke_findJoke__hidden__3dvAj",findJoke__radio_category:"FormFindJoke_findJoke__radio_category__SSGi4",findJoke__radio_label:"FormFindJoke_findJoke__radio_label__LAnMx",findJoke__category_text:"FormFindJoke_findJoke__category_text__2mt5L",findJoke__category_hidden:"FormFindJoke_findJoke__category_hidden__2aiws",searchConsole:"FormFindJoke_searchConsole__1tTy2",findJoke__btn_getJoke:"FormFindJoke_findJoke__btn_getJoke__3OJfH"}},10:function(e,t,a){e.exports={wraper:"App_wraper__3YHLF",componentFavorite:"App_componentFavorite__3wul2",headerFavorite:"App_headerFavorite__2u3kF",componentsAndFavorite:"App_componentsAndFavorite__29jVC"}},100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),_=a(6),c=a(37),l=a(4),s=a(38),d=a(26),m=a(39),f=a.n(m),u=a(40),v=a(7),h={JOKE_DATA_FETCH_START:"JOKE_DATA_FETCH_START",JOKE_DATA_FETCH_SUCCESS:"JOKE_DATA_FETCH_SUCCESS",JOKE_DATA_FETCH_ERROR:"JOKE_DATA_FETCH_ERROR",JOKE_ADD_IS_FAVORITE_FLAG:"JOKE_ADD_IS_FAVORITE_FLAG",FAVORITE_ADD:"FAVORITE_ADD",FAVORITE_DEL:"FAVORITE_DEL"},k=function(e,t){return Array.isArray(e)?e.map((function(e){return t.some((function(t){return t.id===e.id}))?Object(v.a)({fav:!0},e):Object(v.a)({fav:!1},e)})):[e].map((function(e){return t.some((function(t){return t.id===e.id}))?Object(v.a)({fav:!0},e):Object(v.a)({fav:!1},e)}))},p=Object(l.combineReducers)({dataJokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h.JOKE_DATA_FETCH_SUCCESS:return k(n.response,n.itemsFavorite);case h.JOKE_ADD_IS_FAVORITE_FLAG:return e.map((function(e){return e.id===n?Object(v.a)(Object(v.a)({},e),{},{fav:!e.fav}):e}));default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case h.JOKE_DATA_FETCH_START:return!0;case h.JOKE_DATA_FETCH_SUCCESS:case h.JOKE_DATA_FETCH_ERROR:return!1;default:return e}}}),E=a(48),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h.FAVORITE_ADD:return e.every((function(e){return e.id!==n.id}))?[].concat(Object(E.a)(e),[Object(v.a)(Object(v.a)({},n),{},{fav:!n.fav})]):e.filter((function(e){return e.id!==n.id}));case h.FAVORITE_DEL:return e.filter((function(e){return e.id!==n.id}));default:return e}},g=Object(l.combineReducers)({jokes:p,favorite:J}),F={key:"favoriteLS",storage:f.a,whitelist:["favorite"]},y=Object(d.a)(F,g),b=[u.a],A=Object(s.composeWithDevTools)(l.applyMiddleware.apply(void 0,b)),O=Object(l.createStore)(y,A),C=Object(d.b)(O),T=a(13),S=a(14),N=a(16),I=a(15),j=a(17),L=a.n(j),D=a(41),x=a.n(D),R=function(e){var t=e.handleClick;return o.a.createElement("div",{className:L.a.header},o.a.createElement("p",null,"MSI 2020"),o.a.createElement("nav",null,o.a.createElement("button",{onClick:t},o.a.createElement("img",{src:x.a,alt:"icon-favorite-close",className:L.a.nav_iconFavNoActive})),o.a.createElement("p",{className:L.a.header__FavoriteText},"Favorite")))},H=function(e){return e.favorite},K=function(){return{type:h.JOKE_DATA_FETCH_START}},w=function(e,t){return{type:h.JOKE_DATA_FETCH_SUCCESS,payload:{response:e,itemsFavorite:t}}},V=function(e){return{type:h.JOKE_DATA_FETCH_ERROR,payload:{error:e}}},M=function(e){return{type:h.JOKE_ADD_IS_FAVORITE_FLAG,payload:e}},G=a(42),U=a.n(G),q=a(8),B=a.n(q),P=a(49),Z=a(43),W=a.n(Z),Q=a(22),X=a.n(Q),Y=a(23),z=a.n(Y),$=a(24),ee=a.n($),te=a(44),ae=a.n(te),ne=a(3),oe=a.n(ne),re=function(e){var t=e.itemElement,a=e.addToFav,r=void 0!==a&&a,i=e.addFlagIsFav,_=void 0!==i&&i,c=e.handleDelFav,l=void 0!==c&&c,s=e.isSavoriteComponent,d=void 0!==s&&s,m=Object(n.useState)(!1),f=Object(P.a)(m,2),u=f[0],v=f[1],h=t.id,k=t.value,p=t.updated_at,E=t.categories,J=t.url,g=t.fav,F=function(e,t){v(!u),r&&r(e),_&&_(t),l&&l(e,t)};return o.a.createElement(W.a,{isFlipped:u,flipDirection:"horizontal"},o.a.createElement("div",null,o.a.createElement("button",{className:oe.a.item__btn_heart,onClick:function(){return F(t,h)}},g?o.a.createElement("img",{src:ee.a,alt:"icon-heart-full"}):o.a.createElement("img",{src:X.a,alt:"icone-heart-empty"})),o.a.createElement("div",{className:oe.a.listJoke__box_letter},o.a.createElement("img",{src:d?ae.a:z.a,alt:"icon-letter-joke",className:oe.a.listJoke__iconLetter}),o.a.createElement("div",null,o.a.createElement("span",{className:oe.a.listJoke__ID},"ID: "),o.a.createElement("a",{href:J,className:oe.a.listJoke__link},h),o.a.createElement("p",null,k),o.a.createElement("p",{className:oe.a.listJoke__footerLetter},"Last update: ",p),0!==E.length&&o.a.createElement("p",{className:d?oe.a.favorite:oe.a.listJoke__footerLetter_category},E[0])))),o.a.createElement("div",null,o.a.createElement("button",{className:oe.a.item__btn_heart,onClick:function(){return F(t,h)}},g?o.a.createElement("img",{src:ee.a,alt:"icon-heart-full"}):o.a.createElement("img",{src:X.a,alt:"icone-heart-empty"})),o.a.createElement("div",{className:oe.a.listJoke__box_letter},o.a.createElement("img",{src:z.a,alt:"icon-letter-joke",className:oe.a.listJoke__iconLetter}),o.a.createElement("div",null,o.a.createElement("span",{className:oe.a.listJoke__ID},"ID: "),o.a.createElement("a",{href:J,className:oe.a.listJoke__link},h),o.a.createElement("p",null,k),o.a.createElement("p",{className:oe.a.listJoke__footerLetter},"Last update: ",p),0!==E.length&&o.a.createElement("p",{className:d?oe.a.favorite:oe.a.listJoke__footerLetter_category},E[0])))))},ie=re;re.defaultProps={isSavoriteComponent:!1,handleInput:function(){return!1},findFromRandom:function(){return!1}};var _e=function(e){var t=e.handleClick,a=e.itemsFav,n=e.delFav,r=e.addFlagIsFav,i=e.height;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:B.a.favorite__modul,style:{height:"".concat(i,"px")}},o.a.createElement("nav",null,o.a.createElement("button",{onClick:t},o.a.createElement("img",{src:U.a,alt:"icone-fav-active",className:B.a.favorite__iconFavActive})),o.a.createElement("p",{className:B.a.favorite__FavoriteText},"Favorite")),0!==a.length&&o.a.createElement("ul",{className:B.a.favorite__container},a.map((function(e){return o.a.createElement("li",{key:e.id,className:B.a.favorite__list},o.a.createElement(ie,{itemElement:e,handleDelFav:n,isSavoriteComponent:!0,addFlagIsFav:r}))})))),o.a.createElement("div",{className:B.a.favorite__overlay,"data-modal":"modal",name:"modal"}))},ce=Object(_.b)((function(e){return{itemsFav:H(e)}}),(function(e){return{delFav:function(t,a){return e(function(e,t){return{type:h.FAVORITE_DEL,payload:{itemsFav:e,id:t}}}(t,a))},addFlagIsFav:function(t){return e(M(t))}}}))(_e),le=a(18),se=a.n(le),de="https://api.chucknorris.io/jokes/",me=a(1),fe=a.n(me),ue=function(e){Object(N.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isActiveCategory:!1,isActiveSearch:!1,value:"",name:"",typeOfSearch:""},e.handleChangeInput=function(t){e.setState({value:t.target.value,name:t.target.name})},e.handleChange=function(t){var a=t.target.dataset.search;"category"===t.target.name&&e.setState({typeOfSearch:a,name:t.target.name}),"typeOfSearchCategory"===a&&e.setState({isActiveCategory:!0,isActiveSearch:!1,typeOfSearch:a}),"HandleInput"===a&&e.setState({isActiveSearch:!0,isActiveCategory:!1}),"typeOfSearchRandom"===a&&e.setState({isActiveSearch:!1,isActiveCategory:!1,typeOfSearch:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.value,o=a.name,r=a.typeOfSearch,i=e.props,_=i.findFromCategory,c=i.handleInput,l=i.findFromRandom,s=i.items;"category"===o&&_(r,s),"liveSearch"===o&&c(n,s),"typeOfSearchRandom"===r&&l(s),e.setState({value:""})},e}return Object(S.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isActiveCategory,a=e.isActiveSearch,n=e.value;return o.a.createElement("div",{className:fe.a.findJoke},o.a.createElement("p",{className:fe.a.findJoke__textMain},"Hey!"),o.a.createElement("p",{className:fe.a.findJoke__textTryFind},"Let\u2019s try to find a joke for you:"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{className:fe.a.findJoke__radio},o.a.createElement("input",{type:"radio",name:"typeOfSearch","data-search":"typeOfSearchRandom",className:fe.a.findJoke__hidden,onChange:this.handleChange}),o.a.createElement("span",{className:fe.a.findJoke__label}),"Random"),o.a.createElement("label",{className:fe.a.findJoke__radio},o.a.createElement("input",{type:"radio",name:"typeOfSearch","data-search":"typeOfSearchCategory",className:fe.a.findJoke__hidden,onChange:this.handleChange}),o.a.createElement("span",{className:fe.a.findJoke__label}),"From caterogies"),t&&o.a.createElement("div",{className:fe.a.findJoke__radio_category},o.a.createElement("label",{className:fe.a.findJoke__radio_label},o.a.createElement("input",{type:"radio",name:"category",className:fe.a.findJoke__category_hidden,"data-search":"animal",onChange:this.handleChange}),o.a.createElement("span",{className:fe.a.findJoke__category_text},"animal")),o.a.createElement("label",{className:fe.a.findJoke__radio_label},o.a.createElement("input",{type:"radio",name:"category",className:fe.a.findJoke__category_hidden,"data-search":"career",onChange:this.handleChange}),o.a.createElement("span",{className:fe.a.findJoke__category_text},"career")),o.a.createElement("label",{className:fe.a.findJoke__radio_label},o.a.createElement("input",{type:"radio",name:"category",className:fe.a.findJoke__category_hidden,"data-search":"celebrity",onChange:this.handleChange}),o.a.createElement("span",{className:fe.a.findJoke__category_text},"celebrity")),o.a.createElement("label",{className:fe.a.findJoke__radio_label},o.a.createElement("input",{type:"radio",name:"category",className:fe.a.findJoke__category_hidden,"data-search":"dev",onChange:this.handleChange}),o.a.createElement("span",{className:fe.a.findJoke__category_text},"dev"))),o.a.createElement("label",{className:fe.a.findJoke__radio},o.a.createElement("input",{type:"radio",name:"typeOfSearch","data-search":"HandleInput",className:fe.a.findJoke__hidden,onChange:this.handleChange}),o.a.createElement("span",{className:fe.a.findJoke__label}),"Search"),a&&o.a.createElement("input",{type:"text",name:"liveSearch",placeholder:"Free text search...",onChange:this.handleChangeInput,className:fe.a.searchConsole,value:n}),o.a.createElement("button",{className:fe.a.findJoke__btn_getJoke},"Get a joke")))}}]),a}(o.a.Component),ve=Object(_.b)((function(e){return{items:H(e)}}),(function(e){return{findFromRandom:function(t){return e((a=t,function(e){e(K()),se.a.get("".concat(de,"random")).then((function(t){e(w(t.data,a))})).catch((function(e){return V(e)}))}));var a},findFromCategory:function(t,a){return e((n=t,o=a,function(e){e(K()),se.a.get("".concat(de,"random?category=").concat(n)).then((function(t){e(w(t.data,o))})).catch((function(t){e(V(t))}))}));var n,o},handleInput:function(t,a){return e((n=t,o=a,function(e){e(K()),se.a.get("".concat(de,"search?query=").concat(n)).then((function(t){e(w(t.data.result,o))})).catch((function(t){e(V(t))}))}));var n,o}}}))(ue),he=function(e){return e.jokes.dataJokes},ke=a(45),pe=a(25),Ee=a.n(pe),Je=function(e){var t=e.items,a=e.addToFav,n=e.addFlagIsFav,r=e.getHeight;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:Ee.a.listJoke__container},o.a.createElement(ke.ReactHeight,{onHeightReady:function(e){return r(e)}},t.map((function(e){return o.a.createElement("li",{key:e.id,className:Ee.a.listJoke__cartOfJoke},o.a.createElement(ie,{itemElement:e,addToFav:a,addFlagIsFav:n}))})))))},ge=Object(_.b)((function(e){return{items:he(e)}}),(function(e){return{addToFav:function(t){return e(function(e){return{type:h.FAVORITE_ADD,payload:e}}(t))},addFlagIsFav:function(t){return e(M(t))}}}))(Je),Fe=a(46),ye=a.n(Fe),be=a(47),Ae=a.n(be),Oe=function(){return o.a.createElement("div",{className:Ae.a.loader},o.a.createElement(ye.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}))},Ce=a(10),Te=a.n(Ce),Se=function(e){Object(N.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={toggle:!0,height:""},e.handleClick=function(){e.setState((function(e){return{toggle:!e.toggle}}))},e.getHeight=function(t){e.setState({height:t>300&&t})},e}return Object(S.a)(a,[{key:"render",value:function(){var e=this.state,t=e.toggle,a=e.height,n=this.props,r=n.isLoading,i=n.items;return o.a.createElement("div",{className:Te.a.wraper},o.a.createElement("div",{className:Te.a.headerFavorite},o.a.createElement("div",{className:Te.a.componentsAndFavorite},o.a.createElement(R,{handleClick:this.handleClick,toggle:t}),o.a.createElement(ve,null),0!==i.length&&o.a.createElement(ge,{addToFavorite:this.addToFavorite,getHeight:this.getHeight})),o.a.createElement("div",{className:Te.a.componentFavorite},o.a.createElement(ce,{handleClick:this.handleClick}))),!t&&o.a.createElement(ce,{handleClick:this.handleClick,height:a}),r&&o.a.createElement(Oe,null))}}]),a}(o.a.Component),Ne=Object(_.b)((function(e){return{isLoading:e.jokes.loading,items:e.jokes.dataJokes}}))(Se),Ie=Object(_.b)((function(e){return{isLoading:e.jokes.loading,items:e.jokes.dataJokes}}))(Ne);a(99);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_.a,{store:O},o.a.createElement(c.a,{loading:null,persistor:C},o.a.createElement(Ie,null)))),document.getElementById("root"))},17:function(e,t,a){e.exports={header:"Header_header__2C3uq",header__FavoriteText:"Header_header__FavoriteText__1s0Wp",nav_iconFavNoActive:"Header_nav_iconFavNoActive__1WgwL"}},22:function(e,t,a){e.exports=a.p+"static/media/icon-heart-empty.0ebb74f0.svg"},23:function(e,t,a){e.exports=a.p+"static/media/icon-letter-joke.b6bce73c.svg"},24:function(e,t,a){e.exports=a.p+"static/media/icon-heart-full.0865c832.svg"},25:function(e,t,a){e.exports={listJoke__container:"ListJoke_listJoke__container__243q5",listJoke__cartOfJoke:"ListJoke_listJoke__cartOfJoke__3QLDo",listJoke__box_letter:"ListJoke_listJoke__box_letter__27G6v",listJoke__btn_heart:"ListJoke_listJoke__btn_heart__2aRGj",listJoke__iconLetter:"ListJoke_listJoke__iconLetter__3E4wP",listJoke__link:"ListJoke_listJoke__link___IXkf",listJoke__ID:"ListJoke_listJoke__ID__3-Ii7",listJoke__footerLetter:"ListJoke_listJoke__footerLetter__VipY9",listJoke__footerLetter_category:"ListJoke_listJoke__footerLetter_category__2Ilrg"}},3:function(e,t,a){e.exports={listJoke__cartOfJoke:"Items_listJoke__cartOfJoke__2LfdL",favorite__list:"Items_favorite__list__1yTVr",listJoke__box_letter:"Items_listJoke__box_letter__1h6Uj",item__btn_heart:"Items_item__btn_heart__2lnIq",listJoke__iconLetter:"Items_listJoke__iconLetter__2uTKP",listJoke__link:"Items_listJoke__link__3RiqK",listJoke__ID:"Items_listJoke__ID__3riUp",listJoke__footerLetter:"Items_listJoke__footerLetter__TefUv",listJoke__footerLetter_category:"Items_listJoke__footerLetter_category__1K8vQ",favorite:"Items_favorite__5yj0l"}},41:function(e,t,a){e.exports=a.p+"static/media/iconFavNoActive.358f75fe.svg"},42:function(e,t,a){e.exports=a.p+"static/media/icone-fav-active.dbd9017e.svg"},44:function(e,t,a){e.exports=a.p+"static/media/icone-letter-favorite.5a9fab2a.svg"},47:function(e,t,a){e.exports={loader:"Loader_loader__3sD32"}},50:function(e,t,a){e.exports=a(100)},8:function(e,t,a){e.exports={favorite__container:"Favorite_favorite__container__3gHPC",favorite__list:"Favorite_favorite__list__3Zo8n",favorite__box_letter:"Favorite_favorite__box_letter__4-gjM",favorite__joke_text:"Favorite_favorite__joke_text__1R87q",favorite__iconFavActive:"Favorite_favorite__iconFavActive__1eKZV",favorite__FavoriteText:"Favorite_favorite__FavoriteText__ybRVp",favorite__modul:"Favorite_favorite__modul__IjItM",favorite__overlay:"Favorite_favorite__overlay__1bahU"}},99:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.f25f2c43.chunk.js.map