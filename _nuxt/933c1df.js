(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{416:function(t,e,n){"use strict";var o=n(3),r=n(323);o({target:"String",proto:!0,forced:n(324)("small")},{small:function(){return r(this,"small","","")}})},422:function(t,e,n){"use strict";var o=n(3),r=n(323);o({target:"String",proto:!0,forced:n(324)("fixed")},{fixed:function(){return r(this,"tt","","")}})},429:function(t,e,n){"use strict";var o=n(3),r=n(323);o({target:"String",proto:!0,forced:n(324)("link")},{link:function(t){return r(this,"a","href",t)}})},466:function(t,e,n){"use strict";n(18),n(20),n(17),n(33),n(19),n(34);var o,r=n(8),c=(n(416),n(55),n(56),n(322),n(84),n(325),n(40),n(467),n(427)),l=n(393),h=n(439),d=n(134),f=n(7),v=n(1),m=n(133);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var w=Object(m.a)(c.a,l.a,h.a,d.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(f.w)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(f.t)(t).find((function(e){return t[e]}));return e&&o[e]||Object(f.f)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:y({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=y(y({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=y(y({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=v.a.extend({name:"v-icon",$_wrapperFor:w,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(w,data,o?[o]:n)}})},467:function(t,e,n){var content=n(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("6b715e77",content,!0,{sourceMap:!1})},468:function(t,e,n){var o=n(53)(!1);o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},534:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{fab:!1}},methods:{addNewQuestion:function(){this.$store.commit("addNewQuestion")}}},r=n(63),c=n(85),l=n.n(c),h=n(461),d=n(466),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"fabbtn",attrs:{color:"blue darken-2",dark:"",fab:""},on:{click:t.addNewQuestion},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-icon",[t._v(" mdi-plus ")])],1)}),[],!1,null,"18780358",null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})}}]);