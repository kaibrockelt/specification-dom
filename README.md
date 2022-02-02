# VTEX Product Specification DOM

## Description

This is a small helper app to render HTML content from a specification field. 

**WARNING: Use at own risk.** 
The app does not prevent broken HTML from being renderd. If you have broken content here, this can kill your website.

:loudspeaker: **Disclaimer:** Don't fork this project; use, contribute, or open issue with your feature request.

## Table of Contents

- [Usage](#usage)
- [CSS Handles](#css-handles)


## Usage
First of all, install the app on your VTEX toolbelt:

```shell
vtex install vtex.product-specification-dom@0.x
````

To use this app, you need to import in your dependencies on `manifest.json`.

```json
  "dependencies": {
    "vtex.product-specification-dom": "0.x"
  }
```

Then, you can add a component block into your app theme on your product detail page. You can use props to define both the fallback video as well as the specification name to look into for videos.

```json
"productspecificationdom":{
    "props":{
      "specification": "MyFieldName",
      "group": "Technical Fields",
      "blockClass": "ExplodingHTML"
      
    }
  }
```
Be aware: a specification needs to be set to display for the module to pick it up. It listens to the "show specification" attribute of each field.


## CSS handles
The following CSS handles can be used for styling:

```js
  'containerEmpty',
  'specificationDomContainer'
  'specificationDomValue'
```




