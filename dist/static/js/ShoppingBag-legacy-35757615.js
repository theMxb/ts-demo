!function(){var e=document.createElement("style");e.innerHTML=".bill[data-v-c77de798]{padding:1px 16px 16px;background-color:#fff}.bill>button[data-v-c77de798]{height:56px}\n",document.head.appendChild(e),System.register(["./index-legacy-ef54a768.js","./index-legacy-70db2ab4.js","./useUpdateTitle-legacy-b1521411.js","./vendor-legacy-063e0170.js"],(function(e){"use strict";var u,t,n,c,o,a;return{setters:[function(e){u=e.u,t=e.B},function(e){n=e.W,c=e.S,o=e.a},function(e){a=e.u},function(){}],execute:function(){Vue.pushScopeId("data-v-c77de798");const r={class:"bill"},d=Vue.createElementVNode("p",null,"运费: ¥ 0",-1),l=Vue.createTextVNode("结账");Vue.popScopeId();e("default",Vue.defineComponent({setup(e){a("填写订单");const i=VueRouter.useRoute(),{test:p}=i.params,V=u(),s=Vue.computed((()=>"1"!==p?V.products:null==V.product?[]:[V.product])),f=Vue.computed((()=>s.value.map((e=>({cost:e.specification.price,amount:e.buyNum}))).reduce(((e,u)=>e+u.cost*u.amount),0))),m=VueRouter.useRouter(),b=()=>{m.push({name:"result"})};return(e,u)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(n),null,{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(c),{dataSource:Vue.unref(s)},null,8,["dataSource"]),Vue.createVNode(Vue.unref(o)),Vue.createElementVNode("div",r,[d,Vue.createElementVNode("p",null,"总计: ¥ "+Vue.toDisplayString(Vue.unref(f)),1),Vue.createVNode(Vue.unref(t),{type:"primary",block:"",size:"large",onClick:b},{default:Vue.withCtx((()=>[l])),_:1})])])),_:1}))}})).__scopeId="data-v-c77de798"}}}))}();
