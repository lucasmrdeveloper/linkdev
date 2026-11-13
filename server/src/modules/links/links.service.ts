import LinksModel from "./links.model"

export const buscarLinksService = async () => await LinksModel.find()