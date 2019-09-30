export const chatList = [
    {
        name: '自己',
        headIcon: '../../../resources/images/head/03.svg',
        isSelf: true, // 是不是自己
        message: [
            {
                content: '你好，请问有什么可以帮助到你？', // 聊天内容
                contentType: 0 // 聊天内容的类型 0其他 1电话 2定位 3附件 4录音
            }
        ]
    },
    {
        name: '王凯',
        headIcon: '../../../resources/images/head/02.svg',
        isSelf: false, // 是不是自己
        message: [
            {
                content: '这里有人持械斗殴，请立即派人处理。', // 聊天内容
                contentType: 0 // 聊天内容的类型 0其他 1电话 2定位 3附件
            },
            {
                content: '这里有人持械斗殴，请立即派人处理。', // 聊天内容
                contentType: 0 // 聊天内容的类型 0其他 1电话 2定位 3附件
            }
        ]
    },
    {
        name: '自己',
        headIcon: '../../../resources/images/head/03.svg',
        isSelf: true, // 是不是自己
        message: [
            {
                content: '你的联系电话是多少', // 聊天内容
                contentType: 0 // 聊天内容的类型 0其他 1电话 2定位 3附件
            }
        ]
    },
    {
        name: '王凯',
        headIcon: '../../../resources/images/head/02.svg',
        isSelf: false, // 是不是自己
        message: [
            {
                content: '13809288212', // 聊天内容
                contentType: 1 // 聊天内容的类型 0其他 1电话 2定位 3附件
            },
            {
                content: "24''", // 聊天内容
                contentType: 4 // 聊天内容的类型 0其他 1电话 2定位 3附件
            }
        ]
    }
]