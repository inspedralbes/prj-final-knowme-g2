import { create } from 'zustand';

export const useRightSideBarStore = create((set) => ({
    type: 'component',
    content: null,
    setType: (value) => set({ type: value }),
    setContent: (value) => set({ content: value }),
}));