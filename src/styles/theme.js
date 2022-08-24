// 參考：https://5xruby.tw/posts/tailwind-refactor-react-component

export const ButtonType = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  basic: "bg-white hover:bg-gray-200 text-gray-700 font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded",
};

export const ButtonSize = {
  sm: "py-2 px-4 text-xs mx-2",
  lg: "py-3 px-6 text-lg",
};
// 看命名就知道，`ButtonType`：定義按鈕的樣式。`ButtonSizes`：定義按鈕的尺寸。
