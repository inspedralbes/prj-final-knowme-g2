import { create } from 'zustand';

export const useRightSideBarStore = create((set) => ({
    type: 'component',
    viewMode: true,
    content: [],
    contentIndex: 0,
    componentItem: {},
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
    setContent: (newContent) => set(prevState => {
        const found = prevState.content.find(item => item.id === newContent.id);

        if (found) {
            return {
                ...prevState,
                content: prevState.content.map(item => item.id === newContent.id ? { ...item, ...newContent } : item)
            };
        } else {
            return {
                ...prevState,
                content: [...prevState.content, newContent]
            };
        }
    }),
    addContent: (newContent) => set(prevState => ({
        ...prevState,
        content: [...prevState.content, newContent]
    })),
    setContentIndex: (value) => set({ contentIndex: value }),
    setPortfolioComponents: (newContent) => set({ portfolioComponents: newContent }),
    setComponentItem: (newComponentItem) => set({ componentItem: newComponentItem }),
}));
