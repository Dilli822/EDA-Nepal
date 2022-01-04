

-- We have two types of syntax in Sass 
--- 1. SCSS 
      -> This one is .scss file extension which is superset of css and supports all valid css and scss as well.
      -> It uses curly braces which includes the block property.
      @mixin sampleButton(){
          display: flex;

          &:hover{ color: red }
      }

--- 2. Sass Indented Syntax
    -> This one uses .sass which supports all the same features as SCSS but it doesnot uses curly braces and semicolons to
       describe the format of the document.
    The indented syntax looks like this:
     @mixin sampleStyle()

     display: block

     &:hover
     color: red



==== Comments in Sass ========
--> Both SCSS and the indented syntax supports the two types of Comments
---> // for single line comment whereas /* */ for multiline comment
