/* Accordion

Elements
Attributes
Headings
ParagraphsStyles
Formatting
Quotations
Comments
Colors
Links
Images
FaviconTables
Lists
Block & Inline
ClassesId
Iframes
JavaScript
File Paths   
Head
Layout
Responsive
Computercode
SemanticsStyle Guide
Entities
Symbols
EmojisCharset
URL Encode
vs. XHTML
Forms
Forms
Form Attributes
Form Elements  
Input Types
Input Attributes
Input FormAttributes
Graphics
Canvas
SVG
Media
Media
Video
Audio
Plug-ins
YouTube
APIs
Geolocation
Drag/Drop
Web Storage
Web Workers
SSE
Examples
Examples
Quiz
Exercises
Certificate
Summary
Accessibility
References
Tag List
Attributes
Global Attributes
Browser Support
Events
Colors
Canvas
Audio/Video
Doctypes
Character Sets
URL Encode
Lang Codes HTTP MessagesHTTP Methods PX to EM Converter Keyboard Shortcuts


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

INPUTS
Autocomplete
Button
Button Group
Checkbox
Floating Action Button
Radio Group
Rating
Select
Slider
Switch
Text Field
Transfer List
Toggle Button
DATA DISPLAY
Avatar
Badge
Chip
Divider
Icons
Material Icons
List
Table
Tooltip
Typography
FEEDBACK
Alert
Backdrop
Dialog
Progress
Skeleton
Snackbar
SURFACES
Accordion
App Bar
Card
Paper
NAVIGATION
Bottom Navigation
Breadcrumbs
Drawer
Link
Menu
Pagination
Speed Dial
Stepper
Tabs
LAYOUT
Box
Container
Grid
Grid v2
NEW
Stack
Image List
Hidden

Accordion
Alerts
Badge
Breadcrumb
Buttons
Button group
Card
Carousel
Close button
Collapse
Dropdowns
List group
Modal
Navbar
Navs & tabs
Offcanvas
Pagination
Placeholders
Popovers
Progress
Scrollspy
Spinners
Toasts
Tooltips


Variables
Nesting
@import
@mixin
@extend
String
Numeric
List
Map
Selector
Introspection
Color
*/
/*
Node.js Modules
Node.js HTTP Module
Node.js File System
Node.js URL Module
Node.js NPM
Node.js Events
Node.js Upload Files
Node.js Email
Node.js MySQL
MySQL Get Started
MySQL Create Database
MySQL Create Table
MySQL Insert Into
MySQL Select From
MySQL Where
MySQL Order By
MySQL Delete
MySQL Drop Table
MySQL Update
MySQL Limit
MySQL Join
Node.js MongoDB
MongoDB Get Started
MongoDB Create Database
MongoDB Create Collection
MongoDB Insert
MongoDB Find
MongoDB Query
MongoDB Sort
MongoDB Delete
MongoDB Drop Collection
MongoDB Update
MongoDB Limit
MongoDB Join */

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
            { id: 21, name: 'Emojis', complete: true },
            { id: 22, name: 'Charset', complete: true },
            { id: 23, name: 'Geolocation', complete: false },
            { id: 24, name: 'Drag/Drop', complete: true },
            { id: 25, name: 'SSE', complete: false },
            { id: 26, name: 'Quiz', complete: true },
            { id: 27, name: 'Certificate', complete: false },
            { id: 28, name: 'References', complete: true },
            { id: 29, name: '', complete: true }
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
            { id: 19, name: 'Z-index', complete: true },
            { id: 20, name: 'Float', complete: true },
            { id: 21, name: 'Flexbox', complete: true },
            { id: 22, name: 'Grid', complete: true }
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
            { id: 30, name: 'Fetch', complete: true }
        ]
    },
    {
        id: 4,
        name: 'Material UI',
        dependencies: [
            { id: 1, name: 'Autocomplete', complete: true },
            { id: 2, name: 'Button', complete: true },
            { id: 3, name: 'Button Group', complete: true },
            { id: 4, name: 'Checkbox', complete: true },
            { id: 5, name: 'Floating Action Button', complete: true },
            { id: 6, name: 'Radio Group', complete: false },
            { id: 7, name: 'Rating', complete: true },
            { id: 8, name: 'Select', complete: true },
            { id: 9, name: 'Slider', complete: true },
            { id: 10, name: 'Switch', complete: true },
            { id: 11, name: 'Text Field', complete: true },
            { id: 12, name: 'Transfer List', complete: true },
            { id: 13, name: 'Toggle Button', complete: true },
            { id: 14, name: 'Avatar', complete: false },
            { id: 15, name: 'Badge', complete: true },
            { id: 16, name: 'Chip', complete: true },
            { id: 17, name: 'Divider', complete: true },
            { id: 18, name: 'Icons', complete: true },
            { id: 19, name: 'Material Icons', complete: true },
            { id: 20, name: 'List', complete: false },
            { id: 21, name: 'Table', complete: true },
            { id: 22, name: 'Tooltip', complete: true },
            { id: 23, name: 'Typography', complete: true },
            { id: 24, name: 'FEEDBACK', complete: true },
            { id: 25, name: 'Alert', complete: true },
            { id: 26, name: 'Backdrop', complete: true },
            { id: 27, name: 'Dialog', complete: false },
            { id: 28, name: 'Progress', complete: true },
            { id: 29, name: 'Snackbar', complete: true },
            { id: 30, name: 'Card', complete: true }
        ]
    },
    {
        id: 5,
        name: 'Bootstrap',
        dependencies: [
            { id: 1, name: 'Badge', complete: true },
            { id: 2, name: 'Breadcrumb', complete: true },
            { id: 3, name: 'Buttons', complete: true },
            { id: 4, name: 'Button group', complete: true },
            { id: 5, name: 'Carousel', complete: false },
            { id: 6, name: 'Close button', complete: true },
            { id: 7, name: 'Collapse', complete: false },
            { id: 8, name: 'Dropdowns', complete: true },
            { id: 9, name: 'List group', complete: true },
            { id: 10, name: 'Modal', complete: true },
            { id: 11, name: 'Navbar', complete: true },
            { id: 12, name: 'Navs & tabs', complete: true },
            { id: 13, name: 'Offcanvas', complete: true },
            { id: 14, name: 'Pagination', complete: false },
            { id: 15, name: 'Placeholders', complete: true },
            { id: 16, name: 'Popovers', complete: true },
            { id: 17, name: 'Progress', complete: true },
            { id: 18, name: 'Scrollspy', complete: true },
            { id: 19, name: 'Spinners', complete: true },
            { id: 20, name: 'Toasts', complete: false },
            { id: 21, name: 'Tooltips', complete: true },
            { id: 22, name: 'Breakpoints', complete: true },
            { id: 23, name: 'Containers', complete: true },
            { id: 24, name: 'Grid', complete: true },
            { id: 25, name: 'Columns', complete: true },
            { id: 26, name: 'Gutters', complete: true },
            { id: 27, name: 'Utilities', complete: false },
            { id: 28, name: 'Z-index', complete: true },
            { id: 29, name: 'CSS Grid', complete: true },
            { id: 30, name: 'Breakpoints', complete: true }
        ]
    },
    {
        id: 6,
        name: 'SA(C)SS',
        dependencies: [
            { id: 1, name: 'Variables', complete: true },
            { id: 2, name: 'Nesting', complete: true },
            { id: 3, name: '@import', complete: true },
            { id: 4, name: '@mixin', complete: true },
            { id: 5, name: '@extend', complete: true },
            { id: 6, name: '@use', complete: true },
            { id: 7, name: '@forward', complete: false },
            { id: 8, name: 'xin and @i nclude', complete: true },
            { id: 9, name: '@function', complete: true },
            { id: 10, name: '@error', complete: true },
            { id: 11, name: '@debug', complete: false },
            { id: 12, name: '@at-root', complete: true },
            { id: 13, name: 'String', complete: true },
            { id: 14, name: 'Numeric', complete: true },
            { id: 15, name: 'List', complete: true },
            { id: 16, name: 'Map', complete: true },
            { id: 17, name: 'Selector', complete: true },
            { id: 18, name: 'Introspection', complete: true },
            { id: 19, name: 'Color', complete: true }
        ]
    },
    {
        id: 7,
        name: 'React',
        dependencies: [
            { id: 1, name: 'Components and Props', complete: true },
            { id: 2, name: 'State and Lifecycle', complete: true },
            { id: 3, name: 'Handling Events', complete: true },
            { id: 4, name: 'Conditional Rendering', complete: true },
            { id: 5, name: 'Lists and Keys', complete: true },
            { id: 6, name: 'Forms', complete: true },
            { id: 7, name: 'Lifting State Up', complete: true },
            { id: 8, name: 'Composition vs Inheritance', complete: false },
            { id: 9, name: 'Thinking In React', complete: true },
            { id: 10, name: 'Rendering Elements', complete: true },
            { id: 11, name: 'Hooks at a Glance', complete: true },
            { id: 12, name: 'Using the State Hook', complete: true },
            { id: 13, name: 'Using the Effect Hook', complete: true },
            { id: 14, name: 'Rules of Hooks', complete: true },
            { id: 15, name: 'Building Your Own Hooks', complete: true },
            { id: 16, name: 'Hooks API Reference', complete: false },
            { id: 17, name: 'React', complete: true },
            { id: 18, name: 'React.Component', complete: true },
            { id: 19, name: 'ReactDOM', complete: true },
            { id: 20, name: 'ReactDOMClient', complete: true },
            { id: 21, name: 'ReactDOMServer', complete: false },
            { id: 22, name: 'DOM Elements', complete: true },
            { id: 23, name: 'Synthetic Event', complete: true },
            { id: 24, name: 'Test Utilities', complete: false },
            { id: 25, name: 'Test Renderer', complete: false },
            { id: 26, name: 'JS Environment Requirements', complete: true },
            { id: 27, name: 'Glossary', complete: true },
            { id: 28, name: 'Accessibility', complete: true },
            { id: 29, name: 'Code-Splitting', complete: false },
            { id: 30, name: 'Context', complete: true },
            { id: 31, name: 'Error Boundaries', complete: false },
            { id: 32, name: 'Forwarding Refs', complete: true },
            { id: 33, name: 'Fragments', complete: false },
            { id: 34, name: 'Higher-Order Components', complete: true },
            {
                id: 32,
                name: 'Integrating with Other Libraries',
                complete: true
            },
            { id: 33, name: 'JSX In Depth', complete: false },
            { id: 34, name: 'Optimizing Performance', complete: true },
            { id: 35, name: 'Portals', complete: false },
            { id: 36, name: 'Profiler', complete: true },
            { id: 37, name: 'React Without ES6', complete: true },
            { id: 38, name: 'React Without JSX', complete: false },
            { id: 39, name: 'Reconciliation', complete: false },
            { id: 40, name: 'Refs and the DOM', complete: false },
            { id: 41, name: 'Render Props', complete: true },
            { id: 42, name: 'Prop types', complete: true },
            { id: 43, name: 'Strict Mode', complete: false },
            { id: 44, name: 'Typechecking With PropTypes', complete: false },
            { id: 45, name: 'Uncontrolled Components', complete: false },
            { id: 46, name: 'Web Components', complete: false }
        ]
    },
    {
        id: 8,
        name: 'Redux',
        dependencies: [
            { id: 1, name: 'Redux Overview', complete: true },
            { id: 2, name: 'Redux Concepts and Data Flow', complete: true },
            { id: 3, name: 'State, Actions, and Reducers', complete: true },
            { id: 4, name: 'Store', complete: true },
            { id: 5, name: 'UI and React', complete: true },
            { id: 6, name: 'Async Logic and Data Fetching', complete: false },
            { id: 7, name: 'Standard Redux Patterns', complete: true },
            { id: 8, name: 'Modern Redux with Redux Toolkit', complete: true }
            /*             { id: 9, name: ' ', complete: false },
            { id: 10, name: ' ', complete: true },
            { id: 11, name: ' ', complete: true },
            { id: 12, name: ' ', complete: true },
            { id: 13, name: ' ', complete: false },
            { id: 14, name: ' ', complete: true },
            { id: 15, name: ' ', complete: true },
            { id: 16, name: ' ', complete: true },
            { id: 17, name: ' ', complete: false },
            { id: 18, name: ' ', complete: true },
            { id: 19, name: ' ', complete: false },
            { id: 20, name: ' ', complete: true },
            { id: 21, name: ' ', complete: false },
            { id: 22, name: ' ', complete: false },
            { id: 23, name: ' ', complete: true },
            { id: 24, name: ' ', complete: true },
            { id: 25, name: ' ', complete: true },
            { id: 26, name: ' ', complete: true },
            { id: 27, name: ' ', complete: false },
            { id: 28, name: ' ', complete: true },
            { id: 29, name: ' ', complete: true },
            { id: 30, name: ' ', complete: true } */
        ]
    },
    {
        id: 9,
        name: 'NodeJS',
        dependencies: [
            { id: 1, name: 'Node.js Modules', complete: true },
            { id: 2, name: 'Node.js HTTP Module', complete: true },
            { id: 3, name: 'Node.js File System', complete: true },
            { id: 4, name: 'Node.js URL Module', complete: true },
            { id: 5, name: 'Node.js NPM', complete: true },
            { id: 6, name: 'Node.js Events', complete: true },
            { id: 7, name: 'Node.js Upload Files', complete: true },
            { id: 8, name: 'Node.js Email', complete: true },
            { id: 9, name: 'Node.js MySQL', complete: true },
            { id: 10, name: 'MySQL Create Database', complete: true },
            { id: 11, name: 'MySQL Create Table', complete: true },
            { id: 12, name: 'MySQL Insert Into', complete: false },
            { id: 13, name: 'MySQL Select From', complete: false },
            { id: 14, name: 'MySQL Where', complete: false },
            { id: 15, name: 'MySQL Order By', complete: false },
            { id: 16, name: 'MySQL Delete', complete: false },
            { id: 17, name: 'MySQL Drop Table', complete: false },
            { id: 18, name: 'MySQL Update', complete: false },
            { id: 19, name: 'MySQL Limit', complete: false },
            { id: 20, name: 'MySQL Join', complete: false },
            { id: 21, name: 'Node.js MongoDB', complete: true },
            { id: 22, name: 'MongoDB Create Database', complete: true },
            { id: 23, name: 'MongoDB Create Collection', complete: true },
            { id: 24, name: 'MongoDB Insert', complete: true },
            { id: 25, name: 'MongoDB Find', complete: true },
            { id: 26, name: 'MongoDB Query', complete: true },
            { id: 27, name: 'MongoDB Sort', complete: true },
            { id: 28, name: 'MongoDB Delete', complete: true },
            { id: 29, name: 'Higher-Order Components', complete: false },
            {
                id: 30,
                name: 'Integrating with Other Libraries',
                complete: true
            },
            { id: 31, name: 'JSX In Depth', complete: false },
            { id: 32, name: 'Optimizing Performance', complete: true }
        ]
    },
    {
        id: 10,
        name: 'Genericons',
        dependencies: [{ id: 1, name: 'Genericons', complete: true }]
    },

    {
        id: 11,
        name: 'Slick',
        dependencies: [{ id: 1, name: 'Slick', complete: true }]
    },
    {
        id: 12,
        name: 'Google maps',
        dependencies: [{ id: 1, name: 'Google maps', complete: true }]
    },
    {
        id: 13,
        name: 'Express',
        dependencies: [{ id: 1, name: 'Express', complete: true }]
    },
    {
        id: 13,
        name: 'JsonWebToken',
        dependencies: [{ id: 1, name: 'JsonWebToken', complete: true }]
    },
    {
        id: 14,
        name: 'Cross-Env',
        dependencies: [{ id: 1, name: 'Cross-Env', complete: true }]
    },
    {
        id: 15,
        name: 'Axios',
        dependencies: [{ id: 1, name: 'Axios', complete: true }]
    },
    {
        id: 16,
        name: 'Lodash',
        dependencies: [{ id: 1, name: 'Lodash', complete: true }]
    },
    {
        id: 17,
        name: 'Redux-Thunk',
        dependencies: [{ id: 1, name: 'Redux-Thunk', complete: true }]
    },
    {
        id: 18,
        name: '@emotion/styled',
        dependencies: [{ id: 1, name: '@emotion/styled', complete: true }]
    },
]
