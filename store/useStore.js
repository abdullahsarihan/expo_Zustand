import { create } from "zustand";

const useStore = (set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
});

export default create(useStore);

//useStore a karşılık olarak sadece bir fonksiyon tanımladık ve bu fonksiyon da geriye bir object dönüyor
//bu obje içerisinde count ile state in initial değerini belirliyoruz.
//bir tane de increase isminde fonksiyonumuz var. Bu fonksiyon da çalıştığında call back fonskiyon parametresinden bize gelen
//set ifadesini kullanarak (state) => ({ count: state.count + 1 }) yeni bir arrow function yazıyoruz. Ve bu set bize
//o anki state in durumunu veriyor. Ardından bu set içerisine bir object dönmeliyiz burda da count un değerini
//state.count + 1 yaparak değiştir demiş olduk.
