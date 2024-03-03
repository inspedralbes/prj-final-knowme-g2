import { useRightSideBarStore } from '@/store/rightSideBarStore.js'

export function EditNavBar() {
    const { title, setTitle } = useRightSideBarStore(state => state);

    const changeTitle = (t) => {
        setTitle(t);
        document.title = t;
    }

    return (
      <>
        <h2 className="text-2xl font-bold mb-4">Navigation Bar</h2>
        <div className="relative mt-2">
            <div className="mb-2">
                <label className='block text-sm font-medium text-white' htmlFor="title">Title</label>
                <input className='text-lg w-full overflow-hidden h-12 px-2 mt-2 resize-none focus:outline-none rounded-lg bg-[#313131] text-[#E8E9EA] border-2 border-[#E8E9EA] pr-10' type="text" id="title" name="title" value={title} onChange={(e) => changeTitle(e.target.value)}></input>
            </div>
        </div>
        
      </>
    );
  }
  
  export default EditNavBar;
  