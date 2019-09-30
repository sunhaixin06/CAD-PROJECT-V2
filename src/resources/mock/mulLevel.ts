export const mockData = {
    mulLevels: [
        {
            text: "徐汇分局",
            value: 1,
            child: [
                {
                    text: '打浦桥派出所1',
                    value: 11
                },{
                    text: '打浦桥派出所2',
                    value: 12
                }
            ]
        },
        {
            text: "黄浦分局",
            value: 2,
            child: [
                {
                    text: '人民广场派出所1',
                    value: 21
                },{
                    text: '人民广场派出所2',
                    value: 22
                }
            ]
        },
        {
            text: "青浦分局",
            value: 3,
            child: [
                {
                    text: '徐泾派出所1',
                    value: 31
                },{
                    text: '徐泾派出所2',
                    value: 32
                }
            ]
        }
    ],
    laihuaType: [
        {
            text: '电话',
            value: 1
        },
        {
            text: '微信',
            value: 2
        }
    ],
    anyouLevel: [
        {
            text: "报警求助",
            value: 1,
            child: [
                {
                    text: '抢劫1',
                    value: 11,
                    child: [
                        {
                            text: '抢劫11',
                            value: 111
                        },
                        {
                            text: '抢劫111',
                            value: 112
                        }
                    ]
                },{
                    text: '抢劫2',
                    value: 22,
                    child: [
                        {
                            text: '抢劫22',
                            value: 221
                        },
                        {
                            text: '抢劫222',
                            value: 222
                        }
                    ]
                }
            ]
        },
        {
            text: "举报投诉",
            value: 2,
            child: [
                {
                    text: '实名举报1',
                    value: 21,
                    child: [
                        {
                            text: '实名举报11',
                            value: 211
                        },
                        {
                            text: '实名举报111',
                            value: 212
                        }
                    ]
                },{
                    text: '实名举报2',
                    value: 22,
                    child: [
                        {
                            text: '实名举报22',
                            value: 221
                        },
                        {
                            text: '实名举报222',
                            value: 222
                        }
                    ]
                }
            ]
        }
    ],
    ztType: [
        {
            text: '已处警',
            value: 1
        },
        {
            text: '已到达',
            value: 2
        },
        {
            text: '已反馈',
            value: 3
        },
        {
            text: '已接收',
            value: 4
        }
    ],
    ayType: [
        {
            text: '盗窃',
            value: 1
        },
        {
            text: '打架斗殴',
            value: 2
        },
        {
            text: '黄赌毒',
            value: 3
        },
        {
            text: '非法拘禁',
            value: 4
        }
    ],
    ssdwType: [
        {
            text: '徐汇分局',
            value: 1
        },
        {
            text: '黄浦分局',
            value: 2
        },
        {
            text: '青浦分局',
            value: 3
        },
        {
            text: '浦东分局',
            value: 4
        }
    ],
    czjgType: [
        {
            text: '已处理',
            value: 1
        },
        {
            text: '已到场',
            value: 2
        },
        {
            text: '已反馈',
            value: 3
        },
        {
            text: '已接收',
            value: 4
        }
    ],
}