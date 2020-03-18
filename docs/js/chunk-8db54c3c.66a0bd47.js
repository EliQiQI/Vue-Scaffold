(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8db54c3c"],{1752:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"scrollbar blockLayout"},[r("div",{staticClass:"flex-row align-center toolBar"},[r("div",{staticClass:"flex-1"}),r("el-button",{directives:[{name:"has",rawName:"v-has",value:e.resource.add,expression:"resource.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.createRoot}},[e._v("添加")])],1),r("div",{staticClass:"resourceWrap"},[r("resourcePicker",{attrs:{listdata:e.list},on:{edit:e.edit,append:e.append,addResource:e.addResource,remove:e.remove}})],1),r("el-dialog",{attrs:{title:1==e.editForm.type?"路由信息":"资源信息",visible:e.dialogVisible,width:"800px"},on:{close:e.handleCloseDialog}},[r("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name","string"===typeof t?t.trim():t)},expression:"editForm.name"}})],1),e.editForm.method?r("el-form-item",{attrs:{label:"方法",prop:"method"}},[r("el-radio-group",{model:{value:e.editForm.method,callback:function(t){e.$set(e.editForm,"method",t)},expression:"editForm.method"}},e._l(e.requestMethods,function(t,i){return r("el-radio",{key:"m"+i,attrs:{label:t.label.toLowerCase()}},[e._v(e._s(t.label))])}),1)],1):e._e(),e.editForm.method?r("el-form-item",{attrs:{label:"URL",prop:"url"}},[r("el-input",{model:{value:e.editForm.url,callback:function(t){e.$set(e.editForm,"url","string"===typeof t?t.trim():t)},expression:"editForm.url"}})],1):r("el-form-item",{attrs:{label:"路由",prop:"route"}},[r("el-input",{model:{value:e.editForm.route,callback:function(t){e.$set(e.editForm,"route","string"===typeof t?t.trim():t)},expression:"editForm.route"}})],1),r("el-form-item",{attrs:{label:"父级"}},[r("el-cascader",{attrs:{options:e.list,props:{checkStrictly:!0,label:"name",value:"id"}},model:{value:e.editForm.pid,callback:function(t){e.$set(e.editForm,"pid",t)},expression:"editForm.pid"}})],1),r("el-form-item",{attrs:{label:"序号"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.orderNum,callback:function(t){e.$set(e.editForm,"orderNum","string"===typeof t?t.trim():t)},expression:"editForm.orderNum"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")]),r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)},o=[],a=r("df73"),n=r("3af3"),s=r("38c0"),l=r("9f03"),d=r("c0d6"),u={components:{resourcePicker:function(e){return r.e("chunk-72f42aba").then(function(){var t=[r("9b7b")];e.apply(null,t)}.bind(this)).catch(r.oe)}},data:function(){var e=this,t=function(t,r,i){if(2===e.editForm.type&&!r)return i(new Error("请填写Method!"));i()};return{resource:n,dialogVisible:!1,loading:!1,list:[],editForm:{pid:null,method:"get",name:"",url:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],url:[{required:!0,message:"请输入路由/URL",trigger:"blur"}],method:[{validator:t,trigger:"blur"}]},requestMethods:[{label:"GET"},{label:"POST"},{label:"PUT"},{label:"DELETE"}]}},methods:{createRoot:function(){this.editForm={pid:"",name:"",route:""},this.dialogVisible=!0},edit:function(e){this.editForm=a["c"](e),this.dialogVisible=!0},append:function(e){this.editForm={pid:e.id,name:"",route:""},this.dialogVisible=!0},addResource:function(e){this.editForm={pid:e.id,method:"get",name:"",url:""},this.dialogVisible=!0},save:function(){var e=this;this.$refs["editForm"].validate(function(t){if(t){var r=a["c"](e.editForm);e.handleCloseDialog();var i=r.route?s:n;Array.isArray(r.pid)&&(r.pid=r.pid.pop()),r.method&&(r.method=r.method.toLowerCase()),e.loading=!0,r.id?i.edit(r).then(function(){e.fetchData(),e.$message({message:"编辑成功",type:"success"}),e.dialogVisible=!1}):i.add(r).then(function(){e.fetchData(),e.$message({message:"添加成功",type:"success"}),e.dialogVisible=!1})}})},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove:function(e){var t=this;if(!e||!e.id)return null;var r=e.route?s:n;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.remove({id:e.id}).then(function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})})},fetchData:function(){var e=this;this.loading=!0,l["d"]().then(function(t){e.loading=!1;var r=t.data.data;d["a"].set("permission",r),e.list=a["a"](r.menus.concat(r.resources))})}},created:function(){this.fetchData()}},c=u,m=r("2877"),f=Object(m["a"])(c,i,o,!1,null,"7ea24a38",null);t["default"]=f.exports},"38c0":function(e,t,r){"use strict";r.r(t),r.d(t,"list",function(){return o}),r.d(t,"add",function(){return a}),r.d(t,"edit",function(){return n}),r.d(t,"remove",function(){return s});var i=r("d722"),o=function(e){return i["a"].get("/menus",{params:e})},a=function(e){return i["a"].post("/menu",e)},n=function(e){return i["a"].put("/menu",e)},s=function(e){return i["a"].delete("/menu",{params:e})}},"3af3":function(e,t,r){"use strict";r.r(t),r.d(t,"list",function(){return o}),r.d(t,"add",function(){return a}),r.d(t,"edit",function(){return n}),r.d(t,"remove",function(){return s});var i=r("d722"),o=function(e){return i["a"].get("/resources",{params:e})},a=function(e){return i["a"].post("/resource",e)},n=function(e){return i["a"].put("/resource",e)},s=function(e){return i["a"].delete("/resource",{params:e})}}}]);