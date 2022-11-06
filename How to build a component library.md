The trees that are slow bear the best of fruits. We’ve all heard this phrase thousands of times, but can this be said of modern businesses and technologies where products are shipped everyday?

In a constantly evolving world, you can definitely bear good fruits at a slower pace but there’s no guarantee of being the best. Infact, launching too late has been a major business killer.

Therefore, as a developer you should try to eliminate or substitute your less important tasks to focus most on the high-value tasks.

#### One area where developers spend a lot of time but ideally they shouldn’t (initially) is the styling of their web app.

Writing CSS code from scratch can be a beautiful experience but if you’re an organization or startup hoping to launch products sooner and faster, writing repetitive css code is not the best. This is the reason for the development of design systems and UI components libraries.

However, you need to first evaluate your need so that you can choose between a ready made UI components or building a custom UI library from scratch. Sometimes, a custom component library is an overkill and you’re much better off using ready-made UI components.

if you are an organisation or a startup looking to create a visual identity for your company (think big companies like Netflix, Amazon, Uber) and can do so without straining your budget, go for it.

## Where do we start building?

Numerous sectors such as Architecture or Industrial Design have developed smart modular systems for manufacturing extremely complex objects like airplanes, ships, and skyscrapers. That is, these complex objects are made up of multiple building blocks that can be put together to form a bigger entity.

Inspired by this, Atomic Design was proposed by Brad Frost in 2013 as a system that involves breaking down a website or web application into its basic components so that they are reusable throughout the site. Due to new devices with new screen sizes, that are getting released each year, creating pixel-perfect design gets harder if no systems are put in place

Atomic Design, introduces a methodology for creating scalable systems, reusable components as well as design systems. There are five distinct levels in atomic design

- Atoms
- Molecules
- Organism
- Templates
- Pages

Atoms - represent the smallest entity in UI elements and they can’t be broken down any further examples of an atom include button, input, label.

Molecules - Molecules are groups of atoms bonded together that take on distinct new properties. For instance, a profile molecule is the combination of avatar atom with name and title labels

Organism - Organisms are more complex UI components composed of groups of molecules and/or atoms header organism;

Templates - Templates are pages without real content.

Pages - Pages are instances of templates that demonstrate the final UI looks like and with real data and contents.

## Building a Monorepository

We'll start by setting up a monorepository. A monorepo is a version-controlled code repository that holds many projects with well defined relationships. While these projects may be related, they are often logically independent and run by different teams. In this case, the monorepo will contain scss package, react, vue and angular packages.

```
mkdir seraph-design-system
cd seraph-design-system
yarn init -y
```

proceed to setup your worspace

```
"private":"true",

```

install and configure lerna

```
yarn add --dev lerna
yarn lerna --init

```

add "useWorspaces": "true" and "stream":"true"
By now, your lerna file should look like;

```
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "useWorkspaces": true,
  "version": "0.0.0",
  "stream": true
}

```

add worskspaces, dev and build script to package.json;

```
"scripts": {
    "build": "yarn lerna run build",
    "dev": "yarn lerna run dev"
  },
  "workspaces": {
    "packages": [
      "packages/**",
      "playground/**"
    ]
  },
  "devDependencies": {
    "lerna": "^6.0.1",
    "process": "^0.11.10"
  }

```

let's create a package structure

## Setup Your Package structure in the root

in the root directory - seraph-design-system

```
mkdir packages
cd packages

```

create a directory for react, vue, and scss. You can include angular too.

```
- node_modules/
- packages/
  - react
  - scss
  - vue
- package.json
- lerna.json
- .gitignore
```

let's create our css architecture.

## SCSS Package

To keep the css architecture modular, it’s important to break the code into smaller parts.

Multiple files make the code easier to read, navigate and track. To do that, a CSS preprocessor – such as Sass, LESS or Stylus – or a post-processor – such as PostCSS – is the way to go.

Preprocessors enhance the capabilities of CSS authoring, introducing new features such as variables, mixins and much more. To work with separate files, your code will be divided into partials and imported on a main.scss file, that will compile everything into a single .css file.

3 benefit of using a preprocessor

- breaking the code into smaller chunks and separating them by scope;
- coding components in a independent and encapsulated manner;
- naming CSS selectors according to their purpose and relationship with each other.

Each component should be encapsulated on its own file. For consistency reasons, it’s a good practice to use the same name for the file and main selector

```
cd packages/scss
mkdir src
```

Now create a file global.scss in src
in addition to the file, create four folders in src - atoms, molecules, foundation, organisms;

cd into the foundation folder and create your \_variables.scss, \_typography, \_mixins.scss, \_all.scss, \_colors.scss.

By now, your folder structure should be like:

```
  - scss
    - src/
        global.scss
        - atoms/
        - foundation/
            _all.scss
            _color.scss
            _mixins.scss
            _typography.scss
            _variables.scss

        - molecules/
        -organisms/

```

As the names of the files suggest, create all variables as specified in your design (figma) into the \_variables.scss.

Proceed to create default colors and typography in their respective files. \_mixins.scss should contain reuable styles such as breakpoint sizes.

You can checkout the github repository for more information on this file

import the four files (\_variables.scss, \_color.scss, \_mixins.scss, \_typography.scss) into the \_all.scss

Then, import the \_all.scss into the global.scss (in src) to make it available to gulp-sass for compilation.

#### Install devDepencies for Scss package

```
cd package/scss
yarn init -y

yarn add --dev normalize-scss gulp gulp-sass stylelint prettier stylelint-config-sass-guidelines  stylelint-config-prettier stylelint-prettier

```

### let configure normalize-scss and other devDependencies

```
cd scss/src
mkdir normalize

```

create two files in the normalize \_root.scss and \_reset.scss

The \_reset.scss contains import from normalize-scss

```
@import "node_modules/normalize-scss/sass/normalize/import-now";
```

The \_root.scss contains scss root such as

```
:root{
  ...
}
```

import these two files (\_root.scss and \_reset.scss) into the global.scss

```
- node_modules/
- packages/
  - scss
    - lib/
    - node_modules/
    - src/
        global.scss
        - atoms/
            Button.scss
            Text.scss
            Input.scss
        - foundation/
            _all.scss
            _color.scss
            _mixins.scss
            _typography.scss
            _variables.scss
        - molecules/
            inputfield.scss
    - package.json
    - .stylelintrc.json
    - gulpfile.js
```

create a .styleintrc.json file and gulpfile.js file.

now run gulp watch.
you should have your compiled files in the dist folder;
congrats.

##React UI library Component

```
cd packages/react
yarn init -y
yarn add --dev react typescript @types/react rollup
```

since we're building a library, rollup is our preferred bundler.
Therefore,create a tsconfig.json and rollup.config.js file

now make atomic folders like we did for the scss package.

```
- node_modules/
- packages/
  - react
    - lib/
    - node_modules/
    - src/
        - atoms/
        - molecules/
        - organisms/
    - package.json
    - rollup.config.js
    - tsconfig.json

```

set up dev and build script

```
"scripts": {
    "build": "rollup -c",
    "dev": "yarn build --watch"
  }
```

### creating our First Component;

create a Heading components.

```
cd src/atoms
mkdir Button
cd Button
```

create two files Heading.tsx and index.ts

atoms/Heading/Heading.tsx

```
import React from 'react';

interface HeadingProps {
    title: string
    color?: string
}

const Heading: React.FunctionComponent<HeadingProps>({title, color}) => {
    return <h1 style={{color: color}} class='header'>{title}</h1>
}
```

in the atoms/Heading/index.ts

```
export {default} from './Heading'
```

in the src/index.ts

```
import Heading from './atoms/Heading';
export {
    Heading;
}
```

Your react package structure looks like

```
- node_modules/
- packages/
  - react
    - lib/
    - node_modules/
    - src/
        - index.ts
        - atoms/
            - Heading/
                - Heading.ts
                - index.ts
        - molecules
        -organisms
    - package.json
    - rollup.config.js
    - tsconfig.json
```

now run yarn build to build your component.
