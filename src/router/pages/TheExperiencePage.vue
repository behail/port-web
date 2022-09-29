<template>
  <div v-for="Expereince in Expereinces" :key="Expereince.id">
    <h1>{{ Expereince.position }}</h1>
    <h2>{{ Expereince.companyName }}</h2>
    <h4>{{ Expereince.location }}</h4>
    <h3>{{ Expereince.type }}</h3>
    <ul v-for="skill in Expereince.skills" :key="skill.id">
      <li>
        <h4>{{ skill.name }}</h4>
        <h5>{{ skill.level }}</h5>
      </li>
    </ul>
    <ul v-for="project in Expereince.project" :key="project.id">
      <li>
        <h4>{{ project.name }}</h4>
        <h5>{{ project.description }}</h5>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Expereince } from "@/types/Expereince";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  setup() {
    const Expereince1 = reactive<Expereince>({
      id: uuidv4(),
      startDate: new Date("21-10-2021"),
      companyName: "Uplancer Agency ",
      position: "Software Developer",
      rolDescription:
        "Software Development, Write testing codes (Integration and Unit test), Carry out quality assurance tests",
      location: "US, Columbus",
      type: "Full-time",
      base: "Remote",
      skills: [
        {
          id: uuidv4(),
          name: "Vue3",
          level: 95,
        },
        {
          id: uuidv4(),
          name: "Vuex",
          level: 95,
        },
        {
          id: uuidv4(),
          name: "JavaScript",
          level: 97,
        },
        {
          id: uuidv4(),
          name: "TypeScript",
          level: 80,
        },
        {
          id: uuidv4(),
          name: "HTML5",
          level: 97,
        },
        {
          id: uuidv4(),
          name: "Tailwind CSS",
          level: 95,
        },
        {
          id: uuidv4(),
          name: "Jest",
          level: 80,
        },
        {
          id: uuidv4(),
          name: "GitHub",
          level: 95,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: "Smart Electric Meter Design",
          description: "Single Phase Smart Electric Meter, PLC communication",
        },
      ],
      currentlyWorking: true,
    });
    const Expereince2 = reactive<Expereince>({
      id: uuidv4(),
      startDate: new Date("31-5-2015"),
      enddate: new Date("31-8-2019"),
      companyName: "Pioneering Programmers ",
      position: "React JS Developer",
      rolDescription:
        "Software Development (React JS, Typescript, Vanilla extract), Debugging and fixing issues reported by QA & Client, Carry out quality assurance tests.",
      location: "US, TX",
      type: "Contract",
      base: "Remote",
      skills: [
        {
          id: uuidv4(),
          name: "React.js",
          level: 95,
        },
        {
          id: uuidv4(),
          name: "TypeScript",
          level: 96,
        },
        {
          id: uuidv4(),
          name: "Vanilla Extract",
          level: 90,
        },
        {
          id: uuidv4(),
          name: "HTML5",
          level: 90,
        },
        {
          id: uuidv4(),
          name: "GitHub",
          level: 90,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: "Smart Electric Meter Design",
          description: "Single Phase Smart Electric Meter, PLC communication",
        },
      ],
      currentlyWorking: false,
    });
    const Expereince3 = reactive<Expereince>({
      id: uuidv4(),
      startDate: new Date("21-10-2019"),
      enddate: new Date("21-1-2021"),
      companyName: "Epana Technologies",
      position: "Web Developer",
      rolDescription:
        "Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences, Develop project concepts and maintain optimal workflow, Work with senior developers to manage large, complex design projects for corporate clients,Complete detailed programming and development tasks for front-end websites",
      location: "Ethiopia, Addis Ababa",
      type: "Part-time",
      base: "On-site",
      skills: [
        {
          id: uuidv4(),
          name: "React.js",
          level: 95,
        },
        {
          id: uuidv4(),
          name: "JavaScript",
          level: 96,
        },
        {
          id: uuidv4(),
          name: "Cascading Style Sheets (CSS)",
          level: 90,
        },
        {
          id: uuidv4(),
          name: "HTML",
          level: 90,
        },
        {
          id: uuidv4(),
          name: "GitHub",
          level: 90,
        },
        {
          id: uuidv4(),
          name: "Management",
          level: 90,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: "Smart Electric Meter Design",
          description: "Single Phase Smart Electric Meter, PLC communication",
        },
      ],
      currentlyWorking: false,
    });
    const Expereince4 = reactive<Expereince>({
      id: uuidv4(),
      startDate: new Date("21-9-2015"),
      enddate: new Date("21-9-2019"),
      companyName: "Dventus Technologies",
      position: "Electrical Engineer",
      rolDescription:
        "Electronics Design (PCB design), Embedded System design and testing, Carry out quality assurance tests",
      location: "Ethiopia, Addis Ababa",
      type: "Full-time",
      base: "On-site",
      skills: [
        {
          id: uuidv4(),
          name: "Altium Designer",
          level: 95,
        },
        {
          id: uuidv4(),
          name: "Printed Circuit Board (PCB) Design",
          level: 96,
        },
        {
          id: uuidv4(),
          name: "Test Equipment",
          level: 90,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: "Smart Electric Meter Design",
          description: "Single Phase Smart Electric Meter, PLC communication",
        },
      ],
      currentlyWorking: false,
    });
    const Expereinces = [Expereince1, Expereince2, Expereince3, Expereince4];
    return { Expereinces };
  },
});
</script>
