export const updatedObject = (oldObject, updatedValues) => {

    //updatedValues - object

    return {
        ...oldObject,
        ...updatedValues
    }
};