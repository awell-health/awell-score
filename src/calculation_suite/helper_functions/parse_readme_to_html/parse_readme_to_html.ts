import * as fs from 'fs'
import showdown from 'showdown'

type FunctionType = (dir: string) => string

const markdown_options = {
  simplifiedAutoLink: true,
  strikethrough: true,
  tables: true,
  tasklists: true,
  openLinksInNewWindow: true,
  emoji: true,
  underline: true,
  simpleLineBreaks: true,
}

export const parse_readme_to_html: FunctionType = dir => {
  const path = `${dir}/README.md`
  const converter = new showdown.Converter(markdown_options)

  try {
    const file = fs.readFileSync(path, 'utf8')
    const html = converter.makeHtml(file.toString())

    return html
  } catch (err) {
    /**
     * Return empty string when there is no README file for a calculation.
     * This will result in a failing test => every calculation should have a README file.
     */
    return ''
  }
}
