<template>
  <div>
    <Head>
      <Title>N3S4D - Home</Title>
      <Meta name="description" content="N3S4D - Home"/>
    </Head>
    <template v-if="homepage.attributes.Body">
      <div class="p-8 text-sm border-b-2 bg-slate-200 border-b-white">
        <h2 class="mb-4">{{ homepage.attributes.Title }}</h2>
        <div v-html="markdownToHtml(homepage.attributes.Body)"></div>
      </div>
    </template>
    <template v-else>
      <Loading message="Loading Home Content" className="text-lime-700" />
    </template>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '~/utils/api';
import markdownToHtml from '~/utils/markdownToHtml.js';
export default {
  setup() {
    const homepage = ref({ attributes: {} });

    onMounted(() => {
      api('/homepage')
        .then(data => {
          homepage.value = data.data;
          homepage.value.attributes.content = markdownToHtml(homepage.value.attributes.content);
        })
        .catch(error => {
          console.error('Error fetching homepage data:', error);
        });
    });

    return {
      homepage,
      markdownToHtml,
    };
  },
};
</script>
