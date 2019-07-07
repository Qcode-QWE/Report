window.dropdownJson = '';
window.treeDropdownJson = '';

$(function () {
    loadAllGlobalDropdownJson();
});

function loadAllGlobalDropdownJson() {
    $.ajax({
        type: 'post',
        url: 'LoadDropdown',
        // data: values,
        async: false,
        success: function (result) {
            result = (new Function('return ' + result))();

            if (result.total > 0) {
                window.dropdownJson = result.rows;
            }
        }
    });

    $.ajax({
        type: 'post',
        url: 'LoadTreeDropdown',
        // data: values,
        async: false,
        success: function (result) {
            result = (new Function('return ' + result))();

            if (result.total > 0) {
                window.treeDropdownJson = result.rows;
            }
        }
    });
}

function loadDropdown(selectElementId, isAutoHeight) {
    var cb = $('#' + selectElementId);
    var strLength = selectElementId.length;
    var selectElementName = selectElementId.substring(2, strLength);    // "cbJBKJXSLY_LYFS" >> "JBKJXSLY_LYFS"
    var lastChar = selectElementId.substring(strLength - 1, strLength);
    if (isDigital(lastChar)) {
        selectElementName = selectElementId.substring(2, strLength - 1);
    }
    if(selectElementName.indexOf('JBKJXSLY_ZJ') >= 0) {
        selectElementName = 'JBKJXSLY_ZJ_FULL';
    }


    var height = 'auto';
    if (isAutoHeight != null && isAutoHeight == false) {
        height = '340px';
    }
    cb.combobox({
        data: window.dropdownJson[selectElementName],
        valueField: 'id',
        textField: 'text',
        panelHeight: height,
        editable: false,
        onLoadSuccess: function () {
            var data = cb.combobox('getData');
            cb.combobox('select', data[0].id);
        }
    });
}

function loadTreeDropdownCompany(selectElementId) {
    var cb = $('#' + selectElementId);

    cb.combotree({
        data: window.treeDropdownJson.COMPANY,
        panelHeight: '270px',
        editable: false,
        animate: true,
        lines: true,
        onBeforeExpand: function (node) {
            //cb.combotree('scrollTo', node.target);
        },
        onLoadSuccess: function () {
            cb.combotree('setValue', 0);
            cb.combotree('tree').tree('collapseAll');
        }
    });
}

/* 克隆函数 */
function clone(object) {
    function F() {}
    F.id = object.id;
    F.text = object.text;
    F.state = object.state;
    F.prototype = object.prototype;
    return F;
}

function loadTreeDropdownZone1(nodeId) {
    if (nodeId == 0) {
    	var items = [];
    	var oTree = window.treeDropdownJson.ZONE.concat();
    	$.each(oTree, function(index) {
    		var item = clone(oTree[index]); // oTree[index].concat();
    		try{
    			item.children = null;
    		} catch(ex){}
            items.push(item);
        });
    	return items;
    } else {
    	var items = [];
    	$.each(window.treeDropdownJson.ZONE, function(index) {
    		var item = window.treeDropdownJson.ZONE[index];
    		if (item.id == nodeId) {
    			items = item.children;
    			return false;
    		}
        });
    	return items;
    }
}

function loadTreeDropdownZone(selectElementId) {
    var cb = $('#' + selectElementId);

    cb.combotree({
        data: loadTreeDropdownZone1(0),		//window.treeDropdownJson.ZONE,
        panelHeight: '270px',
        editable: false,
        animate: true,
        lines: true,
        onBeforeExpand: function (node) {
    		if (node.children == null && (node.id.indexOf("0000") > 0)) {	//  || node.id.indexOf("9999") >= 0)
	    		var children = loadTreeDropdownZone1(node.id);
	    		cb.combotree("tree").tree("append", {
	    			parent: node.target,
	    			data: children
	    		});
	
	            cb.combotree('tree').tree('collapseAll');
    		}
        },
        onLoadSuccess: function () {
            cb.combotree('setValue', 0);
            cb.combotree('tree').tree('collapseAll');
        }
    });
}

function loadTreeDropdownId(selectElementId) {
    var cb = $('#' + selectElementId);

    cb.combotree({
        data: window.treeDropdownJson.ID,
        panelHeight: '270px',
        editable: false,
        animate: true,
        lines: true,
        onBeforeExpand: function (node) {
            //alert(node.target);
        },
        onChange: function (n,o) {
    		if (!validateSF_Index(n)){
    			cb.combotree('setValue', 0);
    		}
		},
        onLoadSuccess: function () {
	      	var arr = new Array("E0000","E0100","E0200","E0300","E0400","E0500","E50403","E10304","E20204","E40104","E30505","E40100","E20200","E10300","E50400","E30500");
	      	for (i=0;i<arr.length ;i++ ){
	              var node=cb.combotree('tree').tree('find',arr[i]);
	              if (node != null) {
	            	  cb.combotree('tree').tree('expandTo', node.target);
	              }
	      	}
			cb.combotree('setValue', 0);
        }
    });
}

function validateSF_Index(n) {
	if (n=="E0000" || n=="E0400" || n=="E0500" || n=="E0100" || n=="E0200" || n=="E0300" || n=="E40100" || n=="E20200" || n=="E10300" || n=="E50400" || n=="E30500"){
		return false;
	} else {
		return true;
	}
}

function loadTreeDropdownSpecialId(selectElementId) {
    var cb = $('#' + selectElementId);

    cb.combotree({
        data: window.treeDropdownJson.SPECIAL_ID,
        panelHeight: '270px',
        editable: false,
        animate: true,
        lines: true,
        onBeforeExpand: function (node) {
            //alert(node.target);
        },
        onLoadSuccess: function () {
            cb.combotree('setValue', 0);
            cb.combotree('tree').tree('collapseAll');
        }
    });
}

function loadTreeDropdownNature(selectElementId) {
    var cb = $('#' + selectElementId);

    cb.combotree({
        data: window.treeDropdownJson.NATURE,
        panelHeight: '270px',
        editable: false,
        animate: true,
        lines: true,
        onBeforeExpand: function (node) {
            //alert(node.target);
        },
        onLoadSuccess: function () {
            cb.combotree('setValue', 0);
//            cb.combotree('tree').tree('collapseAll');
        	var arr = new Array("a000000","a010000","a010100","a010200","a010102","a010202");
        	for (i=0;i<arr.length ;i++ ){
                var node=cb.combotree('tree').tree('find',arr[i]);
                cb.combotree('tree').tree('expandTo', node.target);
        	}
        }
    });
}

function isDigital(str) {
    for (var i = 0; i < 10; i++) {
        if (str.indexOf(i.toString()) != -1) {
            return true;
        }
    }

    return false;
}