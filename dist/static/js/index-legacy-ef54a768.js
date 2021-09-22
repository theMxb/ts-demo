!function(){var e=document.createElement("style");e.innerHTML='@keyframes skeleton-blink{50%{opacity:.6}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.fade-enter-active{animation:fade-in .1s ease-out}.fade-leave-active{animation:fade-out .1s ease-in}.transition-zoom{transition:opacity .1s,transform .1s}.transition-zoom-enter-from,.transition-zoom-leave-active{transform:scale(.8);opacity:0}[class$=-enter-active]{transition-timing-function:ease-out}[class$=-leave-active]{transition-timing-function:ease-in}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.tada-enter-active{animation:tada .3s ease-out}.bg-white{background-color:#fff}[role=button]{transition:background-color .2s}[role=button]:active{background-color:#ececec}.flex{display:flex}.flex-justify-end{justify-content:flex-end}.flex-justify-center{justify-content:center}.flex-justify-between{justify-content:space-between}.flex-justify-around{justify-content:space-around}.flex-align-start{align-items:flex-start}.flex-align-end{align-items:flex-end}.flex-align-center{align-items:center}.flex-align-baseline{align-items:baseline}.flex-wrap-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}.flex-direction-row-reverse{flex-direction:row-reverse}.flex-direction-column{flex-direction:column}.flex-direction-column-reverse{flex-direction:column-reverse}.flex-item{flex:1;min-width:0;min-height:0}.icon{fill:#333}.icon-mini{width:14px;height:14px}.icon-small{width:18px;height:18px}.icon-normal{width:24px;height:24px}.icon-large{width:48px;height:48px}.icon-primary{fill:#0072e4}.icon-info{fill:#888}.icon-warning{fill:#ffc03d}.icon-danger{fill:#ff2525}.icon.arrow-left{transform:rotate(180deg)}.icon.arrow-down{transform:rotate(90deg)}button{outline:0 none;border-width:0;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.btn{text-align:center;border:0;user-select:none;transition:background-color .2s}.btn-mini{height:24px;line-height:12px;font-size:12px;border-radius:6px;padding:0 8px}.btn-mini.btn-border:before{border-radius:6px}.btn-small{height:32px;line-height:14px;font-size:14px;border-radius:8px;padding:0 12px}.btn-small.btn-border:before{border-radius:8px}.btn-normal{height:40px;line-height:16px;font-size:16px;border-radius:10px;padding:0 14px}.btn-normal.btn-border:before{border-radius:10px}.btn-large{height:48px;line-height:18px;font-size:18px;border-radius:12px}.btn-large.btn-border:before{border-radius:12px}.btn-block{display:block;width:100%}.btn-default{color:#333;background-color:#d8d8d8}.btn-default:active{background-color:#c3c3c3}.btn-primary{color:#fff;background-color:#0072e4}.btn-primary:active{background-color:#005ebb}.btn-danger{color:#fff;background-color:#ff2525}.btn-danger:active{background-color:#fb0000}.btn-warning{color:#0072e4;background-color:#ffc03d}.btn-warning:active{background-color:#ffb314}.price-mini{font-size:12px}.price-mini .currency,.price-mini .deci-fee{font-size:8px}.price-small{font-size:14px}.price-small .currency,.price-small .deci-fee{font-size:10px}.price-normal{font-size:16px}.price-normal .currency,.price-normal .deci-fee{font-size:12px}.price-large{font-size:18px}.price-large .currency,.price-large .deci-fee{font-size:14px}.price-primary{color:#0072e4}.price-info{color:#888}.price-warning{color:#ffc03d}.price-danger{color:#ff2525}.price .label{color:#0072e4}.amount>input{width:54px;height:24px;text-align:center}.amount>button{height:24px;width:24px;border-radius:4px;padding:0}.amount>button>svg{height:12px;width:12px}.checkbox{position:relative;display:inline-flex;align-items:center}.checkbox>input[type=checkbox]{position:relative;z-index:2;opacity:0;margin-right:8px}.checkbox>input[type=checkbox]+svg{position:absolute;z-index:1;left:0;right:0;transition:fill .2s}.checkbox>input[type=checkbox]:not(:checked)+svg{fill:#cecece!important}.checkbox-mini{font-size:10px}.checkbox-mini>input{width:12px;height:12px}.checkbox-small{font-size:12px}.checkbox-small>input{width:14px;height:14px}.checkbox-normal{font-size:14px}.checkbox-normal>input{width:16px;height:16px}.checkbox-large{font-size:16px}.checkbox-large>input{width:18px;height:18px}.tag{display:inline-block}.tag-primary{color:#0072e4;background-color:#0072e41f}.tag-primary:active{background-color:#005ebb1f}.tag-info{color:#888;background-color:#8888881f}.tag-info:active{background-color:#7474741f}.tag-normal{font-size:16px;border-radius:4px;padding:4px 8px}.tag-small{font-size:14px;border-radius:4px;padding:4px 8px}.tag-mini{font-size:12px;border-radius:4px;padding:2px 4px}.popover{background-color:#333;color:#fff;border-radius:8px}.popover-wrapper{display:inline-block}.popover-menus{text-align:right}.popover-menus>li{height:40px;width:128px;line-height:40px;padding-right:24px}.popover-menus>li:not(:last-child){border-bottom:1px solid #404040}.popover:before{content:"";display:block;position:absolute;width:0;height:0;border:8px solid transparent}.popover[data-popper-placement^=bottom]{transform-origin:50% 0}.popover[data-popper-placement^=bottom]:before{top:0;border-top-width:0;border-bottom-color:#333;transform:translateY(-100%)}.popover[data-popper-placement=bottom]:before{left:50%}.popover[data-popper-placement=bottom-end]{transform-origin:100% 0}.popover[data-popper-placement=bottom-end]:before{right:16px}.overlay{position:fixed;top:0;left:0;height:100vh;width:100vw;background-color:#000000ad}.popup-overlay.fade-leave-active[data-v-7041bf18]{animation-delay:.28s}.popup{position:absolute;max-height:100%;min-height:20%;overflow-y:auto;background-color:#fff;transition:transform .3s}.popup-slide-bottom-enter-from,.popup-slide-bottom-leave-active{transform:translateY(100%)}.popup-slide-bottom-enter-from{transition-delay:.1s}.popup>svg.close{position:absolute;z-index:2;right:16px;top:16px}.popup-bottom{bottom:0;left:0;width:100%;border-radius:16px 16px 0 0}.carousel-wrapper{display:block;position:relative}.carousel-item{display:block;position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:0 0 0;transition:transform ease-in-out}.loading{color:#888}.loading-primary{color:#0072e4}.loading-spinner{max-width:100%;max-height:100%;animation:loading-rotate 2s linear infinite}.loading-spinner>circle{animation:loading-circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.loading-mini{font-size:12px}.loading-mini .loading-spinner{width:24px;height:24px}.loading-small{font-size:14px}.loading-small .loading-spinner{width:28px;height:28px}.loading-normal{font-size:16px}.loading-normal .loading-spinner{width:32px;height:32px}.loading-large{font-size:18px}.loading-large .loading-spinner{width:36px;height:36px}@keyframes loading-rotate{to{transform:rotate(1turn)}}@keyframes loading-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}.image{position:relative;background-color:#ececec}.image svg{fill:#cecece;width:24%;height:24%;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0}.image img{width:100%;height:100%}.image-loading{animation:skeleton-blink 1.2s ease-in-out infinite}.skeleton-item{background-color:#ececec;animation:skeleton-blink 1.2s ease-in-out infinite}.skeleton-item-img{display:flex;justify-content:center;align-items:center}.skeleton-item-img>svg{width:24%;height:24%;fill:#cecece}.empty{width:100%;height:100%;padding:12vh 0;color:#888}.empty svg{fill:#cecece;transform:rotate(-15deg) translate(8px)}.circle-effect circle{fill:#0072e499}.shop-bag-icon[data-v-121e3a94]{position:relative}.shop-bag-icon>span[data-v-121e3a94]{position:absolute;bottom:-3px;right:-6px;background-color:#ff2525;color:#fff;font-size:10px;width:16px;height:16px;line-height:16px;text-align:center;border-radius:8px}.prod-shop-bag[data-v-121e3a94]{position:fixed;top:0;left:0;transform-origin:center;transition:transform ease-in 0ms;z-index:6}.app-header[data-v-17d7bfa2]{height:48px;background-color:#fff}.app-header-left[data-v-17d7bfa2],.app-header-right[data-v-17d7bfa2]{width:44px;text-align:center}.app-header-search[data-v-17d7bfa2]{background-color:#ececec;height:32px;border-radius:8px;padding:0 8px}.app-header-search input[type=search][data-v-17d7bfa2]{padding:0 8px}.app-header-search input[type=search][data-v-17d7bfa2]::-webkit-search-cancel-button{-webkit-appearance:none}.app-header-title[data-v-17d7bfa2]{text-align:center}body{background-color:#ececec;overflow:hidden;color:#333;font-size:16px;font-family:-apple-system,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;word-break:break-all}*{box-sizing:border-box}input{border:0;width:100%;background-color:transparent;outline:0;-webkit-tap-highlight-color:transparent}a{text-decoration:none;color:#0072e4}a:link{-webkit-tap-highlight-color:transparent}img{max-width:100%}ul{list-style:none;margin:0;padding:0}figure{margin:0}#app{height:100vh}#app>main{height:calc(100% - 48px);position:relative}.nav-bar{font-size:14px;padding:8px 16px}\n',document.head.appendChild(e),System.register(["./vendor-legacy-063e0170.js"],(function(e,t){"use strict";var o;return{setters:[function(e){o=e.c}],execute:function(){e({c:I,p:function(e,t){xe(e,t)}});var n=e("w",(e=>{const t=e;return t.install=e=>{e.component(t.name,t)},t}));const r=Vue.defineComponent({name:"Flex"});var a=Vue.defineComponent({...r,props:{prefixCls:{type:String,default:"flex"},tag:{type:String,default:"div"},justify:{type:String,default:"start"},align:{type:String,default:"stretch"},wrap:{type:String,default:"nowrap"},direction:{type:String,default:"row"}},setup:function(e){return(t,o)=>(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.tag),{class:Vue.normalizeClass([e.prefixCls,`${e.prefixCls}-justify-${e.justify}`,`${e.prefixCls}-align-${e.align}`,`${e.prefixCls}-wrap-${e.wrap}`,`${e.prefixCls}-direction-${e.direction}`])},{default:Vue.withCtx((()=>[Vue.renderSlot(t.$slots,"default")])),_:3},8,["class"]))}}),i=e("F",n(a)),l=Vue.defineComponent({name:"FlexItem"});const u={class:"flex-item"};l.render=function(e,t,o,n,r,a){return Vue.openBlock(),Vue.createElementBlock("div",u,[Vue.renderSlot(e.$slots,"default")])};var s=e("a",n(l)),c={size:{type:String,default:"normal"},type:{type:String,default:"default"}};const p=["xlink:href"],d=Vue.defineComponent({name:"Icon"});var f=Vue.defineComponent({...d,props:{...c,name:{type:String,require:!0}},setup:function(e){const t=e,o=Vue.computed((()=>{const{name:e}=t;return/^arrow-/.test(e)?"#arrow":`#${e}`}));return(t,n)=>(Vue.openBlock(),Vue.createElementBlock("svg",{class:Vue.normalizeClass(["icon",`icon-${t.size}`,`icon-${t.type}`,e.name])},[Vue.createElementVNode("use",{"xlink:href":Vue.unref(o)},null,8,p)],2))}}),m=e("I",n(f));const V=Vue.defineComponent({name:"Button"});var h=Vue.defineComponent({...V,props:{...c,border:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},setup:function(e){return(t,o)=>(Vue.openBlock(),Vue.createElementBlock("button",{class:Vue.normalizeClass(["btn",`btn-${t.type}`,`btn-${t.size}`,{"btn-border":e.border},{"btn-block":e.block}])},[Vue.renderSlot(t.$slots,"default")],2))}}),g=e("B",n(h));const v={key:0,class:"label"},x={class:"currency"},b={class:"deci-fee"},y=Vue.defineComponent({name:"Price"});var k=Vue.defineComponent({...y,props:{...c,prefixCls:{type:String,default:"price"},fee:{type:Number,default:0},currency:{type:String,default:"￥"},label:{type:String,default:""}},setup:function(e){const t=e,o=Vue.computed((()=>Math.trunc(t.fee))),n=Vue.computed((()=>Math.trunc(10*t.fee%10)));return(t,r)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass([e.prefixCls,`${e.prefixCls}-${t.size}`,`${e.prefixCls}-${t.type}`])},[e.label?(Vue.openBlock(),Vue.createElementBlock("span",v,Vue.toDisplayString(e.label),1)):Vue.createCommentVNode("",!0),Vue.createElementVNode("span",x,Vue.toDisplayString(e.currency),1),Vue.createTextVNode(" "+Vue.toDisplayString(Vue.unref(o))+" ",1),Vue.createElementVNode("span",b,"."+Vue.toDisplayString(Vue.unref(n)),1)],2))}});e("P",n(k));const w=["value"],C=Vue.defineComponent({name:"Amount"});var B=Vue.defineComponent({...C,props:{theme:{type:String,default:"default"},value:{type:Number,required:!0}},emits:["update:value"],setup:function(e,{emit:t}){const o=e,n=e=>{t("update:value",o.value+e)},r=e=>{const n=e.target,r=Number.parseInt(n.value);isNaN(r)?n.value=`${o.value}`:(n.value=`${r}`,t("update:value",r))};return(t,o)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(i),{class:"amount"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(g),{onClick:o[0]||(o[0]=e=>n(-1))},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(m),{name:"cut"})])),_:1}),Vue.createElementVNode("input",{type:"tel",value:e.value,maxlength:"4",onChange:r},null,40,w),Vue.createVNode(Vue.unref(g),{onClick:o[1]||(o[1]=e=>n(1))},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(m),{name:"add"})])),_:1})])),_:1}))}});e("A",n(B));const S=["for"],z=["id"],E=Vue.defineComponent({name:"Checkbox"});n(Vue.defineComponent({...E,props:{...c,id:{type:String,required:!0}},setup:function(e){return(t,o)=>(Vue.openBlock(),Vue.createElementBlock("label",{class:Vue.normalizeClass(["checkbox",`checkbox-${t.size}`]),for:e.id},[Vue.createElementVNode("input",{type:"checkbox",name:"",id:e.id},null,8,z),Vue.createVNode(Vue.unref(m),{name:"checkbox",size:t.size,type:t.type},null,8,["size","type"]),Vue.renderSlot(t.$slots,"default")],10,S))}}));const N=Vue.defineComponent({name:"Tag"});var $=Vue.defineComponent({...N,props:{...c,prefixCls:{type:String,default:"tag"}},setup:function(e){return(t,o)=>(Vue.openBlock(),Vue.createElementBlock("span",{class:Vue.normalizeClass([e.prefixCls,`${e.prefixCls}-${t.type}`,`${e.prefixCls}-${t.size}`])},[Vue.renderSlot(t.$slots,"default")],2))}});e("T",n($));const T=new Map,P=e=>{const t=e.target;for(const[o,n]of T)o.contains(t)||n(e)};function I(e,t){const o=()=>{((e,t)=>{const o=T.size;T.set(Vue.unref(e),t),0===o&&1===T.size&&document.addEventListener("click",P)})(e,t)},n=()=>{var t;t=e,T.delete(Vue.unref(t)),0===T.size&&document.removeEventListener("click",P)};Vue.onMounted(o),Vue.onActivated(o),Vue.onBeforeUnmount(n),Vue.onDeactivated(n)}let M=12;var _=()=>M++;const j=["data-index"],D=Vue.defineComponent({name:"Popover"});var R=n(Vue.defineComponent({...D,props:{show:{type:Boolean,default:!1},placement:{type:String,default:"bottom"},offset:{type:Array,default:()=>[0,8]},menus:{type:Array,default:()=>[]}},emits:["update:show","menuClick"],setup:function(e,{emit:t}){const n=e,r=Vue.ref(!1);Vue.watch((()=>n.show),(e=>{e&&(r.value=e)}),{immediate:!0});const a=Vue.ref(),i=Vue.ref();let l;const u=()=>{Vue.nextTick((()=>{n.show&&(l?l.setOptions({placement:n.placement}):l=o(a.value,i.value,{placement:n.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{name:"offset",options:{offset:n.offset}}]}))}))};Vue.onMounted(u),Vue.onBeforeUnmount((()=>{l&&(l.destroy(),l=null)})),Vue.watch((()=>[n.show,n.placement]),u);const s=()=>{t("update:show",!n.show)};I(a,(()=>{n.show&&t("update:show",!1)}));const c={zIndex:_()},p=e=>{const{tagName:o,dataset:n}=e.target;/li/i.test(o)&&t("menuClick",n.index)};return(t,o)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createElementVNode("span",{class:"popover-wrapper",ref:(e,t)=>{t.wrapperRef=e,a.value=e},onClick:s},[Vue.renderSlot(t.$slots,"reference")],512),Vue.createElementVNode("template",null,[(Vue.openBlock(),Vue.createBlock(Vue.Teleport,{to:"body"},[Vue.createVNode(Vue.Transition,{name:"transition-zoom"},{default:Vue.withCtx((()=>[r.value?Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"popover transition-zoom",style:c,ref:(e,t)=>{t.popoverRef=e,i.value=e}},[t.$slots.default?Vue.renderSlot(t.$slots,"default",{key:0}):Vue.createCommentVNode("",!0),Vue.createElementVNode("ul",{class:"popover-menus",onClick:p},[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.menus,(({id:e,name:t},o)=>(Vue.openBlock(),Vue.createElementBlock("li",{key:e,"data-index":o},Vue.toDisplayString(t),9,j)))),128))])],512)),[[Vue.vShow,e.show]]):Vue.createCommentVNode("",!0)])),_:3})]))])],64))}}));function L(e){const t=Vue.ref(!1);return Vue.watch(e,(e=>{e&&(t.value=e)}),{immediate:!0}),t}const A=Vue.defineComponent({name:"Overlay"});var F=n(Vue.defineComponent({...A,props:{show:{type:Boolean,default:!1}},setup:function(e){const t=e,o=L((()=>t.show)),n={zIndex:_()};return(t,r)=>(Vue.openBlock(),Vue.createBlock(Vue.Transition,{name:"fade"},{default:Vue.withCtx((()=>[Vue.unref(o)?Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"overlay",style:n},[Vue.renderSlot(t.$slots,"default")],512)),[[Vue.vShow,e.show]]):Vue.createCommentVNode("",!0)])),_:3}))}}));const H=Vue.defineComponent({name:"Popup"});var O=Vue.defineComponent({...H,props:{show:{type:Boolean,default:!1},placement:{type:String,default:"bottom"}},emits:["update:show","close"],setup:function(e,{emit:t}){const o=e,n=L((()=>o.show)),r=Vue.ref(),a=()=>{console.log("close"),t("update:show",!1),t("close")};return(t,o)=>(Vue.openBlock(),Vue.createBlock(Vue.Teleport,{to:"body"},[Vue.createVNode(Vue.unref(F),{class:"popup-overlay",show:e.show,onClick:Vue.withModifiers(a,["self"])},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.Transition,{name:`popup-slide-${e.placement}`,appear:""},{default:Vue.withCtx((()=>[Vue.withDirectives(Vue.createElementVNode("div",{ref:(e,t)=>{t.wrapperRef=e,r.value=e},class:Vue.normalizeClass(["popup",`popup-${e.placement}`])},[Vue.createVNode(Vue.unref(m),{name:"close",size:"small",type:"info",onClick:a}),Vue.unref(n)?Vue.renderSlot(t.$slots,"default",{key:0},void 0,!0):Vue.createCommentVNode("",!0)],2),[[Vue.vShow,e.show]])])),_:3},8,["name"])])),_:3},8,["show","onClick"])]))}});O.__scopeId="data-v-7041bf18";e("h",n(O));const U=Symbol("x2-form"),W=(e("d",(e=>{const t=Vue.inject(U,null);null!=t&&t.push(e)})),e("b",((e,t)=>{const o=Vue.reactive({verified:!1,errorMessage:""}),n=(e="")=>{o.verified=!0,o.errorMessage=e};return{validator:o,validate:()=>new Promise(((r,a)=>o.verified?""===o.errorMessage?void r(!0):void a():t&&t.length?void Promise.all(t.map((t=>t.required?e.value?Promise.resolve(!0):Promise.reject(t.message):null!=t.pattern?t.pattern.test(e.value)?Promise.resolve(!0):Promise.reject(t.message):null!=t.validator?t.validator(e.value,t):void 0))).then((()=>{r(!0),n()})).catch((e=>{a(e),n(e)})):(r(!0),void n())))}})),Vue.defineComponent({name:"Form"}));n(Vue.defineComponent({...W,setup:function(e,{expose:t}){const o=[];var n;return n={push:e=>{o.push(e)}},Vue.provide(U,n),t({validate:async()=>{for(let e=0,t=o.length;e<t;e++)await o[e]()}}),(e,t)=>(Vue.openBlock(),Vue.createElementBlock("form",null,[Vue.renderSlot(e.$slots,"default")]))}}));const q=Symbol("x2-carousel"),X=window.screen.width;var Y=Vue.defineComponent({name:"Carousel",props:{height:{type:Number,default:X},initialIndex:{type:Number,default:0}},setup(e){const t=[],o=Vue.reactive({push:e=>{const o=t.length;return t.push(e),o},rootWidth:X,rootHeight:e.height,index:e.initialIndex});var n;n=o,Vue.provide(q,n);const r=Vue.ref(),a=Vue.ref({height:`${e.height}px`});let i=-1,l=-1;const u=()=>{const e=t.length-1;if(o.index<0?o.index=e:o.index>e&&(o.index=0),0===e)return;const{index:n}=o;i=0===n?e:n-1,l=n===e?0:n+1},s=(e,o)=>{-1!==e&&t[e].startPosition(o)};let c=0,p=0,d=0,f="";const m=e=>{1===e.touches.length?(f="move",c=e.touches[0].clientX,p=e.touches[0].clientY,s(o.index,0),s(i,-o.rootWidth),s(l,o.rootWidth)):e.touches.length>=2&&(f="zoom",e.touches[0].clientX,e.touches[0].clientY,e.touches[1].clientX,e.touches[1].clientY)},V=e=>{if("move"===f){e.stopPropagation();const{clientX:t,clientY:o}=e.touches[0],n=t-c,r=o-p,a=Math.abs(n);a>Math.abs(r)&&a>10&&(e.cancelable&&e.preventDefault(),d+=n,h(n,r),c=t,p=o)}},h=(e,n)=>{t[o.index].move(e,n),t[o.index].isToTheEdge()&&(e=>{if(2!==t.length)-1!==i&&t[i].move(e),-1!==l&&l!==i&&t[l].move(e);else{const{rootWidth:e}=o;d>0?-1!==i&&t[i].startPosition(-e+d):d<0&&-1!==l&&t[l].startPosition(e+d)}})(e)},g=()=>{if("move"===f){if(!t[o.index].isToTheEdge())return;d>48?(o.index--,u()):d<-48&&(o.index++,u());const{index:e,rootWidth:n}=o;v(e,0),d>0?(v(l,n),d<48&&v(i,-n)):d<0&&(v(i,-n),d>-48&&v(l,n))}f="",d=0,c=0,p=0},v=(e,o)=>{-1!==e&&t[e].endPosition(o)};return Vue.onMounted((()=>{u(),r.value?.addEventListener("touchstart",m,!1),r.value?.addEventListener("touchmove",V,!1),r.value?.addEventListener("touchend",g,!1),r.value?.addEventListener("touchcancel",g,!1)})),Vue.onBeforeUnmount((()=>{r.value?.removeEventListener("touchstart",m,!1),r.value?.removeEventListener("touchmove",V,!1),r.value?.removeEventListener("touchend",g,!1),r.value?.removeEventListener("touchcancel",g,!1)})),{rootRef:r,wrapperStyle:a}}});const J={class:"carousel",ref:"rootRef"};Y.render=function(e,t,o,n,r,a){return Vue.openBlock(),Vue.createElementBlock("div",J,[Vue.createElementVNode("ul",{class:"carousel-wrapper",style:Vue.normalizeStyle(e.wrapperStyle)},[Vue.renderSlot(e.$slots,"default")],4)],512)};e("i",n(Y));const G=Vue.defineComponent({name:"CarouselItem"});var K=Vue.defineComponent({...G,setup:function(e){const t=e=>Math.hypot(e[1].x-e[0].x,e[1].y-e[0].y),o=()=>!(m>1)||(l>=0||l+n<=0),{rootWidth:n,rootHeight:r,push:a}=Vue.inject(q),i=a({zoom:(e,o)=>{const a=m;m*=t(e)/t(o),m=Math.min(6,Math.max(1,m));const i=m-a,V=(e[0].x+e[1].x)/2,g=(e[0].y+e[1].y)/2,v=i*n*((V-s)/p),x=i*r*((g-c)/d);l-=v,u-=x,f=0,h(),p=m*n,d=m*r,s-=v,c-=x},move:(e,t=0)=>{l+=e,m>1&&(u+=t),h()},startPosition:e=>{f=0,o()&&(0!==e&&m>1&&(m=1,u=0),l=e,h())},endPosition:e=>{f=300,m>1&&e<0&&(e=-m*n),l=e,h()},isToTheEdge:o});let l=n*i,u=0,s=0,c=0,p=n,d=r,f=0,m=1;const V=Vue.ref({transform:`matrix(${m}, 0, 0, ${m}, ${l}, ${u})`,transitionDuration:`${f}ms`}),h=()=>{V.value={transform:`matrix(${m}, 0, 0, ${m}, ${l}, ${u})`,transitionDuration:`${f}ms`}},g=Vue.ref();return Vue.onMounted((()=>{const{top:e}=g.value?.getBoundingClientRect();s=0,c=e})),(e,t)=>(Vue.openBlock(),Vue.createElementBlock("li",{class:"carousel-item",ref:(e,t)=>{t.itemRef=e,g.value=e},style:Vue.normalizeStyle(V.value)},[Vue.renderSlot(e.$slots,"default")],4))}});e("j",n(K));const Q=Vue.createElementVNode("svg",{viewBox:"25 25 50 50",class:"loading-spinner"},[Vue.createElementVNode("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),Z=Vue.defineComponent({name:"Loading"});n(Vue.defineComponent({...Z,props:{...c},setup:function(e){return(e,t)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(i),{justify:"center",class:Vue.normalizeClass(["loading",`loading-${e.size}`,`loading-${e.type}`])},{default:Vue.withCtx((()=>[Q,Vue.renderSlot(e.$slots,"default")])),_:3},8,["class"]))}}));const ee=["xlink:href"],te=["src","alt"],oe=Vue.defineComponent({name:"Image"});var ne=Vue.defineComponent({...oe,props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String]},src:String,alt:{type:String,required:!0},asset:String,assetPath:{type:[String,Array]},assetSize:{type:String,default:"small"}},setup:function(e){const t=e,o=Vue.ref(!0),n=Vue.ref("#pre-img"),r=Vue.computed((()=>{const{width:e,height:o}=t,n={};return"number"==typeof e?n.width=`${e}px`:"string"==typeof e&&(n.width=e),n.height="number"==typeof o?`${o}px`:"string"==typeof o?o:n.width,n})),a=Vue.computed((()=>{const{src:e,asset:o,assetPath:n,assetSize:r}=t;if(e)return e;let a;return a=Array.isArray(n)?n.join("/"):n||o,`/ts-demo/dist/${o}/${r}/${a}.jpg`})),i=()=>{o.value=!0;const e=new Image;e.src=a.value,e.onload=()=>{o.value=!1,n.value=""},e.onerror=()=>{o.value=!1,n.value="#pre-img-er"}};return Vue.onBeforeMount(i),Vue.watch((()=>[t.asset,t.assetPath,t.assetSize]),i),(t,i)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"image",style:Vue.normalizeStyle(Vue.unref(r))},[n.value?(Vue.openBlock(),Vue.createElementBlock("svg",{key:0,class:Vue.normalizeClass({"image-loading":o.value})},[Vue.createElementVNode("use",{"xlink:href":n.value},null,8,ee)],2)):(Vue.openBlock(),Vue.createElementBlock("img",{key:1,src:Vue.unref(a),alt:e.alt},null,8,te))],4))}}),re=e("e",n(ne));const ae=Vue.defineComponent({name:"Skeleton"});var ie=Vue.defineComponent({...ae,props:{loading:{type:Boolean,default:!0}},setup:function(e){const t=e,o=function(e,t=500){const o=Vue.ref(!0),n=Vue.ref(!1);let r;return Vue.onMounted((()=>{r=setTimeout((()=>{n.value=!0}),t)})),Vue.onBeforeUnmount((()=>{clearTimeout(r)})),Vue.watch([e,n],(([e,t])=>{!e&&t&&(o.value=!1)})),o}((()=>t.loading));return(e,t)=>Vue.unref(o)?Vue.renderSlot(e.$slots,"template",{key:0}):Vue.renderSlot(e.$slots,"default",{key:1})}});e("S",n(ie));const le=[Vue.createElementVNode("svg",null,[Vue.createElementVNode("use",{"xlink:href":"#pre-img"})],-1)],ue=Vue.createTextVNode(" "),se=Vue.defineComponent({name:"SkeletonItem"});var ce=Vue.defineComponent({...se,props:{tag:{type:String,default:"div"}},setup:function(e){const t=["skeleton-item",`skeleton-item-${e.tag}`];return(o,n)=>"img"===e.tag?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:Vue.normalizeClass(t)},le)):(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.tag),{key:1,class:Vue.normalizeClass(t)},{default:Vue.withCtx((()=>[ue])),_:1}))}});e("g",n(ce));const pe=Vue.createElementVNode("svg",null,[Vue.createElementVNode("use",{"xlink:href":"#logo-f"})],-1),de=Vue.createElementVNode("p",null,"暂无数据",-1),fe=Vue.defineComponent({name:"Empty"});var me=Vue.defineComponent({...fe,setup:function(e){return(e,t)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(i),{class:"empty",direction:"column",align:"center"},{default:Vue.withCtx((()=>[pe,de,Vue.renderSlot(e.$slots,"default")])),_:3}))}});e("E",n(me));const Ve=["width","height","viewBox"],he=["cx","cy","r"],ge=Vue.defineComponent({name:"CircleEffect"});var ve=Vue.defineComponent({...ge,props:{radius:{type:Number,default:64},count:{type:Number,default:12},level:{type:Number,default:0},offset:{type:Array,default:()=>[0,18]}},setup:function(e){const t=e,n=360/t.count;let r=8;const a=Vue.ref();function i(e){const o=2*Math.PI/360*n*e;return[t.radius+Math.sin(o)*r,t.radius-Math.cos(o)*r,Math.floor(6*Math.random())+6]}const l=Vue.computed((()=>2*t.radius));let u=0;function s(){r>=1.6*t.radius?c():(r+=4,u=requestAnimationFrame((()=>{a.value=a.value.map(((e,t)=>{const o=i(t+1);return o[2]=Math.max(.1,e[2]-.6),o})),s()})))}function c(){cancelAnimationFrame(u)}const p=()=>{c(),function(){r=6;const e=[];for(let o=0;o<t.count;o++)e.push(i(o));a.value=e}(),Vue.nextTick((()=>{s()}))},d=L((()=>t.level>0)),f=Vue.ref(),m=Vue.ref();let V;return Vue.watch((()=>t.level),(e=>{e>0&&Vue.nextTick((()=>{V?V.setOptions({placement:"top"}):V=o(f.value,m.value,{placement:"top",modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{name:"offset",options:{offset:t.offset}}]}),p()}))})),Vue.onBeforeUnmount((()=>{c(),V&&(V.destroy(),V=null)})),(e,t)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createElementVNode("div",{class:"circle-effect-wrapper",ref:(e,t)=>{t.wrapperRef=e,f.value=e}},[Vue.renderSlot(e.$slots,"default")],512),Vue.unref(d)?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,ref:(e,t)=>{t.popoverRef=e,m.value=e}},[(Vue.openBlock(),Vue.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",class:"circle-effect",width:Vue.unref(l),height:Vue.unref(l),viewBox:`0 0 ${Vue.unref(l)} ${Vue.unref(l)}`},[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.value,(([e,t,o],n)=>(Vue.openBlock(),Vue.createElementBlock("circle",{key:n,cx:e,cy:t,r:o},null,8,he)))),128))],8,Ve))],512)):Vue.createCommentVNode("",!0)],64))}});e("C",n(ve));let xe=null;const be="SESSION_PRODUCT_ORDER",ye=function(e){try{return JSON.parse(sessionStorage.getItem(e))}catch(t){return console.log("session storage get item err",t),null}}(be);var ke=e("u",Pinia.defineStore("shoppingBag",{state:()=>({product:ye,products:[]}),getters:{productLength(){return this.products.length}},actions:{pushShoppingBag(e){this.products.push(e)},buyNow(e){this.product=e,function(e,t){try{sessionStorage.setItem(e,JSON.stringify(t))}catch(o){return console.error("session storage set item err",o),!1}}(be,e)}}}));Vue.pushScopeId("data-v-121e3a94");const we={class:"shop-bag-icon"};Vue.popScopeId();const Ce=Vue.defineComponent({name:"ShoppingBagIcon"});var Be=Vue.defineComponent({...Ce,setup:function(e){const t=ke(),o=Vue.ref(!1),n=Vue.ref();let r,a=0,i=0;const l=L(o),u=Vue.reactive({id:"",specId:"",style:{}});function s(){return Math.min(t.productLength,99)}xe=(e,n)=>{u.id=e.product.id,u.specId=e.specification.id,i=n.width/2+n.left-32,a=n.height/2+n.top-32,u.style={top:`${a}px`,left:`${i}px`,transitionDuration:"0ms"},t.pushShoppingBag(e),Vue.nextTick((()=>{setTimeout((()=>{o.value=!0}),300)}))};const c=Vue.ref(s());return Vue.watch(o,(e=>{e?Vue.nextTick((()=>{setTimeout((()=>{r||(r=n.value?.$el.getBoundingClientRect());const e=r.left-(64-r.width)/2-i,t=r.top-(64-r.height)/2-a+2;u.style.transitionDuration="200ms",u.style.transform=`translate(${e}px, ${t}px) scale(0.2)`,setTimeout((()=>{o.value=!1}),200)}),500)})):Vue.nextTick((()=>{c.value=s()}))})),(e,t)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createElementVNode("div",we,[Vue.createVNode(Vue.unref(m),{name:"shop-bag",ref:(e,t)=>{t.iconRef=e,n.value=e}},null,512),Vue.withDirectives(Vue.createElementVNode("span",null,Vue.toDisplayString(c.value),513),[[Vue.vShow,c.value>0]])]),(Vue.openBlock(),Vue.createBlock(Vue.Teleport,{to:"body"},[Vue.createVNode(Vue.Transition,{name:"tada"},{default:Vue.withCtx((()=>[Vue.unref(l)?Vue.withDirectives((Vue.openBlock(),Vue.createBlock(Vue.unref(re),{key:0,class:"prod-shop-bag",width:64,alt:"product",asset:Vue.unref(u).id,assetPath:Vue.unref(u).specId,assetSize:"mini",style:Vue.normalizeStyle(Vue.unref(u).style)},null,8,["asset","assetPath","style"])),[[Vue.vShow,o.value]]):Vue.createCommentVNode("",!0)])),_:1})]))],64))}});Be.__scopeId="data-v-121e3a94";var Se=e("f",Pinia.defineStore("main",{state:()=>({title:""}),actions:{updateTitle(e=""){this.title=e}}}));Vue.pushScopeId("data-v-17d7bfa2");const ze={class:"app-header-left"},Ee=Vue.createElementVNode("input",{type:"search",maxlength:"16",name:"search",autocomplete:"off"},null,-1),Ne={key:1,class:"app-header-title"},$e={class:"app-header-right"};Vue.popScopeId();const Te=Vue.defineComponent({name:"AppHeader",data:()=>({rightShow:!1})});var Pe=Vue.defineComponent({...Te,setup:function(e){const t=VueRouter.useRouter(),o=VueRouter.useRoute(),n=Se(),r=[{id:"/shopping/bag/2",name:"购物袋"},{id:"/my-order",name:"我的订单"}],a=Vue.ref(""),l=Vue.ref(!1);function u(){"menu"===a.value?t.push("/category"):"arrow-left"===a.value&&t.back()}function c(e){t.push(r[e].id)}Vue.watch(o,(({path:e})=>{if(["/","/home"].includes(e)){a.value="menu",l.value=!0;const e="十二区";n.updateTitle(e),document.title=e}else a.value="arrow-left",l.value=!1}));const p=Vue.computed((()=>n.title));return(e,t)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(i),{tag:"header",class:"app-header",align:"center"},{default:Vue.withCtx((()=>[Vue.createElementVNode("div",ze,[Vue.createVNode(Vue.unref(m),{name:a.value,onClick:u},null,8,["name"])]),Vue.createVNode(Vue.unref(s),null,{default:Vue.withCtx((()=>[l.value?(Vue.openBlock(),Vue.createBlock(Vue.unref(i),{key:0,class:"app-header-search",align:"center"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(m),{size:"small",name:"search"}),Vue.createVNode(Vue.unref(s),null,{default:Vue.withCtx((()=>[Ee])),_:1})])),_:1})):(Vue.openBlock(),Vue.createElementBlock("div",Ne,Vue.toDisplayString(Vue.unref(p)),1))])),_:1}),Vue.createElementVNode("div",$e,[Vue.createVNode(Vue.unref(R),{show:e.rightShow,"onUpdate:show":t[0]||(t[0]=t=>e.rightShow=t),placement:"bottom-end",offset:[10,8],menus:r,onMenuClick:c},{reference:Vue.withCtx((()=>[Vue.createVNode(Be)])),_:1},8,["show"])])])),_:1}))}});Pe.__scopeId="data-v-17d7bfa2";const Ie=Vue.defineComponent({name:"App"});var Me=Vue.defineComponent({...Ie,setup:function(e){return Vue.onMounted((()=>{document.body.addEventListener("touchstart",(function(){}),!1)})),(e,t)=>{const o=Vue.resolveComponent("router-view");return Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createVNode(Pe),Vue.createElementVNode("main",null,[Vue.createVNode(o,{name:"prodList"}),Vue.createVNode(o,null,{default:Vue.withCtx((({Component:e})=>[Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx((()=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e)))])),_:2},1024)])),_:1})])],64)}}});const _e=function(e,t){return e()};function je(e){document.getElementById("loading").style.display=e?"flex":"none"}const De=VueRouter.createRouter({history:VueRouter.createWebHashHistory(),routes:[{path:"/",components:{default:()=>_e((()=>t.import("./TheAbsolute-legacy-7d51fcfc.js")))},children:[{name:"order",path:"shopping/bag/:test",component:()=>_e((()=>t.import("./ShoppingBag-legacy-35757615.js")))},{name:"detail",path:"detail",component:()=>_e((()=>t.import("./ProdDetail-legacy-fdc98477.js")))},{name:"result",path:"pay/result",component:()=>_e((()=>t.import("./PayResult-legacy-0c05a07f.js")))}]}]});De.beforeEach(((e,t,o)=>{je(!0),o()})),De.beforeResolve((()=>{je(!1)}));const Re=Vue.createApp(Me);Re.use(De).use(Pinia.createPinia()).mount("#app"),Re.config.errorHandler=(e,t,o)=>{console.log(e,t,o)},window.onerror=(e,t,o,n,r)=>{console.log("window.error"),console.log(e,t,o,n,r)}}}}))}();
