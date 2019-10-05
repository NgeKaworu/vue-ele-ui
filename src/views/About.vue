<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WordCloud
      :data="[
        { text: '123', size: 2 },
        { text: '123', size: 2 },
        { text: '123', size: 2 },
        { text: '123', size: 2 },
        { text: '123', size: 2 },
        { text: '123', size: 2 },
        { text: '123', size: 2 },
        { text: '123', size: 2 },
      ]"
    />
  </div>
</template>

<script>
import WordCloud from '@/components/WordColud.vue';
export default {
  components: { WordCloud },
};
</script>


