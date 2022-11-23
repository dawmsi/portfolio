/* 
 Elements , Attributes , Headings ,
        Paragraphs , Styles , Formatting , Quotations ,
        Comments , Colors ,  , Links , Images ,
        Favicon , Tables , Lists , Block & Inline ,
        Classes , Id , Iframes , JavaScript , File Paths
        , Head , Layout , Responsive , Computercode ,
        Semantics , Style Guide , Entities , Symbols ,
        Emojis , Charset , URL Encode , vs. XHTML ,
        Forms , Forms , Form Attributes , Form Elements
        , Input Types , Input Attributes , Input Form
        Attributes , Graphics , Canvas , SVG , Media
        , Media , Video , Audio , Plug-ins , YouTube
        , APIs , Geolocation , Drag/Drop , Web Storage
        , Web Workers , SSE , Examples , Examples ,
        Quiz , Exercises , Certificate , Summary ,
        Accessibility , References , Tag List , Attributes
        , Global Attributes , Browser Support , Events ,
        Colors , Canvas , Audio/Video , Doctypes ,
        Character Sets , URL Encode , Lang Codes HTTP Messages
        HTTP Methods PX to EM Converter Keyboard Shortcuts
 Selectors
 Comments
 Colors
 Backgrounds
 Borders
 Margins
 Padding
 Height/Width
 Box Model
 Outline
 Text
 Fonts
 Icons
 Links
 Lists
 Tables
 Display
 Max-width
 Position
 Z-index
 Overflow
 Float
 Inline-block
 Align
 Combinators
 Pseudo-class
 Pseudo-element
 Opacity
 Navigation Bar
 Dropdowns
 Image Gallery
 Image Sprites
 Attr Selectors
 Forms
 Counters
 Website Layout
 Units
 Specificity
 Math Functions


 Output
 Statements
 Syntax
 Comments
 Variables
 Let
 Const
 Operators
 Arithmetic
 Assignment
 Data Types
 Functions
 Objects
 Events
 Strings
 String Methods
 String Search
 String Templates
 Numbers
 BigInt
 Number Methods
 Number Properties
 Arrays
 Array Methods
 Array Sort
 Array Iteration
 Array Const
 Dates
 Date Formats
 Date Get Methods
 Date Set Methods
 Math
 Random
 Booleans
 Comparisons
 If Else
 Switch
 Loop For
 Loop For In
 Loop For Of
 Loop While
 Break
 Iterables
 Sets
 Maps
 Typeof
 Type Conversion
 Bitwise
 RegExp
 Precedence
 Errors
 Scope
 Hoisting
 Strict Mode
 this Keyword
 Arrow Function
 Classes
 Modules
 JSON
J Debugging
J Style Guide
 */

export const skills = [
    {
        id: 1,
        name: 'HTML',
        details: ` Basic`,
        dependencies: [
            { id: 1, name: 'Elements', complete: true },
            { id: 2, name: 'Attributes', complete: true },
            { id: 3, name: 'Headings', complete: true },
            { id: 4, name: 'Quotations', complete: true },
            { id: 5, name: 'Comments', complete: true },
            { id: 6, name: 'Colors', complete: true },
            { id: 7, name: 'Links', complete: true },
            { id: 8, name: 'Images', complete: true },
            { id: 9, name: 'Favicon', complete: true },
            { id: 10, name: 'Tables', complete: true },
            { id: 11, name: 'Lists', complete: true },
            { id: 12, name: 'Block & Inline', complete: true },
            { id: 13, name: 'Classes', complete: true },
            { id: 14, name: 'Iframes', complete: false },
            { id: 15, name: 'Head', complete: true },
            { id: 16, name: 'Forms', complete: true },
            { id: 17, name: 'Input Types', complete: true },
            { id: 18, name: 'Media', complete: true },
            { id: 19, name: 'Events', complete: true },
            { id: 20, name: 'Canvas', complete: true },
            { id: 21, name: ' Emojis', complete: true },
            { id: 22, name: ' Charset', complete: true },
            { id: 23, name: ' Geolocation', complete: false },
            { id: 24, name: ' Drag/Drop', complete: false },
            { id: 25, name: ' SSE', complete: false },
            { id: 26, name: ' Quiz', complete: true },
            { id: 27, name: ' Certificate', complete: false },
            { id: 28, name: ' References', complete: true },
            { id: 29, name: ' Doctypes', complete: true }
        ]
    },
    {
        id: 2,
        name: 'CSS',
        dependencies: [
            { id: 1, name: 'Comments', complete: true },
            { id: 2, name: 'Colors', complete: true },
            { id: 3, name: 'Backgrounds', complete: true },
            { id: 4, name: 'Borders', complete: true },
            { id: 5, name: 'Margins', complete: true },
            { id: 6, name: 'Padding', complete: true },
            { id: 7, name: 'Height-Width', complete: true },
            { id: 8, name: 'Box-Model', complete: true },
            { id: 9, name: 'Outline', complete: true },
            { id: 10, name: 'Text', complete: true },
            { id: 11, name: 'Fonts', complete: true },
            { id: 12, name: 'Icons', complete: true },
            { id: 13, name: 'Links', complete: true },
            { id: 14, name: 'Lists', complete: false },
            { id: 15, name: 'Tables', complete: true },
            { id: 16, name: 'Display', complete: true },
            { id: 17, name: 'Max-width', complete: true },
            { id: 18, name: 'Position', complete: true },
            { id: 19, name: 'Z-index', complete: true }
        ]
    },
    {
        id: 3,
        name: 'JAVASCRIPT',
        dependencies: [
            { id: 1, name: 'Output', complete: true },
            { id: 2, name: 'Statements', complete: true },
            { id: 3, name: 'Syntax', complete: true },
            { id: 4, name: 'Comments', complete: true },
            { id: 5, name: 'Variables', complete: true },
            { id: 6, name: 'Let', complete: true },
            { id: 7, name: 'Const', complete: true },
            { id: 8, name: 'Operators', complete: true },
            { id: 9, name: 'Arithmetic', complete: true },
            { id: 10, name: 'Assignment', complete: true },
            { id: 11, name: 'Data Types', complete: true },
            { id: 12, name: 'Functions', complete: true },
            { id: 13, name: 'Objects', complete: true },
            { id: 14, name: 'Events', complete: false },
            { id: 15, name: 'Strings', complete: true },
            { id: 16, name: 'String Methods', complete: true },
            { id: 17, name: 'String Search', complete: true },
            { id: 18, name: 'String Templates', complete: true },
            { id: 19, name: 'Numbers', complete: true },
            { id: 20, name: 'BigInt', complete: false },
            { id: 21, name: 'Number Methods', complete: true },
            { id: 22, name: 'Number Properties', complete: true },
            { id: 23, name: 'Arrays', complete: true },
            { id: 24, name: 'Array Methods', complete: true },
            { id: 25, name: 'Array Sort', complete: true },
            { id: 26, name: 'Array Iteration', complete: true },
            { id: 27, name: 'Array Const', complete: false },
            { id: 28, name: 'Dates', complete: true },
            { id: 29, name: 'Date Formats', complete: true },
            { id: 30, name: 'Max-width', complete: true }
        ]
    },
    {
        id: 4,
        name: 'Material UI',
        dependencies: [
            { id: 1, name: ' ', complete: true },
            { id: 2, name: ' ', complete: true },
            { id: 3, name: ' ', complete: true },
            { id: 4, name: ' ', complete: true },
            { id: 5, name: ' ', complete: true },
            { id: 6, name: ' ', complete: false },
            { id: 7, name: ' ', complete: true },
            { id: 8, name: ' ', complete: true },
            { id: 9, name: ' ', complete: true },
            { id: 10, name: ' ', complete: true },
            { id: 11, name: ' ', complete: true },
            { id: 12, name: ' ', complete: true },
            { id: 13, name: ' ', complete: true },
            { id: 14, name: ' ', complete: false },
            { id: 15, name: ' ', complete: true },
            { id: 16, name: ' ', complete: true },
            { id: 17, name: ' ', complete: true },
            { id: 18, name: ' ', complete: true },
            { id: 19, name: ' ', complete: true },
            { id: 20, name: ' ', complete: false },
            { id: 21, name: ' ', complete: true },
            { id: 22, name: ' ', complete: true },
            { id: 23, name: ' ', complete: true },
            { id: 24, name: ' ', complete: true },
            { id: 25, name: ' ', complete: true },
            { id: 26, name: ' ', complete: true },
            { id: 27, name: ' ', complete: false },
            { id: 28, name: ' ', complete: true },
            { id: 29, name: ' ', complete: true },
            { id: 30, name: ' ', complete: true }
        ]
    },
    {
        id: 5,
        name: 'Bootstrap',
        dependencies: [
            { id: 1, name: ' ', complete: true },
            { id: 2, name: ' ', complete: true },
            { id: 3, name: ' ', complete: true },
            { id: 4, name: ' ', complete: true },
            { id: 5, name: ' ', complete: false },
            { id: 6, name: ' ', complete: true },
            { id: 7, name: ' ', complete: false },
            { id: 8, name: ' ', complete: true },
            { id: 9, name: ' ', complete: true },
            { id: 10, name: ' ', complete: true },
            { id: 11, name: ' ', complete: true },
            { id: 12, name: ' ', complete: true },
            { id: 13, name: ' ', complete: true },
            { id: 14, name: ' ', complete: false },
            { id: 15, name: ' ', complete: true },
            { id: 16, name: ' ', complete: true },
            { id: 17, name: ' ', complete: true },
            { id: 18, name: ' ', complete: true },
            { id: 19, name: ' ', complete: true },
            { id: 20, name: ' ', complete: false },
            { id: 21, name: ' ', complete: true },
            { id: 22, name: ' ', complete: true },
            { id: 23, name: ' ', complete: true },
            { id: 24, name: ' ', complete: true },
            { id: 25, name: ' ', complete: true },
            { id: 26, name: ' ', complete: true },
            { id: 27, name: ' ', complete: false },
            { id: 28, name: ' ', complete: true },
            { id: 29, name: ' ', complete: true },
            { id: 30, name: ' ', complete: true }
        ]
    },
    {
        id: 6,
        name: 'SA(C)SS',
        dependencies: [
            { id: 1, name: ' ', complete: true },
            { id: 2, name: ' ', complete: true },
            { id: 3, name: ' ', complete: true },
            { id: 4, name: ' ', complete: true },
            { id: 5, name: ' ', complete: true },
            { id: 6, name: ' ', complete: false },
            { id: 7, name: ' ', complete: true },
            { id: 8, name: ' ', complete: true },
            { id: 9, name: ' ', complete: true },
            { id: 10, name: ' ', complete: true },
            { id: 11, name: ' ', complete: true },
            { id: 12, name: ' ', complete: true },
            { id: 13, name: ' ', complete: true },
            { id: 14, name: ' ', complete: false },
            { id: 15, name: ' ', complete: true },
            { id: 16, name: ' ', complete: true },
            { id: 17, name: ' ', complete: true },
            { id: 18, name: ' ', complete: false },
            { id: 19, name: ' ', complete: true },
            { id: 20, name: ' ', complete: false },
            { id: 21, name: ' ', complete: true },
            { id: 22, name: ' ', complete: true },
            { id: 23, name: ' ', complete: true },
            { id: 24, name: ' ', complete: false },
            { id: 25, name: ' ', complete: true },
            { id: 26, name: ' ', complete: true },
            { id: 27, name: ' ', complete: false },
            { id: 28, name: ' ', complete: true },
            { id: 29, name: ' ', complete: true },
            { id: 30, name: ' ', complete: true }
        ]
    },
    {
        id: 7,
        name: 'React',
        dependencies: [
            { id: 1, name: ' ', complete: true },
            { id: 2, name: ' ', complete: true },
            { id: 3, name: ' ', complete: true },
            { id: 4, name: ' ', complete: true },
            { id: 5, name: ' ', complete: true },
            { id: 6, name: ' ', complete: true },
            { id: 7, name: ' ', complete: true },
            { id: 8, name: ' ', complete: false },
            { id: 9, name: ' ', complete: true },
            { id: 10, name: ' ', complete: true },
            { id: 11, name: ' ', complete: true },
            { id: 12, name: ' ', complete: true },
            { id: 13, name: ' ', complete: true },
            { id: 14, name: ' ', complete: false },
            { id: 15, name: ' ', complete: true },
            { id: 16, name: ' ', complete: true },
            { id: 17, name: ' ', complete: false },
            { id: 18, name: ' ', complete: true },
            { id: 19, name: ' ', complete: false },
            { id: 20, name: ' ', complete: false },
            { id: 21, name: ' ', complete: true },
            { id: 22, name: ' ', complete: true },
            { id: 23, name: ' ', complete: false },
            { id: 24, name: ' ', complete: true },
            { id: 25, name: ' ', complete: true },
            { id: 26, name: ' ', complete: true },
            { id: 27, name: ' ', complete: false },
            { id: 28, name: ' ', complete: true },
            { id: 29, name: ' ', complete: true },
            { id: 30, name: ' ', complete: true }
        ]
    },
    {
        id: 8,
        name: 'Redux',
        dependencies: [
            { id: 1, name: ' ', complete: true },
            { id: 2, name: ' ', complete: true },
            { id: 3, name: ' ', complete: false },
            { id: 4, name: ' ', complete: false },
            { id: 5, name: ' ', complete: false },
            { id: 6, name: ' ', complete: false },
            { id: 7, name: ' ', complete: false },
            { id: 8, name: ' ', complete: false },
            { id: 9, name: ' ', complete: false },
            { id: 10, name: ' ', complete: false },
            { id: 11, name: ' ', complete: false },
            { id: 12, name: ' ', complete: false },
            { id: 13, name: ' ', complete: false },
            { id: 14, name: ' ', complete: false },
            { id: 15, name: ' ', complete: false },
            { id: 16, name: ' ', complete: false },
            { id: 17, name: ' ', complete: false },
            { id: 18, name: ' ', complete: false },
            { id: 19, name: ' ', complete: false },
            { id: 20, name: ' ', complete: false },
            { id: 21, name: ' ', complete: false },
            { id: 22, name: ' ', complete: false },
            { id: 23, name: ' ', complete: true },
            { id: 24, name: ' ', complete: true },
            { id: 25, name: ' ', complete: true },
            { id: 26, name: ' ', complete: true },
            { id: 27, name: ' ', complete: false },
            { id: 28, name: ' ', complete: true },
            { id: 29, name: ' ', complete: true },
            { id: 30, name: ' ', complete: true }
        ]
    },
    {
        id: 9,
        name: 'NodeJS',
        dependencies: [
            { id: 1, name: ' ', complete: true },
            { id: 2, name: ' ', complete: true },
            { id: 3, name: ' ', complete: true },
            { id: 4, name: ' ', complete: true },
            { id: 5, name: ' ', complete: false },
            { id: 6, name: ' ', complete: false },
            { id: 7, name: ' ', complete: false },
            { id: 8, name: ' ', complete: false },
            { id: 9, name: ' ', complete: false },
            { id: 10, name: ' ', complete: false },
            { id: 11, name: ' ', complete: false },
            { id: 12, name: ' ', complete: false },
            { id: 13, name: ' ', complete: false },
            { id: 14, name: ' ', complete: false },
            { id: 15, name: ' ', complete: false },
            { id: 16, name: ' ', complete: false },
            { id: 17, name: ' ', complete: false },
            { id: 18, name: ' ', complete: false },
            { id: 19, name: ' ', complete: false },
            { id: 20, name: ' ', complete: false },
            { id: 21, name: ' ', complete: false },
            { id: 22, name: ' ', complete: false },
            { id: 23, name: ' ', complete: true },
            { id: 24, name: ' ', complete: true },
            { id: 25, name: ' ', complete: true },
            { id: 26, name: ' ', complete: true },
            { id: 27, name: ' ', complete: false },
            { id: 28, name: ' ', complete: true },
            { id: 29, name: ' ', complete: true },
            { id: 30, name: ' ', complete: true }
        ]
    }
]
