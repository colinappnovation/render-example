import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site. Amazing stuff right?</p>
    <p>Now go build something great.</p>

    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


    <dl>
   <dt>Definition list</dt>
   <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.</dd>
   <dt>Lorem ipsum dolor sit amet</dt>
   <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.</dd>
</dl>

<form action="#" method="post">
    <div>
         <label for="name">Text Input:</label>
         <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>

    <div>
         <h4>Radio Button Choice</h4>

         <label for="radio-choice-1">Choice 1</label>
         <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />

     <label for="radio-choice-2">Choice 2</label>
         <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />
    </div>

  <div>
    <label for="select-choice">Select Dropdown Choice:</label>
    <select name="select-choice" id="select-choice">
      <option value="Choice 1">Choice 1</option>
      <option value="Choice 2">Choice 2</option>
      <option value="Choice 3">Choice 3</option>
    </select>
  </div>

  <div>
    <label for="textarea">Textarea:</label>
    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
  </div>

  <div>
      <label for="checkbox">Checkbox:</label>
    <input type="checkbox" name="checkbox" id="checkbox" />
    </div>

  <div>
      <input type="submit" value="Submit" />
    </div>
</form>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
