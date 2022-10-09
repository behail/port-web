<template>
    <div class=" bg-white p-4 m-2 flex flex-col justify-center align-middle fixed
     top-12 md:top-24 left-8 md:left-1/3 drop-shadow-md z-10">
        <iframe :src="fileUrl" class=" h-52 md:h-372 w-72 md:w-500" title="pdf"></iframe>
        <div class=" flex justify-end">
            <button @click="$emit('colse-modal')" class=" p-2 pt-1 pb-1 border-2 m-2 mr-0
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
