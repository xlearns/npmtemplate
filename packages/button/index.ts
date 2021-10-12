import Button from "./src/button.vue";
Button.install = function (Vue: any) {
  Vue.components(Button.name, Button);
};
export default Button;
