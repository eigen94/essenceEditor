var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');
// var jQuery = require('jquery');

//웹서버생성
var app = express();

function essenceObj(){
	this.name;
	this.milestone=[];
}
function milestoneObj(hashID){
	this.hashID=hashID;
	this.name;
	this.rowNum;
	this.alphaState=[];
	this.Activity=[];
}
function alphaStateObj(hashID,id,name,checklist){
	this.hashID=hashID;
	this.id=id;
	this.name=name;
	this.checklist=checklist;
	this.toggle=false;
	this.progress;
	this.maturity;
}
function checkListObj(hashID,id,desc){
	this.hashID=hashID;
	this.id=id;
	this.desc=desc;
	this.state=0;
}
essenceObj.prototype.removeMilestone=function(hashID){
	var essenceObj = this;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		if(milestoneArr[i].hashID===hashID){
			milestoneArr.splice(i, 1);
		}
	}
}

essenceObj.prototype.changeMilestoneName=function(hashID,name){
	// console.log(hashID);
	// console.log(name);
	var essenceObj = this;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		if(milestoneArr[i].hashID===hashID){
			this.milestone[i].name=name;
		}
	}
}
essenceObj.prototype.changeMilestoneActivity=function(hashID,Activity){
	// console.log(hashID+" "+Activity)
	var essenceObj = this;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		// console.log(i);
		if(milestoneArr[i].hashID===hashID){
			// console.log("find");
			this.milestone[i].Activity=Activity;
		}
	}
}

//수정요망
essenceObj.prototype.addAlphaState=function(milestoneHashID,alphaStateObj,index){
	var essenceObj = this;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		if(milestoneArr[i].hashID===milestoneHashID){
			if(index==undefined){
				milestoneArr[i].alphaState.push(alphaStateObj);
			} else {
				milestoneArr[i].alphaState.splice(index,0,alphaStateObj);
			}
		}
	}
}
essenceObj.prototype.moveAlphaState=function(alphastoneHashID,targetMilestoneHashID,index){
	var essenceObj = this;
	var alphaStateObj;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		for(var j=0;j<milestoneArr[i].alphaState.length;j++){
			if(milestoneArr[i].alphaState[j].hashID===alphastoneHashID){
				alphaStateObj = milestoneArr[i].alphaState[j];
				milestoneArr[i].alphaState.splice(j,1);//찾은 객체를 삭제
				essenceObj.addAlphaState(targetMilestoneHashID, alphaStateObj,index);
			}
			
		}
	}
}
essenceObj.prototype.findAlphaState=function(alphastoneHashID){
	var essenceObj = this;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		for(var j=0;j<milestoneArr[i].alphaState.length;j++){
			if(milestoneArr[i].alphaState[j].hashID===alphastoneHashID){
				return 1;
			}
			
		}
	}
	return 0;
}
essenceObj.prototype.removeAlphaState=function(alphastoneHashID){
	var essenceObj = this;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		for(var j=0;j<milestoneArr[i].alphaState.length;j++){
			if(milestoneArr[i].alphaState[j].hashID===alphastoneHashID){
				milestoneArr[i].alphaState.splice(j, 1);
			}
			
		}
	}
}
essenceObj.prototype.toggleAlphaState=function(alphastoneHashID){
	var essenceObj = this;
	var milestoneArr = essenceObj.milestone;
	for(var i=0;i<milestoneArr.length;i++){
		for(var j=0;j<milestoneArr[i].alphaState.length;j++){
			if(milestoneArr[i].alphaState[j].hashID===alphastoneHashID.replace("#","")){
				if(milestoneArr[i].alphaState[j].toggle){
					this.milestone[i].alphaState[j].toggle = false;
				} else {
					this.milestone[i].alphaState[j].toggle = true;
				}
			}
			
		}
	}
}
essenceObj.prototype.convertJsonToObj=function(data){
	// var obj = jQuery.parseJSON(data);
	var obj = JSON.parse(data);
	// console.log(obj);
	return obj;
}
var essenceObject = new essenceObj();

//미들웨어(라우터) 설정
app.get('/', function(request, response){
	 fs.readFile('menu.html', function(error, data){
		 response.send(data.toString());
	 });
});

app.use('/script', express.static(__dirname+"/script"));
app.use('/css', express.static(__dirname+"/css"));

//웹서버 실행
var server = http.createServer(app);
server.listen(5000, function(){
	console.log('Server running...');
	console.log('waiting...');
});


//웹소켓생성, 실행
var io = socketio.listen(server);
var id = 0;
io.sockets.on('connection', function(socket){
	id=socket.id;

	socket.on('drag',function(data){
		// console.log(data);
	});
	socket.on('move',function(targetId,left, top){
		socket.broadcast.emit('getDragEvent',targetId,left,top);
	});
	socket.on('moveEnd', function(){
		socket.broadcast.emit('moveEnd');
	});
	socket.on('sortableUpdate', function(targetHashId,milestoneHashIdMoveto,targetEqNumber,nextAlphaObjLength,nextAlphaObjId,targetObjIndex){
		essenceObject.moveAlphaState(targetHashId.replace("#",""), milestoneHashIdMoveto.replace("#",""),targetObjIndex);
		socket.broadcast.emit('sortableUpdate',targetHashId,milestoneHashIdMoveto,targetEqNumber,nextAlphaObjLength,nextAlphaObjId,targetObjIndex);
	});
	socket.on('dragStart', function(targetId,userName){
		// console.log(targetId+","+userName);
		socket.broadcast.emit('dragStart',targetId,userName);
	});
	socket.on('dragStop', function(targetId,userName){
		// console.log(targetId+","+userName);
		socket.broadcast.emit('dragStop',targetId,userName);
	});
	socket.on('addMilestone',function(hashID){
		essenceObject.milestone.push(new milestoneObj(hashID));
		socket.broadcast.emit('addMilestone',hashID);
	});
	socket.on('removeMilestone',function(hashID){
		essenceObject.removeMilestone(hashID);
		socket.broadcast.emit('removeMilestone',hashID);
	});
	socket.on('addAlphastate',function(returnHtml,milestoneObjHashID,generatedAlphaObj,connectToSortableStr,nextAlphaObjLength,nextAlphaObjId){
		essenceObject.addAlphaState(milestoneObjHashID, generatedAlphaObj);
		socket.broadcast.emit('addAlphastate',returnHtml,milestoneObjHashID,generatedAlphaObj,connectToSortableStr,nextAlphaObjLength,nextAlphaObjId);
	});
	socket.on('removeAlphastate',function(hashID){
		essenceObject.removeAlphaState(hashID.replace("#",""));
		socket.broadcast.emit('removeAlphastate',hashID);
	});
	socket.on('toggleAlphastate',function(parentId){
		socket.broadcast.emit('toggleAlphastate',parentId);
		essenceObject.toggleAlphaState(parentId);
	});
	socket.on('loadEssenceObj',function(json){
		// console.log(json);
		if(json==undefined){
			socket.emit('loadEssenceObj',essenceObject);
			
		} else {
			// console.log("in");
			var obj = essenceObject.convertJsonToObj(json);
			// console.log(obj);
			essenceObject = new essenceObj();
			for(var i=0;i<obj['milestone'].length;i++){

				essenceObject.milestone.push(obj['milestone'][i]);
			}
			// console.log(essenceObject);
			socket.broadcast.emit('loadEssenceObj',essenceObject);
			//obj를 에센스 객체에 주입

		}
	});
	socket.on('milestoneName',function(name,id){
		socket.broadcast.emit('milestoneName',name,id);
		essenceObject.changeMilestoneName(id,name);
	});
	socket.on('milestoneActivity',function(name,id){
		socket.broadcast.emit('milestoneActivity',name,id);
		essenceObject.changeMilestoneActivity(id,name);
	});

});
















