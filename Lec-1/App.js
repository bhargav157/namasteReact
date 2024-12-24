// const heading = React.createElement('h1', {id : "h21"}, 'Namaste React'); // this is a js object
const root = ReactDOM.createRoot(document.getElementById('root'));
  // converting js object to html element and rendering it to the root element


/**
 * <div id="root">
 *  <div id="child">
 *      <h1>Namaste React</h1>
 *      <h2>Good Morning</h2>
 *  </div>
 * </div>
 */

/**
 * React elements are js objects that represent the DOM elements
 * then they are rendered to the DOM by converted into the HTML elements
 */

const parent = React.createElement('div',{id : 'parent'} , 
    React.createElement('div', {id : 'child'}, 
       [ React.createElement('h1', {id : 'h1'}, 'Namaste React' ), 
        React.createElement('h2', {id : 'h2'}, 'Good Morning' )]   
    )
)

root.render(parent);       
