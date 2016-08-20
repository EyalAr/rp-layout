export default class AbstractLayoutEngine {
  constructor () {}
  toLayoutSpec () { throw Error("'toLayoutSpec' is not implemented"); }
  toJSON () { throw Error("'toJSON' is not implemented"); }
  setNestedLayout () { throw Error("'setNestedLayout' is not implemented"); }
  clone () { throw Error("'clone' is not implemented"); }
  traversePanels (cb) {
    traverseRecursive([], this.toLayoutSpec());

    function traverseRecursive (path, panels) {
      panels.forEach(({ id, top, left, width, height, nested }) => {
        const myPath = path.concat(id);
        cb(myPath, top, left, width, height);
        traverseRecursive(myPath, nested);
      });
    }
  }
}
