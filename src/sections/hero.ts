import { Section } from "../section";

type HeroProperties = {
  title:string|null;
  subtitle:string|null;
  buttonLeft?:{
    text:string;
    url:string;
  };
  buttonRight?:{
    text:string;
    url:string;
  };
};

const HERO:Section<HeroProperties> = {
  properties: {
    title: '',
    subtitle: '',
    
  },

  validate: props => {
    if(!props.title) throw new Error('Hero section must have a title.');
    return props;
  }
};

export default HERO;