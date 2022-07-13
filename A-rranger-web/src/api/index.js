import axios from 'axios'

// [FCM003] API 관리 기능 구현
function getAllProjectTags() {
  return axios.get("/command/core/get-all-project-tags");
}

function getCsrfToken() {
  return axios.get("./command/core/get-csrf-token");
}

function getLanguages() {
  return axios.get("./command/core/get-languages");
}

function getVersion() {
  return axios.get("./command/core/get-version");
}

function getHistory() {
  return axios.get("./command/core/get-history");
}

function getRows() {
  return axios.post("./command/core/get-rows");
}

function computeFacets() {
  return axios.post("./command/core/compute-facets");
}

function getPreference() {
  return axios.get("./command/core/get-preference");
}

function testConnect() {
  return axios.post("/command/database/test-connect");
}

function connect() {
  return axios.post("/command/database/connect");
}

function savedConnection() {
  return axios.post("/command/database/saved-connection");
}

function testQuery() {
  return axios.post("/command/database/test-query");
}

function createImportingJob() {
  return axios.post("./command/core/create-importing-job");
}

function getAllProjectMetas() {
  return axios.get("./command/core/get-all-project-metadata");
}

function getImportJobStatus() {
  return axios.post("./command/core/get-importing-job-status");
}

function importController() {
  return axios.post("./command/core/importing-controller");
}

function cancelImportingJob() {
  return axios.post("./command/core/cancel-importing-job");
}

function getProjectMetadata() {
  return axios.get("./command/core/get-project-metadata");
}

function setProjectMetadata() {
  return axios.post("./command/core/set-project-metadata");
}

function setProjectTags() {
  return axios.post("./command/core/set-project-tags");
}

function deleteProject() {
  return axios.post("./command/core/delete-project");
}

function renameProject() {
  return axios.post("./command/core/rename-project");
}

function getModels() {
  return axios.post("./command/core/get-models");
}

function getProcesses() {
  return axios.get("./command/core/get-processes");
}

function getOperations() {
  return axios.get("./command/core/get-operations");
}

function undoRedo() {
  return axios.post("./command/core/undo-redo");
}

function cancelProcesses() {
  return axios.post("./command/core/cancel-processes");
}

function computeClusters() {
  return axios.post("./command/core/compute-clusters");
}

function getClusterFuncAndDist() {
  return axios.get("./command/core/get-clustering-functions-and-distances");
}

function editOneCell() {
  return axios.post("./command/core/edit-one-cell");
}

function textTransform() {
  return axios.post("./command/core/text-transform");
}

function massEdit() {
  return axios.post("./command/core/mass-edit");
}

function joinMultiValueCells() {
  return axios.post("./command/core/join-multi-value-cells");
}

function splitMultiValueCells() {
  return axios.post("./command/core/split-multi-value-cells");
}

function fillDown() {
  return axios.post("./command/core/fill-down");
}

function blankDown() {
  return axios.post("./command/core/blank-down");
}

function transposeColToRow() {
  return axios.post("./command/core/transpose-columns-into-rows");
}

function transposeRowToCol() {
  return axios.post("./command/core/transpose-rows-into-columns");
}

function keyValueColumnize() {
  return axios.post("./command/core/key-value-columnize");
}

function addCol() {
  return axios.post("./command/core/add-column");
}

function removeCol() {
  return axios.post("./command/core/remove-column");
}

function renameCol() {
  return axios.post("./command/core/rename-column");
}

function moveCol() {
  return axios.post("./command/core/move-column");
}

function splitCol() {
  return axios.post("./command/core/split-column");
}

function reorderCol() {
  return axios.post("./command/core/reorder-columns");
}

function annotateOneRow() {
  return axios.post("./command/core/annotate-one-row");
}

function annotateRows() {
  return axios.post("./command/core/annotate-rows");
}

function removeRows() {
  return axios.post("./command/core/remove-rows");
}

function getAllPreference() {
  return axios.post("./command/core/get-all-preferences");
}

function setPreference() {
  return axios.post("./command/core/set-preference");
}


export {
  getAllProjectTags,
  getCsrfToken,
  getLanguages,
  getVersion,
  getHistory,
  getRows,
  computeFacets,
  getPreference,
  testConnect,
  connect,
  savedConnection,
  testQuery,
  createImportingJob,
  getAllProjectMetas,
  getImportJobStatus,
  importController,
  cancelImportingJob,
  getProjectMetadata,
  setProjectMetadata,
  setProjectTags,
  deleteProject,
  renameProject,
  getModels,
  getProcesses,
  getOperations,
  undoRedo,
  cancelProcesses,
  computeClusters,
  getClusterFuncAndDist,
  editOneCell,
  textTransform,
  massEdit,
  joinMultiValueCells,
  splitMultiValueCells,
  fillDown,
  blankDown,
  transposeColToRow,
  transposeRowToCol,
  keyValueColumnize,
  addCol,
  removeCol,
  renameCol,
  moveCol,
  splitCol,
  reorderCol,
  annotateOneRow,
  annotateRows,
  removeRows,
  getAllPreference,
  setPreference,
};
