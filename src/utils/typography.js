import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"

noriegaTheme.bodyFontFamily = ['Lato'];
noriegaTheme.headerFontFamily = ['Lato'];

const typography = new Typography(
  noriegaTheme
)
// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     "Lato",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Lato", "sans-serif"],
// })
typography.injectStyles()

// export const { scale, rhythm, options } = typography
export default typography