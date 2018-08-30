 $(function() {
     var setting = {
         view: {
             selectedMulti: true
         },
         edit: {
             enable: false,
             editNameSelectAll: true,
             showRemoveBtn: false,
             showRenameBtn: false
         },
         data: {
             simpleData: {
                 enable: true
             }
         },
         callback: {
             onExpand: zTreeOnExpand,
             onClick: zTreeOnClick
         }
     };
     var zNodes = [
         { id: 1, pId: 0, name: "系统资源", open: true, editable: false },
         { id: 11, pId: 1, name: "资源目录", open: true, addable: false },
         { id: 111, pId: 11, name: "事项", open: true, removeable: false },
         { id: 1111, pId: 111, name: "自然人事项", removeable: false, editable: false, addable: false },
         { id: 1112, pId: 111, name: "政务服务事项" },
         { id: 112, pId: 11, name: "办件", open: true },
         { id: 1121, pId: 112, name: "平台访问最多数据" },
         { id: 1122, pId: 112, name: "政务服务事项" },
         { id: 12, pId: 1, name: "专题构建", isParent: true },
         { id: 121, pId: 12, name: "事项" },
         { id: 1211, pId: 121, name: "自然人事项" },
         { id: 1212, pId: 121, name: "政务服务事项" },
         { id: 122, pId: 12, name: "办件" },
         { id: 1221, pId: 122, name: "平台访问最多数据" },
         { id: 1222, pId: 122, name: "政务服务事项" },
         { id: 13, pId: 1, name: "多维分析", isParent: true },
         { id: 131, pId: 13, name: "事项" },
         { id: 1311, pId: 131, name: "自然人事项" },
         { id: 1312, pId: 131, name: "政务服务事项" },
         { id: 132, pId: 13, name: "办件" },
         { id: 1321, pId: 132, name: "平台访问最多数据" },
         { id: 1322, pId: 132, name: "政务服务事项" },
         { id: 14, pId: 1, name: "数据分析", isParent: true },
         { id: 141, pId: 14, name: "事项" },
         { id: 1411, pId: 141, name: "自然人事项" },
         { id: 1412, pId: 141, name: "政务服务事项" },
         { id: 142, pId: 14, name: "办件" },
         { id: 1421, pId: 142, name: "平台访问最多数据" },
         { id: 1422, pId: 142, name: "政务服务事项" },
         { id: 15, pId: 1, name: "网页发布", isParent: true },
         { id: 151, pId: 15, name: "事项" },
         { id: 1511, pId: 151, name: "自然人事项" },
         { id: 1512, pId: 151, name: "政务服务事项" },
         { id: 152, pId: 15, name: "办件" },
         { id: 1521, pId: 152, name: "平台访问最多数据" },
         { id: 1522, pId: 152, name: "政务服务事项" },

         { id: 2, pId: 0, name: "个人空间" },
         { id: 21, pId: 2, name: "资源目录", open: true },
         { id: 211, pId: 21, name: "事项", open: true },
         { id: 2111, pId: 211, name: "自然人事项" },
         { id: 2112, pId: 211, name: "政务服务事项" },
         { id: 212, pId: 21, name: "办件", open: true },
         { id: 2121, pId: 212, name: "平台访问最多数据" },
         { id: 2122, pId: 212, name: "政务服务事项" },
         { id: 22, pId: 2, name: "专题构建", isParent: true },
         { id: 221, pId: 22, name: "事项" },
         { id: 2211, pId: 221, name: "自然人事项" },
         { id: 2212, pId: 221, name: "政务服务事项" },
         { id: 222, pId: 22, name: "办件" },
         { id: 2221, pId: 222, name: "平台访问最多数据" },
         { id: 2222, pId: 222, name: "政务服务事项" },
         { id: 23, pId: 2, name: "多维分析", isParent: true },
         { id: 231, pId: 23, name: "事项" },
         { id: 2311, pId: 231, name: "自然人事项" },
         { id: 2312, pId: 231, name: "政务服务事项" },
         { id: 232, pId: 23, name: "办件" },
         { id: 2321, pId: 232, name: "平台访问最多数据" },
         { id: 2322, pId: 232, name: "政务服务事项" },
         { id: 24, pId: 2, name: "数据分析", isParent: true },
         { id: 241, pId: 24, name: "事项" },
         { id: 2411, pId: 241, name: "自然人事项" },
         { id: 2412, pId: 241, name: "政务服务事项" },
         { id: 242, pId: 24, name: "办件" },
         { id: 2421, pId: 242, name: "平台访问最多数据" },
         { id: 2422, pId: 242, name: "政务服务事项" },
         { id: 25, pId: 2, name: "网页发布", isParent: true },
         { id: 251, pId: 25, name: "事项" },
         { id: 2511, pId: 251, name: "自然人事项" },
         { id: 2512, pId: 251, name: "政务服务事项" },
         { id: 252, pId: 25, name: "办件" },
         { id: 2521, pId: 252, name: "平台访问最多数据" },
         { id: 2522, pId: 252, name: "政务服务事项" },
     ];
     //新增按钮添加
     function addnewBtn(nodeList) {
         var newCount = 1;
         var zTree = $.fn.zTree.getZTreeObj("tree");
         nodeList.forEach(function(element, index) {
             var sObj = $("#" + element.tId + "_span");
             if (zTree.setting.edit.enable) { //判断当前是否可以编辑
                 var addable = (element.addable == undefined) || (element.addable == true) ? "addable" : ""; //新增权限 权限增加了一个able的标记，根据class取不同图片，下面绑定事件也是绑在该class上 下同
                 var editable = (element.editable == undefined) || (element.editable == true) ? "editable" : ""; //编辑权限
                 var removeable = (element.removeable == undefined) || (element.removeable == true) ? "removeable" : ""; //删除权限
                 if (element.editNameFlag || $("#addBtn_" + element.tId).length > 0 || $("#remove_" + element.tId).length > 0 || $("#edit_" + element.tId).length > 0) return; //有按钮就不再加了
                 var addStr = "<span class='button add " + addable + "' id='addBtn_" + element.tId +
                     "' title='add node' onfocus='this.blur();'></span>"; //添加按钮
                 var editStr = "<span class='button edit " + editable + "' id='edit_" + element.tId + "' title='rename' onfocus='this.blur();'></span>"; //编辑按钮
                 var delStr = "<span class='button remove " + removeable + "' id='remove_" + element.tId + "' title='remove' onfocus='this.blur();'></span>"; //删除按钮

                 function allstr() {
                     var allstr;
                     if (element.isParent) {
                         allstr = addStr + editStr + delStr;
                     } else {
                         allstr = editStr + delStr;
                     }
                     return allstr;
                 } // 子节点不需要新增按钮
                 sObj.after(allstr()); //拼接html
                 if ((element.addable == undefined) || (element.addable == true)) {
                     var btn = $("#addBtn_" + element.tId); //取到有权限的添加按钮
                 }
                 if (btn) btn.bind("click", function() { //给添加按钮绑定事件
                     var newnode = zTree.addNodes(element, { id: (100 + newCount), pId: element.id, name: "new node" + (newCount++), isParent: true }, true); //新增文件夹（默认新增的是文件 需求有点怪😂）
                     var tId = newnode[0].tId; //添加的节点  获取这个是因为添加的是文件夹 所以他还能继续添加
                     var nStr = "<span class='button add addable' id='addBtn_" + tId + "' title='add node' onfocus='this.blur();'></span><span class='button edit editable' id='edit_" + tId + "' title='rename' onfocus='this.blur();'></span><span class='button remove removeable' id='remove_" + tId + "' title='remove' onfocus='this.blur();'></span>";

                     var nobj = $("#" + tId + "_span").after(nStr); //给添加的节点后面加操作按钮
                     var nbtn = $("#addBtn_" + tId);
                     nbtn.bind('click', function() { //给添加的节点上的添加按钮绑定事件
                         /* Act on the event */
                         zTree.addNodes(newnode[0], { id: (1000 + newCount), pId: newnode[0].id, name: "new node" + (newCount++), isParent: true }, true);
                     });
                     return false;
                 });
             } else {
                 return
             }
         });
     }
     //编辑方法
     var operateNode;

     function zTreeOnClick(event, treeId, treeNode) {
         operateNode = treeNode;
     };
     // 编辑节点
     $(document).on('click', '.button.edit.editable', function(event) {
         var treeObj = $.fn.zTree.getZTreeObj("tree");
         treeObj.editName(operateNode);
     });
     // 删除节点
     $(document).on('click', '.button.remove.removeable', function(event) {
         var treeObj = $.fn.zTree.getZTreeObj("tree");
         treeObj.removeNode(operateNode);
     });

     function zTreeOnExpand(event, treeId, treeNode) {
         function filter(node) {
             return node;
         }
         var treeObj = $.fn.zTree.getZTreeObj("tree");
         var nodes = treeObj.getNodesByFilter(filter, false, treeNode); // 查找节点集合
         console.log(nodes)
         addnewBtn(nodes);
     };
     var newCount = 1;

     function selectAll() {
         var zTree = $.fn.zTree.getZTreeObj("tree");
         zTree.setting.edit.editNameSelectAll = $("#selectAll").attr("checked");
     }
     $.fn.zTree.init($("#tree"), setting, zNodes);
     // 点击编辑
     $(document).on('click', '.manage-btn', function(event) {
         event.preventDefault();
         var zTree = $.fn.zTree.getZTreeObj("tree");
         var nodeList = zTree.transformToArray(zTree.getNodes());
         if ($(this).hasClass('active')) {
             $(this).removeClass('active');
             $(this).text('编辑');
             zTree.setEditable(false)

         } else {
             $(this).addClass('active');
             $(this).text('完成');
             zTree.setEditable(true)
             addnewBtn(nodeList);
         }
     });
 })