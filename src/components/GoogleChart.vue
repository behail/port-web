<template>
  <GChart :type="type" :data="data" :options="options" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GChart } from 'vue-google-charts';
import { Skill } from '@/types/Expereince';

const chartType = 'PieChart';

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  props: {
    skills: {
      type: Object as ()=> Skill[],
      required: true,
    },
  },
  setup(props) {
    const chartOptions = {
      pieHole: 0.4,
      title: '',
      legend: 'none',
      width: 300,
      height: 300,
      backgroundColor: 'transparent',
      is3D: true,
      titleTextStyle: {
        color: 'white',
      },
      pieSliceText: 'label',
    };
    const chartData: any[][] = [['Task', 'Hours per Day']];
    for (let i = 0; i < props.skills.length; i++) {
      chartData.push([props.skills[i]?.name, props.skills[i]?.level]);
    }
    return {
      type: chartType,
      data: chartData,
      options: chartOptions,
    };
  },
});
</script>
