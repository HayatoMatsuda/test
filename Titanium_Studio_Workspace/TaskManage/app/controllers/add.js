function showSliderValue(e){
	$.sliderValue.text = String.format("%3.0f", e.value);
}

function checkDate(){
	var dateStr = $.inputLimitDate.value;
	if(dateStr.length === 0){
		return true;
	}
	if(!dateStr.match(/^\d{4}-\d{2}-\d{2}$/)){
		return false;
	}
	var vYear = dateStr.substr(0, 4);
	var vMonth = dateStr.substr(5, 2) -1;
	var vDay = dateStr.substr(8,2);
	//月・日の妥当性チェック
	if(vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){
		var vDt = new Date(vYear, vMonth, vDay);
		if(isNaN(vDt)){
			return false;
		}else if(vDt.getFullYear() == vYear && vDt.getMonth() == vMonth && vDt.getDate() == vDay){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function saveTask(){
	if(checkDate() === false){
		alert("日付を正しく入力してください");
		$.inputLimitDate.focus();
		return;
	}
	
	var mTask = Alloy.createModel("task", {
		what:$.inputWhat.value,
		detail:$.inputDetail.value,
		limitDate:$.inputLimitDate.value,
		importance:Number($.sliderValue.text),
		status:0
	});
	if(mTask.isValid()){
		mTask.save();
		$.addWin.close({
			animated:true
		});
		Alloy.Collections.task.fetch();
	}else{
		mTask.destroy();
		alert("保存できません");
	}
}
