const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://itavisen.no/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&_embed&per_page=22');
    const comments_data = await axios.get('https://disqus.com/api/3.0/forums/listThreads.json?forum=itavisen&limit=22&api_key=s52FRdZEH9I2DS15s0tX7wx5AQe9b6xVH9P42jztLDlq5nX8eqVBVWrE2Vfhc7TP');

    const posts = store.addContentType({
      typeName: 'Posts'
    });
    const comments = store.addContentType({
      typeName: 'Comments'
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
          }]
        }
      });
    }
    for (const item of comments_data.data.response) {
      comments.addNode({
        id: item.id,
        date: item.createdAt,
        fields: {
          comments: item.posts
        }
      });
    }
  });
};