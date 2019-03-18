const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://itavisen.no/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&_embed&per_page=22');

    const posts = store.addContentType({
      typeName: 'Posts'
    });

    for (const item of data) {
      posts.addNode({
        id: item.id,
        date: item.date,
        title: item.title.rendered,
        excerpt: item.excerpt.rendered,
        path: item.link,
        fields: {
          imgUrl: item._embedded['wp:featuredmedia'][0].media_details.sizes['post-thumbnail'].source_url,
          imgUrlFull: item._embedded['wp:featuredmedia'][0].media_details.url,
          tags: [{
            id: item._embedded['wp:term'][1].map((tag) => {
              return tag.id;
            }),
            name: item._embedded['wp:term'][1].map((tag) => {
              return tag.name;
            }),
            link: item._embedded['wp:term'][1].map((tag) => {
              return tag.link;
            }),
          }],
          comments: (Math.floor(Math.random() * 150) + 3) + ' comments'
        }
      });
    }
  });
};