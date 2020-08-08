export const add2Cart = (prevState, newItem) => {
  let prev = [...prevState];
  let index = prev.findIndex(item => item.unique_id === newItem.unique_id);
  if (index !== -1) {
    let newIndexedItem = {...prev[index], numbers: prev[index].numbers + 1};
    prev.splice(index, 1);
    prev.push(newIndexedItem);
  } else {
    prev.push({...newItem, numbers: 1});
  }
  return [...prev];
};
export const decreaseItem = (prevState, newItem) => {
  let prev = [...prevState];
  let index = prev.findIndex(item => item.unique_id === newItem.unique_id);
  let indexedItem = prev.find(item => item.unique_id === newItem.unique_id);
  if (indexedItem.numbers === 1) {
    prev.splice(index, 1);
  } else {
    let newIndexedItem = {...indexedItem, numbers: indexedItem.numbers - 1};
    prev.splice(index, 1);
    prev.splice(index, 0, newIndexedItem);
  }
  return [...prev];
};
export const increaseItem = (prevState, newItem) => {
  let prev = [...prevState];
  let index = prev.findIndex(item => item.unique_id === newItem.unique_id);
  let indexedItem = prev.find(item => item.unique_id === newItem.unique_id);
  let newIndexedItem = {...indexedItem, numbers: indexedItem.numbers + 1};
  prev.splice(index, 1);
  prev.splice(index, 0, newIndexedItem);
  return [...prev];
};
