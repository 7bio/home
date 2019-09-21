import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

moragaTheme.bodyFontFamily = ['Lato'];
moragaTheme.headerFontFamily = ['Lato'];

const typography = new Typography(
  moragaTheme
)


// export const { scale, rhythm, options } = typography
export default typography