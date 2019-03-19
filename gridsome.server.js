const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async store => {
    const wp_limit = 22;
    const { data: wp_data } = await axios.get(`https://itavisen.no/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&_embed&per_page=${wp_limit}`);

    const disqus_api_key = 's52FRdZEH9I2DS15s0tX7wx5AQe9b6xVH9P42jztLDlq5nX8eqVBVWrE2Vfhc7TP';
    const disqus_limit = wp_limit * 2;
    const comments_data = await axios.get(`https://disqus.com/api/3.0/forums/listThreads.json?forum=itavisen&limit=${disqus_limit}&api_key=${disqus_api_key}`);

    const posts = store.addContentType({
      typeName: 'Posts'
    });

    function getCommentsByPostId(id) {
      return comments_data.data.response.find((comment) => {
        return comment.identifiers[0] === `post_${id}`;
      });
    }

    wp_data.forEach((item, i) => {
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
          comments: {
            id: getCommentsByPostId(item.id).identifiers[0],
            date: getCommentsByPostId(item.id).createdAt,
            count: getCommentsByPostId(item.id).posts
          }
        }
      });
    });
    
  });
};