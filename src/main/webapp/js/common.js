function resetForm() {
    $(':input', '[class*="search-form"]').not(
        ':button, :submit, :reset, :hidden').val('').removeAttr('checked');
    $('select').combobox('clear');
    //$('.selectpicker').selectpicker('val', '0');
}

function checkRadioByValue(radioNameAttr, radioValue) {
    var checkedRadio = $('input[name="' + radioNameAttr + '"][checked]');

    if (radioValue != checkedRadio.val()) {
        checkedRadio.removeAttr('checked');
        $('input[name="' + radioNameAttr + '"][value="' + radioValue + '"]').attr('checked', true);
    }
}

	function tableClick(sUrl){
		location.href = sUrl;
	}

	function tableClick2Top(sUrl){
		top.location.href = "http://www.12309.gov.cn/";
	}

	function tableClick2TopRoot(){
		top.location.href = "http://www.12309.gov.cn/";
	}

	function getUrlParameter(key) {
		var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		var url = window.location.href
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return unescape(r[2]);

		return null;
	}