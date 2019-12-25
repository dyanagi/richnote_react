// https://github.com/FortAwesome/react-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBold,
  faItalic,
  faUnderline,
  faHeading
} from '@fortawesome/free-solid-svg-icons'

// Call this method in App.js to make icons available
export const initializeFontAwesome = () => {
  library.add(faItalic, faBold, faUnderline, faHeading)
}
