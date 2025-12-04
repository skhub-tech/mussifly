import { DocumentByName, GenericDataModel, TableNamesInDataModel } from "convex/server";
import { GenericId } from "convex/values";
/**
 * Convex document from a given table.
 */
export type GenericDoc<DataModel extends GenericDataModel, TableName extends TableNamesInDataModel<DataModel>> = DocumentByName<DataModel, TableName> & {
    _id: GenericId<TableName>;
    _creationTime: number;
};
//# sourceMappingURL=convex_types.d.ts.map