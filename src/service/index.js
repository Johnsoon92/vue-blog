import axios from '../utils/axios'
export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId: '0000',
        userName: 'Sean John',
      })
    })
  })
}
export const getUserMenu = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          manuId: '0',
          menuName: '前端',
          index: 'front',
          children: [
            {
              menuId: '0-0',
              menuName: 'HTML',
              index: 'html',
              children: []
            },
            {
              menuId: '0-1',
              menuName: 'CSS',
              index: 'css',
              children: [
                {
                  menuId: '0-1-0',
                  menuName: 'triangle',
                  index: 'triangle',
                }
              ]
            },
            {
              menuId: '0-2',
              menuName: 'JavaScript',
              index: 'javascript',
              children: []
            },
          ],
        },
        {
          menuId: '1',
          menuName: '后端',
          index: 'backend',
          children: [
            {
              menuId: '1-0',
              menuName: 'Java',
              index: 'java',
            }
          ],
        }
      ])
    }, 300)
  })
  //axios.post('', {})
}
