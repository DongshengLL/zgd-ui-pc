(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{267:function(t,e,n){},273:function(t,e,n){"use strict";n(264),n(265);var r={name:"s-button",components:{"s-icon":n(268).a},props:{type:{type:String,validator:function(t){return["primary","info","success","warning","danger"].includes(t)}},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:String,required:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}},computed:{btnClass:function(){var t=[];return this.iconPosition&&t.push("ico-".concat(this.iconPosition)),this.type&&t.push("btn-".concat(this.type)),this.disabled&&t.push("btn-disabled"),t.join(" ")}}},i=(n(274),n(1)),a=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"s-button",class:t.btnClass,on:{click:function(e){return t.$emit("click")}}},[t.icon&&!t.loading?n("s-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?n("s-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):t._e(),t._v(" "),n("div",{staticClass:"btn-content"},[t._t("default")],2)],1)},[],!1,null,"98432282",null);e.a=a.exports},274:function(t,e,n){"use strict";var r=n(267);n.n(r).a},275:function(t,e,n){},278:function(t,e,n){t.exports=n(286)},281:function(t,e,n){"use strict";var r=n(275);n.n(r).a},282:function(t,e,n){"use strict";var r={name:"s-input",components:{"s-icon":n(268).a},props:{icon:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String},placeholder:{type:String}}},i=(n(281),n(1)),a=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:{error:t.error,disabled:t.disabled,readonly:t.readonly}},[t.icon?[n("s-icon",{attrs:{name:t.icon}})]:t._e(),t._v(" "),n("input",{ref:"input",attrs:{type:"text",readonly:t.readonly,disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},change:function(e){return t.$emit("change",e.target.value)},focus:function(e){return t.$emit("focus",e.target.value)},blur:function(e){return t.$emit("blur",e.target.value)}}}),t._v(" "),t.error?[n("s-icon",{attrs:{name:"error"}}),t._v(" "),n("span",{staticClass:"err-msg"},[t._v(t._s(t.error))])]:t._e()],2)},[],!1,null,"81542912",null);e.a=a.exports},283:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(67),i=n.n(r);function a(t,e,n){return e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},286:function(t,e,n){n(54),n(40),t.exports=n(287)},287:function(t,e,n){var r=n(21),i=n(128);t.exports=n(2).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},306:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(307),i=n.n(r),a=n(310),o=n.n(a),s=n(17),u=n.n(s),l=n(283);function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=u()(n);"function"==typeof o.a&&(r=r.concat(o()(n).filter(function(t){return i()(n,t).enumerable}))),r.forEach(function(e){Object(l.a)(t,e,n[e])})}return t}},307:function(t,e,n){t.exports=n(308)},308:function(t,e,n){n(309);var r=n(2).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},309:function(t,e,n){var r=n(33),i=n(174).f;n(126)("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},310:function(t,e,n){t.exports=n(311)},311:function(t,e,n){n(173),t.exports=n(2).Object.getOwnPropertySymbols},312:function(t,e,n){},313:function(t,e,n){},314:function(t,e,n){},340:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},341:function(t,e,n){t.exports=n(555)},342:function(t,e,n){var r=n(25),i=n(558)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},343:function(t,e,n){"use strict";n(559);var r=n(8),i=n(129),a=n(16),o=/./.toString,s=function(t){n(26)(RegExp.prototype,"toString",t,!0)};n(14)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},550:function(t,e,n){t.exports=n(551)},551:function(t,e,n){n(552),t.exports=n(2).parseInt},552:function(t,e,n){var r=n(7),i=n(553);r(r.G+r.F*(parseInt!=i),{parseInt:i})},553:function(t,e,n){var r=n(4).parseInt,i=n(554).trim,a=n(340),o=/^[-+]?0[xX]/;t.exports=8!==r(a+"08")||22!==r(a+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(o.test(n)?16:10))}:r},554:function(t,e,n){var r=n(7),i=n(85),a=n(27),o=n(340),s="["+o+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),c=function(t,e,n){var i={},s=a(function(){return!!o[t]()||"​"!="​"[t]()}),u=i[t]=s?e(f):o[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i)},f=c.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},555:function(t,e,n){n(556),t.exports=n(2).Object.entries},556:function(t,e,n){var r=n(7),i=n(557)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},557:function(t,e,n){var r=n(41),i=n(33),a=n(55).f;t.exports=function(t){return function(e){for(var n,o=i(e),s=r(o),u=s.length,l=0,c=[];u>l;)a.call(o,n=s[l++])&&c.push(t?[n,o[n]]:o[n]);return c}}},558:function(t,e,n){var r=n(56),i=n(57),a=n(130).f;t.exports=function(t){return function(e){for(var n,o=i(e),s=r(o),u=s.length,l=0,c=[];u>l;)a.call(o,n=s[l++])&&c.push(t?[n,o[n]]:o[n]);return c}}},559:function(t,e,n){n(16)&&"g"!=/./g.flags&&n(20).f(RegExp.prototype,"flags",{configurable:!0,get:n(129)})},560:function(t,e,n){"use strict";var r=n(312);n.n(r).a},561:function(t,e,n){"use strict";var r=n(313);n.n(r).a},562:function(t,e,n){"use strict";var r=n(314);n.n(r).a},595:function(t,e,n){"use strict";n.r(e);n(19);var r=n(550),i=n.n(r),a=n(306),o=n(10),s=n.n(o),u=(n(53),n(283)),l=(n(30),n(13),n(264),n(265),n(17)),c=n.n(l),f=(n(51),n(278)),d=n.n(f),p=n(341),v=n.n(p),g=(n(38),n(342),n(50)),m=n.n(g);function h(t,e){return function(t){if(m()(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=d()(t);!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(343);var b=n(161),y=n(162),x=function(){function t(){Object(b.a)(this,t)}return Object(y.a)(t,[{key:"validate",value:function(t,e){for(var n={},r=v()(e),i=0;i<r.length;i++){var a=r[i],o=a[0];if(void 0!==t[o]){var s=!0,u=!1,l=void 0;try{for(var f,p=d()(a[1]);!(s=(f=p.next()).done);s=!0){var g=f.value,m=c()(g).filter(function(t){return["lengthControl","pattern","validator","required"].includes(t)})[0],h=this[m](t[o],g);if(!h){console.log(o,"checked failed in",m),n[o]=g.message;break}if("string"==typeof h){console.log(o,"checked failed in",m),n[o]=h;break}}}catch(t){u=!0,l=t}finally{try{s||null==p.return||p.return()}finally{if(u)throw l}}}}return n}},{key:"required",value:function(t){return!(void 0===t||""===t)}},{key:"lengthControl",value:function(t,e){var n=!0,r=t.toString().length,i=h(e.lengthControl,2),a=i[0],o=i[1];return a&&r<a&&(n=!1),o&&r>o&&(n=!1),n}},{key:"max",value:function(t,e){return t.toString().length<=e.max}},{key:"pattern",value:function(t,e){return e.pattern.test(t)}},{key:"validator",value:function(t,e){try{return e.validator.call(this,t)}catch(t){return t.message}}}],[{key:"add",value:function(e,n){t.prototype[e]=n}}]),t}(),_={name:"s-form",data:function(){return{errors:{},validator:new x,eventTriggerModel:{},requiredFieldsList:[]}},props:{rules:{type:Object},model:{type:Object}},mounted:function(){this.bindEvent(),this.setRequiredLabel()},methods:{findReqiredFields:function(){for(var t=v()(this.rules),e=0;e<t.length;e++){var n=t[e],r=!0,i=!1,a=void 0;try{for(var o,s=d()(n[1]);!(r=(o=s.next()).done);r=!0){var u=o.value;if(c()(u).includes("required")&&u.required){this.requiredFieldsList.push(n[0]);break}}}catch(t){i=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},setRequiredLabel:function(){var t=this;this.findReqiredFields(),this.$children.forEach(function(e){t.requiredFieldsList.includes(e.name)&&(e.required=!0)})},bindEvent:function(){var t=this;this.$children.forEach(function(e){var n=e.$props.name;e.$children.forEach(function(e){e.$on("blur",function(){var e=Object(u.a)({},n,t.model[n]);t.eventTriggerModel=s()(t.eventTriggerModel,e),t.validate(t.eventTriggerModel)})})})},validate:function(t){var e=this.rules,n=this.validator;this.errors=n.validate(t,e),this.boardcast()},reset:function(t){var e=Object(a.a)({},t);c()(e).forEach(function(t){e[t]=""}),this.errors={},this.boardcast()},boardcast:function(){var t=Object(a.a)({},this.errors);this.$children.forEach(function(e){e.error=t[e.$props.name]})}}},w=n(1),k=Object(w.a)(_,function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.$emit("submit",e)}}},[t._t("default")],2)},[],!1,null,null,null).exports,$={name:"s-form-item",data:function(){return{error:"",required:!1}},props:{label:{type:String,required:!0},name:{required:!0}},watch:{error:function(t){t?this.$children[0].$el.classList.add("error"):this.$children[0].$el.classList.remove("error")}}},C=(n(560),n(561),Object(w.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-item"},[n("div",{staticClass:"label"},[n("div",{staticClass:"ico"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.required,expression:"required"}],staticClass:"required-ico"},[t._v("*")])]),t._v(" "),n("label",[t._v(t._s(t.label))])]),t._v(" "),n("div",{staticClass:"controls"},[t._t("default"),t._v(" "),n("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")])],2)])},[],!1,null,"96af6570",null).exports),E=n(273),j=n(282),q=n(0),S=n(289),O=n.n(S);q.a.use(O.a);var R={data:function(){return{code:'\n        <s-form  :model.sync="user" class="form"  :rules="rules" ref="form">\n          <h3>登录</h3>\n          <s-form-item label="姓名" name="name">\n            <s-input type="text" v-model="user.name" placeholder="试一下输入Bingo"></s-input>\n          </s-form-item>\n          <s-form-item label="年龄"  name="age"  >\n            <s-input type="number" v-model="user.age" placeholder="输入一个正常人的年龄哦"></s-input>\n          </s-form-item>\n          <s-form-item label="数量"  name="count">\n            <s-input type="number" v-model="user.count"></s-input>\n          </s-form-item>\n          <div style="display:flex;justify-content:flex-end">\n            <s-button class="ok" @click="submit" style="width:60px">提交</s-button>\n            <s-button class="ok" @click="reset" style="width:60px;margin-left:30px">重置</s-button>\n          </div>\n        </s-form>\n        export default {\n          data () {\n            var checkName = (val) => {\n            if (val === \'Bingo\') {\n                throw new Error(\'被骗了哈哈哈~\')\n            } else { return true }\n            }\n            var checkAge = (val) => {\n            if (parseInt(val) > 30) {\n                throw new Error(\'不能超过30岁\')\n            } else { return true }\n            }\n              return {\n                user: {\n                  name: \'\',\n                  age: \'\',\n                  count:\'\'\n                },\n                rules: {\n                  name: [\n                    { required: true, message: \'请输入名字\', trigger: \'blur\' },\n                    { lengthControl: [3, 5], message: \'长度在 3 到 5 个字符\', trigger: \'blur\' },\n                    { pattern: /^(D)+$/, message: \'内容不能有数字\', trigger: \'blur\' },\n                    { validator: checkName, trigger: \'blur\' }\n                  ],\n                  age: [\n                    { required: true, message: \'请输入年龄\', trigger: \'blur\' },\n                    { lengthControl: [ null, 2 ], message: \'长度不能超过2\', trigger: \'blur\' },\n                    { pattern: /d/, message: \'必须是数字\', trigger: \'blur\' },\n                    { validator: checkAge, trigger: \'blur\' }\n                  ],\n                  count: [\n                    { lengthControl: [ null, 4 ], message: \'长度不能超过4\', trigger: \'blur\' }\n                  ]\n                }\n\n              }\n            }\n    '.replace(/^ {8}/gm,"").trim(),user:{name:"",age:"",count:""},rules:{name:[{required:!0,message:"请输入名字",trigger:"blur"},{lengthControl:[3,5],message:"长度在 3 到 5 个字符",trigger:"blur"},{pattern:/^(\D)+$/,message:"内容不能有数字",trigger:"blur"},{validator:function(t){if("Bingo"===t)throw new Error("被骗了哈哈哈~");return!0},trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"},{lengthControl:[null,2],message:"长度不能超过2",trigger:"blur"},{pattern:/\d/,message:"必须是数字",trigger:"blur"},{validator:function(t){if(i()(t)>30)throw new Error("不能超过30岁");return!0},trigger:"blur"}],count:[{lengthControl:[null,4],message:"长度不能超过4",trigger:"blur"}]}}},components:{"s-form":k,"s-form-item":C,"s-button":E.a,"s-input":j.a},methods:{submit:function(){this.$refs.form.validate(this.user)},reset:function(){this.$refs.form.reset(this.user)}}},B=(n(562),Object(w.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sakura-card",{scopedSlots:t._u([{key:"code",fn:function(){return[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"vue"},[t._v(t._s(t.code))])])]},proxy:!0}])},[n("div",{staticClass:"form-wrapper"},[n("s-form",{ref:"form",staticClass:"form",attrs:{model:t.user,rules:t.rules},on:{"update:model":function(e){t.user=e}}},[n("span",[t._v("请随意填写下方表单并提交，本例子含多种校验规则，详细可以展开代码查看~")]),t._v(" "),n("h3",[t._v("登录")]),t._v(" "),n("s-form-item",{attrs:{label:"姓名",name:"name"}},[n("s-input",{attrs:{type:"text",placeholder:"试一下输入Bingo"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),t._v(" "),n("s-form-item",{attrs:{label:"年龄",name:"age"}},[n("s-input",{attrs:{type:"number",placeholder:"输入一个正常人的年龄哦"},model:{value:t.user.age,callback:function(e){t.$set(t.user,"age",e)},expression:"user.age"}})],1),t._v(" "),n("s-form-item",{attrs:{label:"数量",name:"count"}},[n("s-input",{attrs:{type:"number"},model:{value:t.user.count,callback:function(e){t.$set(t.user,"count",e)},expression:"user.count"}})],1),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("s-button",{staticClass:"ok",staticStyle:{width:"60px"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),n("s-button",{staticClass:"ok",staticStyle:{width:"60px","margin-left":"30px"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)])],1)},[],!1,null,"22b1b7ec",null));e.default=B.exports}}]);