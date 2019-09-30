import { TimelineEvent } from './timeline';

export const TimelineEvents: TimelineEvent[] = [
//	{id: '0',incident_id:'2',incident_name: 'aaaaaaaaaaaaaaaaaaaaaaa',leixing: '接',datetime: '20171114091540',person: '报警人',header: '报警人拨打110报警',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '1',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '接',datetime: '20171114091540',person: '报警人',header: '报警人拨打110报警',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '2',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '接',datetime: '20171114091823',person: '王接警员',header: '创建接警单\"黄浦区中山路18号\"',headerhref: '#',description: '上午9时许，接到报警电话称，有一辆大型危化品运输车在中山路18号侧翻，撞到路灯杆，现场有...',picture:'resources/img/dog01.png',picturehref: '../../../../resources/images/timeline/0.jpg;../../../../resources/images/timeline/1.jpg;../../../../resources/images/timeline/2.jpg;../../../../resources/images/timeline/3.jpg;../../../../resources/images/timeline/4.jpg;../../../../resources/images/timeline/5.jpg;../../../../resources/images/timeline/6.jpg;../../../../resources/images/timeline/7.jpg;../../../../resources/images/timeline/8.jpg;../../../../resources/images/timeline/9.jpg',video:'',videohref: '#',mp3:'resources/img/通话录音.png',mp3href: '../../../resources/images/timeline/test1.mp3;../../../resources/images/timeline/test2.mp3;../../../resources/images/timeline/test3.mp3',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '3',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '令',datetime: '20171114091920',person: '接警员',header: '向黄浦分局下达处警指令',headerhref: '#',description: '指令：迅速派警处置。',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '4',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '',datetime: '20171114091930',person: '林警员',header: '黄浦分局林警员签收指令单',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '5',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '',datetime: '20171114091945',person: '赵指挥长',header: '赵指挥长锁定现场视频',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '6',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '到',datetime: '20171114092510',person: '张某',header: '黄浦1号到达现场。',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'resources/img/中山路.png',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '7',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '',datetime: '20171114092610',person: '赵指挥长',header: '赵指挥长电话联系黄浦1号',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'resources/img/通话录音.png',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '8',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '接',datetime: '20171114092710',person: '张某',header: '现场民警上传现场证据。',headerhref: '#',description: '',picture:'',picturehref: '#',video:'resources/img/现场视频.png',videohref: '#',mp3:'resources/img/通话录音.png',mp3href: '#',map:'',maphref: '#',fujian:'resources/img/dog01.png',fujianhref: '#'},
	{id: '9',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '馈',datetime: '20171114092720',person: '张某',header: '张某通过终端反馈【语音】。',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'resources/img/通话录音.png',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '10',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '馈',datetime: '20171114092730',person: '张某',header: '张某通过终端反馈',headerhref: '#',description: '反馈:现场侧翻的车辆是xx公司的槽罐车，装有氯气，现在正在泄漏,现场情况较混乱。',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '11',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '',datetime: '20171114092830',person: '李指挥长',header: '李指挥长核实补充现场情况',headerhref: '#',description: '经民警现场处警后，侧翻的是氯气运输车辆，对大气及水体有污染，情况比较严重。',picture:'resources/img/dog01.png',picturehref: '../../../../resources/images/timeline/1.jpg;../../../../resources/images/timeline/2.jpg;../../../../resources/images/timeline/3.jpg;../../../../resources/images/timeline/4.jpg;../../../../resources/images/timeline/5.jpg',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '12',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '启',datetime: '20171114092930',person: '李指挥长',header: '启动“危化品运输泄漏事故处置预案”。',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '13',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '令',datetime: '20171114093100',person: '王指挥员',header: '向黄浦分局、消防总队、交警总队等下达指令',headerhref: '#',description: '指令:黄浦分局：设置警戒，开辟绿色通道；消防总队：设置水幕防护，防止火灾和爆炸”；交警...',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '14',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '',datetime: '20171114093150',person: '张指挥员',header: '语音呼叫黄浦分局',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'resources/img/通话录音.png',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '15',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '',datetime: '20171114093230',person: '张指挥员',header: '语音呼叫值班副局长。',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'resources/img/通话录音.png',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '16',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '示',datetime: '20171114093500',person: '值班副局长',header: '值班副局长指示',headerhref: '#',description: '公安、安监主要领导到场，指导属地妥善处置。',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '17',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '馈',datetime: '20171114122500',person: '张指挥员',header: '黄浦分局张指挥员反馈',headerhref: '#',description: '反馈：人群转移至西面500米处，逐渐撤离现场。',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'},
	{id: '18',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '',datetime: '20171114122800',person: '市局指挥中心王指挥员',header: '警情处置总结报告输出',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'resources/img/rabbit01.png',fujianhref: '../../../resources/images/timeline/警情总结报告.docx;../../../resources/images/timeline/研判报告.rar'},
	{id: '19',incident_id:'1',incident_name: '9.12中山路危化品泄漏事故',leixing: '结',datetime: '20171114123500',person: '李指挥长',header: '结束指挥',headerhref: '#',description: '',picture:'',picturehref: '#',video:'',videohref: '#',mp3:'',mp3href: '#',map:'',maphref: '#',fujian:'',fujianhref: '#'}
];