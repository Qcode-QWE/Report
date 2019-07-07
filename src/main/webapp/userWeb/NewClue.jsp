<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>最高人民检察院12309检察服务中心</title>
    <link rel="stylesheet" type="text/css" href="/css/easyui.css">
    <link rel="stylesheet" type="text/css" href="/css/icon.css">
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/js/easyui-lang-zh_CN.js"></script>
    <script type="text/javascript" src="/js/jquery.upload.js"></script>
    <script type="text/javascript" src="https://pv.sohu.com/cityjson?ie=utf-8"></script>
    <!-- Self using files -->
    <link href="/css/common-user.css" type="text/css" rel="stylesheet"/>
    <link href="/css/userweb.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="/js/common.js"></script>
    <script type="text/javascript" src="/js/userWeb/index.js"></script>
    <script type="text/javascript" src="/js/userWeb/newClue.js"></script>
</head>
<body>

<div class="warp" id="divMain">
    <div class="head">
    	<!--<a href="/Index.html"><img src="/imgUser/logo.jpg"/></a>-->
        <a href="#" onclick="tableClick2Top('/');"><img src=""/></a>
    </div>
    <div class="clear"></div>
    <div class="content">
        <div><img src="/imgUser/t_bj.png"/></div>
        <div class="second" id="second" style="margin-top: -5px; ">
        
        	<div style="width: 100%;font-size: 16px"><span style="color: red">提示： * </span>为必填项。</div>
        	<div id="divJCGJWFWJ" style="width: 100%; display:none"><h3>检察干警违法违纪举报专区<span>JIAN CHA GAN JING WEI FA WEI JI JU BAO ZHUAN QU</span></h3></div>
        	
            <div id="divJCGJWFWJ1" style="display:none"><h3><img src="/images/double.jpg" style="width: 970px;margin-top: 14px;margin-bottom: 14px;"/></h3></div>
           
            <div class="newClue-content" style="display:none">
             <div><h3>举报线索情况<span> JU BAO XIAN SUO QING KUANG</span></h3></div>
                <form id="newClue_formXS">
                    <table class="newClue-table" border="0" width="auto">
                        <tr>
                            <td class="label"><span class="span-must-fill">*</span>举报方式：</td>
                            <td width="60"><select class="easyui-combobox" id="cbJBKJXSLY_LYFS" name="JBKJXSLY_LYFS"
                                                    style="width: 100%;"></select>
                            </td>
                            <td width="20">&nbsp;</td>
                            <td class="label">举报种类：</td>
                            <td width="60"><select class="easyui-combobox" id="cbJBKJXSLY_LYZL" name="JBKJXSLY_LYZL"
                                                    style="width: 100%;"></select>
                            </td>
                            <td width="20">&nbsp;</td>
                            <td class="label">主体类别：</td>
                            <td width="60"><select class="easyui-combobox" id="cbJBKJXSLY_BJBRZTLB" name="JBKJXSLY_BJBRZTLB"
                                                    style="width: 100%;"></select>
                            </td>
                            <td width="20">&nbsp;</td>
                            <td class="label">线索编号：</td>
                            <td><input class="easyui-textbox" type="text" name="JBKJXSLY_XH" value="数据库自动生成"
                                                   style="width: 100%;" disabled></td>
                        </tr>
                       
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="label">受理日期：</td>
                            <td><input class="easyui-datebox" name="JBKJXSLY_SLRQ" style="width: 100%;"></td>
                            <td>&nbsp;</td>
                            <td class="label">转交人：</td>
                            <td><input class="easyui-textbox" type="text" name="JBKJXSLY_ZJR"
                                                   style="width: 100%;"></td>
                            <td>&nbsp;</td>
                            <td class="label">转交单位：</td>
                            <td colspan="3"><select class="easyui-combotree" id="cbJBKJXSLY_ZJDW"
                                                                name="JBKJXSLY_ZJDW"
                                                                style="width: 100%;"></select>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </form>
            </div>
            
            <div><h3>举报人基本情况<span> JU BAO REN JI BEN QING KUANG</span></h3></div>
            <div class="newClue-content">
                <form id="newClue_formJBR">
                    <div id="newClue_jbrTabs" style="height:auto;width:970px;"></div>
                    <div id="newClue_jbrTabTools">
                        <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'"
                           onclick="addJbrTab()" title="添加举报人">添加举报人</a>
                        <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-remove'"
                           onclick="removeJbrTab()" title="删除此举报人">删除此举报人</a>
                    </div>
                    
                    <input type="hidden" name="JBKJXSLY_JBJCGJWFWJ" id="JBKJXSLY_JBJCGJWFWJ" value="0"/>
                </form>
            </div>
            <div><h3>被举报人基本情况<span> BEI JU BAO REN JI BEN QING KUANG</span></h3></div>
            <div class="newClue-content">
                <form id="newClue_formBJBR_Part1">
                    <div id="newClue_bjbrTabs" style="height:auto;width:970px;"></div>
                    <div id="newClue_bjbrTabTools">
                        <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'"
                           onclick="addBjbrTab()" title="添加被举报人">添加被举报人</a>
                        <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-remove'"
                           onclick="removeBjbrTab()" title="删除此被举报人">删除此被举报人</a>
                    </div>

                </form>
                <form id="newClue_formBJBR_Part2" style="margin-top: 35px;">
                    <table class="newClue-table" border="0" width="auto">
                        <!--<tr>
                            <td class="label">举报关键字：</td>
                            <td width="910">
                                <input class="easyui-textbox" name="JBKJXSLY_Keywords" style="width:100%;"/>
                            </td>
                        </tr>-->
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="label"><span class="span-must-fill">*</span>举报内容：</td>
                            <td width="860">
                                <input class="easyui-textbox" name="JBKJXSLY_SYZY" data-options="multiline:true"
                                       style="width:100%;height:300px;" />
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <!--<tr>
                            <td class="label"><span class="span-must-fill">*</span>举报内容摘要：</td>
                            <td width="910">
                                <input class="easyui-textbox" name="JBKJXSLY_NRZY" data-options="multiline:true"
                                       style="width:100%;height:60px;"/>
                            </td>
                        </tr>-->
                    </table>
                </form>
                <!-- <ul class="newClue-attachment">
                    <li>
                        <a href="javascript:;" class="newClue-attachment-select-file">选择附件
                            <input id="newClue_fileUpload" type="file" name="files[]" multiple
                                   onchange="updateFileSelection()"/>
                        </a>
                    </li>
                    <li class="newClue-attachment-view"><a href="javascript:;">(0)</a></li>
                </ul> -->
            </div>
            <div class="newClue-submit">
					验证码：
						<input name="number" class="easyui-validatebox" style="vertical-align: middle;" type="text" data-options="validType:'validAuthor[0]'" id="number" maxlength="4" size="10" />
						<img src="ImageCode" style="vertical-align: middle;" />&nbsp;<a id="imgbutton" class="easyui-linkbutton" style="color: gray;height: 32px;">换一张</a>
            </div>
            <div class="newClue-submit">
                <a href="javascript:;" onclick="submitNewClueForm()" id="btnSubmit">提交</a>
        		<a href="#" onclick="tableClick2Top('/');">返回</a>
            </div>
        </div>
        <div><img src="/imgUser/b_bj.png"/></div>
    </div>
    <div class="bottom">
        <p>版权所有：最高人民检察院12309检察服务中心</p>
        <p>地址：中国北京东城区北河沿大街147号 邮编：100726 电话：010-12309</p>
        <!--<p>访问本网站请使用IE9及以上版本、谷歌、火狐浏览器，1360*768及以上分辨率</p>-->
        <p>技术支持：北京正义创新科技有限公司</p>
    </div>
</div>

<!--提示框-->
<div id="w" class="easyui-window" title="举报须知" closable="false" modal="true" closed="true" collapsible="false" minimizable="false" maximizable="false" data-options="iconCls:'icon-save'" style="display:none;width:730px;height:605px;padding:10px;">
		<div id="content_1" class="submit-comment-remarks">
			<h2 style="text-align: center;" id="xuzhiTitle">
				举报须知
			</h2>	
			<ul style="font-size: 16px" id ="ulall" >
				<li></li>
				<li><span>一、人民检察院依法受理司法工作人员利用职权实施的下列侵犯公民权利、损害司法公正犯罪的举报：</span></li>
				<li></li>
				<li><span>1．非法拘禁罪（刑法第二百三十八条）（非司法工作人员除外）；</span></li>
				<li></li>
				<li><span>2．非法搜查罪（刑法第二百四十五条）（非司法工作人员除外）；</span></li>
				<li></li>
				<li><span>3．刑讯逼供罪（刑法第二百四十七条）；</span></li>
				<li></li>
				<li><span>4．暴力取证罪（刑法第二百四十七条）；</span></li>
				<li></li>
				<li><span>5．虐待被监管人罪（刑法第二百四十八条）；</span></li>
				<li></li>
				<li><span>6．滥用职权罪（刑法第三百九十七条）（非司法工作人员滥用职权侵犯公民权利、损害司法公正的情形除外）；</span></li>
				<li></li>
				<li><span>7．玩忽职守罪（刑法第三百九十七条）（非司法工作人员玩忽职守侵犯公民权利、损害司法公正的情形除外）；</span></li>
				<li></li>
				<li><span>8．徇私枉法罪（刑法第三百九十九条第一款）；</span></li>
				<li></li>
				<li><span>9．民事、行政枉法裁判罪（刑法第三百九十九条第二款）；</span></li>
				<li></li>
				<li><span>10．执行判决、裁定失职罪（刑法第三百九十九条第三款）；</span></li>
				<li></li>
				<li><span>11．执行判决、裁定滥用职权罪（刑法第三百九十九条第三款）；</span></li>
				<li></li>
				<li><span>12．私放在押人员罪（刑法第四百条第一款）；</span></li>
				<li></li>
				<li><span>13．失职致使在押人员脱逃罪（刑法第四百条第二款）；</span></li>
				<li></li>
				<li><span>14．徇私舞弊减刑、假释、暂予监外执行罪（刑法第四百零一条）。</span></li>
				<li></li>
				<li><span>二、为及时受理和办理您的举报，请根据被举报人属地和级别，选择相应的人民检察院进行举报；</span></li>
				<li></li>
				<li><span>三、检察机关提倡、鼓励实名举报，实名举报请填写真实姓名、身份证号码和有效联系方式等。</span></li>
				<li></li>
				<li><span>四、举报人应当如实举报，不得故意捏造事实，伪造证据，诬告陷害他人，属于诬告的，依照有关规定承担相应的法律责任。</span></li>
				<li></li>
				<li><span>五、检察机关将严格按照法律及有关规定，对举报人和举报内容予以保密。</span></li>
				<li></li>
				<li><span>六、请不要重复举报。</span></li>
			</ul>
			
			<ul style="font-size: 16px" id ="uljcgj" style="display:none">
				<li></li>
				<li><span>一、人民检察院依法受理反映人民检察院违法违规办案或者检察人员违法违纪的举报；</span></li>
				<li></li>
				<li><span>二、为及时受理和办理您的举报，请根据被举报人属地和级别，选择相应的人民检察院进行举报；</span></li>
				<li></li>
				<li><span>三、检察机关提倡、鼓励实名举报，实名举报请填写真实姓名、身份证号码和有效联系方式等。</span></li>
				<li></li>
				<li><span>四、举报人应当如实举报，不得故意捏造事实，伪造证据，诬告陷害他人，属于诬告的，依照有关规定承担相应的法律责任。</span></li>
				<li></li>
				<li><span>五、检察机关将严格按照法律及有关规定，对举报人和举报内容予以保密。</span></li>
				<li></li>
				<li><span>六、请不要重复举报。</span></li>
				<li></li>
				
			</ul>
            <div class="newClue-submit">
                <a id="tips" href="javascript:;" style="background-color: gray;">我已阅读<span id="timeCountOut">（<span id="timeCount" style="color: red"></span>）</a></span><br/>
            </div>
		</div>
	</div>
	


<script type="text/javascript">
	
</script>
</body>
</html>