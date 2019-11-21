export default function TreeViewService(data) {
  let keys = Object.keys(data);
  let newData = [];
  keys.forEach(key => {
    logChildContent(data[key]);
    newData.push(data[key]);
  });
  return newData;
}

function logChildContent(child) {
  let childrenKeys = Object.keys(child.children);
  let childrenArray = [];
  if (childrenKeys.length > 0) {
    childrenKeys.forEach(childKey => {
      logChildContent(child.children[childKey]);
      childrenArray.push(child.children[childKey]);
    });
  }
  child.children = childrenArray;
}
