import { ModelsInterface } from "./ModelsInterface";

export interface BaseModelInterface {
    prototype?;
    association?(models: ModelsInterface): void;
}