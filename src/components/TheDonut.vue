<template>
   <div class="svg-item">
       <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
           <circle class="donut-hole" cx="20" cy="20" :r="RADIUS" fill="#1E293B"></circle>
           <circle class="donut-ring" cx="20" cy="20" :r="RADIUS" fill="transparent"
           stroke-width="2"></circle>
           <circle class="donut-segment donut-segment-2" cx="20" cy="20" :r="RADIUS"
           fill="transparent" stroke-width="2" :stroke-dasharray="strokeDasharray"
           :stroke-dashoffset="strokeDashoffset"></circle>
           <g class="donut-text donut-text-1">
               <text y="50%" transform="translate(0, 2)">
        <tspan x="50%" text-anchor="middle" class="donut-percent">{{level}}</tspan>
      </text>
    </g>
  </svg>
</div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const RADIUS = 5;
    const surcumference = 2 * 3.14 * RADIUS;
    const strokeDasharray = ref([`${surcumference}`, `${surcumference}`]);
    const strokeDashoffset = ref((1 - (props.level / 100)) * surcumference);

    return {
      strokeDasharray, strokeDashoffset, RADIUS,
    };
  },
});
</script>

<style scoped>
.svg-item {
    width: 100%;
    font-size: 16px;
    margin: 0 auto;
    animation: donutfade 1s;
}
.donut-ring {
    stroke: #EBEBEB;
}
.donut-segment {
    transform-origin: center;
    stroke: #FF6200;
}

.donut-segment-2 {
    stroke: rgb(249 198 17);
    animation: donut1 3s;
}

.donut-segment-3 {
    stroke: #d9e021;
    animation: donut2 3s;
}

.donut-segment-4 {
    stroke: #ed1e79;
    animation: donut3 3s;
}

.segment-1{fill:#ccc;}
.segment-2{fill:#1E293B;}
.segment-3{fill:#d9e021;}
.segment-4{fill:#ed1e79;}

@keyframes donutfade {
  /* this applies to the whole svg item wrapper */
    0% {
        opacity: .2;
    }
    100% {
        opacity: 1;
    }
}
@keyframes donutfadelong {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes donut1 {
    0% {
        stroke-dasharray: 0, 31.416;
    }
    100% {
        stroke-dasharray: 28.276, 31.416;
    }
}

@keyframes donut2 {
    0% {
        stroke-dasharray: 0, 100;
    }
    100% {
        stroke-dasharray: 30, 70;
    }
}

@keyframes donut3{
    0% {
        stroke-dasharray: 0, 100;
    }
    100% {
        stroke-dasharray: 1, 99;
    }
}

.donut-percent {
    animation: donutfadelong 1s;
}
.donut-data {
    font-size: 0.12em;
    line-height: 1;
    transform: translateY(0.5em);
    text-align: center;
    text-anchor: middle;
    color:#666;
    fill: #666;
    animation: donutfadelong 1s;
}

.donut-text {
    font-family: Arial, Helvetica, sans-serif;
    fill: #FF6200;
}
.donut-text-1 {
    fill: rgb(249 198 17);
}
.donut-text-2 {
    fill: #d9e021;
}
.donut-text-3 {
    fill: #ed1e79;
}

.donut-label {
    font-size: 0.28em;
    font-weight: 700;
    line-height: 1;
    fill: #000;
    transform: translateY(0.25em);
}

.donut-percent {
    font-size: 0.1em;
    line-height: 1;
    transform: translateY(0.5em);
    font-weight: bold;
}

</style>
