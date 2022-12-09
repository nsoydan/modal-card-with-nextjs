import { TemplateContext } from "../../context/template.context";
import { Fragment, useContext } from "react";
import Modal1 from "../modal1";
import Modal2 from "../modal2";

const Template = () => {
  const { template } = useContext(TemplateContext);
  console.log("template component çalıştı . template:", template);

  if (template.id !== null) {
    switch (template.id) {
      case 1:
        return (
          <div className={template.content.position}>
            <Modal1 props={template} />
          </div>
        );
        break;
      case 2:
        return (
          <div className={template.content.position}>
            <Modal2 props={template} />
          </div>
        );
        break;
    }
  } else {
    return <Fragment></Fragment>;
  }
};

export default Template;
