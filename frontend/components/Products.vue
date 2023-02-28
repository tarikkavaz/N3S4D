<template>
  <div id="products">
    <Head>
      <Title>N3S4D - Products</Title>
      <Meta name="description" content="N3S4D - Products"/>
    </Head>
    <template v-if="products.length">
      <ul class="">
        <li v-for="product in products" :key="product.id" class="p-8 text-sm bg-yellow-200 border-b-2 border-b-white hover:bg-yellow-300">
          <nuxt-link :to="{
            name: 'products-id-slug',
            params: {
              id: product.id,
              slug: product.attributes.Slug
            }
          }">
          <h2 class="mb-4 font-bold">{{ product.attributes.Title }}</h2>
          <div v-html="markdownToHtml(product.attributes.Body)" class="mb-4"></div>
          <p class="mb-4">${{ product.attributes.Prices }}</p>
          <p class="mb-4" v-if="product.attributes.Image.data">
            <img class="max-w-xs" :src="product.attributes.Image.data.attributes.url" :alt="product.attributes.Title">
          </p>
          </nuxt-link>
        </li>
      </ul>
    </template>
    <template v-else>
      <Loading message="Loading Products Content" className="text-blue-600" />
    </template>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { api, baseUrl } from '~/utils/api';
  import markdownToHtml from '~/utils/markdownToHtml.js';
  // Define a reactive variable to hold the product data
  const products = ref([]);

  // Define a function to fetch the product data from the API
  async function fetchProducts() {
    try {
      const response = await api('/products?populate=*');
      const data = response.data.map(product => {
        if (product.attributes.Image && product.attributes.Image.data) {
          const imageUrl = product.attributes.Image.data.attributes.url;
          const newAttributes = { ...product.attributes.Image.data.attributes };
          if (newAttributes.url.startsWith('/uploads/')) {
            newAttributes.url = `${baseUrl}${newAttributes.url}`;
            newAttributes.url = newAttributes.url.replace('/api', '');
          }
          const newData = {
            ...product.attributes.Image.data,
            attributes: newAttributes
          };
          const newImage = {
            ...product.attributes.Image,
            data: newData
          };
          const newAttributes2 = {
            ...product.attributes,
            Image: newImage
          };
          return {
            ...product,
            attributes: newAttributes2
          };
        } else {
          return product;
        }
      });
      products.value = data;
    } catch (error) {
      console.error(error);
    }
  }

  // Call the fetchProducts function when the component is mounted
  onMounted(fetchProducts);
</script>
