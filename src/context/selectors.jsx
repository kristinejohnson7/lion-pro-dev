import { createSelector } from "reselect";

const selectRawData = (rawData) => {
  return rawData;
};

export const selectServiceData = createSelector(selectRawData, (rawData) => {
  const cleanServices = rawData.map((slide) => {
    const { sys, fields } = slide;
    const { id } = sys;
    const title = fields.title;
    const description = fields.description;
    const featuredPicture = fields.servicePicture.fields.file.url;
    const icon = fields.serviceIcon.fields.file.url;
    const updatedService = {
      id,
      title,
      description,
      featuredPicture,
      icon,
    };
    return updatedService;
  });
  return cleanServices;
});
