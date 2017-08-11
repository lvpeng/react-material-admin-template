import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: '首页', icon: <Assessment/>, link: '/dashboard' },
    { text: '学前', icon: <Web/>, link: '/form' },
    { text: '小学', icon: <GridOn/>, link: '/table' },
    { text: '登录', icon: <PermIdentity/>, link: '/login' },

  ],
  tablePage: {
    items: [
      {id: 1, name: '绘画', price: '¥50.00', category: '学前'},
      {id: 2, name: '数学', price: '¥150.00', category: '小学'},
      {id: 3, name: '英语', price: '¥250.00', category: '初中'},
      {id: 4, name: '地理', price: '¥70.00', category: '高中'},
      {id: 5, name: '物理', price: '¥450.00', category: '初中'},
      {id: 6, name: '化学', price: '¥950.00', category: '高中'},
      {id: 7, name: '语文', price: '¥550.00', category: '初中'},
      {id: 8, name: '生物', price: '¥750.00', category: '高中'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: '6月7日开放小学暑秋随到随测', text: '为方便学员更加快捷方便地报名小学各科的暑秋班次，学而思开放随到随测！根据测试结果推荐孩子适合的班次！'},
      {id: 2, title: '如何在初中保持学习能力', text: '小初衔接冲刺阶段你必须要关注的两件事'},
      {id: 3, title: '小学升学需跨的三座大山', text: '小学升学这一年，同学需要征服的三座大山'},
      {id: 4, title: '小学学得好，初中也不落!', text: '初中数学学习和小学有什么不同？'}
    ],
    monthlySales: [
      {name: '数学', uv: 3700},
      {name: '英语', uv: 3000},
      {name: '自然', uv: 2000},
      {name: '语文', uv: 2780},
      {name: '地理', uv: 2000},
      {name: '历史', uv: 1800},
      {name: '物理', uv: 2600},
      {name: '生物', uv: 2900},
      {name: '音乐', uv: 3500},
      {name: '绘画', uv: 3000},
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: '小班教学', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: '灵活转班', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: '专业教研', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
