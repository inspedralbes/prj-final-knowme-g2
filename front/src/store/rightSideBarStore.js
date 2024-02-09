import { create } from 'zustand';

export const useRightSideBarStore = create((set) => ({
    type: 'component',
    content: [],
    contentIndex: 0,
    portfolioComponents: [
        {
            components: [[], [], []],
            style: {
                sizes: [1, 1, 1],
                string: "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)"
            }
        },
        {
            components: [[], [], []],
            style: {
                sizes: [1, 1, 1],
                string: "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)"
            }
        },
        {
            components: [[], [], []],
            style: {
                sizes: [1, 1, 1],
                string: "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)"
            }
        },
    ],
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
    setPortfolioComponents: (newContent) => set({ portfolioComponents: newContent }),
}));
