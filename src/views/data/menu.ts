import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  // 定义接口
  interface Imenus {
    name: string,
    url: string,
    icon?: any,
    children?:Array<Imenus>
  }
//   Imenus[] Array<Imenus>  使用接口约束数组的两种方式
 export const menus: Imenus[] = [
    { 
        name: "数据监控", 
        url: '/home/', 
        icon: Setting,
        children:[
            { name: "信息详情", url: '/dataWatch', icon: Document },
            { name: "列表展示", url: '/listShow', icon: Document }
        ]
    },
    { name: "订单信息", url: '/orderInfo', icon: Document },
    { name: "统计分析", url: '/tjfx', icon: Location }
  ]