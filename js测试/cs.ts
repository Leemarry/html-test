/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-04-19 10:49:21
 * @LastEditors: Andy
 * @LastEditTime: 2024-04-22 10:24:42
 */
// 假设你已经定义了 Member 接口和 editableData 对象

export interface Member {
    user_id: string
    username: string
    user_type: string
    workspace_name: string
    create_time: string
    mqtt_username: string
    mqtt_password: string
}
// 定义一个成员数组
const members: Member[] = [
    {
        user_id: "1",
        username: "John",
        user_type: "admin",
        workspace_name: "Workspace A",
        create_time: "2024-04-22",
        mqtt_username: "john123",
        mqtt_password: "password123"
    },
    {
        user_id: "2",
        username: "Jane",
        user_type: "user",
        workspace_name: "Workspace B",
        create_time: "2024-04-23",
        mqtt_username: "jane456",
        mqtt_password: "password456"
    }
];

const editableData: UnwrapRef<Record<string, Member>> = reactive({})
// 编辑成员函数
function edit(record: Member) {
    // 将成员对象添加到 editableData 中，使用 user_id 作为键
    editableData[record.user_id] = record;
}

// 循环遍历成员数组，并编辑每个成员
members.forEach(member => {
    edit(member);
});

// 打印 editableData 查看结果
console.log("editableData:", editableData);