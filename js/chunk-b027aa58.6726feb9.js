(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b027aa58"],{7803:function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register"},[t("div",[t("h3",[e._v("用户名：")]),t("el-input",{attrs:{placeholder:"请设置用户名"},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),t("p",[e._v("用户名长度1到15个字符，只能是字母数字下划线中文")]),t("h3",[e._v("密码：")]),t("el-input",{attrs:{placeholder:"请设置密码",type:"password"},nativeOn:{keyup:function(s){return"button"in s||13===s.keyCode?e.onRegister(s):null}},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}},[t("i",{staticClass:"el-input__icon el-icon-view",attrs:{slot:"suffix"},on:{click:e.showPassword},slot:"suffix"})]),t("p",[e._v("密码长度6到16个字符")]),t("el-button",{attrs:{plain:"",type:"success",size:"small"},on:{click:e.onRegister}},[e._v("立即注册")]),t("P",{staticClass:"foot"},[e._v("已有帐号？"),t("router-link",{attrs:{to:"/login"}},[e._v("去登陆")])],1)],1)])},r=[],a=t("be94"),o=(t("cadf"),t("551c"),t("097d"),t("2f62")),i={data:function(){return{username:"",password:""}},methods:Object(a["a"])({},Object(o["b"])(["register"]),{onRegister:function(){var e=this;!this.username||this.username.length>15?this.$message.error("用户名长度1到15个字符"):this.password.length<6||this.password.length>16?this.$message.error("密码长度6到16个字符"):this.register({username:this.username,password:this.password}).then(function(){e.$router.push("/my")})},showPassword:function(e){var s=e.target.parentNode.parentNode.parentNode.childNodes[1];s.type="password"===s.type?"text":"password"}})},u=i,l=(t("8f89"),t("2877")),c=Object(l["a"])(u,n,r,!1,null,null,null);c.options.__file="register.vue";s["default"]=c.exports},"8f89":function(e,s,t){"use strict";var n=t("9e4f"),r=t.n(n);r.a},"9e4f":function(e,s,t){}}]);
//# sourceMappingURL=chunk-b027aa58.6726feb9.js.map