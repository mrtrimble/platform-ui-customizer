import { createApp } from 'vue';
import { pinia } from './stores';
import router from './router/router.js';
import 'animate.css';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/vbscript-html';
import sass from 'highlight.js/lib/languages/scss';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import App from './App.vue';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('sass', sass);

const app = createApp(App).use(pinia).use(router).use(hljsVuePlugin);

app.mount('#app');
