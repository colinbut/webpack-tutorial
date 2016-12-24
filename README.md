# webpack Tutorial

This is another webpack example which goes through the webpack tutorial page on the official webpack 1 website

### Important Takeways

webpack can only handle javaScript natively.

To bundle other types of assets like CSS we need "loaders".

E.g.

For CSS process we require to use `css-loader` and also the `style-loader` to apply the styles in the CSS file.


##### Binding loaders


run npm command on CLI:

```
webpack ./entry.js bundle.js --module-bind 'css=style!css'
```

See code example of what needs to be done... to allow above to work...

##### webpack config file

`webpack.config.js` file

which lists the webpack configurations.

Can now just run:

```
webpack
```

on the CLI.

##### Pretty output

```
webpack --progress --colors
```

##### Watch mode

```
webpack --progress --colors --watch
```

don't need to manually recompile every time after each change 
