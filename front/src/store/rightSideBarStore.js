import { create } from 'zustand';

export const useRightSideBarStore = create((set) => ({
    type: 'component',
    content: [],
    contentIndex: 0,
    setType: (value) => set({ type: value }),
    setContent: (newContent) => set(prevState => ({
        ...prevState,
        content: prevState.content.map(item => item.id === newContent.id ? { ...item, ...newContent } : item)
    })),
    addContent: (newContent) => set(prevState => ({
        ...prevState,
        content: [...prevState.content, newContent]
    })),
    setContentIndex: (value) => set({ contentIndex: value }),
}));