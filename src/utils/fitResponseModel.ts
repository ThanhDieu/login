/* eslint-disable @typescript-eslint/no-explicit-any */
export const fitResponseModel = <T>(response: any, modelFields?: string[], isGetArray = false): T => {
  if (isGetArray) return response;
  const newData = { ...response, ...response?.tm };
  modelFields?.map((field) => {
    const isArrayField = Array.isArray(response[field]);

    if (isArrayField) {
      const newFieldData = response[field]?.map((value: any) => {
        const result = { ...value, ...value?.tm };
        delete result?.tm;
        return result;
      });

      return Object.assign(newData, {
        [field]: newFieldData
      });
    } else {
      if (response[field]) {
        const copyField = {
          ...newData[field],
          ...newData[field]?.tm
        };
        delete copyField?.tm;
        return Object.assign(newData, {
          [field]: copyField
        });
      }
    }
  });
  delete newData?.tm;
  return newData as T;
};
