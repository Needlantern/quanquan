/******************************
脚本功能：Private
脚本作者：Ken
更新时间：2025-03-13
使用声明：仅供学习与交流，请勿用于非法用途！
*******************************/

// 获取响应体
let body = $response.body;

// 解析JSON
let obj = JSON.parse(body);

// 修改用户订阅信息
obj.user.activeSubscriptionProvider = "PRIVATEVPN"; // 设置活跃订阅提供商
obj.user.subscriptionInfo = {
    "cancellationDate": null,
    "priceInfo": null,
    "provider": "PRIVATEVPN",         // 设置订阅提供商
    "expirationDate": "2030-01-01",   // 设置到期时间为2030年
    "daysLeft": 1825,                 // 剩余天数约为5年
    "billingUrl": ""
};
obj.user.premiumExpiry = "2030-01-01"; // 设置高级会员到期时间

// 序列化并返回修改后的数据
body = JSON.stringify(obj);
$done({body});
