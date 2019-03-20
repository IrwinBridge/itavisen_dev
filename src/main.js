import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/custom.css';

export default function (Vue, { router, head, isClient }) {
  head.title = 'ITAVISEN';
  head.titleTemplate = '%s - Home';
  head.link.push({
    rel: 'stylesheet',
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
  });
  head.link.push({
    rel: 'stylesheet',
    href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  });
  head.link.push({
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css?family=Exo+2:300,400,500,600|Playfair+Display:400,700"
  });
  Vue.component('Layout', DefaultLayout);
};
