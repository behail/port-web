<template>
    <div class=" bg-white p-0 ml-12 m-2 flex flex-col justify-center align-middle fixed
     top-6 md:top-1 left-8 md:left-24 drop-shadow-md rounded-md">
        <!-- <iframe :src="fileUrl" class=" h-52 md:h-35 w-72 md:w-70" title="pdf"></iframe> -->
        <img class="top-0 h-52 md:h-35 w-72 md:w-70 "
                   :src="fileUrl" alt="" />
        <div class=" flex justify-end">
            <button @click="$emit('colse-modal')"
            class=" p-2 md:p-6 pt-1 md:pt-2 pb-1 md:pb-2 border-2 m-2 mr-3
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
