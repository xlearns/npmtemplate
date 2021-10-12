import Button from "./button";
// import "./theme/font/font.css";
const components = [Button];
const install = function (Vue: any, option = {}) {
  components.forEach((component: any) => {
    Vue.component(component.name, component);
  });
};

export default {
  ...components,
  install,
};
