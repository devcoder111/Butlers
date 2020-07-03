export const addItemToBasket = (array, payload) => {
  const itemExists = array.find((item) => {
    return item.id === payload.id;
  });

  if (payload.is_tailoring === 1 && payload.coordinates[0].index) {
    return [...array, { ...payload }];
  }
  if (itemExists) {
    return array.map((item) => {
      if (item.id === payload.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
  }
  return [...array, { ...payload, count: 1 }];
};

export const deleteItemFromBasket = (array, payload) => {
  const itemExists = array.find((item) => {
    return item.id === payload.id;
  });

  const tailoringItems = array.filter((item) => {
    return item.id === payload.id;
  });

  const tailItemExist =
    tailoringItems[0].is_tailoring === 1
      ? tailoringItems.find((item) => {
          return item.coordinates[0].index === payload.index;
        })
      : null;

  if (tailItemExist) {
    const saveItems = array.filter((a) => {
      if (a.coordinates) {
        return a.id !== payload.id || a.coordinates[0].index !== payload.index;
      } else return a;
    });
    return saveItems;
  } else {
    const count = itemExists.count - 1;

    if (count) {
      return array.map((item) => {
        if (item.id === payload.id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    } else return array.filter((a) => a.id !== payload.id);
  }
};

export const orderItemPrice = (price, count) => {
  return price * count;
};
