import { useRightSideBarStore } from "../../store/rightSideBarStore.js";

export function AddComponent() {
  const { setComponentItem, componentItem } = useRightSideBarStore();

  const startDrag = (evt, id) => {
    evt.dataTransfer.setData("itemID", id);
    setComponentItem({
      key: componentItem.key == undefined ? 0 : componentItem.key + 1,
      id: id,
      mode: "add",
    });
    evt.dataTransfer.setData(
      "itemComponentId",
      componentItem.key == undefined ? 0 : componentItem.key + 1
    );
    evt.dataTransfer.setData("itemMode", "add");
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Components</h2>
      <ul className="grid grid-cols-2 gap-4">
        <li
          id="TitleComponent"
          className="p-2 border-2 border-[#2d2d2d] opacity-[0.999] rounded-xl bg-slate-100 transition-colors duration-200 text-slate-900 h-32 font-bold relative group cursor-grab active:cursor-grabbing items-center justify-center text-center flex flex-col"
          draggable="true"
          onDragStart={(evt) => startDrag(evt, "TitleComponent")}
        >
          <span className="icon-[material-symbols--title] size-12"></span>
          <div className="transition-all opacity-0 rounded-xl group-hover:opacity-100 hover:backdrop-blur-sm absolute inset-0 text-black bg-slate-300 bg-opacity-80 flex items-center justify-center">
            <span className="icon-[teenyicons--drag-horizontal-solid] size-8"></span>
          </div>
          <h1>Title</h1>
        </li>
        <li
          id="ImgComponent"
          className="p-2 border-2 border-[#2d2d2d] opacity-[0.999] rounded-xl bg-slate-100 transition-colors duration-200 text-slate-900 h-32 font-bold relative group cursor-grab active:cursor-grabbing items-center justify-center text-center flex flex-col"
          draggable
          onDragStart={(evt) => startDrag(evt, "ImgComponent")}
        >
          <span className="icon-[material-symbols--image-outline-rounded] size-12"></span>
          <div className="transition-all opacity-0 rounded-xl group-hover:opacity-100 hover:backdrop-blur-sm absolute inset-0 text-black bg-slate-300 bg-opacity-80 items-center justify-center flex">
            <span className="icon-[teenyicons--drag-horizontal-solid] size-8"></span>
          </div>
          <h1>Image</h1>
        </li>
        <li
          id="TextComponent"
          className="col-span-2 p-2 border-2 border-[#2d2d2d] opacity-[0.999] rounded-xl bg-slate-100 transition-colors duration-200 text-slate-900 h-32 font-bold relative group cursor-grab active:cursor-grabbing items-center justify-center text-center flex flex-col"
          draggable
          onDragStart={(evt) => startDrag(evt, "TextComponent")}
        >
          <span className="icon-[material-symbols--subject] size-12"></span>
          <div className="transition-all opacity-0 rounded-xl group-hover:opacity-100 hover:backdrop-blur-sm absolute inset-0 text-black bg-slate-300 bg-opacity-80 items-center justify-center flex">
            <span className="icon-[teenyicons--drag-horizontal-solid] size-8"></span>
          </div>
          <h1>Paragraph</h1>
        </li>
      </ul>
    </>
  );
}

export default AddComponent;
