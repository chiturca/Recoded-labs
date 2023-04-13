# Discussion Questions: Props and State Exercise

In this program, we have three components: `App`, `HogBoss`, and `BabyHog`.

## HogBoss

- Has an eye color that can change via a radio button on the DOM
- Renders three `BabyHog`s, which inherit its eye color
- Owns the non-variable data associated with each `BabyHog`. This includes
  their: name, eye color, and hobby. _(Obviously, `HogBoss` gets to name her
  babies, and they genetically inherit her eye color. Not obviously, `HogBoss`
  also gets to determine their hobbies)_ Look inside `src/data.js` to see data
  defining what the `BabyHog` offspring should "inherit."

## BabyHog

- Has an _eyeColor_ received from its parent
- Has a _hobby_ assigned by its parent
- Has a _name_ given by its parent
- Has a variable _weight_, that can be changed via buttons

**Note:** While the `HogBoss` component can change its own eye color via radio
buttons, its children can only inherit the eye color of their parent!

## Directions

- Understanding the data associated with both the `HogBoss` as well as the
  `BabyHog` components, _plan out_ what data should be kept as state vs. props
  in each component and then implement it
- Make use of the `src/data.js` file (import it!). Hint: arrays can be mapped and
  return JSX! Just because the starter code has three `BabyHog` components
  written in doesn't mean it's an ideal solution
- Depending on the `BabyHog` eye color, a different image should be rendered
  (several are being imported in the `BabyHog` component)
- While the `handleChangeWeight` function has been implemented in `BabyHog`, it
  is not 'hooked up' to the component. Make sure the function is used so our
  hogs can grow and shrink when either of the buttons are clicked. (Consider how
  `HogBoss`'s `handleChangeEyeColor` function is 'hooked up' if you are stuck
  here)
- For an added bonus, use the weight of the `BabyHog` to dynamically change the
  height of the image
