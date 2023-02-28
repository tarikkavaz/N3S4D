<template>
  <div>
    <Head>
      <Title>N3S4D - About</Title>
      <Meta name="description" content="N3S4D - About"/>
    </Head>
    <template v-if="about.attributes.Body">
      <div class="p-8 text-sm border-b-2 bg-slate-200 border-b-white">
        <h2 class="mb-4">{{ about.attributes.Title }}</h2>
        <div v-html="markdownToHtml(about.attributes.Body)"></div>
      </div>
    </template>
    <template v-else>
      <Loading message="Loading About Content" className="text-red-700" />
    </template>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '~/utils/api';
import markdownToHtml from '~/utils/markdownToHtml.js';
export default {
  setup() {
    const about = ref({ attributes: {} });

    onMounted(() => {
      api('/about')
        .then(data => {
          about.value = data.data;
          about.value.attributes.content = markdownToHtml(about.value.attributes.content);
        })
        .catch(error => {
          console.error('Error fetching about data:', error);
        });
    });

    return {
      about,
      markdownToHtml,
    };
  },
};
</script>