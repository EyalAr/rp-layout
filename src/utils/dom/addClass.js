import elementClass from "element-class";

export default (el, ...classes) => elementClass(el).add(classes.join(" "));
