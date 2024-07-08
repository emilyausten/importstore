import create from "zustand";

interface EmailState {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
}

const useClient = create<EmailState>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  name: "",
  setName: (name) => set({ name }),
  phone: "",
  setPhone: (phone) => set({ phone }),
}));

export default useClient;
