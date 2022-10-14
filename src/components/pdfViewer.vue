<template>
    <div class=" bg-white p-4 m-2 flex flex-col justify-center align-middle fixed
     top-12 md:top-8 left-8 md:left-32 drop-shadow-md z-10">
        <iframe :src="fileUrl" class=" h-52 md:h-35 w-72 md:w-70" title="pdf"></iframe>
        <div class=" flex justify-end">
            <button @click="$emit('colse-modal')"
            class=" p-2 md:p-6 pt-1 md:pt-2 pb-1 md:pb-2 border-2 m-2 mr-0
                border-darkBlue  rounded-md hover:bg-darkBlue hover:border-white hover:text-white">
                Close</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    fileUrl: {
      type: String,
      required: true,
    },
  },

});
</script>
