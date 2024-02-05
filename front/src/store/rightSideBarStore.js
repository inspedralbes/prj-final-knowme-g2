import { create } from 'zustand';

export const useRightSideBarStore = create((set) => ({
    type: '',
    content: null,
    setType: (value) => set({ type: value }),
    setContent: (value) => set({ content: value }),
}));