!function(){var e=document.createElement("style");e.innerHTML='.wrapper{height:100%}.wrapper-ctx{overflow-y:auto;overflow-x:hidden}.wrapper-o{height:100%;overflow-y:auto;overflow-x:hidden}.list{background-color:#fff}.list-item{background-color:#fff;padding:16px}.list-item:not(:last-child){border-bottom:1px solid #ececec}.list-item>svg{fill:#888888ad}.field>label{width:80px}.field>.field-input{position:relative;padding-right:18px}.field>.field-input>input{padding:0}.field>.field-input>svg{position:absolute;z-index:2;right:0;top:0;fill:#cecece}.field-error{border-bottom:1px solid #ff4e4e}.field-error:not(:last-child){border-bottom-color:#ff4e4e}.field-error-msg{color:#ff2525;margin:0 0 -12px;font-size:14px;line-height:1.68}.shopping-list .image{margin-right:8px}.shopping-list>li p{margin:0 0 12px}.shopping-list>li .product-title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;height:36px;overflow:hidden}.shopping-list>li .product-amount{font-size:14px;vertical-align:top;margin-left:2px}.shopping-list>li .arrow-down{position:relative;left:4px;top:2px}.shipping-address>header{font-size:18px;padding:16px}.shipping-address>div{padding:16px;background-color:#fff;position:relative}.shipping-address>div:after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:repeating-linear-gradient(-45deg,#ff2525 0,#ff2525 20%,transparent 0,transparent 25%,#0072e4 0,#0072e4 45%,transparent 0,transparent 50%);background-size:80px}.shipping-address>div:active{background-color:#ebebeb}.shipping-address>div p{margin-bottom:0;font-size:14px}.shipping-address>div p:first-child{margin:0 0 4px}.shipping-address>p{padding:0 16px;font-size:14px}\n',document.head.appendChild(e),System.register(["./index-legacy-ef54a768.js"],(function(e){"use strict";var t,r,n,o,a,l,u,i;return{setters:[function(e){t=e.F,r=e.a,n=e.w,o=e.I,a=e.b,l=e.c,u=e.d,i=e.e}],execute:function(){const s={key:1,class:"wrapper-o"},d=Vue.defineComponent({name:"Wrapper"});var p=Vue.defineComponent({...d,setup:function(e){return(e,n)=>e.$slots.header?(Vue.openBlock(),Vue.createBlock(Vue.unref(t),{key:0,class:"wrapper",direction:"column"},{default:Vue.withCtx((()=>[Vue.renderSlot(e.$slots,"header"),Vue.createVNode(Vue.unref(r),{class:"wrapper-ctx"},{default:Vue.withCtx((()=>[Vue.renderSlot(e.$slots,"default")])),_:3}),Vue.renderSlot(e.$slots,"footer")])),_:3})):(Vue.openBlock(),Vue.createElementBlock("div",s,[Vue.renderSlot(e.$slots,"default")]))}});e("W",n(p));const c=Vue.defineComponent({name:"List"});var V=Vue.defineComponent({...c,props:{tag:{type:String,default:"ul"}},setup:function(e){return(t,r)=>(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.tag),{class:"list"},{default:Vue.withCtx((()=>[Vue.renderSlot(t.$slots,"default")])),_:3}))}}),f=e("L",n(V));const m=Vue.defineComponent({name:"ListItem"});var g=Vue.defineComponent({...m,props:{tag:{type:String,default:"li"},arrow:{type:String,default:"right"}},setup:function(e){return(n,a)=>n.$slots.default?(Vue.openBlock(),Vue.createBlock(Vue.unref(t),{key:0,tag:e.tag,align:"start",class:"list-item"},{default:Vue.withCtx((()=>[Vue.renderSlot(n.$slots,"default")])),_:3},8,["tag"])):(Vue.openBlock(),Vue.createBlock(Vue.unref(t),{key:1,tag:e.tag,align:"start",class:"list-item",role:"button"},{default:Vue.withCtx((()=>[n.$slots.label?(Vue.openBlock(),Vue.createBlock(Vue.unref(r),{key:0},{default:Vue.withCtx((()=>[Vue.renderSlot(n.$slots,"label")])),_:3})):Vue.createCommentVNode("",!0),e.arrow?(Vue.openBlock(),Vue.createBlock(Vue.unref(o),{key:1,name:`arrow-${e.arrow}`,size:"small"},null,8,["name"])):Vue.createCommentVNode("",!0)])),_:3},8,["tag"]))}}),h=e("b",n(g));const x=["for"],v=["type","name","id","placeholder","maxlength","value"],k={key:0,class:"field-error-msg"},w=Vue.defineComponent({name:"Field"});var y=Vue.defineComponent({...w,props:{label:{type:String,required:!0},name:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,default:""},maxlength:[Number,String],modelValue:[Number,String],rules:Array},emits:["update:modelValue"],setup:function(e,{emit:t}){const n=e,i=Vue.ref(!1),s=Vue.ref(n.modelValue),d=Vue.computed((()=>i.value&&!!s.value)),p=Vue.ref(),c=(e="")=>{e!==n.modelValue&&t("update:modelValue",e),s.value=e},V=e=>{e.target.isComposing||c(e.target.value)},f=()=>{c(),g.verified=!1,g.errorMessage=""},m=()=>{i.value=!0},{validator:g,validate:w}=a(s,n.rules);l(p,(()=>{i.value=!1}));const y=()=>{g.verified=!1,g.errorMessage="",w()};return u(w),(t,n)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(h),{tag:"div",class:Vue.normalizeClass(["field",{"field-error":!!Vue.unref(g).errorMessage}])},{default:Vue.withCtx((()=>[Vue.createElementVNode("label",{for:e.name},Vue.toDisplayString(e.label),9,x),Vue.createVNode(Vue.unref(r),{class:"field-input"},{default:Vue.withCtx((()=>[Vue.createElementVNode("input",{ref:(e,t)=>{t.inputRef=e,p.value=e},autocomplete:"off",type:e.type,name:e.name,id:e.name,placeholder:e.placeholder,maxlength:e.maxlength,value:s.value,onInput:V,onFocus:m,onChange:y},null,40,v),Vue.withDirectives(Vue.createVNode(Vue.unref(o),{name:"error-o",size:"small",ref:(e,t)=>{t.clearRef=e},onClick:f},null,512),[[Vue.vShow,Vue.unref(d)]]),Vue.unref(g).errorMessage?(Vue.openBlock(),Vue.createElementBlock("p",k,Vue.toDisplayString(Vue.unref(g).errorMessage),1)):Vue.createCommentVNode("",!0)])),_:1}),Vue.renderSlot(t.$slots,"right")])),_:3},8,["class"]))}});n(y);const b={class:"product-title"},C={"data-operator":"reselect"},N={class:"product-amount"},S=Vue.defineComponent({name:"ShoppingList"});var B=Vue.defineComponent({...S,props:{dataSource:{type:Array,required:!0}},emits:["reselect"],setup:function(e,{emit:n}){const a=e,l=e=>{let t=e.target;const r=t.dataset.operator;if(!r)return;for(;!/li/i.test(t.tagName)&&null!=t;)t=t.parentNode;const o=parseInt(t.dataset.index);"reselect"===r&&n("reselect",a.dataSource[o])};return(n,a)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(f),{class:"shopping-list",onClick:l},{default:Vue.withCtx((()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.dataSource,(({product:e,specification:n,buyNum:a},l)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(h),{key:e.id,"data-index":l},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(i),{width:88,alt:"product","asset-size":"mini",asset:e.id,"asset-path":n.id},null,8,["asset","asset-path"]),Vue.createVNode(Vue.unref(r),null,{default:Vue.withCtx((()=>[Vue.createElementVNode("p",b,Vue.toDisplayString(e.name),1),Vue.createElementVNode("p",null,[Vue.createElementVNode("a",C,Vue.toDisplayString(n.name),1),Vue.createVNode(Vue.unref(o),{"data-operator":"reselect",name:"arrow-down",type:"primary",size:"mini"})]),Vue.createVNode(Vue.unref(t),{justify:"between"},{default:Vue.withCtx((()=>[Vue.createElementVNode("div",null,[Vue.createElementVNode("strong",null,"¥ "+Vue.toDisplayString(n.price),1),Vue.createElementVNode("span",N,"×"+Vue.toDisplayString(a),1)])])),_:2},1024)])),_:2},1024)])),_:2},1032,["data-index"])))),128))])),_:1}))}});e("S",n(B));const E={class:"shipping-address"},z=Vue.createElementVNode("header",null,"送货至:",-1),_=Vue.createElementVNode("p",null,"广东省 广州市 番禺区",-1),$=Vue.createElementVNode("strong",null,"XX城XX村XX座XXXX",-1),X=Vue.createElementVNode("p",null,"zhangsan 130****5678",-1),D=Vue.createElementVNode("p",null,"现在订购，预计2021/07/02送达。",-1),L=Vue.defineComponent({name:"ShippingAddress"});var M=Vue.defineComponent({...L,setup:function(e){return(e,n)=>(Vue.openBlock(),Vue.createElementBlock("section",E,[z,Vue.createVNode(Vue.unref(t),{align:"center"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(r),null,{default:Vue.withCtx((()=>[_,$,X])),_:1}),Vue.createVNode(Vue.unref(o),{name:"arrow",size:"small",type:"primary"})])),_:1}),D]))}});e("a",n(M))}}}))}();