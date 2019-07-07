var jbrIndex = 1;
var bjbrIndex = 1;
window.Interval0 = null;
window.Interval = null;
window.Interval1 = null;
window.Interval2 = null;
window.Interval5 = null;
window.Interval6 = null;
var time = 15;

$(function () {
    $('.easyui-datebox').datebox({editable: false});

	$('#w').show();
	$('#w').window('open');
	

    var url = window.location.href;
    
 	$("#xuzhiTitle").html("举报须知");
	$("#ulall").css("display","block");
	$("#uljcgj").css("display","none");
	
    if (url.indexOf('JCGJ') >= 0) {
    	var id = url.substring(url.indexOf('=') + 1, url.length);
//		var id = getUrlParameter("ID");
    	if (id == 1){
    		$("#xuzhiTitle").html("检察人员违法违纪举报须知");
    		$("#ulall").css("display","none");
    		$("#uljcgj").css("display","block");
    		$("#divJCGJWFWJ").show();	
    		$("#divJCGJWFWJ1").show();
    		$("#JBKJXSLY_JBJCGJWFWJ").val(1);
    		
    	}
    }

	$("#imgbutton").click(function() {
		loadImageCode();
	});

	window.Interval = setInterval("initializeNewClue()",500);//1000为1秒钟  //举报人信息
	window.Interval0 = setInterval("initializeNewClue0()",3000);//1000为1秒钟  //举报人信息
	window.Interval1 = setInterval("initializeNewClue1()",6000);//1000为1秒钟  //举报人信息
//	window.Interval2 = setInterval("initializeNewClue2()",9000);//1000为1秒钟  //举报人信息
	window.Interval5 = setInterval("initializeNewClue5()",9000);
	window.Interval6 = setInterval("initializeNewClue6()",12000);
	window.Interval2 = setInterval("initializeNewClue2()",15000);
    
});

//加载验证码
function loadImageCode(){
	$("#imgbutton").prev().attr("src","ImageCode?time=" + new Date().getTime());
}

function initializeNewClue() {
	window.clearInterval(window.Interval);
	
	time = 15;  // 15  3
	var hander = setInterval(function() {
		if (time < 1) {
			clearInterval(hander); // 清除倒计时
			$("#timeCount").text(time);
			$("#timeCountOut").hide();
			$("#tips").css("background","#0273b0");
			$('#tips').bind('click', function() {
			 	$('#w').window('close');
			});
			$('#divMain').show();
			$('#second').show();
			return false;
		} else {
			$("#timeCount").text(time);
		 	time--;
		}
	}, 1000);
}

function initializeNewClue0() {
	window.clearInterval(window.Interval0);
    initJbrTabs();
}

function initializeNewClue1() {
	window.clearInterval(window.Interval1);
    initBjbrTabs();
	$('#divMain').show();
}

function initializeNewClue2() {
	window.clearInterval(window.Interval2);

	loadTreeDropdownZone('cbJBKJXSLY_LXDQ1');
	loadTreeDropdownZone('cbJBKJXSLY_AFDQ' + "1");

    $("#cbJBKJXSLY_SF1").combotree({editable:false});
	$("#cbJBKJXSLY_SF" + "1").combotree('setValue', 0);
	
//	alert(returnCitySN.cip);
	$('textarea').attr('maxlength', 6000);
}

function initializeNewClue5() {
	window.clearInterval(window.Interval5);
	
	$("#cbJBKJXSLY_XB" + "1").combobox({editable:false});
    loadDropdown('cbJBKJXSLY_MZ' + "1", false);
    loadDropdown('cbJBKJXSLY_ZZMM' + "1");
    loadDropdown('cbJBKJXSLY_SALY' + "1");
    $('#cbJBKJXSLY_XB' + "1").combobox({panelHeight: 'auto'});
    
    loadTreeDropdownSpecialId('cbJBKJXSLY_TSSF' + "1");
}

function initializeNewClue6() {
	window.clearInterval(window.Interval6);

    loadTreeDropdownNature('cbJBKJXSLY_ZYSXXZ' + "1", false);
    loadTreeDropdownNature('cbJBKJXSLY_CYSXXZ' + "1", false);
    
    loadTreeDropdownId('cbJBKJXSLY_SF' + "1");
       
//	//身份，“司法监狱机关工作人员”，只能选择其下面的子选项	E0500
//    $("#cbJBKJXSLY_SF" + "1").combobox({
//		onChange: function (n,o) {
//    		if (!validateSF(n)){
////            			alert("被举报人身份，只能选择“司法机关工作人员”选项的最末一级！");
//    			$("#cbJBKJXSLY_SF" + "1").combotree('setValue', 0);
//    		}
//		}
//	});
}

//function initializeNewClue0() {
//	window.clearInterval(window.Interval0);
//	
//    var url = window.location.href;
//    if (url.indexOf('JCGJ') >= 0) {
//    	var id = url.substring(url.indexOf('=') + 1, url.length);
//    	if (id == 1){
//    		$("#divJCGJWFWJ").show();	
//    		$("#divJCGJWFWJ1").show();
//    		$("#JBKJXSLY_JBJCGJWFWJ").val(1);
//    	}
//    }
//
//    initJbrTabs();
//    initBjbrTabs();
//
//	$('#divMain').show();
//	 
//    loadDropdown('cbJBKJXSLY_LYFS');
//    loadDropdown('cbJBKJXSLY_LYZL');
//    loadDropdown('cbJBKJXSLY_BJBRZTLB');
//    loadTreeDropdownCompany('cbJBKJXSLY_ZJDW');
//
//	$('#second').show();
//}

function initJbrTabs() {
    var jbrTabs = $('#newClue_jbrTabs');

    jbrTabs.tabs();

    jbrTabs.tabs({
        tools: '#newClue_jbrTabTools',
        onClose: function () {
            jbrIndex--;
            jbrTabs.tabs('select', jbrIndex - 1);
        },
        onAdd: function () {
        	if (jbrIndex > 1){
        		loadTreeDropdownZone('cbJBKJXSLY_LXDQ' + jbrIndex);
        	}
        }
    });

    jbrTabs.tabs('add', {
        title: '举报人' + jbrIndex,
        content: getJbrTabElement(jbrIndex),
        closable: false
    });
}

function getJbrTabElement(index) {
    var table = '';

    table += '<table class="newClue-table" border="0" width="100%">';
    table += '    <tr>';
    table += '        <td class="label">姓名：</td>';
    table += '        <td><input type="text" name="JBKJXSLY_JBRXM' + index + '" maxlength="30"/></td>';
//    table += '        <td width="15">&nbsp;</td>';
    table += '        <td class="label" ><span class="span-must-fill">*</span>是否署名：</td>';
    table += '        <td width="300">';
    table += '            <input type="radio" checked="checked" name="JBKJXSLY_SFSM' + index + '" id="JBKJXSLY_SFSM' + index + '_YES" value="1" onchange="updateSignature(' + index + ', true)"/>';
    table += '            <label for="JBKJXSLY_SFSM' + index + '_YES">&nbsp;是&nbsp;&nbsp;</label>';
    table += '            <input type="radio" name="JBKJXSLY_SFSM' + index + '" id="JBKJXSLY_SFSM' + index + '_NO" value="0" onchange="updateSignature(' + index + ', false)"/>';
    table += '            <label for="JBKJXSLY_SFSM' + index + '_NO">&nbsp;否</label>';
    table += '        </td>';
//    table += '        <td width="15">&nbsp;</td>';
    table += '        <td class="label">身份证号：</td>';
    table += '        <td><input type="text" name="JBKJXSLY_JBRSFZH' + index + '" style="width: 100%;" maxlength="30"/></td>';
    table += '    </tr>';
    table += '    <tr><td>&nbsp;</td></tr>';
    table += '    <tr>';
    table += '        <td class="label">联系电话：</td>';
    table += '        <td><input type="text" name="JBKJXSLY_JBRDH' + index + '" maxlength="30"/></td>';
//    table += '        <td>&nbsp;</td>';
    table += '        <td class="label">所在地区：</td>';
    table += '        <td><select id="cbJBKJXSLY_LXDQ' + index + '" name="JBKJXSLY_LXDQ' + index + '" style="width: 100%;"></select></td>';
//    table += '        <td >&nbsp;</td>';
    table += '        <td class="label">单位、住址：</td>';
    table += '        <td><input type="text" name="JBKJXSLY_JBRDWZZ' + index + '" style="width: 100%;" maxlength="60" /></td>';
    table += '    </tr>';
    table += '</table>';

    return table;
}

function addJbrTab() {
    if (jbrIndex < 3) {
        jbrIndex++;
        $('#newClue_jbrTabs').tabs('add', {
            title: '举报人' + jbrIndex,
            content: getJbrTabElement(jbrIndex),
            closable: false
        });
    } else {
        alert('举报人最大数量为：' + jbrIndex + '个!');
    }

}

function removeJbrTab() {
    if (jbrIndex > 1) {
        var jbrTabs = $('#newClue_jbrTabs');

        jbrTabs.tabs('select', jbrIndex - 1);
        if (confirm('您确定要删除"举报人' + jbrIndex + '"的信息吗？')) {
            // tab start with index = 0
            jbrTabs.tabs('close', jbrIndex - 1);
        }
    }
}


function initBjbrTabs() {
    var bjbrTabs = $('#newClue_bjbrTabs');

    bjbrTabs.tabs();

    bjbrTabs.tabs({
        tools: '#newClue_bjbrTabTools',
        onClose: function () {
            bjbrIndex--;
            bjbrTabs.tabs('select', bjbrIndex - 1);
        },
        onAdd: function () {
        	if (bjbrIndex > 1) {
	            $("#cbJBKJXSLY_XB" + bjbrIndex).combobox({editable:false});
	            loadDropdown('cbJBKJXSLY_MZ' + bjbrIndex, false);
	            loadDropdown('cbJBKJXSLY_ZZMM' + bjbrIndex);
	            loadTreeDropdownZone('cbJBKJXSLY_AFDQ' + bjbrIndex);
//	            loadDropdown('cbJBKJXSLY_ZW' + bjbrIndex, false);
//	            $("#cbJBKJXSLY_ZW" + bjbrIndex).combotree({editable:true});
//	            $('#cbJBKJXSLY_ZW' + bjbrIndex).combobox('select', 0);
	            
	            loadTreeDropdownId('cbJBKJXSLY_SF' + bjbrIndex);
//	            $("#cbJBKJXSLY_SF" + bjbrIndex).combotree({editable:false});
	            loadTreeDropdownSpecialId('cbJBKJXSLY_TSSF' + bjbrIndex);
	            
//	            loadDropdown('cbJBKJXSLY_ZJ' + bjbrIndex);
//	            $("#cbJBKJXSLY_ZJ" + bjbrIndex).combobox('select', 0);
	            
	            loadTreeDropdownNature('cbJBKJXSLY_ZYSXXZ' + bjbrIndex, false);
	            loadTreeDropdownNature('cbJBKJXSLY_CYSXXZ' + bjbrIndex, false);
	            loadDropdown('cbJBKJXSLY_SALY' + bjbrIndex);
	            $('#cbJBKJXSLY_XB' + bjbrIndex).combobox({panelHeight: 'auto'});
	        	
//	        	//身份，“司法监狱机关工作人员”，只能选择其下面的子选项	E0500
//	            $("#cbJBKJXSLY_SF" + bjbrIndex).combobox({
//	        		onChange: function (n,o) {
//	            		if (!validateSF(n)){
//	//            			alert("被举报人身份，只能选择“司法机关工作人员”选项的最末一级！");
//	            			$("#cbJBKJXSLY_SF" + bjbrIndex).combotree('setValue', 0);
//	            		}
//	        		}
//	        	});
        	}
        }
    });

    bjbrTabs.tabs('add', {
        title: '被举报人' + bjbrIndex,
        content: getBjbrTabElement(bjbrIndex),
        closable: false
    });
}

function validateSF(n) {
	if (n=="E0000" || n=="E0400" || n=="E0500" || n=="E0100" || n=="E0200" || n=="E0300" || n=="E40100" || n=="E20200" || n=="E10300" || n=="E50400" || n=="E30500"){
		return false;
	} else {
		return true;
	}
}

function getBjbrTabElement(index) {
    var table = '';

    table += '<table class="newClue-table" border="0" width="100%">';
    table += '    <tr>';
    table += '        <td class="label"><span class="span-must-fill">*</span>姓名：</td>';
    table += '        <td width="100"><input type="text" name="JBKJXSLY_BJBRXM' + index + '" maxlength="40" /></td>';
    table += '        <td width="30">&nbsp;</td>';
    table += '        <td class="label">性别：</td>';
    table += '        <td width="120">';
    table += '            <select id="cbJBKJXSLY_XB' + index + '" name="JBKJXSLY_XB' + index + '" style="width:100%;">';
    table += '                <option value="0" selected>未知</option>';
    table += '                <option value="1">男</option>';
    table += '                <option value="2">女</option>';
    table += '            </select>';
    table += '        </td>';
    table += '        <td width="30">&nbsp;</td>';
    table += '        <td class="label">民族：</td>';
    table += '        <td width="120"><select id="cbJBKJXSLY_MZ' + index + '" name="JBKJXSLY_MZ' + index + '" style="width:100%;"></select></td>';
    table += '        <td width="30">&nbsp;</td>';
    table += '        <td class="label">政治面貌：</td>';
    table += '        <td width="120"><select id="cbJBKJXSLY_ZZMM' + index + '" name="JBKJXSLY_ZZMM' + index + '" style="width:100%;"></select></td>';
    table += '    </tr>';
    table += '    <tr>';
    table += '        <td>&nbsp;</td>';
    table += '    </tr>';
    table += '    <tr>';
    table += '        <td class="label"><span class="span-must-fill">*</span>单位：</td>';
    table += '        <td width="120" colspan="4"><input type="text" name="JBKJXSLY_BJBRDW' + index + '" style="width:99%;" maxlength="60" /></td>';
    table += '        <td width="30">&nbsp;</td>';
    table += '        <td class="label">住址：</td>';
    table += '        <td width="120" colspan="4"><input type="text" name="JBKJXSLY_BJBRZZ' + index + '" style="width:99%;" maxlength="60" /></td>';
    table += '    </tr>';
    table += '</table>';
    table += '<table class="newClue-table" border="0" width="100%">';
    table += '    <tr>';
    table += '        <td class="label" width="100"><span class="span-must-fill">*</span>案发地区：</td>';
    table += '        <td width="250"><select id="cbJBKJXSLY_AFDQ' + index + '" name="JBKJXSLY_AFDQ' + index + '" style="width:100%;"></select></td>';
    table += '        <td width="10">&nbsp;</td>';
    table += '        <td class="label" width="85">职务：</td>';
//    table += '        <td width="200"><select id="cbJBKJXSLY_ZW' + index + '" name="JBKJXSLY_ZW' + index + '" style="width:100%;"></select><input type="hidden" id="JBKJXSLY_ZW_SR' + index + '" name="JBKJXSLY_ZW_SR' + index + '" value=""></td>';
    table += '        <td width="200"><input type="text"  id="cbJBKJXSLY_ZW' + index + '" name="JBKJXSLY_ZW' + index + '" style="width:100%;" maxlength="30" /><input type="hidden" id="JBKJXSLY_ZW_SR' + index + '" name="JBKJXSLY_ZW_SR' + index + '" value=""></td>';
    table += '        <td width="10">&nbsp;</td>';
    table += '        <td class="label">职级：</td>';	// <span class="span-must-fill">*</span>
//    table += '        <td width="200"><select id="cbJBKJXSLY_ZJ' + index + '" name="JBKJXSLY_ZJ' + index + '" style="width:100%;" data-options="disabled:true;"></select></td>';
    table += '        <td width="200"><input type="text"  id="cbJBKJXSLY_ZJ' + index + '" name="JBKJXSLY_ZJ' + index + '" style="width:100%;" maxlength="20" /></td>';
    table += '    </tr>';
    table += '    <tr>';
    table += '        <td>&nbsp;</td>';
    table += '    </tr>';
    table += '    <tr>';
    table += '        <td class="label"><span class="span-must-fill">*</span>身份：</td>';
    table += '        <td ><select id="cbJBKJXSLY_SF' + index + '" name="JBKJXSLY_SF' + index + '" style="width:100%;"></select></td>';
    table += '        <td >&nbsp;</td>';
    table += '        <td class="label">特殊身份：</td>';
    table += '        <td ><select id="cbJBKJXSLY_TSSF' + index + '" name="JBKJXSLY_TSSF' + index + '" style="width:100%;"></select></td>';
    table += '        <td >&nbsp;</td>';
    table += '        <td class="label">涉嫌领域：</td>';
    table += '        <td ><select id="cbJBKJXSLY_SALY' + index + '" name="JBKJXSLY_SALY' + index + '" style="width:100%;"></select></td>';
    table += '    </tr>';
    table += '    <tr>';
    table += '        <td>&nbsp;</td>';
    table += '    </tr>';
    table += '    <tr>';
    table += '        <td class="label"><span class="span-must-fill">*</span>主要涉嫌性质：</td>';
    table += '        <td ><select id="cbJBKJXSLY_ZYSXXZ' + index + '" name="JBKJXSLY_ZYSXXZ' + index + '" style="width:100%;"></select></td>';
    table += '        <td >&nbsp;</td>';
    table += '        <td class="label">其他涉嫌性质:</td>';
    table += '        <td ><select id="cbJBKJXSLY_CYSXXZ' + index + '" name="JBKJXSLY_CYSXXZ' + index + '" style="width:100%;"></select></td>';
    table += '        <td >&nbsp;</td>';
    table += '        <td class="label">涉嫌金额:</td>';
    table += '        <td ><input type="text" name="JBKJXSLY_SXJE' + index + '" style="width:99%;" maxlength="20" /></td>';
    table += '    </tr>';
    table += '    <tr>';
    table += '        <td>&nbsp;</td>';
    table += '    </tr>';
    table += '</table>';

    return table;
}

function addBjbrTab() {
    if (bjbrIndex < 3) {
        bjbrIndex++;
        $('#newClue_bjbrTabs').tabs('add', {
            title: '被举报人' + bjbrIndex,
            content: getBjbrTabElement(bjbrIndex),
            closable: false
        });
    } else {
        alert('被举报人最大数量为：' + bjbrIndex + '个!');
    }

}

function removeBjbrTab() {
    if (bjbrIndex > 1) {
        var bjbrTabs = $('#newClue_bjbrTabs');

        bjbrTabs.tabs('select', bjbrIndex - 1);
        if (confirm('您确定要删除"被举报人' + bjbrIndex + '"的信息吗？')) {
            // tab start with index = 0
            bjbrTabs.tabs('close', bjbrIndex - 1);
        }
    }
}


function updateFileSelection() {
    var fileList = document.getElementById("newClue_fileUpload").files;
    $('.newClue-attachment-view>a').html('(' + fileList.length + ')');
}

function updateSignature(index, isSignature) {
    if (isSignature == true) {
        $('input[name="JBKJXSLY_JBRXM' + index + '"]').removeAttr('disabled');
        $('input[name="JBKJXSLY_JBRSFZH' + index + '"]').removeAttr('disabled');
        $('input[name="JBKJXSLY_JBRDH' + index + '"]').removeAttr('disabled');
        $('input[name="JBKJXSLY_JBRDWZZ' + index + '"]').removeAttr('disabled');
    } else {
        $('input[name="JBKJXSLY_JBRXM' + index +'"]').val('匿名');
        $('input[name="JBKJXSLY_JBRXM' + index + '"]').attr('disabled', true);
        $('input[name="JBKJXSLY_JBRSFZH' + index + '"]').attr('disabled', true);
        $('input[name="JBKJXSLY_JBRDH' + index + '"]').attr('disabled', true);
        $('input[name="JBKJXSLY_JBRDWZZ' + index + '"]').attr('disabled', true);
        $('#cbJBKJXSLY_LXDQ' + index).combotree('setValue', '0');
    }
}

function submitNewClueForm() {
	
	// 自动赋值 被举报人的职务 手动输入值
	for (var i = 1; i <= bjbrIndex; i++) {
//		$('#JBKJXSLY_ZW_SR'+i).val($('#cbJBKJXSLY_ZW'+i).combotree('getText'));
		$('#JBKJXSLY_ZW_SR'+i).val($('#cbJBKJXSLY_ZW'+i).val());
	}
	
    //// 自动设置是否署名：如果不填或填写匿名，自动设置为“否”
    for (var i = 1; i <= jbrIndex; i++) {
        var jbrName = $('input[name="JBKJXSLY_JBRXM' + i +'"]').val();
        if (jbrName == null || jbrName.length <= 0 || jbrName == '匿名') {
            checkRadioByValue('JBKJXSLY_SFSM' + i, 0);
            updateSignature(i, false);
        }
    }

    if (validateNewClueForm()) {
        $('#btnSubmit').unbind("click");
		$("#btnSubmit").css("background","gray");
//        $('#btnSubmit').attr("disabled", true);
        //// Firstly, save clue info
		var cc = "127.0.0.1";
		try{
			cc = returnCitySN.cip;
		}catch(e){}
//		var cc = getUrlParameter("cc");
        var values = $('#newClue_formXS').serialize() + '&' +
            $('#newClue_formJBR').serialize() + '&cc=' + cc + '&number=' + $('#number').val() + '&' + 
            $('#newClue_formBJBR_Part1').serialize() + '&' +
            $('#newClue_formBJBR_Part2').serialize();

        $.ajax({
            type: 'post',
            url: 'UserSaveClue',
            data: values,
            async: false,
            success: function (result) {
                result = (new Function('return ' + result))();
                if (result.status.indexOf("成功")>1){
                	alert(result.status + '您的线索查询码为： ' + result.searchCode + ' ，请牢记查询码！');
                	window.location.href = 'Index.html';
                } else {
                	if (result.status.indexOf("次数")>1){
                		alert(result.status);
                    	window.location.href = 'Index.html';
                	} else if (result.status.indexOf("验证码不正确")>1){
                		alert(result.status);
                	} else {
	                	alert('保存失败，请重试！');
	                    window.location.href = 'Index.html';
	                }
                }
            }
        });

        //// Secondly, upload all attachments
        $('#newClue_fileUpload').upload('UserSaveClueFile', {}, function (result) {
            if (result.status.indexOf('成功') >= -1) {
                window.location.href = 'Index.html';
            } else {
                alert('文件上传失败！');
            }
        }, 'json');
    }
}

function validateNewClueForm() {
var temp;
    
    for(var i=1; i<=bjbrIndex; i++){
    	temp = $('input[name="JBKJXSLY_BJBRXM'+i+'"]').val();
        temp = $.trim(temp);
        if (temp == null || temp.length == 0) {
            alert('请输入 被举报人'+i+' 的姓名！');
            return false;
        }
        temp = $('input[name="JBKJXSLY_BJBRDW'+i+'"]').val();
        temp = $.trim(temp);
        if (temp == null || temp.length == 0) {
            alert('请输入 被举报人'+i+' 的单位！');
            return false;
        }
        temp = $('#cbJBKJXSLY_AFDQ'+i).combotree('getText');
        temp = $.trim(temp);
        if (temp == null || temp.length == 0 || temp == "请选择地区") {
            alert('请选择 被举报人'+i+' 的案发地区！');
            return false;
        }
        temp = $('#cbJBKJXSLY_SF'+i).combotree('getText');
        temp = $.trim(temp);
        if (temp == null || temp.length == 0 || temp == "请选择身份") {
            alert('请选择 被举报人'+i+' 的身份！');
            return false;
        }
        temp = $('#cbJBKJXSLY_ZYSXXZ'+i).combotree('getText');
        temp = $.trim(temp);
        if (temp == null || temp.length == 0 || temp == "请选择性质") {
            alert('请选择 被举报人'+i+' 的主要涉嫌性质！');
            return false;
        }
//        temp = $('#cbJBKJXSLY_ZJ'+i).combobox('getText');
//        temp = $.trim(temp);
//        if (temp == null || temp.length == 0 || temp == "请选择" || temp.indexOf(']') <= 0) {
//            alert('请选择 被举报人'+i+' 的职级！');
//            return false;
//        }
    }

     temp = $.trim($('input[textboxname="JBKJXSLY_SYZY"]').textbox('getValue'));
     if (temp == null || temp.length == 0) {
         alert('请输入举报内容！');
         return false;
     } else {
         $('input[textboxname="JBKJXSLY_SYZY"]').textbox('setValue', temp);
     }     
    
     temp = $.trim($('#number').val());
     if (temp == null || temp.length == 0) {
         alert('请输入验证码！');
         return false;
     }
     if (temp.length != 4) {
         alert('验证码错误，请输入正确的验证码！');
         return false;
     }

    return true;
}