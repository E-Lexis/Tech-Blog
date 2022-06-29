const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body:'at auctor urna nunc id cursus metus aliquam eleifend mi',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body:'pretium lectus quam id leo in vitae turpis massa sed',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body:'mattis rhoncus urna neque viverra justo nec ultrices dui sapien',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_body:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body:'Morbi volutpat nunc sed elit venenatis hendrerit. Sed auctor molestie lacus.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_body:'Donec augue lorem, lacinia eget varius non, efficitur id magna',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body:'Sed cursus felis consequat sapien dapibus lacinia',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum',
    post_body:'Quo harum eaque ut porro rerum aut assumenda rerum sed nulla accusantium qui galisum nihil',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_body:'Proin condimentum massa orci',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_body:'Aliquam a mauris vel urna efficitur fringilla at et ex',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body:'Aenean at aliquet mi',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_body:'Donec a iaculis turpis, sit amet sollicitudin sem',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_body:'Aliquam vitae nisi sit amet tortor fringilla congue',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_body:'Non culpa tempora et quia tempore ex perspiciatis explicabo',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_body:'Sit repellat enim et numquam aperiam qui doloremque natus id ducimus voluptate ut fugit dolorem 33 sunt voluptas?',
    user_id: 3
  },
  {
    title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_body:'Non fuga velit cum totam incidunt ut exercitationem',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body:'Quis ex eaque At adipisci impedit',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_body:'Est error deserunt ea maiores Quis id dolorem soluta in animi voluptatem aut sunt autem',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_body:'Ad asperiores consequatur a sint ipsa 33 asperiores fugit',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_body:'Ut molestiae consequatur sed obcaecati perspiciatis in excepturi quia',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;