import { Section } from "../section";

type HeroProperties = {
  title:string|null;
};

const HERO:Section<HeroProperties> = {
  properties: {
    title: ''
  },

  render: ({ properties, template }) => {
    return `
      <section class="hero">
        <h1>${properties.title}</h1>
      </section>
    `;
  }
};

export default HERO;