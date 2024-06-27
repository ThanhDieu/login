/* eslint-disable @typescript-eslint/no-explicit-any */
export const fitResponseModel = <T>(response: any, modelFields?: string[],isGetArray=false): T => {
  if(isGetArray)return response;
  const newData = { ...response, ...response?.taimi };
  modelFields?.map((field) => {
    const isArrayField = Array.isArray(response[field]);

    if (isArrayField) {
      const newFieldData = response[field]?.map((value: any) => {
        const result = { ...value, ...value?.taimi };
        delete result?.taimi;
        return result;
      });

      return Object.assign(newData, {
        [field]: newFieldData
      });
    } else {
      if (response[field]) {
        const copyField = {
          ...newData[field],
          ...newData[field]?.taimi
        };
        delete copyField?.taimi;
        return Object.assign(newData, {
          [field]: copyField
        });
      }
    }
  });
  delete newData?.taimi;
  return newData as T;
};
