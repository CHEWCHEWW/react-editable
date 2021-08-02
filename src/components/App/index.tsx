import React from "react";

import DragAndDropTable from "../DragAndDropTable";
import Editor from "../Editor";

const App = (): React.ReactElement => {
  return (
    <>
      <Editor top={30} left={30} width={400} height={500} minWidth={1} minHeight={1}>
        <DragAndDropTable />
      </Editor>
    </>
  );
};

export default App;
