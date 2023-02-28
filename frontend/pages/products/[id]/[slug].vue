<template>
  <div class="bg-yellow-300">
    <div v-if="productData" id="product-detail">
      <Head>
        <Title>N3S4D - Product - {{ productData.attributes.Title }}</Title>
        <Meta name="description" :content="'N3S4D - Product - ' + productData.attributes.Title"/>
      </Head>
      <div class="p-8">
        <h1 class="mb-4">{{ productData.attributes.Title }}</h1>
        <div v-html="markdownToHtml(productData.attributes.Body)"  class="mb-4"></div>
        <p class="mb-4">${{ productData.attributes.Prices }}</p>
        <p v-if="productData.attributes.Image.data">
          <img :src="productData.attributes.Image.data.attributes.url" :alt="productData.attributes.Title">
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
  import { ref, onMounted } from 'vue';
  import { api, baseUrl } from '~/utils/api';
  import markdownToHtml from '~/utils/markdownToHtml.js';

  const route = useRoute();
  const id = route.params.id;
  const productData = ref(null);

  async function fetchProduct() {
    try {
      const response = await api(`/products/${id}?populate=*`);
      const data = response.data;
      if (data.attributes.Image && data.attributes.Image.data) {
        const imageUrl = data.attributes.Image.data.attributes.url;
        const newAttributes = { ...data.attributes.Image.data.attributes };
        if (newAttributes.url.startsWith('/uploads/')) {
          newAttributes.url = `${baseUrl}${newAttributes.url}`;
          newAttributes.url = newAttributes.url.replace('/api', '');
        }
        const newData = {
          ...data.attributes.Image.data,
          attributes: newAttributes
        };
        const newImage = {
          ...data.attributes.Image,
          data: newData
        };
        const newAttributes2 = {
          ...data.attributes,
          Image: newImage
        };
        productData.value = {
          ...data,
          attributes: newAttributes2
        };
      } else {
        productData.value = data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  onMounted(fetchProduct);
</script>
