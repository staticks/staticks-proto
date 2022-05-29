function useProp() {
  const getPropMap = (propArray) => {
    // propArray: {key:'Prop Name', type: 'Number | text | ...', value: '...'}[]
    // return {Prop Name: '...'}
    const propMap = {};
    propArray.forEach((prop) => {
      propMap[prop.key] = prop.value;
    });
    return propMap;
  };

  return {
    getPropMap,
  };
}

export default useProp;
