var args = arguments[0] || {};

$.inputWhat.value = args.what;
$.inputDetail.value = args.detail;
$.inputLimitDate.value = args.limitDate;
$.inputImportance.value = args.importance;
$.sliderValue.text = args.importance;

function showSliderValue(e){
	$.sliderValue.text = String.format("%3.0f", e.value);
}

function checkDate(){
	//Ti.API.info(e.value);
	var dateStr = $.inputLimitDate.value;
	if(dateStr.length === 0){
		return true;
	}
	//正規表現による書式チェック
	if(!dateStr.match(/^\d{4}-\d{2}-\d{2}$/)){
		return false;
	}
	var vYear = dateStr.substr(0, 4);
	var vMonth = dateStr.substr(5, 2) -1; //Javascriptは、0-11で表現
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
	
	//上書き
	var mTask = Alloy.Collections.task.where({
		alloy_id: args.e_id
	})[0];
	mTask.set({
		what:$.inputWhat.value,
		detail:$.inputDetail.value,
		limitDate:$.inputLimitDate.value,
		importance:Number($.sliderValue.text),
		status:0
	});
	if(mTask.isValid()){
		mTask.save();
		$.editWin.close({
			animated:true
		});
		Alloy.Collections.task.fetch();
	}else{
		mTask.destroy();
		alert("保存できません");
	}
}
var dialogs = require("alloy/dialogs");

function finishTask(){
	if(checkDate() === false){
		alert("日付を正しく入力してください");
		$.inputLimitDate.focus();
		return;
	}
	
	//上書きとstatus変更
	dialogs.confirm({
		title:"完了確認",
		message:"完了にしますか？",
		yes:"完了",
		no:"しない",
		callback:function(){
			var mTask = Alloy.Collections.task.where({
				alloy_id:args.e_id
			})[0];
			mTask.set({
				what:$.inputWhat.value,
				detail:$.inputDetail.value,
				limitDate:$.inputLimitDate.value,
				importance:Number($.sliderValue.text),
				status:1
			});
			$.editWin.close({
				animated:true
			});
			if(mTask.isValid()){
				mTask.save();
				$.editWin.close({
					animated:true
				});
				Alloy.Collections.task.fetch();
			}else{
				mTask.destroy();
				alert("保存できません");
			}
		}
	});
}

function deleteTask(){
	dialogs.confirm({
		title:"削除確認",
		message:"削除しますか？",
		yes:"削除",
		no:"しない",
		callback:function(){
			var mTask = Alloy.Collections.task.where({
				alloy_id:args.e_id
			})[0];
			//コレクションから削除
			Alloy.Collections.task.remove(mTask);
			//モデルを破棄
			mTask.destroy();
			$.editWin.close({
				animated:true
			});
		}
	});
}
