(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{168:function(e,t,n){e.exports=n(208)},208:function(e,t,n){"use strict";n.r(t);n(209);var r,a,o,c,i,l,s,u,m,b=n(215),f=n(159),p=n(0),d=n.n(p),h=n(96),x=n(36),g=n(87),E=n(71),y=n.n(E),v=n(41),k=n(3),w=n(157),S=n.n(w),C=n(158),P=n.n(C),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e&&"NaN"!==e?P()(e.toString(),{precision:t}).format({symbol:""}).replace(/\.?0+$/,""):""},A=n(38),T=n.n(A),O=x.b.Pressable(r||(r=T()(["\n  background-color:  ",";\n  border-radius: 5px;\n  height: 120px;\n  width: 90%;\n  align-self: center;\n  justify-content: space-between;\n  align-items: center;\n  margin:5px;\n  padding:5px;\n  flex-direction: row;\n"])),(function(e){return e.theme.colors.card})),z=x.b.Text(a||(a=T()(["\n  font-weight: bold;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryTextColor})),N=x.b.Image(o||(o=T()(["\n  width: 50px;\n  height: 50px;\n  margin:10px;\n"]))),q=x.b.View(c||(c=T()(["\n  flex-direction: row;\n  align-items: center;\n"]))),I=x.b.Text(i||(i=T()(["\n  font-weight: bold;\n  font-size: 14px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryTextColor})),W=x.b.Text(l||(l=T()(["\n  font-size: 14px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryTextColor})),L=x.b.Text(s||(s=T()(["\n  font-weight: bold;\n  font-size: 12px;\n  text-align: right;\n  margin-right: 10px;\n  color: ",";\n"])),(function(e){return e.isGreen?"green":"red"}));function Q(e){var t,n=e.ticker;return d.a.createElement(O,null,d.a.createElement(q,null,d.a.createElement(N,{source:{uri:(t=n.baseAsset,"https://cryptoicon-api.vercel.app/api/icon//"+t.toLowerCase())}}),d.a.createElement(k.a,null,d.a.createElement(z,null,n.baseAsset+" / "+n.quoteAsset),d.a.createElement(W,null,j(n.volume,2)+" "+n.quoteAsset))),d.a.createElement(k.a,null,d.a.createElement(I,null,j(n.lastPrice)),d.a.createElement(L,{isGreen:Number(n.change24h)>0},Number(n.change24h).toFixed(1)+"%")))}function B(e){var t=e.tickers,n=e.selectedPair,r=Object(p.useCallback)((function(e){var t=e.item;return d.a.createElement(Q,{ticker:t})}),[]),a=Object(p.useCallback)((function(e){return e.symbol}),[]);return d.a.createElement(k.a,null,d.a.createElement(v.a,{data:t.filter((function(e){return e.quoteAsset===n})),renderItem:r,keyExtractor:a}))}var D=x.b.Pressable(u||(u=T()(["\n  padding: 10px;\n  width: 90px;\n  height: 40px;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: ",";\n"])),(function(e){return e.isSelected?"#01A781":"#c7c9d6"})),G=x.b.Text(m||(m=T()(["\n  font-size: 14px;\n  color: ",";\n  font-weight: ",";\n"])),(function(e){return e.theme.colors.primaryTextColor}),(function(e){return e.isSelected?"bold":"normal"}));function J(e){var t=e.pair,n=e.isSelected,r=e.onSelectPair;return d.a.createElement(D,{isSelected:n,onPress:function(){return r(t)}},d.a.createElement(G,{isSelected:n},t))}function V(e){var t=e.pairs,n=e.onSelectPair,r=e.selectedPair,a=Object(p.useCallback)((function(e){var t=e.item;return d.a.createElement(J,{isSelected:r===t,onSelectPair:n,pair:t})}),[n,r]),o=Object(p.useCallback)((function(e){return e}),[]);return d.a.createElement(k.a,null,d.a.createElement(v.a,{data:t,horizontal:!0,showsHorizontalScrollIndicator:!1,extraData:r,renderItem:a,keyExtractor:o}))}var F,H=n(35),$=n.n(H);var K=x.b.View(F||(F=T()(["\n  width: 100%;\n  max-width:",";\n  align-self: center;\n  background-color: ",";\n"])),(function(e){return e.theme.maxWidth}),(function(e){return e.theme.colors.background}));var M=function(){var e=Object(p.useState)([]),t=y()(e,2),n=t[0],r=t[1],a=Object(p.useState)([]),o=y()(a,2),c=o[0],i=o[1],l=Object(p.useState)("BTC"),s=y()(l,2),u=s[0],m=s[1],b=Object(g.useQuery)("tickers",(function(){return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api-pub.bitfinex.com/v2/tickers?symbols=ALL"));case 1:case"end":return e.stop()}}),null,null,null,Promise).then((function(e){return e.json()}))})).data;return Object(p.useEffect)((function(){if(b){var e=function(e){var t=[],n=[];return e.forEach((function(e){var r=e[0].toString();if(r.startsWith("t")){var a={};a.symbol=r.replace("t",""),a.change24h=100*Number(e[6]),a.lastPrice=Number(e[7]),a.volume=Number(e[8]),r.includes(":")?(a.baseAsset=a.symbol.split(":")[0].toString(),a.quoteAsset=a.symbol.split(":")[1].toString()):(a.baseAsset=a.symbol.substring(0,3),a.quoteAsset=a.symbol.substring(3,a.symbol.length)),t.push(a),n.push(a.quoteAsset)}})),n=$()(new Set(n)).sort(),{tickers:t,pairs:n}}(b);r(e.tickers),i(e.pairs)}}),[b]),d.a.createElement(K,null,d.a.createElement(V,{pairs:c,onSelectPair:m,selectedPair:u}),d.a.createElement(B,{tickers:n,selectedPair:u}))},R={maxWidth:"500px",maxWidthPercent:"90%",colors:{background:"#0E3452",card:"#172D3E",primaryColor:"#01A781",secondaryColor:"#E65E58",primaryTextColor:"#ffffff",secondaryTextColor:"#969B9E"}},U=new g.QueryClient;Object(b.a)((function(){return d.a.createElement(g.QueryClientProvider,{client:U},d.a.createElement(x.a,{theme:R},d.a.createElement(h.a,{style:{flex:1,backgroundColor:R.colors.background}},d.a.createElement(M,null),d.a.createElement(f.a,{style:"auto"}))))}))}},[[168,1,2]]]);
//# sourceMappingURL=app.6df3b97c.chunk.js.map