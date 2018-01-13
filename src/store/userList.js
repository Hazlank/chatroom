export const userlist = [{
  avatar: `/static/img/avatar0.jpg`,
  name: `hax`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar1.jpg`,
  name: `nbsaw`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar2.jpg`,
  name: `lialuo`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar3.jpg`,
  name: `vipcch`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar4.jpg`,
  name: `choltte`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar5.jpg`,
  name: `gwell`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar6.jpg`,
  name: `扑街r v发`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar7.jpg`,
  name: `haozi`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar8.jpg`,
  name: `rollup`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar9.jpg`,
  name: `tj`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar10.jpg`,
  name: `Evan you`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar11.jpg`,
  name: `阮一峰`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar12.jpg`,
  name: `Addy Osmani`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
},
{
  avatar: `/static/img/avatar13.jpg`,
  name: `fimars`,
  type: 'group',
  context: '',
  unread: 200,
  lasttime: '12:15'
}]

export var messagecontent = []
if (!localStorage.getItem('messagecontent')) {
  messagecontent = messagecontent.concat(userlist.map((d, index) => {
    return [{
      text: `i am ${d.name}`,
      speaker: false,
      avatar: `/static/img/avatar${index}.jpg`,
      time: '11:02'
    }]
  }))
  localStorage.setItem('messagecontent', JSON.stringify(messagecontent))
} else {
  messagecontent = JSON.parse(localStorage.getItem('messagecontent'))
}

userlist.forEach((list, index) => {
  var content = messagecontent[index]
  list['context'] = content[content.length - 1].text
  list['messagecontent'] = content
})
