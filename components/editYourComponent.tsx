import { Fragment, useContext } from "react";
import { TemplateContext } from "../context/template.context";

const EditYourComponent = () => {
  

  const {
    template,
    changeTitleContent,
    changeSubTitleContent,
    changePlaceholderContent,
    changeButtonButton1Content,
    changeButtonButton2Content,
  } = useContext(TemplateContext);

  console.log("EditYour component çalıştı -> ", template);

  return (
    <div className="flex flex-col justify-start">
      {template && template.content.title && (
        <input
          type="text"
          placeholder={template.content.title.content}
          className="border-2xl border-solid text-xl border-black mt-2 rounded-lg"
          onChange={(e) => changeTitleContent(e.target.value)}
        />
      )}
      {template && template.content.subTitle && (
        <input
          type="text"
          placeholder={template.content.subTitle.content}
          className="border-2xl border-solid text-xl border-black mt-2 rounded-lg"
          onChange={(e) => changeSubTitleContent(e.target.value)}
        />
      )}
      {template && template.content.placeholder && (
        <input
          type="text"
          placeholder={template.content.placeholder.content}
          className="border-2xl border-solid text-xl border-black mt-2 rounded-lg"
          onChange={(e) => changePlaceholderContent(e.target.value)}
        />
      )}
      {template && template.content.button.button1.content && (
        <input
          type="text"
          placeholder={template.content.button.button1.content}
          className="border-2xl border-solid text-xl border-black mt-2 rounded-lg"
          onChange={(e) => changeButtonButton1Content(e.target.value)}
        />
      )}
      {template && template.content.button.button2.content && (
        <input
          type="text"
          placeholder={template.content.button.button2.content}
          className="border-2xl border-solid text-xl border-black mt-2 rounded-lg"
          onChange={(e) => changeButtonButton2Content(e.target.value)}
        />
      )}
    </div>
  );
};

export default EditYourComponent;
