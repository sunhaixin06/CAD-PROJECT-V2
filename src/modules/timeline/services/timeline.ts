export class TimelineEvent {
	id: string; // ID
	incident_id: string; //事件ID
	incident_name: string; // 事件名称
	leixing: string; // 操作类型
	datetime: string; // 时间（20171123171100）
	person: string; // 操作人
	header: string; // 标题	
	headerhref: string; // 标题地址
	description: string; // 描述
	picture: string; // 图片引用
	picturehref: string; // 图片打开地址
	video: string; // 视频
	videohref: string; // 视频打开地址
	mp3:string; // 音频
	mp3href: string; // 音频打开地址
	map:string; //地图
	maphref: string; // 地图打开地址
	fujian:string; // 附件
	fujianhref: string; // 附件打开地址
	constructor(){
		this.id="";
		this.incident_id="";
		this.incident_name="";
		this.leixing="";
		this.datetime="";
		this.person="";
		this.header="";
		this.headerhref="#";
		this.description="";
		this.picture="";
		this.picturehref="#";
		this.video="";
		this.videohref="#";
		this.mp3="";
		this.mp3href="#";
		this.map="";
		this.maphref="#";
		this.fujian="";
		this.fujianhref="#";
	}
}